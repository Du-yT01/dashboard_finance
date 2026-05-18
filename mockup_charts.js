// Mockup Charts - Power BI Style với ECharts
// Navigation
function switchPage(pageId, navElement = null) {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    if (navElement) {
        navElement.classList.add('active');
    }

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        setTimeout(() => initCharts(pageId), 100);
    }
}

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function () {
        switchPage(this.dataset.page, this);
    });
});

// Sidebar title click (Go to Home)
const sidebarTitle = document.getElementById('sidebar-title');
if (sidebarTitle) {
    sidebarTitle.addEventListener('click', () => {
        switchPage('page-home');
    });
}

// Color palette
const colors = {
    primary: '#1e3a8a',
    secondary: '#3b82f6',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#06b6d4',
    purple: '#8b5cf6',
    pink: '#ec4899',
    gray: '#64748b'
};

const agingColors = ['#10b981', '#f59e0b', '#f97316', '#ef4444'];

// Helper: tạo chuỗi bar mini trong label decomposition
function decoBarLabel(name, val, maxVal) {
    if (!maxVal || !val) return name;
    const len = Math.max(2, Math.round((val / maxVal) * 10));
    const bar = '▮'.repeat(len);
    return `${name}\n${bar} ${val} tỷ`;
}

// Initialize charts on load
document.addEventListener('DOMContentLoaded', () => {
    // Check if there's a hash or default to home
    switchPage('page-home');

    // Set initial active state for the guide item if on home
    const guideItem = document.querySelector('.nav-item[data-page="page-home"]');
    if (guideItem) guideItem.classList.add('active');
});

function initCharts(pageId) {
    switch (pageId) {
        case 'page-1-1': initPage11(); break;
        case 'page-1-2': initPage13(); break;
        case 'page-1-3': initPage12(); break;
        case 'page-2-1': initPage21(); break;
        case 'page-2-2': initPage22(); break;
        case 'page-2-3': initPage23(); break;
        case 'page-2-4': initPage24(); break;
        case 'page-3-1': initPage31(); break;
        case 'page-3-2': initPage32(); break;
        case 'page-3-3': initPage33(); break;
    }
}

// Page 1.1 - Dashboard Tổng quan
function initPage11() {
    // Trend chart
    const el1 = document.getElementById('chart-1-1-trend');
    if (!el1) return;
    const c1 = echarts.init(el1);
    c1.setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        legend: { data: ['Tài sản', 'Nợ phải trả'], bottom: 0 },
        xAxis: { type: 'category', data: ['T7', 'T8', 'T9', 'T10', 'T11', 'T12'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: 'Tài sản', type: 'line', data: [115, 118, 120, 123, 126, 128.5], smooth: true, lineStyle: { width: 3 }, itemStyle: { color: colors.primary } },
            { name: 'Nợ phải trả', type: 'line', data: [42, 43, 44, 44.5, 45, 45.6], smooth: true, lineStyle: { width: 3 }, itemStyle: { color: colors.danger } }
        ]
    });

    const gaugeConfigs = [
        {
            id: 'chart-1-1-gauge-current',
            min: 0,
            max: 3,
            stops: [[0.5, colors.danger], [0.7, colors.warning], [1, colors.success]],
            value: 1.8,
            label: 'Hệ số thanh toán hiện hành'
        },
        {
            id: 'chart-1-1-gauge-de',
            min: 0,
            max: 2,
            stops: [[0.3, colors.success], [0.6, colors.warning], [1, colors.danger]],
            value: 0.55,
            label: 'Tỷ lệ Nợ/Vốn chủ'
        }
    ];

    gaugeConfigs.forEach(cfg => {
        const el = document.getElementById(cfg.id);
        if (!el) return;
        echarts.init(el).setOption({
            animation: false,
            hoverLayerThreshold: -1, series: [{
                type: 'gauge',
                radius: '100%',
                center: ['50%', '75%'],
                startAngle: 180,
                endAngle: 0,
                min: cfg.min,
                max: cfg.max,
                splitNumber: 5,
                axisLine: { lineStyle: { width: 30, color: cfg.stops } },
                pointer: { length: '50%', width: 5 },
                axisLabel: { distance: -40, fontSize: 10 },
                detail: { show: true, fontSize: 20, fontWeight: 'bold', offsetCenter: [0, '30%'], formatter: '{value}' },
                data: [{ value: cfg.value, name: cfg.label }],
                title: { show: false }
            }]
        });
    });
    // Drill-down 1.1
    const el3 = document.getElementById('chart-1-1-drill-donut');
    if (el3) echarts.init(el3).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'item' },
        series: [{
            type: 'pie', radius: ['40%', '70%'],
            data: [{ value: 2.1, name: 'Tiền mặt' }, { value: 10.7, name: 'Tiền gửi' }],
            label: { formatter: '{b}: {d}%' }
        }]
    });

    const el4 = document.getElementById('chart-1-1-drill-bar1');
    if (el4) echarts.init(el4).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: { type: 'value' },
        yAxis: { type: 'category', data: ['Phải thu KH', 'TSCĐ', 'HTK', 'Đầu tư TC', 'XDCB'] },
        series: [{ type: 'bar', data: [1.4, 0.8, -0.2, -0.5, 0.1], itemStyle: { color: (params) => params.value > 0 ? colors.success : colors.danger } }]
    });

    const el5 = document.getElementById('chart-1-1-drill-bar2');
    if (el5) echarts.init(el5).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: { type: 'value' },
        yAxis: { type: 'category', data: ['Phải trả NCC', 'Vay NH', 'Thuế', 'Lương', 'Khác'] },
        series: [{ type: 'bar', data: [0.9, -0.3, 0.2, 0.1, 0.1], itemStyle: { color: (params) => params.value > 0 ? colors.danger : colors.success } }]
    });
}

// Page 1.2 - Bảng CĐKT
function initPage12() {
    const assetCats = ['Đầu năm', 'Q1', 'Q2', 'Q3', 'Q4'];
    const tsnhData = [45, 48, 50, 52, 55];
    const tsdhData = [65, 68, 70, 72, 73.5];
    const assetTotals = assetCats.map((_, i) => tsnhData[i] + tsdhData[i]);

    const el1 = document.getElementById('chart-1-2-asset');
    if (el1) {
        echarts.init(el1).setOption({
            animation: false,
            hoverLayerThreshold: -1, tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
            legend: { data: ['TSNH', 'TSDH'], bottom: 0 },
            xAxis: { type: 'category', data: assetCats },
            yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
            series: [
                {
                    name: 'TSNH',
                    type: 'bar',
                    stack: 'total',
                    data: tsnhData,
                    itemStyle: { color: colors.info },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: (p) => {
                            const total = assetTotals[p.dataIndex] || 0;
                            const pct = total ? Math.round((p.value / total) * 100) : 0;
                            return `${p.value} tỷ (${pct}%)`;
                        }
                    }
                },
                {
                    name: 'TSDH',
                    type: 'bar',
                    stack: 'total',
                    data: tsdhData,
                    itemStyle: { color: colors.primary },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: (p) => {
                            const total = assetTotals[p.dataIndex] || 0;
                            const pct = total ? Math.round((p.value / total) * 100) : 0;
                            return `${p.value} tỷ (${pct}%)`;
                        }
                    }
                }
            ]
        });
    }

    const debtData = [38, 40, 42, 44, 45.6];
    const equityData = [72, 76, 78, 80, 82.9];
    const equityTotals = assetCats.map((_, i) => debtData[i] + equityData[i]);
    const el2 = document.getElementById('chart-1-2-equity');
    if (el2) {
        echarts.init(el2).setOption({
            animation: false,
            hoverLayerThreshold: -1, tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
            legend: { data: ['Nợ phải trả', 'VCSH'], bottom: 0 },
            xAxis: { type: 'category', data: assetCats },
            yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
            series: [
                {
                    name: 'Nợ phải trả',
                    type: 'bar',
                    stack: 'total',
                    data: debtData,
                    itemStyle: { color: colors.danger },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: (p) => {
                            const total = equityTotals[p.dataIndex] || 0;
                            const pct = total ? Math.round((p.value / total) * 100) : 0;
                            return `${p.value} tỷ (${pct}%)`;
                        }
                    }
                },
                {
                    name: 'VCSH',
                    type: 'bar',
                    stack: 'total',
                    data: equityData,
                    itemStyle: { color: colors.success },
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: (p) => {
                            const total = equityTotals[p.dataIndex] || 0;
                            const pct = total ? Math.round((p.value / total) * 100) : 0;
                            return `${p.value} tỷ (${pct}%)`;
                        }
                    }
                }
            ]
        });
    }

    const tsnhPie = document.getElementById('chart-1-2-tsnh');
    if (tsnhPie) echarts.init(tsnhPie).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'item' },
        series: [{
            type: 'pie',
            radius: ['40%', '70%'],
            label: { formatter: '{b}: {d}%' },
            data: [
                { value: 12.8, name: 'Tiền & tương đương tiền' },
                { value: 18.2, name: 'Phải thu' },
                { value: 11.3, name: 'Hàng tồn kho' },
                { value: 12.7, name: 'Tài sản ngắn hạn khác' }
            ]
        }]
    });

    const totalLineEl = document.getElementById('chart-1-2-total-linebar');
    if (totalLineEl) {
        const totalCurr = assetTotals; // tổng tài sản hiện tại
        const totalPrev = [105, 110, 112, 118, 123]; // giả lập cùng kỳ năm trước
        echarts.init(totalLineEl).setOption({
            animation: false,
            hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
            legend: { data: ['Tổng tài sản', 'Cùng kỳ năm trước'], bottom: 0 },
            xAxis: { type: 'category', data: assetCats },
            yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
            series: [
                {
                    name: 'Tổng tài sản',
                    type: 'bar',
                    data: totalCurr,
                    itemStyle: { color: colors.primary },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c} tỷ',
                        fontSize: 11
                    }
                },
                {
                    name: 'Cùng kỳ năm trước',
                    type: 'line',
                    data: totalPrev,
                    smooth: true,
                    itemStyle: { color: colors.secondary }
                }
            ]
        });
    }

    // Decomposition charts (dạng tree gần giống Power BI)
    // Decomposition Tree với D3 (style giống Power BI)
    function buildDecompTree(containerId, data, barColor) {
        const container = document.getElementById(containerId);
        if (!container || !window.d3) return;
        container.innerHTML = '';

        const width = container.clientWidth || 600;
        const height = container.clientHeight || 260;

        const svg = d3.select(container)
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        const margin = { top: 16, right: 12, bottom: 16, left: 12 };
        const innerW = width - margin.left - margin.right;
        const innerH = height - margin.top - margin.bottom;

        let currentTransform = { x: margin.left, y: margin.top };
        const g = svg.append('g')
            .attr('transform', `translate(${currentTransform.x},${currentTransform.y})`);

        const cardW = 210;
        const cardH = 52;
        const barW = 120;
        const barH = 8;

        const root = d3.hierarchy(data);
        root.x0 = innerH / 2;
        root.y0 = 0;

        // collapse all children by default
        root.children && root.children.forEach(collapseDeep);
        function collapseDeep(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapseDeep);
                d.children = null;
            }
        }

        const tree = d3.tree().nodeSize([68, 260]);

        function maxSiblingValue(d) {
            const parent = d.parent;
            if (!parent) return d.data.value || 1;
            const sib = (parent.children || parent._children || []);
            return d3.max(sib, s => s.data.value || 0) || 1;
        }

        function diagonal(s, t) {
            // bắt đầu tại giữa cạnh phải card cha, kết thúc tại giữa cạnh trái card con
            const sx = s.x;
            const sy = s.y + cardW;
            const tx = t.x;
            const ty = t.y;
            const mx = (sy + ty) / 2;
            return `M${sy},${sx} C${mx},${sx} ${mx},${tx} ${ty},${tx}`;
        }

        function formatNumber(v) {
            return new Intl.NumberFormat('vi-VN', { maximumFractionDigits: 2 }).format(v || 0);
        }

        function update(source) {
            tree(root);
            const nodes = root.descendants();
            const links = root.links();

            // căn giữa theo trục dọc
            let minX = d3.min(nodes, d => d.x);
            let maxX = d3.max(nodes, d => d.x);
            const midX = (minX + maxX) / 2;
            nodes.forEach(d => {
                d.x = d.x - midX + innerH / 2;
                d.y = d.depth * 230;
            });

            // links
            const link = g.selectAll('path.link')
                .data(links, d => d.target.data.name + '_' + d.target.depth);

            link.enter()
                .append('path')
                .attr('class', 'link')
                .attr('stroke', '#cbd5f5')
                .attr('fill', 'none')
                .attr('stroke-width', 1.8)
                .attr('d', d => diagonal(source, source))
                .merge(link)
                .transition().duration(250)
                .attr('d', d => diagonal(d.source, d.target));

            link.exit()
                .transition().duration(250)
                .attr('d', d => diagonal(source, source))
                .remove();

            // nodes
            const node = g.selectAll('g.node')
                .data(nodes, d => d.data.name + '_' + d.depth);

            const nodeEnter = node.enter()
                .append('g')
                .attr('class', 'node')
                .attr('transform', `translate(${source.y0},${source.x0})`)
                .style('cursor', 'pointer')
                .on('click', (event, d) => {
                    if (d.children) { d._children = d.children; d.children = null; }
                    else { d.children = d._children; d._children = null; }
                    update(d);
                });

            nodeEnter.append('rect')
                .attr('x', 0)
                .attr('y', -cardH / 2)
                .attr('width', cardW)
                .attr('height', cardH)
                .attr('rx', 10)
                .attr('ry', 10)
                .attr('fill', '#ffffff')
                .attr('stroke', '#e5e7eb')
                .attr('stroke-width', 1.2)
                .style('filter', 'drop-shadow(0 1px 2px rgba(15,23,42,0.10))');

            nodeEnter.append('text')
                .attr('x', 12)
                .attr('y', -6)
                .attr('font-size', 12)
                .attr('font-weight', 600)
                .attr('fill', '#111827')
                .text(d => d.data.name);

            nodeEnter.append('text')
                .attr('x', 12)
                .attr('y', 12)
                .attr('font-size', 11)
                .attr('fill', '#6b7280')
                .text(d => d.data.value != null ? formatNumber(d.data.value) + ' tỷ' : '');

            // bar bg
            nodeEnter.append('rect')
                .attr('x', cardW - barW - 12)
                .attr('y', -barH / 2)
                .attr('width', barW)
                .attr('height', barH)
                .attr('rx', 6)
                .attr('ry', 6)
                .attr('fill', '#f3f4f6');

            // bar
            nodeEnter.append('rect')
                .attr('class', 'bar')
                .attr('x', cardW - barW - 12)
                .attr('y', -barH / 2)
                .attr('height', barH)
                .attr('rx', 6)
                .attr('ry', 6)
                .attr('fill', barColor)
                .attr('width', d => {
                    const m = maxSiblingValue(d);
                    return Math.max(6, barW * ((d.data.value || 0) / m));
                });

            // expand indicator
            nodeEnter.append('text')
                .attr('x', cardW - 10)
                .attr('y', -cardH / 2 + 16)
                .attr('text-anchor', 'end')
                .attr('font-size', 13)
                .attr('fill', '#9ca3af')
                .text(d => (d._children ? '+' : (d.children ? '–' : '')));

            const nodeUpdate = nodeEnter.merge(node);

            nodeUpdate.transition().duration(250)
                .attr('transform', d => `translate(${d.y},${d.x})`);

            nodeUpdate.select('rect.bar')
                .transition().duration(250)
                .attr('width', d => {
                    const m = maxSiblingValue(d);
                    return Math.max(6, barW * ((d.data.value || 0) / m));
                });

            nodeUpdate.select('text')
                .filter((d, i, nodesArr) => nodesArr[i].textContent === '+' || nodesArr[i].textContent === '–')
                .text(d => (d._children ? '+' : (d.children ? '–' : '')));

            node.exit()
                .transition().duration(250)
                .attr('transform', `translate(${source.y},${source.x})`)
                .remove();

            nodes.forEach(d => { d.x0 = d.x; d.y0 = d.y; });
        }

        update(root);

        // Cho phép kéo toàn bộ cụm tree trong khung
        const dragBehavior = d3.drag()
            .on('drag', (event) => {
                currentTransform.x += event.dx;
                currentTransform.y += event.dy;
                g.attr('transform', `translate(${currentTransform.x},${currentTransform.y})`);
            });

        svg.call(dragBehavior);
    }

    const decompAssetEl = document.getElementById('chart-1-2-decomp-asset');
    if (decompAssetEl) {
        const assetTree = {
            name: 'Tổng tài sản',
            value: 128.5,
            children: [
                {
                    name: 'Tài sản ngắn hạn',
                    value: 55.0,
                    children: [
                        { name: 'Tiền & TĐT', value: 12.8 },
                        { name: 'Các khoản phải thu', value: 18.2 },
                        { name: 'Hàng tồn kho', value: 11.3 },
                        { name: 'TSNH khác', value: 12.7 }
                    ]
                },
                {
                    name: 'Tài sản dài hạn',
                    value: 73.5,
                    children: [
                        { name: 'Phải thu dài hạn', value: 8.0 },
                        { name: 'Tài sản cố định', value: 40.0 },
                        { name: 'TS dở dang DH', value: 10.0 },
                        { name: 'ĐTTC dài hạn', value: 8.0 },
                        { name: 'Tài sản DH khác', value: 7.5 }
                    ]
                }
            ]
        };
        buildDecompTree('chart-1-2-decomp-asset', assetTree, colors.primary);
    }

    const decompLiabEl = document.getElementById('chart-1-2-decomp-liab');
    if (decompLiabEl) {
        const liabTree = {
            name: 'Nợ phải trả',
            value: 45.6,
            children: [
                {
                    name: 'Nợ ngắn hạn',
                    value: 31.6,
                    children: [
                        { name: 'Vay & nợ NH', value: 15.3 },
                        { name: 'Phải trả người bán', value: 8.0 },
                        { name: 'Thuế & phí', value: 4.0 },
                        { name: 'Nợ NH khác', value: 4.3 }
                    ]
                },
                {
                    name: 'Nợ dài hạn',
                    value: 14.0,
                    children: [
                        { name: 'Vay & nợ DH', value: 8.0 },
                        { name: 'Trái phiếu DH', value: 3.0 },
                        { name: 'Dự phòng DH', value: 2.0 },
                        { name: 'Nợ DH khác', value: 1.0 }
                    ]
                }
            ]
        };
        buildDecompTree('chart-1-2-decomp-liab', liabTree, colors.danger);
    }

    const decompEquityEl = document.getElementById('chart-1-2-decomp-equity');
    if (decompEquityEl) {
        const equityTree = {
            name: 'Vốn chủ sở hữu',
            value: 82.9,
            children: [
                {
                    name: 'Vốn góp',
                    value: 60.0,
                    children: [
                        { name: 'Vốn điều lệ', value: 45.0 },
                        { name: 'Thặng dư vốn', value: 15.0 }
                    ]
                },
                {
                    name: 'Lợi nhuận giữ lại',
                    value: 18.0,
                    children: [
                        { name: 'LN chưa phân phối', value: 12.0 },
                        { name: 'Quỹ ĐT phát triển', value: 6.0 }
                    ]
                },
                {
                    name: 'Yếu tố khác',
                    value: 4.9,
                    children: [
                        { name: 'Chênh lệch đánh giá lại', value: 2.5 },
                        { name: 'Chênh lệch tỷ giá', value: 2.4 }
                    ]
                }
            ]
        };
        buildDecompTree('chart-1-2-decomp-equity', equityTree, colors.success);
    }
    // Drill-down 1.2
    const dd1 = document.getElementById('chart-1-2-drill-stack1');
    if (dd1) echarts.init(dd1).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] }, yAxis: { type: 'value' },
        series: [
            { name: 'Ngắn hạn', type: 'bar', stack: 'total', data: [20, 21, 22, 23, 24, 25], itemStyle: { color: colors.warning } },
            { name: 'Dài hạn', type: 'bar', stack: 'total', data: [15, 15, 15, 15, 14, 14], itemStyle: { color: colors.primary } }
        ]
    });

    const dd2 = document.getElementById('chart-1-2-drill-donut1');
    if (dd2) echarts.init(dd2).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'item' },
        series: [{
            type: 'pie', radius: ['40%', '70%'],
            data: [{ value: 15.3, name: 'Phải trả NCC' }, { value: 5.2, name: 'Vay NH' }, { value: 1.5, name: 'Thuế' }, { value: 2.0, name: 'Lương' }]
        }]
    });

    const dd3 = document.getElementById('chart-1-2-drill-bar1');
    if (dd3) echarts.init(dd3).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' }, xAxis: { type: 'category', data: ['0-30 ngày', '31-60 ngày', '61-90 ngày', '>90 ngày'] }, yAxis: { type: 'value' },
        series: [{ type: 'bar', data: [2.5, 1.5, 0.8, 0.4], itemStyle: { color: colors.danger } }]
    });

    const dd4 = document.getElementById('chart-1-2-drill-bar2');
    if (dd4) echarts.init(dd4).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: { type: 'value' },
        yAxis: { type: 'category', data: ['Vietcombank', 'BIDV', 'Techcombank'] },
        series: [{ type: 'bar', data: [15, 10, 5], itemStyle: { color: colors.primary } }]
    });

    const dd5 = document.getElementById('chart-1-2-drill-line');
    if (dd5) echarts.init(dd5).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [{ type: 'line', data: [18, 18.5, 19, 19.2, 19.5, 20, 20.2, 20.4, 20.5, 20.8, 21, 21.2], smooth: true, itemStyle: { color: colors.primary }, areaStyle: { opacity: 0.1 } }]
    });

    const dd6 = document.getElementById('chart-1-2-drill-stack2');
    if (dd6) echarts.init(dd6).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] }, yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: 'Tiền & tương đương tiền', type: 'bar', stack: 'ts', data: [12, 12.5, 13, 13.2, 13.1, 12.8], itemStyle: { color: colors.success } },
            { name: 'Phải thu', type: 'bar', stack: 'ts', data: [15, 15.4, 15.8, 16.2, 16.6, 17.0], itemStyle: { color: colors.warning } },
            { name: 'Hàng tồn kho', type: 'bar', stack: 'ts', data: [10, 10.2, 10.5, 10.8, 11, 11.3], itemStyle: { color: colors.info } },
            { name: 'Tài sản ngắn hạn khác', type: 'bar', stack: 'ts', data: [8.0, 8.2, 8.4, 8.6, 8.8, 9.0], itemStyle: { color: colors.gray } }
        ]
    });

    const dd7 = document.getElementById('chart-1-2-drill-bar3');
    if (dd7) echarts.init(dd7).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        yAxis: { type: 'category', data: ['Nhà xưởng', 'Máy móc', 'Phương tiện', 'Thiết bị hỗ trợ'] },
        series: [{ type: 'bar', data: [30, 22, 12, 9], itemStyle: { color: colors.primary } }]
    });

    const dd8 = document.getElementById('chart-1-2-drill-bar4');
    if (dd8) echarts.init(dd8).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' }, xAxis: { type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] }, yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [{ type: 'bar', data: [3.2, 2.1, 1.5, 0.8], itemStyle: { color: colors.accent } }]
    });
}

// Page 1.3 - Các tỷ số tài chính
function initPage13() {
    const gaugeOpt = (val, name, max, reverse) => ({
        series: [{
            type: 'gauge',
            radius: '100%',
            center: ['50%', '70%'],
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: max,
            splitNumber: 5,
            axisLine: {
                lineStyle: {
                    width: 24,
                    color: reverse
                        ? [[0.4, colors.success], [0.7, colors.warning], [1, colors.danger]]
                        : [[0.4, colors.danger], [0.7, colors.warning], [1, colors.success]]
                }
            },
            axisTick: { show: false },
            splitLine: { length: 10, lineStyle: { color: '#9ca3af', width: 1.5 } },
            axisLabel: {
                distance: -40,
                fontSize: 10,
                color: '#6b7280',
                formatter: (v) => {
                    if (max <= 3) return v.toFixed(1);
                    return v.toFixed(0);
                }
            },
            pointer: { length: '52%', width: 4 },
            detail: {
                show: true,
                fontSize: 18,
                fontWeight: 'bold',
                offsetCenter: [0, '30%'],
                formatter: '{value}'
            },
            data: [{ value: val, name: name }],
            title: { show: false }
        }]
    });

    const gaugeConfigs = [
        { id: 'chart-1-3-g1', val: 1.8, name: 'Hiện hành', max: 3, rev: false },
        { id: 'chart-1-3-g2', val: 1.2, name: 'Nhanh', max: 2, rev: false },
        { id: 'chart-1-3-g4', val: 0.45, name: 'Tiền mặt', max: 1, rev: false },
        { id: 'chart-1-3-g3', val: 0.55, name: 'Nợ/VCSH', max: 2, rev: true },
        { id: 'chart-1-3-g5', val: 4.5, name: 'Khả năng trả lãi', max: 10, rev: false }
    ];

    gaugeConfigs.forEach(cfg => {
        const el = document.getElementById(cfg.id);
        if (el) echarts.init(el).setOption(gaugeOpt(cfg.val, cfg.name, cfg.max, cfg.rev));
    });

    const comboData = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'];

    // Chart 1: TSNH vs Nợ NH + Current Ratio
    const combo1 = document.getElementById('chart-1-3-drill-combo1');
    if (combo1) echarts.init(combo1).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        legend: { data: ['TSNH', 'Nợ NH', 'Hệ số hiện hành'], bottom: 0 },
        xAxis: { type: 'category', data: comboData },
        yAxis: [
            { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
            { type: 'value', min: 0, max: 3, axisLabel: { formatter: '{value}x' } }
        ],
        series: [
            { name: 'TSNH', type: 'bar', data: [40, 42, 43, 45, 46, 48], itemStyle: { color: colors.info } },
            { name: 'Nợ NH', type: 'bar', data: [20, 21, 22, 23, 24, 25], itemStyle: { color: colors.danger } },
            { name: 'Hệ số hiện hành', type: 'line', yAxisIndex: 1, data: [1.9, 2.0, 2.0, 2.0, 1.9, 1.9], smooth: true, itemStyle: { color: colors.success } }
        ]
    });

    // Chart 2: (TSNH - HTK) vs Nợ NH + Quick Ratio
    const combo2 = document.getElementById('chart-1-3-drill-combo2');
    if (combo2) echarts.init(combo2).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        legend: { data: ['TSNH - HTK', 'Nợ NH', 'Hệ số nhanh'], bottom: 0 },
        xAxis: { type: 'category', data: comboData },
        yAxis: [
            { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
            { type: 'value', min: 0, max: 2, axisLabel: { formatter: '{value}x' } }
        ],
        series: [
            { name: 'TSNH - HTK', type: 'bar', data: [30, 31, 31, 32, 33, 33], itemStyle: { color: colors.primary } },
            { name: 'Nợ NH', type: 'bar', data: [20, 21, 22, 23, 24, 25], itemStyle: { color: colors.danger } },
            { name: 'Hệ số nhanh', type: 'line', yAxisIndex: 1, data: [1.5, 1.48, 1.41, 1.39, 1.38, 1.32], smooth: true, itemStyle: { color: colors.accent } }
        ]
    });

    // Chart 3: Tiền vs Nợ NH + Cash Ratio
    const combo3 = document.getElementById('chart-1-3-drill-combo3');
    if (combo3) echarts.init(combo3).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        legend: { data: ['Tiền', 'Nợ NH', 'Hệ số tiền mặt'], bottom: 0 },
        xAxis: { type: 'category', data: comboData },
        yAxis: [
            { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
            { type: 'value', min: 0, max: 1.2, axisLabel: { formatter: '{value}x' } }
        ],
        series: [
            { name: 'Tiền', type: 'bar', data: [15, 14, 13, 14, 13, 12.8], itemStyle: { color: colors.success } },
            { name: 'Nợ NH', type: 'bar', data: [20, 21, 22, 23, 24, 25], itemStyle: { color: colors.danger } },
            { name: 'Hệ số tiền mặt', type: 'line', yAxisIndex: 1, data: [0.75, 0.67, 0.59, 0.61, 0.54, 0.51], smooth: true, itemStyle: { color: colors.purple } }
        ]
    });

    // Chart 4: Nợ vs VCSH + D/E Ratio (bar nằm bên trong)
    const deEl = document.getElementById('chart-1-3-drill-de');
    if (deEl) {
        const debtData = [38, 40, 42, 44, 45, 45.6];
        const equityData = [72, 76, 78, 80, 82, 82.9];
        const ratioData = [0.53, 0.53, 0.54, 0.55, 0.55, 0.55];
        echarts.init(deEl).setOption({
            animation: false,
            hoverLayerThreshold: -1, tooltip: {
                trigger: 'axis',
                formatter: (params) => {
                    const debt = params.find(p => p.seriesName === 'Nợ phải trả');
                    const equity = params.find(p => p.seriesName === 'Vốn CSH');
                    const ratio = ratioData[debt.dataIndex];
                    return `${debt.name}<br/>Nợ phải trả: ${debt.value} tỷ<br/>Vốn CSH: ${equity.value} tỷ<br/>Nợ/VCSH: ${ratio.toFixed(2)}x`;
                }
            },
            legend: { data: ['Nợ phải trả', 'Vốn CSH'], bottom: 0 },
            xAxis: { type: 'category', data: comboData },
            yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
            series: [
                {
                    name: 'Nợ phải trả',
                    type: 'bar',
                    data: debtData,
                    barWidth: '60%',
                    itemStyle: {
                        color: colors.danger,
                        borderWidth: 0
                    }
                },
                {
                    name: 'Vốn CSH',
                    type: 'bar',
                    data: equityData,
                    barWidth: '60%',
                    barGap: '-100%',
                    z: 3,
                    itemStyle: {
                        color: 'transparent',
                        borderColor: colors.success,
                        borderWidth: 2
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: (params) => {
                            const idx = params.dataIndex;
                            return `${ratioData[idx].toFixed(2)}`;
                        },
                        fontSize: 11,
                        fontWeight: 'bold',
                        color: colors.primary
                    }
                }
            ]
        });
    }

    // Chart 5: LN trước lãi vs Chi phí lãi + Interest Coverage (chi phí lãi căn giữa)
    const interestEl = document.getElementById('chart-1-3-drill-interest');
    if (interestEl) {
        const ebitData = [1.2, 1.3, 1.4, 1.5, 1.6, 1.7];
        const interestData = [0.25, 0.26, 0.27, 0.28, 0.29, 0.3];
        const coverageData = [4.8, 4.9, 5.0, 5.1, 5.2, 5.3];
        echarts.init(interestEl).setOption({
            animation: false,
            hoverLayerThreshold: -1, tooltip: {
                trigger: 'axis',
                formatter: (params) => {
                    const ebit = params.find(p => p.seriesName === 'LN trước lãi vay');
                    const interest = params.find(p => p.seriesName === 'Chi phí lãi vay');
                    const coverage = coverageData[ebit.dataIndex];
                    return `${ebit.name}<br/>LN trước lãi vay: ${ebit.value} tỷ<br/>Chi phí lãi vay: ${interest.value} tỷ<br/>Khả năng trả lãi: ${coverage.toFixed(1)}x`;
                }
            },
            legend: { data: ['LN trước lãi vay', 'Chi phí lãi vay'], bottom: 0 },
            xAxis: { type: 'category', data: comboData },
            yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
            series: [
                {
                    name: 'LN trước lãi vay',
                    type: 'bar',
                    data: ebitData,
                    itemStyle: { color: colors.success },
                    barWidth: '60%',
                    label: {
                        show: true,
                        position: 'top',
                        formatter: (params) => {
                            const idx = params.dataIndex;
                            return `${coverageData[idx].toFixed(1)}`;
                        },
                        fontSize: 10,
                        fontWeight: 'bold',
                        color: colors.secondary
                    }
                },
                {
                    name: 'Chi phí lãi vay',
                    type: 'bar',
                    data: interestData,
                    itemStyle: { color: colors.pink },
                    barWidth: '35%',
                    barGap: '-100%',
                    z: 2
                }
            ]
        });
    }
}
// Page 2.1 - Tổng quan KQKD
function initPage21() {
    const el1 = document.getElementById('chart-2-1-waterfall');
    if (!el1) return;
    echarts.init(el1).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Doanh thu', 'Giá vốn', 'LN Gộp', 'CP QLDN', 'CP TC', 'LN Thuần'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [{
            type: 'bar',
            data: [
                { value: 8.2, itemStyle: { color: colors.primary } },
                { value: -5.4, itemStyle: { color: colors.danger } },
                { value: 2.8, itemStyle: { color: colors.info } },
                { value: -1.2, itemStyle: { color: colors.warning } },
                { value: -0.4, itemStyle: { color: colors.pink } },
                { value: 1.2, itemStyle: { color: colors.success } }
            ],
            label: { show: true, position: 'top', formatter: '{c} tỷ' }
        }]
    });

    const el2 = document.getElementById('chart-2-1-profit-pie');
    if (!el2) return;
    echarts.init(el2).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'item' },
        legend: { bottom: 0, textStyle: { fontSize: 10 } },
        series: [{
            type: 'pie', radius: ['35%', '65%'],
            data: [
                { value: 0.65, name: 'DV Container', itemStyle: { color: colors.primary } },
                { value: 0.35, name: 'Vận tải bộ', itemStyle: { color: colors.secondary } },
                { value: 0.12, name: 'Kho bãi', itemStyle: { color: colors.info } },
                { value: 0.08, name: 'DV khác', itemStyle: { color: colors.purple } }
            ]
        }]
    });

    const el3 = document.getElementById('chart-2-1-profit-combo');
    if (!el3) return;
    echarts.init(el3).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        legend: { data: ['Lợi nhuận thực tế', 'Lợi nhuận năm trước'], bottom: 0 },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: 'Lợi nhuận thực tế', type: 'bar', data: [0.8, 0.85, 0.9, 0.95, 1.0, 1.05, 1.1, 1.15, 1.15, 1.2, 1.2, 1.2], itemStyle: { color: colors.primary } },
            { name: 'Lợi nhuận năm trước', type: 'line', data: [0.65, 0.68, 0.7, 0.72, 0.75, 0.78, 0.8, 0.82, 0.85, 0.88, 0.9, 0.92], smooth: true, lineStyle: { width: 2, type: 'dashed' }, itemStyle: { color: colors.danger } }
        ]
    });

    // Bar chart: Doanh thu và Chi phí theo thời gian
    const el4 = document.getElementById('chart-2-1-revenue-cost-bar');
    if (el4) echarts.init(el4).setOption({
        animation: false,
        hoverLayerThreshold: -1,
        tooltip: { trigger: 'axis' },
        legend: { data: ['Doanh thu', 'Chi phí'], bottom: 0 },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: 'Doanh thu', type: 'bar', data: [6.5, 6.8, 7.0, 7.2, 7.4, 7.6, 7.8, 8.0, 8.1, 8.2, 8.2, 8.2], itemStyle: { color: colors.success } },
            { name: 'Chi phí', type: 'bar', data: [5.0, 5.2, 5.4, 5.5, 5.6, 5.8, 5.9, 6.0, 6.1, 6.2, 6.2, 6.2], itemStyle: { color: colors.danger } }
        ]
    });
}

// Page 2.2 - Phân tích Doanh thu
function initPage22() {
    // Pie chart: Cơ cấu doanh thu theo loại
    const typePieEl = document.getElementById('chart-2-2-type-pie');
    if (typePieEl) echarts.init(typePieEl).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'item' },
        legend: { bottom: 0, textStyle: { fontSize: 10 } },
        series: [{
            type: 'pie', radius: ['35%', '65%'],
            data: [
                { value: 2.8, name: 'Cấp rỗng', itemStyle: { color: colors.primary } },
                { value: 2.4, name: 'Đảo chuyến', itemStyle: { color: colors.secondary } },
                { value: 1.2, name: 'Sửa chữa', itemStyle: { color: colors.info } },
                { value: 1.0, name: 'Hạ cont', itemStyle: { color: colors.warning } },
                { value: 0.8, name: 'Cầu bến', itemStyle: { color: colors.purple } }
            ]
        }]
    });

    // Line-Bar chart: Doanh thu và Sản lượng theo thời gian
    const lineBarEl = document.getElementById('chart-2-2-linebar');
    if (lineBarEl) echarts.init(lineBarEl).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        legend: { data: ['Doanh thu', 'Sản lượng'], bottom: 0 },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'] },
        yAxis: [
            { type: 'value', name: 'Doanh thu (tỷ)', axisLabel: { formatter: '{value}' } },
            { type: 'value', name: 'Sản lượng (TEU)', axisLabel: { formatter: '{value}' } }
        ],
        series: [
            { name: 'Doanh thu', type: 'bar', data: [6.5, 6.8, 7.0, 7.2, 7.4, 7.6, 7.8, 8.0, 8.1, 8.2, 8.2, 8.2], itemStyle: { color: colors.primary } },
            { name: 'Sản lượng', type: 'line', yAxisIndex: 1, data: [850, 890, 920, 950, 980, 1010, 1040, 1070, 1080, 1100, 1100, 1100], smooth: true, itemStyle: { color: colors.success } }
        ]
    });

    // Top 10 Customers with toggle buttons
    let showingRevenue = true;
    const topCustomersEl = document.getElementById('chart-2-2-top-customers');
    const btnRevenue = document.getElementById('btn-2-2-revenue');
    const btnQuantity = document.getElementById('btn-2-2-quantity');

    if (topCustomersEl && btnRevenue && btnQuantity) {
        let revenueChart = echarts.init(topCustomersEl);

        const revenueData = [
            { name: 'M&G Int', value: 2.5, change: '+5%' },
            { name: 'Ever Gain', value: 2.1, change: '+3%' },
            { name: 'Wanek', value: 1.8, change: '-2%' },
            { name: 'Phương', value: 1.5, change: '+4%' },
            { name: 'Hải Vương', value: 1.2, change: '+6%' },
            { name: 'Kim Phát', value: 1.0, change: '+1%' },
            { name: 'Timberland', value: 0.9, change: '+2%' },
            { name: 'Logistics VN', value: 0.8, change: '-1%' },
            { name: 'Vinalines', value: 0.7, change: '+3%' },
            { name: 'Trường Hải', value: 0.6, change: '+5%' }
        ];

        const quantityData = [
            { name: 'M&G Int', value: 350, change: '+4%' },
            { name: 'Ever Gain', value: 280, change: '+2%' },
            { name: 'Wanek', value: 240, change: '-3%' },
            { name: 'Phương', value: 200, change: '+5%' },
            { name: 'Hải Vương', value: 160, change: '+7%' },
            { name: 'Kim Phát', value: 135, change: '+1%' },
            { name: 'Timberland', value: 120, change: '+2%' },
            { name: 'Logistics VN', value: 110, change: '-2%' },
            { name: 'Vinalines', value: 95, change: '+3%' },
            { name: 'Trường Hải', value: 80, change: '+4%' }
        ];

        function updateTopCustomersChart() {
            if (showingRevenue) {
                revenueChart.setOption({
                    animation: false,
                    hoverLayerThreshold: -1, tooltip: {
                        trigger: 'axis', formatter: (params) => {
                            if (params.length > 0) {
                                const idx = revenueData.findIndex(d => d.value === params[0].value);
                                return revenueData[idx].name + '<br/>' + params[0].value + ' tỷ | ' + revenueData[idx].change;
                            }
                        }
                    },
                    grid: { containLabel: true, left: '5%', right: 90, bottom: '5%', top: '3%' },
                    xAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
                    yAxis: { type: 'category', data: revenueData.map(d => d.name) },
                    series: [{
                        type: 'bar',
                        data: revenueData.map(d => d.value),
                        itemStyle: { color: colors.primary },
                        label: {
                            show: true,
                            position: 'right',
                            formatter: (p) => {
                                const idx = revenueData.findIndex(d => d.value === p.value);
                                return revenueData[idx].value + ' tỷ | ' + revenueData[idx].change;
                            }
                        }
                    }]
                });
            } else {
                revenueChart.setOption({
                    animation: false,
                    hoverLayerThreshold: -1, tooltip: {
                        trigger: 'axis', formatter: (params) => {
                            if (params.length > 0) {
                                const idx = quantityData.findIndex(d => d.value === params[0].value);
                                return quantityData[idx].name + '<br/>' + params[0].value + ' TEU | ' + quantityData[idx].change;
                            }
                        }
                    },
                    grid: { containLabel: true, left: '5%', right: 90, bottom: '5%', top: '3%' },
                    xAxis: { type: 'value', axisLabel: { formatter: '{value} TEU' } },
                    yAxis: { type: 'category', data: quantityData.map(d => d.name) },
                    series: [{
                        type: 'bar',
                        data: quantityData.map(d => d.value),
                        itemStyle: { color: colors.secondary },
                        label: {
                            show: true,
                            position: 'right',
                            formatter: (p) => {
                                const idx = quantityData.findIndex(d => d.value === p.value);
                                return quantityData[idx].value + ' TEU | ' + quantityData[idx].change;
                            }
                        }
                    }]
                });
            }
        }

        updateTopCustomersChart();

        btnRevenue.addEventListener('click', function () {
            if (!showingRevenue) {
                showingRevenue = true;
                btnRevenue.style.background = colors.primary;
                btnRevenue.style.color = 'white';
                btnQuantity.style.background = '#d1d5db';
                btnQuantity.style.color = '#374151';
                updateTopCustomersChart();
            }
        });

        btnQuantity.addEventListener('click', function () {
            if (showingRevenue) {
                showingRevenue = false;
                btnQuantity.style.background = colors.primary;
                btnQuantity.style.color = 'white';
                btnRevenue.style.background = '#d1d5db';
                btnRevenue.style.color = '#374151';
                updateTopCustomersChart();
            }
        });
    }

    // Heatmap: KH x Dịch vụ
    const heatmapEl = document.getElementById('chart-2-2-heatmap');
    if (heatmapEl) {
        echarts.init(heatmapEl).setOption({
            animation: false,
            hoverLayerThreshold: -1, tooltip: { position: 'top' },
            grid: { containLabel: true, bottom: '10%', left: '3%', right: '5%', top: '5%' },
            xAxis: {
                type: 'category', data: ['Cấp rỗng', 'Đảo chuyến', 'Sửa chữa', 'Hạ cont', 'Cầu bến'],
                axisLabel: {
                    interval: 0       // ép hiện đủ nhãn
                    // overflow: 'truncate' // nếu bạn dùng ECharts mới, có thể bật thêm
                }
            },
            yAxis: { type: 'category', data: ['M&G', 'Ever Gain', 'Wanek', 'Phương', 'Hải Vương'] },
            visualMap: { min: 0, max: 1.5, calculable: true, orient: 'horizontal', left: 'center', bottom: -20 },
            series: [{
                type: 'heatmap',
                data: [
                    [0, 0, 1.2], [0, 1, 0.8], [0, 2, 0.4], [0, 3, 0.3], [0, 4, 0.1],
                    [1, 0, 0.9], [1, 1, 0.7], [1, 2, 0.2], [1, 3, 0.2], [1, 4, 0.1],
                    [2, 0, 0.4], [2, 1, 0.3], [2, 2, 0.6], [2, 3, 0.3], [2, 4, 0.2],
                    [3, 0, 0.3], [3, 1, 0.2], [3, 2, 0.2], [3, 3, 0.2], [3, 4, 0.1],
                    [4, 0, 0.2], [4, 1, 0.1], [4, 2, 0.1], [4, 3, 0.1], [4, 4, 0.3]
                ].map(item => [item[1], item[0], item[2]])
            }]
        });
        window.addEventListener('resize', () => chart.resize());
    }
    // Pareto chart: Đóng góp % DT
    const paretoEl = document.getElementById('chart-2-2-pareto');
    if (paretoEl) echarts.init(paretoEl).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        grid: { containLabel: true, left: '5%', right: '5%', top: '5%', bottom: '3%' },
        xAxis: {
            type: 'category', data: ['M&G', 'Ever Gain', 'Wanek', 'Phương', 'Hải Vương', 'Khác'],
            axisLabel: { interval: 0 }
        },
        yAxis: [{ type: 'value' }, { type: 'value', min: 0, max: 100 }],
        series: [
            { type: 'bar', data: [2.5, 2.1, 1.8, 1.5, 1.2, 5.0], itemStyle: { color: colors.info } },
            { type: 'line', yAxisIndex: 1, data: [18, 32, 45, 55, 63, 100], smooth: true, itemStyle: { color: colors.danger } }
        ]
    });
}

// Page 2.3 - Phan tich Chi phi
function initPage23() {
    // Pie chart: Cơ cấu chi phí theo loại
    const typePieEl = document.getElementById('chart-2-3-type-pie');
    if (typePieEl) echarts.init(typePieEl).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'item' },
        legend: { bottom: 0, textStyle: { fontSize: 10 } },
        series: [{
            type: 'pie', radius: ['35%', '65%'],
            data: [
                { value: 5.4, name: 'Giá vốn hàng bán', itemStyle: { color: colors.danger } },
                { value: 1.2, name: 'Chi phí bán hàng', itemStyle: { color: colors.warning } },
                { value: 0.8, name: 'Chi phí quản lý doanh nghiệp', itemStyle: { color: colors.info } },
                { value: 0.4, name: 'Chi phí tài chính', itemStyle: { color: colors.purple } }
            ]
        }]
    });

    // Top 10 Expenses with toggle buttons
    let expenseMode = 'all'; // 'all', 'fixed', 'variable'
    const topExpensesEl = document.getElementById('chart-2-3-top-expenses');
    const btnAll = document.getElementById('btn-2-3-all');
    const btnFixed = document.getElementById('btn-2-3-fixed');
    const btnVariable = document.getElementById('btn-2-3-variable');

    if (topExpensesEl && btnAll && btnFixed && btnVariable) {
        let expensesChart = echarts.init(topExpensesEl);

        const allData = [
            { name: 'Thuê sà lan', value: 2000, change: '+6%', type: 'variable' },
            { name: 'Thuê xe đầu kéo', value: 1500, change: '+4%', type: 'variable' },
            { name: 'Lương quản lý', value: 600, change: '+2%', type: 'fixed' },
            { name: 'Nhiên liệu', value: 800, change: '+8%', type: 'variable' },
            { name: 'Nhân công vận hành', value: 600, change: '+3%', type: 'variable' },
            { name: 'Khấu hao', value: 500, change: '0%', type: 'fixed' },
            { name: 'Lãi vay', value: 400, change: '+1%', type: 'fixed' },
            { name: 'Điện nước', value: 300, change: '+5%', type: 'fixed' },
            { name: 'Văn phòng phẩm', value: 300, change: '+2%', type: 'fixed' },
            { name: 'Bảo trì máy móc', value: 200, change: '+7%', type: 'variable' }
        ];

        function updateExpensesChart() {
            let dataToShow = allData;
            if (expenseMode === 'fixed') {
                dataToShow = allData.filter(d => d.type === 'fixed');
            } else if (expenseMode === 'variable') {
                dataToShow = allData.filter(d => d.type === 'variable');
            }
            dataToShow.sort((a, b) => b.value - a.value);

            expensesChart.setOption({
                animation: false,
                hoverLayerThreshold: -1, tooltip: {
                    trigger: 'axis', formatter: (params) => {
                        if (params.length > 0) {
                            const idx = dataToShow.findIndex(d => d.value === params[0].value);
                            return dataToShow[idx].name + '<br/>' + (dataToShow[idx].value / 1000) + ' tỷ | ' + dataToShow[idx].change;
                        }
                    }
                },
                grid: { containLabel: true, left: '5%', right: 90, bottom: '5%', top: '3%' },
                xAxis: { type: 'value', axisLabel: { formatter: (v) => (v / 1000) + ' tỷ' } },
                yAxis: { type: 'category', data: dataToShow.map(d => d.name) },
                series: [{
                    type: 'bar',
                    data: dataToShow.map(d => d.value),
                    itemStyle: { color: colors.danger },
                    label: {
                        show: true,
                        position: 'right',
                        formatter: (p) => {
                            const idx = dataToShow.findIndex(d => d.value === p.value);
                            return (dataToShow[idx].value / 1000) + ' tỷ | ' + dataToShow[idx].change;
                        }
                    }
                }]
            });
        }

        updateExpensesChart();

        [btnAll, btnFixed, btnVariable].forEach(btn => btn.addEventListener('click', function () {
            if (this === btnAll) expenseMode = 'all';
            else if (this === btnFixed) expenseMode = 'fixed';
            else if (this === btnVariable) expenseMode = 'variable';

            [btnAll, btnFixed, btnVariable].forEach(b => {
                b.style.background = '#d1d5db';
                b.style.color = '#374151';
            });
            this.style.background = colors.primary;
            this.style.color = 'white';

            updateExpensesChart();
        }));
    }

    // Line chart: Xu hướng chi phí cố định và biến đổi
    const trendLineEl = document.getElementById('chart-2-3-trend-line');
    if (trendLineEl) echarts.init(trendLineEl).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        legend: { bottom: 0, textStyle: { fontSize: 10 } },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: 'Chi phí cố định', type: 'line', data: [0.8, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9, 0.91], smooth: true, itemStyle: { color: colors.warning } },
            { name: 'Chi phí biến đổi', type: 'line', data: [4.2, 4.3, 4.4, 4.5, 4.6, 4.65, 4.7, 4.75, 4.8, 4.85, 4.9, 5.4], smooth: true, itemStyle: { color: colors.danger } }
        ]
    });

    // Combo chart: Chi phí vs Doanh thu (%)
    const ratioComboEl = document.getElementById('chart-2-3-ratio-combo');
    if (ratioComboEl) echarts.init(ratioComboEl).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        legend: { bottom: 0, textStyle: { fontSize: 10 } },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'] },
        yAxis: [
            { type: 'value', name: 'Chi phí (tỷ)', axisLabel: { formatter: '{value}' } },
            { type: 'value', name: 'Tỷ lệ (%)', axisLabel: { formatter: '{value}%' } }
        ],
        series: [
            { name: 'Chi phí', type: 'bar', data: [6.2, 6.4, 6.6, 6.7, 6.9, 7.0, 7.1, 7.15, 7.2, 7.25, 7.3, 7.35], itemStyle: { color: colors.danger } },
            { name: 'Tỷ lệ chi phí/Doanh thu', type: 'line', yAxisIndex: 1, data: [75, 74, 72, 70, 72, 85, 80, 78, 76, 75, 74, 72], smooth: true, itemStyle: { color: colors.success } }
        ]
    });

    // Bar chart: Chi phí theo nhà cung cấp
    const vendorBarEl = document.getElementById('chart-2-3-vendor-bar');
    if (vendorBarEl) echarts.init(vendorBarEl).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        grid: { containLabel: true, left: '3%', right: '4%', bottom: '3%' },
        xAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        yAxis: { type: 'category', data: ['NCC sà lan A', 'NCC xe B', 'NCC dầu C', 'NCC điện D', 'NCC khác'] },
        series: [{ type: 'bar', data: [2.0, 1.5, 0.8, 0.5, 1.2], itemStyle: { color: colors.warning } }]
    });

    // Scatter chart: Sản lượng vs Chi phí
    const quantityScatterEl = document.getElementById('chart-2-3-quantity-scatter');
    if (quantityScatterEl) echarts.init(quantityScatterEl).setOption({
        animation: false,
        hoverLayerThreshold: -1, xAxis: { name: 'Sản lượng (TEU)', type: 'value' },
        yAxis: { name: 'Chi phí (tỷ)', type: 'value' },
        series: [{
            type: 'scatter',
            data: [[850, 6.2], [890, 6.4], [920, 6.6], [950, 6.7], [980, 6.9], [1010, 7.0], [1040, 7.1], [1070, 7.15]],
            symbolSize: 10,
            itemStyle: { color: colors.info }
        }]
    });
}

// Page 2.4 - Lưu chuyển Tiền tệ
function initPage24() {
    // Waterfall: Biến động dòng tiền
    const el1 = document.getElementById('chart-2-4-waterfall');
    if (el1) echarts.init(el1).setOption({
        animation: false,
        hoverLayerThreshold: -1,
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Tiền đầu kỳ', 'HĐ kinh doanh', 'HĐ đầu tư', 'HĐ tài chính', 'Tiền cuối kỳ'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [{
            type: 'bar',
            data: [
                { value: 15.2, itemStyle: { color: colors.gray } },
                { value: 3.2, itemStyle: { color: colors.success } },
                { value: -1.8, itemStyle: { color: colors.danger } },
                { value: -2.8, itemStyle: { color: colors.warning } },
                { value: 12.8, itemStyle: { color: colors.primary } }
            ],
            label: { show: true, position: 'top', formatter: '{c} tỷ' }
        }]
    });

    // Line-Bar chart: Biến động dòng tiền theo thời gian - Same scale for both Y axes
    const cashflowLinebarEl = document.getElementById('chart-2-4-cashflow-linebar');
    if (cashflowLinebarEl) echarts.init(cashflowLinebarEl).setOption({
        animation: false,
        hoverLayerThreshold: -1,
        tooltip: { trigger: 'axis' },
        legend: { bottom: 0, textStyle: { fontSize: 10 } },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'] },
        yAxis: [
            { type: 'value', name: 'Biến động tiền (tỷ)', axisLabel: { formatter: '{value}' }, min: -3, max: 5 },
            { type: 'value', name: 'Tồn tiền (tỷ)', axisLabel: { formatter: '{value}' }, min: -3, max: 5 }
        ],
        series: [
            { name: 'Biến động dòng tiền', type: 'bar', data: [2.5, -1.2, 1.8, -2.5, 1.5, -1.0, 3.2, -1.8, 2.1, -2.8, 1.5, -2.4], itemStyle: { color: (params) => params.value > 0 ? colors.success : colors.danger } },
            { name: 'Tiền tồn TM', type: 'line', yAxisIndex: 1, data: [2.5, 1.8, 3.2, 1.2, 2.5, 1.8, 4.2, 2.8, 4.5, 2.0, 3.2, 2.1], smooth: true, itemStyle: { color: colors.primary } },
            { name: 'Ngưỡng cảnh báo', type: 'line', yAxisIndex: 1, data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], lineStyle: { type: 'dashed' }, itemStyle: { color: colors.danger } }
        ]
    });

    // Operating cash flow details
    const operatingEl = document.getElementById('chart-2-4-operating');
    if (operatingEl) echarts.init(operatingEl).setOption({
        animation: false,
        hoverLayerThreshold: -1,
        tooltip: {
            trigger: 'axis', formatter: (params) => {
                if (params.length > 0) {
                    const operatingItems = [
                        { name: 'Tiền thu từ bán hàng, cung cấp dịch vụ', value: 8.5, change: '+5%' },
                        { name: 'Tiền chi cho nhà cung cấp', value: -7.5, change: '+3%' },
                        { name: 'Tiền chi trả lương, nhân viên', value: -2.8, change: '+2%' },
                        { name: 'Tiền lãi vay đã trả', value: -0.4, change: '+1%' },
                        { name: 'Thuế thu nhập đã nộp', value: -0.5, change: '+6%' },
                        { name: 'Tiền thu khác từ HĐ', value: 1.0, change: '-2%' },
                        { name: 'Tiền chi khác cho HĐ', value: -0.8, change: '+4%' }
                    ];
                    const idx = params[0].dataIndex;
                    const item = operatingItems[idx];
                    const valueHtml = item.value > 0 ? `<span style="background-color: ${colors.success}; color: white; padding: 2px 6px; border-radius: 3px;">${item.value}</span>` : `<span style="background-color: ${colors.danger}; color: white; padding: 2px 6px; border-radius: 3px;">${item.value}</span>`;
                    return item.name + '<br/>' + valueHtml + ' tỷ | ' + item.change;
                }
            }
        },
        grid: { containLabel: true, left: '5%', right: 90, bottom: '5%', top: '3%' },
        xAxis: { type: 'value' },
        yAxis: { type: 'category', data: ['Tiền thu từ bán hàng, cung cấp dịch vụ', 'Tiền chi cho nhà cung cấp', 'Tiền chi trả lương, nhân viên', 'Tiền lãi vay đã trả', 'Thuế thu nhập đã nộp', 'Tiền thu khác từ HĐ', 'Tiền chi khác cho HĐ'] },
        series: [{
            type: 'bar',
            data: [8.5, -7.5, -2.8, -0.4, -0.5, 1.0, -0.8],
            label: {
                show: true, position: 'right', formatter: (params) => {
                    const item = [8.5, -7.5, -2.8, -0.4, -0.5, 1.0, -0.8][params.dataIndex];
                    const change = ['+5%', '+3%', '+2%', '+1%', '+6%', '-2%', '+4%'][params.dataIndex];
                    return item + ' | ' + change;
                }
            },
            itemStyle: { color: (params) => params.value > 0 ? colors.success : colors.danger }
        }]
    });

    // Investing cash flow details
    const investingEl = document.getElementById('chart-2-4-investing');
    if (investingEl) echarts.init(investingEl).setOption({
        animation: false,
        hoverLayerThreshold: -1,
        tooltip: {
            trigger: 'axis', formatter: (params) => {
                if (params.length > 0) {
                    const investingItems = [
                        { name: 'Chi mua TSCĐ, xây dựng', value: -1.2, change: '+8%' },
                        { name: 'Thu thanh lý TSCĐ', value: 0.3, change: '-3%' },
                        { name: 'Chi cho vay, mua công cụ nợ', value: -0.5, change: '+5%' },
                        { name: 'Thu hồi cho vay', value: 0.2, change: '-1%' },
                        { name: 'Chi đầu tư góp vốn', value: -0.4, change: '+2%' },
                        { name: 'Thu hồi đầu tư góp vốn', value: 0.1, change: '0%' },
                        { name: 'Thu lãi, cổ tức, lợi nhuận', value: 0.2, change: '+3%' }
                    ];
                    const idx = params[0].dataIndex;
                    const item = investingItems[idx];
                    const valueHtml = item.value > 0 ? `<span style="background-color: ${colors.success}; color: white; padding: 2px 6px; border-radius: 3px;">${item.value}</span>` : `<span style="background-color: ${colors.danger}; color: white; padding: 2px 6px; border-radius: 3px;">${item.value}</span>`;
                    return item.name + '<br/>' + valueHtml + ' tỷ | ' + item.change;
                }
            }
        },
        grid: { containLabel: true, left: '5%', right: 90, bottom: '5%', top: '3%' },
        xAxis: { type: 'value' },
        yAxis: { type: 'category', data: ['Chi mua TSCĐ, xây dựng', 'Thu thanh lý TSCĐ', 'Chi cho vay, mua công cụ nợ', 'Thu hồi cho vay', 'Chi đầu tư góp vốn', 'Thu hồi đầu tư góp vốn', 'Thu lãi, cổ tức, lợi nhuận'] },
        series: [{
            type: 'bar',
            data: [-1.2, 0.3, -0.5, 0.2, -0.4, 0.1, 0.2],
            label: {
                show: true, position: 'right', formatter: (params) => {
                    const item = [-1.2, 0.3, -0.5, 0.2, -0.4, 0.1, 0.2][params.dataIndex];
                    const change = ['+8%', '-3%', '+5%', '-1%', '+2%', '0%', '+3%'][params.dataIndex];
                    return item + ' | ' + change;
                }
            },
            itemStyle: { color: (params) => params.value > 0 ? colors.success : colors.danger }
        }]
    });

    // Financing cash flow details
    const financingEl = document.getElementById('chart-2-4-financing');
    if (financingEl) echarts.init(financingEl).setOption({
        animation: false,
        hoverLayerThreshold: -1,
        tooltip: {
            trigger: 'axis', formatter: (params) => {
                if (params.length > 0) {
                    const financingItems = [
                        { name: 'Thu phát hành cổ phiếu, nhận vốn góp', value: 1.0, change: '+2%' },
                        { name: 'Trả vốn góp cho chủ sở hữu', value: -0.5, change: '+1%' },
                        { name: 'Thu từ đi vay', value: 2.0, change: '+3%' },
                        { name: 'Trả nợ gốc vay', value: -3.5, change: '+4%' },
                        { name: 'Trả nợ gốc thuê tài chính', value: -0.8, change: '+2%' },
                        { name: 'Trả cổ tức, lợi nhuận', value: -0.2, change: '0%' }
                    ];
                    const idx = params[0].dataIndex;
                    const item = financingItems[idx];
                    const valueHtml = item.value > 0 ? `<span style="background-color: ${colors.success}; color: white; padding: 2px 6px; border-radius: 3px;">${item.value}</span>` : `<span style="background-color: ${colors.danger}; color: white; padding: 2px 6px; border-radius: 3px;">${item.value}</span>`;
                    return item.name + '<br/>' + valueHtml + ' tỷ | ' + item.change;
                }
            }
        },
        grid: { containLabel: true, left: '5%', right: 90, bottom: '5%', top: '3%' },
        xAxis: { type: 'value' },
        yAxis: { type: 'category', data: ['Thu phát hành cổ phiếu, nhận vốn góp', 'Trả vốn góp cho chủ sở hữu', 'Thu từ đi vay', 'Trả nợ gốc vay', 'Trả nợ gốc thuê tài chính', 'Trả cổ tức, lợi nhuận'] },
        series: [{
            type: 'bar',
            data: [1.0, -0.5, 2.0, -3.5, -0.8, -0.2],
            label: {
                show: true, position: 'right', formatter: (params) => {
                    const item = [1.0, -0.5, 2.0, -3.5, -0.8, -0.2][params.dataIndex];
                    const change = ['+2%', '+1%', '+3%', '+4%', '+2%', '0%'][params.dataIndex];
                    return item + ' | ' + change;
                }
            },
            itemStyle: { color: (params) => params.value > 0 ? colors.success : colors.danger }
        }]
    });
}
// Page 3.1 - Tổng quan công nợ
function initPage31() {
    // Gauge Configs - Similar to Page 1.1
    // For AR: max = 18.2 tỷ (total), value = 14.5 tỷ (collected)
    // For AP: max = 15.3 tỷ (total), value = 12.6 tỷ (paid)
    const gaugeConfigs = [
        {
            id: 'chart-3-1-gauge-ar',
            min: 0,
            max: 18.2,
            stops: [[0.797, colors.success], [1, colors.warning]],
            value: 14.5,
            label: 'Đã thu được'
        },
        {
            id: 'chart-3-1-gauge-ap',
            min: 0,
            max: 15.3,
            stops: [[0.824, colors.success], [1, colors.danger]],
            value: 12.6,
            label: 'Đã trả được'
        }
    ];

    gaugeConfigs.forEach(cfg => {
        const el = document.getElementById(cfg.id);
        if (!el) return;
        echarts.init(el).setOption({
            animation: false,
            hoverLayerThreshold: -1, series: [{
                type: 'gauge',
                radius: '100%',
                center: ['50%', '75%'],
                startAngle: 180,
                endAngle: 0,
                min: cfg.min,
                max: cfg.max,
                splitNumber: 5,
                axisLine: { lineStyle: { width: 30, color: cfg.stops } },
                pointer: { length: '50%', width: 5 },
                axisLabel: { distance: -40, fontSize: 10 },
                detail: { show: true, fontSize: 18, fontWeight: 'bold', offsetCenter: [0, '30%'], formatter: '{value} tỷ' },
                data: [{ value: cfg.value, name: cfg.label }],
                title: { show: false }
            }]
        });
    });

    // Line combo chart - 12 months trend
    const el1 = document.getElementById('chart-3-1-combo');
    if (el1) echarts.init(el1).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        legend: { data: ['Phải thu', 'Phải trả'], bottom: 0 },
        grid: { left: '5%', right: '5%', top: '15%', bottom: '15%', containLabel: true },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: 'Phải thu', type: 'line', data: [15, 15.5, 16, 16.2, 16.5, 17, 17.2, 17.5, 17.8, 18, 18, 18.2], smooth: true, lineStyle: { width: 2 }, itemStyle: { color: colors.primary } },
            { name: 'Phải trả', type: 'line', data: [14, 14.2, 14.5, 14.8, 15, 15, 15.2, 15.3, 15.3, 15.3, 15.3, 15.3], smooth: true, lineStyle: { width: 2 }, itemStyle: { color: colors.danger } }
        ]
    });

    // Waterfall chart: Cash Flow (Tiền hiện có → +AR dự kiến → -AP đến hạn → Tiền còn lại)
    const waterfallEl = document.getElementById('chart-3-1-waterfall');
    if (waterfallEl) echarts.init(waterfallEl).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        grid: { left: '5%', right: '5%', top: '15%', bottom: '15%', containLabel: true },
        xAxis: { type: 'category', data: ['Tiền hiện có', 'AR dự kiến thu', 'AP đến hạn', 'Tiền còn lại'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [{
            name: 'Dòng tiền',
            type: 'bar',
            data: [12.8, 5.5, -4.2, 14.1],
            itemStyle: {
                color: (params) => {
                    if (params.dataIndex === 0 || params.dataIndex === 3) return colors.primary;
                    if (params.dataIndex === 1) return colors.success;
                    if (params.dataIndex === 2) return colors.danger;
                }
            },
            label: {
                show: true, position: 'top', formatter: (p) => {
                    const values = [12.8, 5.5, -4.2, 14.1];
                    const val = values[p.dataIndex];
                    return val > 0 ? '+' + val + ' tỷ' : val + ' tỷ';
                }
            }
        }]
    });

    // Pie chart - AR: Quá hạn vs Trong hạn
    const pieAR = document.getElementById('chart-3-1-pie-ar');
    if (pieAR) echarts.init(pieAR).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'item' },
        legend: { bottom: 0 },
        series: [{ type: 'pie', radius: ['35%', '60%'], data: [{ value: 14.5, name: 'Trong hạn', itemStyle: { color: colors.success } }, { value: 3.7, name: 'Quá hạn', itemStyle: { color: colors.danger } }] }]
    });

    // Pie chart - AP: Quá hạn vs Trong hạn
    const pieAP = document.getElementById('chart-3-1-pie-ap');
    if (pieAP) echarts.init(pieAP).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'item' },
        legend: { bottom: 0 },
        series: [{ type: 'pie', radius: ['35%', '60%'], data: [{ value: 12.6, name: 'Trong hạn', itemStyle: { color: colors.success } }, { value: 2.7, name: 'Quá hạn', itemStyle: { color: colors.warning } }] }]
    });
}

// Page 3.2 - Chi tết phải thu & phải trả
function initPage32() {
    // Gauge 1: Quick Ratio hiện tại
    const qrEl = document.getElementById('chart-3-2-gauge-qr');
    if (qrEl) {
        echarts.init(qrEl).setOption({
            animation: false,
            hoverLayerThreshold: -1,
            series: [{
                type: 'gauge',
                radius: '100%',
                center: ['50%', '70%'],
                startAngle: 180,
                endAngle: 0,
                min: 0,
                max: 2,
                splitNumber: 4,
                axisLine: { lineStyle: { width: 20, color: [[0.5, '#ef4444'], [0.75, '#f59e0b'], [1, '#10b981']] } },
                pointer: { length: '55%', width: 4, itemStyle: { color: '#1e3a8a' } },
                axisTick: { show: false },
                splitLine: { length: 10, lineStyle: { color: '#6b7280', width: 1 } },
                axisLabel: { distance: -30, fontSize: 10, color: '#6b7280' },
                detail: { show: true, fontSize: 22, fontWeight: 'bold', offsetCenter: [0, '35%'], formatter: '{value}', color: '#1e3a8a' },
                data: [{ value: 1.2, name: '' }],
                title: { show: false }
            }]
        });
    }

    // Gauge 2: Đã thu AR vs Cần thu AR cho Quick Ratio
    // Quick Ratio = (TSNH - HTK) / Nợ NH = (55 - 11.3) / 31.6 = 1.38
    // Để đạt QR = 1.5, cần: 1.5 * 31.6 = 47.4 tỷ TSNH sau trừ HTK
    // Hiện có: 55 - 11.3 = 43.7, thiếu 3.7 tỷ cần thu thêm
    // AR hiện tại: 18.2 tỷ, đã thu được: 14.5 tỷ
    const arEl = document.getElementById('chart-3-2-gauge-qr-target');
    if (arEl) {
        const totalAR = 18.2;
        const collectedAR = 14.5;
        echarts.init(arEl).setOption({
            animation: false,
            hoverLayerThreshold: -1,
            series: [{
                type: 'gauge',
                radius: '100%',
                center: ['50%', '70%'],
                startAngle: 180,
                endAngle: 0,
                min: 0,
                max: totalAR,
                splitNumber: 4,
                axisLine: { lineStyle: { width: 20, color: [[collectedAR / totalAR, '#10b981'], [1, '#e5e7eb']] } },
                pointer: { length: '55%', width: 4, itemStyle: { color: '#1e3a8a' } },
                axisTick: { show: false },
                splitLine: { length: 10, lineStyle: { color: '#6b7280', width: 1 } },
                axisLabel: { distance: -30, fontSize: 9, color: '#6b7280', formatter: (v) => v.toFixed(0) },
                detail: {
                    show: true,
                    fontSize: 16,
                    fontWeight: 'bold',
                    offsetCenter: [0, '35%'],
                    formatter: collectedAR + '/' + totalAR + ' tỷ',
                    color: '#1e3a8a'
                },
                data: [{ value: collectedAR, name: '' }],
                title: { show: false }
            }]
        });
    }

    // Top customers by AR amount
    const topCustEl = document.getElementById('chart-3-2-top-customers');
    if (topCustEl) echarts.init(topCustEl).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        grid: { containLabel: true, left: '3%', right: '4%', bottom: '3%' },
        xAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        yAxis: { type: 'category', data: ['Delta Transport', 'Logistics Plus', 'Express Global', 'Swift Shipping', 'Ocean Freight', 'Direct Cargo'] },
        series: [{
            type: 'bar',
            data: [3.2, 2.8, 2.1, 1.9, 1.5, 1.2],
            itemStyle: { color: colors.primary },
            label: { show: true, position: 'right', formatter: '{c} tỷ' }
        }]
    });

    // Customer credit score (payment history ratio) - Horizontal Bar
    const creditEl = document.getElementById('chart-3-2-customer-credit');
    if (creditEl) echarts.init(creditEl).setOption({
        animation: false,
        hoverLayerThreshold: -1, tooltip: { trigger: 'axis' },
        grid: { containLabel: true, left: '3%', right: '12%', bottom: '3%' },
        yAxis: { type: 'category', data: ['Delta Transport', 'Logistics Plus', 'Express Global', 'Swift Shipping', 'Ocean Freight', 'Direct Cargo'] },
        xAxis: { type: 'value', axisLabel: { formatter: '{value}%' }, min: 0, max: 100 },
        series: [{
            type: 'bar',
            data: [78, 85, 92, 88, 95, 97],
            itemStyle: {
                color: (params) => {
                    const val = params.value;
                    if (val >= 90) return colors.success;
                    if (val >= 80) return colors.warning;
                    return colors.danger;
                }
            },
            label: { show: true, position: 'right', formatter: '{c}%' }
        }]
    });

    // Heatmap: Customer x Aging Bucket - Simplified styling
    const heatmapEl = document.getElementById('chart-3-2-heatmap-customer-aging');
    if (heatmapEl) echarts.init(heatmapEl).setOption({
        animation: false,
        hoverLayerThreshold: -1,
        tooltip: {
            position: 'top',
            formatter: (params) => `${params.name}: ${params.data[2]} tỷ`
        },
        grid: { containLabel: true, left: '3%', right: '3%', top: '3%', bottom: '15%' },
        xAxis: {
            type: 'category',
            data: ['0-15 ngày', '16-30 ngày', '31-45 ngày', '>45 ngày'],
            axisLine: { lineStyle: { color: '#e5e7eb' } },
            axisLabel: { color: '#6b7280', fontSize: 11 }
        },
        yAxis: {
            type: 'category',
            data: ['Delta Transport', 'Logistics Plus', 'Express Global', 'Swift Shipping', 'Ocean Freight'],
            axisLine: { lineStyle: { color: '#e5e7eb' } },
            axisLabel: { color: '#374151', fontSize: 11 }
        },
        visualMap: {
            min: 0,
            max: 2,
            calculable: false,
            orient: 'horizontal',
            left: 'center',
            bottom: 0,
            itemWidth: 12,
            itemHeight: 80,
            textStyle: { color: '#6b7280', fontSize: 10 },
            inRange: { color: ['#c7dff0ff', '#93c5fd', '#3b82f6', '#1e3a8a'] }
        },
        series: [{
            type: 'heatmap',
            data: [
                [0, 0, 0.5], [1, 0, 1.2], [2, 0, 1.5], [3, 0, 0.0],
                [0, 1, 0.8], [1, 1, 0.9], [2, 1, 1.1], [3, 1, 0.0],
                [0, 2, 1.2], [1, 2, 0.6], [2, 2, 0.3], [3, 2, 0.0],
                [0, 3, 0.9], [1, 3, 0.7], [2, 3, 0.3], [3, 3, 0.0],
                [0, 4, 0.7], [1, 4, 0.5], [2, 4, 0.0], [3, 4, 0.3]
            ],
            label: {
                show: true,
                formatter: (params) => params.data[2] > 0 ? params.data[2].toFixed(1) : '',
                color: (params) => params.data[2] > 1 ? '#ffffff' : '#374151',
                fontSize: 0
            },
            itemStyle: {
                borderColor: '#ffffff',
                borderWidth: 2
            }
        }]
    });
}

// Page 3.3 - Nợ phải trả
function initPage33() {
    // Pie Chart: Cơ cấu Nợ (Ngắn hạn vs Dài hạn)
    const pieEl = document.getElementById('chart-3-3-debt-pie');
    if (pieEl) {
        echarts.init(pieEl).setOption({
            animation: false,
            hoverLayerThreshold: -1,
            tooltip: { trigger: 'item', formatter: '{b}: {c} tỷ ({d}%)' },
            legend: { orient: 'horizontal', left: 'top', top: 'top' },
            series: [{
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['60%', '50%'],
                avoidLabelOverlap: true,
                itemStyle: { borderRadius: 8, borderColor: '#fff', borderWidth: 2 },
                label: { show: true, formatter: '{b}\n{d}%', fontSize: 12 },
                labelLine: { show: true },
                data: [
                    { value: 18.5, name: 'Nợ ngắn hạn', itemStyle: { color: '#3b82f6' } },
                    { value: 13.0, name: 'Nợ dài hạn', itemStyle: { color: '#1e3a8a' } }
                ]
            }]
        });
    }

    // Bar Chart: Chi tiết các khoản nợ (with toggle)
    window.debtChartData = {
        short: {
            categories: ['Phải trả NCC', 'Vay ngắn hạn', 'Thuế phải nộp', 'Lương phải trả', 'Chi phí phải trả'],
            values: [8.2, 5.0, 2.5, 1.5, 1.3]
        },
        long: {
            categories: ['Vay dài hạn NH', 'Trái phiếu', 'Thuê tài chính', 'Phải trả dài hạn khác'],
            values: [8.0, 3.0, 1.5, 0.5]
        }
    };

    window.renderDebtBar = function (type) {
        const barEl = document.getElementById('chart-3-3-debt-bar');
        if (!barEl) return;
        const data = window.debtChartData[type];
        const chart = echarts.getInstanceByDom(barEl) || echarts.init(barEl);
        chart.setOption({
            animation: false,
            hoverLayerThreshold: -1,
            tooltip: { trigger: 'axis' },
            grid: { containLabel: true, left: '3%', right: '10%', bottom: '3%', top: '5%' },
            xAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
            yAxis: { type: 'category', data: data.categories },
            series: [{
                type: 'bar',
                data: data.values,
                itemStyle: { color: type === 'short' ? '#3b82f6' : '#1e3a8a' },
                label: { show: true, position: 'right', formatter: '{c} tỷ', fontSize: 11 }
            }]
        }, true);
    };

    window.toggleDebtChart = function (type) {
        document.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.type === type);
        });
        window.renderDebtBar(type);
    };

    // Initialize with short-term
    window.renderDebtBar('short');

    // Pareto Chart: Top NCC theo dư nợ
    const paretoEl = document.getElementById('chart-3-3-pareto');
    if (paretoEl) {
        const nccData = [
            { name: 'NCC Vật tư MN', value: 4.2 },
            { name: 'Logistics TC', value: 3.8 },
            { name: 'Sà Lan Việt', value: 2.5 },
            { name: 'NCC Nhiên liệu', value: 1.8 },
            { name: 'Bảo hiểm PVI', value: 1.2 },
            { name: 'Khác', value: 5.0 }
        ];
        const total = nccData.reduce((sum, d) => sum + d.value, 0);
        let cumulative = 0;
        const cumulativePercent = nccData.map(d => {
            cumulative += d.value;
            return (cumulative / total * 100).toFixed(1);
        });

        echarts.init(paretoEl).setOption({
            animation: false,
            hoverLayerThreshold: -1,
            tooltip: { trigger: 'axis' },
            grid: { containLabel: true, left: '3%', right: '8%', bottom: '10%', top: '10%' },
            xAxis: { type: 'category', data: nccData.map(d => d.name), axisLabel: { rotate: 20, fontSize: 10 } },
            yAxis: [
                { type: 'value', name: 'Số tiền (tỷ)', axisLabel: { formatter: '{value}' } },
                { type: 'value', name: '% Tích lũy', max: 100, axisLabel: { formatter: '{value}%' } }
            ],
            series: [
                {
                    type: 'bar',
                    data: nccData.map(d => d.value),
                    itemStyle: { color: '#3b82f6' },
                    label: { show: true, position: 'top', formatter: '{c}', fontSize: 10 }
                },
                {
                    type: 'line',
                    yAxisIndex: 1,
                    data: cumulativePercent,
                    itemStyle: { color: '#ef4444' },
                    lineStyle: { width: 2 },
                    symbol: 'circle',
                    symbolSize: 6
                }
            ]
        });
    }

    // Trend Line Chart: Xu hướng Nợ phải trả
    const trendEl = document.getElementById('chart-3-3-trend');
    if (trendEl) {
        echarts.init(trendEl).setOption({
            animation: false,
            hoverLayerThreshold: -1,
            tooltip: { trigger: 'axis' },
            legend: { data: ['Nợ ngắn hạn', 'Nợ dài hạn'], bottom: 0 },
            grid: { containLabel: true, left: '3%', right: '4%', bottom: '15%', top: '10%' },
            xAxis: { type: 'category', data: ['T7', 'T8', 'T9', 'T10', 'T11', 'T12'] },
            yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
            series: [
                {
                    name: 'Nợ ngắn hạn',
                    type: 'line',
                    data: [20.5, 19.8, 18.2, 19.0, 18.8, 18.5],
                    itemStyle: { color: '#3b82f6' },
                    areaStyle: { color: 'rgba(59, 130, 246, 0.1)' }
                },
                {
                    name: 'Nợ dài hạn',
                    type: 'line',
                    data: [15.0, 14.5, 14.0, 13.5, 13.2, 13.0],
                    itemStyle: { color: '#1e3a8a' },
                    areaStyle: { color: 'rgba(30, 58, 138, 0.1)' }
                }
            ]
        });
    }

    // Aging Bar Chart: Nợ phải trả theo tuổi nợ
    const agingEl = document.getElementById('chart-3-3-aging');
    if (agingEl) {
        echarts.init(agingEl).setOption({
            animation: false,
            hoverLayerThreshold: -1,
            tooltip: { trigger: 'axis' },
            legend: { data: ['Trong hạn', 'Quá hạn 1-30 ngày', 'Quá hạn 31-60 ngày', 'Quá hạn >60 ngày'], bottom: 0, textStyle: { fontSize: 10 } },
            grid: { containLabel: true, left: '3%', right: '4%', bottom: '20%', top: '10%' },
            xAxis: { type: 'category', data: ['NCC Vật tư', 'Logistics', 'Sà Lan', 'Nhiên liệu', 'Bảo hiểm'] },
            yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
            series: [
                { name: 'Trong hạn', type: 'bar', stack: 'total', data: [1.5, 1.0, 2.0, 1.5, 1.2], itemStyle: { color: '#10b981' } },
                { name: 'Quá hạn 1-30 ngày', type: 'bar', stack: 'total', data: [0.8, 0.5, 0.3, 0.2, 0], itemStyle: { color: '#f59e0b' } },
                { name: 'Quá hạn 31-60 ngày', type: 'bar', stack: 'total', data: [1.0, 1.5, 0.2, 0.1, 0], itemStyle: { color: '#f97316' } },
                { name: 'Quá hạn >60 ngày', type: 'bar', stack: 'total', data: [0.9, 0.8, 0, 0, 0], itemStyle: { color: '#ef4444' } }
            ]
        });
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    document.querySelectorAll('.chart').forEach(el => {
        const chart = echarts.getInstanceByDom(el);
        if (chart) chart.resize();
    });
});

