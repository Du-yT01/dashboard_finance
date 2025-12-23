// Mockup Charts - Power BI Style với ECharts
// Navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        document.getElementById(this.dataset.page).classList.add('active');
        setTimeout(() => initCharts(this.dataset.page), 100);
    });
});

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
document.addEventListener('DOMContentLoaded', () => initCharts('page-1-1'));

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
        tooltip: { trigger: 'axis' },
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
            series: [{
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
        tooltip: { trigger: 'item' },
        series: [{
            type: 'pie', radius: ['40%', '70%'],
            data: [{ value: 2.1, name: 'Tiền mặt' }, { value: 10.7, name: 'Tiền gửi' }],
            label: { formatter: '{b}: {d}%' }
        }]
    });

    const el4 = document.getElementById('chart-1-1-drill-bar1');
    if (el4) echarts.init(el4).setOption({
        tooltip: { trigger: 'axis' },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: { type: 'value' },
        yAxis: { type: 'category', data: ['Phải thu KH', 'TSCĐ', 'HTK', 'Đầu tư TC', 'XDCB'] },
        series: [{ type: 'bar', data: [1.4, 0.8, -0.2, -0.5, 0.1], itemStyle: { color: (params) => params.value > 0 ? colors.success : colors.danger } }]
    });

    const el5 = document.getElementById('chart-1-1-drill-bar2');
    if (el5) echarts.init(el5).setOption({
        tooltip: { trigger: 'axis' },
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
            tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
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
            tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
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
        tooltip: { trigger: 'item' },
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
            tooltip: { trigger: 'axis' },
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
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] }, yAxis: { type: 'value' },
        series: [
            { name: 'Ngắn hạn', type: 'bar', stack: 'total', data: [20, 21, 22, 23, 24, 25], itemStyle: { color: colors.warning } },
            { name: 'Dài hạn', type: 'bar', stack: 'total', data: [15, 15, 15, 15, 14, 14], itemStyle: { color: colors.primary } }
        ]
    });

    const dd2 = document.getElementById('chart-1-2-drill-donut1');
    if (dd2) echarts.init(dd2).setOption({
        tooltip: { trigger: 'item' },
        series: [{
            type: 'pie', radius: ['40%', '70%'],
            data: [{ value: 15.3, name: 'Phải trả NCC' }, { value: 5.2, name: 'Vay NH' }, { value: 1.5, name: 'Thuế' }, { value: 2.0, name: 'Lương' }]
        }]
    });

    const dd3 = document.getElementById('chart-1-2-drill-bar1');
    if (dd3) echarts.init(dd3).setOption({
        tooltip: { trigger: 'axis' }, xAxis: { type: 'category', data: ['0-30 ngày', '31-60 ngày', '61-90 ngày', '>90 ngày'] }, yAxis: { type: 'value' },
        series: [{ type: 'bar', data: [2.5, 1.5, 0.8, 0.4], itemStyle: { color: colors.danger } }]
    });

    const dd4 = document.getElementById('chart-1-2-drill-bar2');
    if (dd4) echarts.init(dd4).setOption({
        tooltip: { trigger: 'axis' },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: { type: 'value' },
        yAxis: { type: 'category', data: ['Vietcombank', 'BIDV', 'Techcombank'] },
        series: [{ type: 'bar', data: [15, 10, 5], itemStyle: { color: colors.primary } }]
    });

    const dd5 = document.getElementById('chart-1-2-drill-line');
    if (dd5) echarts.init(dd5).setOption({
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [{ type: 'line', data: [18, 18.5, 19, 19.2, 19.5, 20, 20.2, 20.4, 20.5, 20.8, 21, 21.2], smooth: true, itemStyle: { color: colors.primary }, areaStyle: { opacity: 0.1 } }]
    });

    const dd6 = document.getElementById('chart-1-2-drill-stack2');
    if (dd6) echarts.init(dd6).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
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
        tooltip: { trigger: 'axis' },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        yAxis: { type: 'category', data: ['Nhà xưởng', 'Máy móc', 'Phương tiện', 'Thiết bị hỗ trợ'] },
        series: [{ type: 'bar', data: [30, 22, 12, 9], itemStyle: { color: colors.primary } }]
    });

    const dd8 = document.getElementById('chart-1-2-drill-bar4');
    if (dd8) echarts.init(dd8).setOption({
        tooltip: { trigger: 'axis' }, xAxis: { type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] }, yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
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
        tooltip: { trigger: 'axis' },
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
        tooltip: { trigger: 'axis' },
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
        tooltip: { trigger: 'axis' },
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
            tooltip: {
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
            tooltip: {
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
        tooltip: { trigger: 'axis' },
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

    const el2 = document.getElementById('chart-2-1-pie');
    if (!el2) return;
    echarts.init(el2).setOption({
        tooltip: { trigger: 'item' },
        legend: { bottom: 0, textStyle: { fontSize: 10 } },
        series: [{
            type: 'pie', radius: ['35%', '65%'],
            data: [
                { value: 4.5, name: 'DV Container', itemStyle: { color: colors.primary } },
                { value: 2.2, name: 'Vận tải bộ', itemStyle: { color: colors.secondary } },
                { value: 1.0, name: 'Kho bãi', itemStyle: { color: colors.info } },
                { value: 0.5, name: 'DV khác', itemStyle: { color: colors.purple } }
            ]
        }]
    });

    const el3 = document.getElementById('chart-2-1-combo');
    if (!el3) return;
    echarts.init(el3).setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['Thực tế', 'Kế hoạch'], bottom: 0 },
        xAxis: { type: 'category', data: ['T7', 'T8', 'T9', 'T10', 'T11', 'T12'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: 'Thực tế', type: 'bar', data: [7.5, 7.8, 8.0, 8.1, 8.0, 8.2], itemStyle: { color: colors.primary } },
            { name: 'Kế hoạch', type: 'line', data: [7.2, 7.4, 7.6, 7.8, 8.0, 8.0], lineStyle: { width: 2, type: 'dashed' }, itemStyle: { color: colors.danger } }
        ]
    });
    // Drill-down 2.1
    const dd1 = document.getElementById('chart-2-1-drill-stack');
    if (dd1) echarts.init(dd1).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] }, yAxis: { type: 'value' },
        series: [
            { name: 'Nguyên vật liệu', type: 'bar', stack: 'total', data: [2.5, 2.6, 2.7, 2.8, 2.8, 2.9], itemStyle: { color: colors.gray } },
            { name: 'Nhân công', type: 'bar', stack: 'total', data: [1.2, 1.2, 1.3, 1.3, 1.3, 1.4], itemStyle: { color: colors.warning } },
            { name: 'Khấu hao', type: 'bar', stack: 'total', data: [0.8, 0.8, 0.8, 0.8, 0.8, 0.8], itemStyle: { color: colors.info } }
        ]
    });

    const dd2 = document.getElementById('chart-2-1-drill-line');
    if (dd2) echarts.init(dd2).setOption({
        tooltip: { trigger: 'axis' }, xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] }, yAxis: { type: 'value' },
        series: [{ type: 'line', data: [35, 34, 34, 33, 33, 32], smooth: true, areaStyle: { opacity: 0.1 }, itemStyle: { color: colors.success } }]
    });

    const dd3 = document.getElementById('chart-2-1-drill-bar');
    if (dd3) echarts.init(dd3).setOption({
        tooltip: { trigger: 'axis' }, xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] }, yAxis: { type: 'value' },
        series: [{ type: 'bar', data: [0.2, 0.1, -0.1, 0.3, 0.2, 0.4], itemStyle: { color: (p) => p.value > 0 ? colors.success : colors.danger } }]
    });

    const dd4 = document.getElementById('chart-2-1-drill-combo');
    if (dd4) echarts.init(dd4).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] },
        yAxis: [{ type: 'value', axisLabel: { formatter: '{value} tỷ' } }, { type: 'value', axisLabel: { formatter: '{value}%' } }],
        series: [
            { name: 'Doanh thu', type: 'bar', data: [7.5, 7.8, 8.0, 8.1, 8.0, 8.2], itemStyle: { color: colors.primary } },
            { name: 'Chi phí', type: 'bar', data: [6.2, 6.4, 6.6, 6.7, 6.9, 7.0], itemStyle: { color: colors.warning } },
            { name: 'Biên lợi nhuận', type: 'line', yAxisIndex: 1, data: [17, 18, 18, 17, 16, 15], smooth: true, itemStyle: { color: colors.success } }
        ]
    });
}

// Page 2.2 - Phân tích Doanh thu
function initPage22() {
    const el1 = document.getElementById('chart-2-2-stack');
    if (!el1) return;
    echarts.init(el1).setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['Container', 'Vận tải', 'Kho bãi', 'Khác'], bottom: 0 },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: 'Container', type: 'bar', stack: 'total', data: [3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.5, 4.5, 4.5, 4.5], itemStyle: { color: colors.primary } },
            { name: 'Vận tải', type: 'bar', stack: 'total', data: [1.8, 1.9, 2.0, 2.0, 2.1, 2.1, 2.2, 2.2, 2.2, 2.2, 2.2, 2.2], itemStyle: { color: colors.secondary } },
            { name: 'Kho bãi', type: 'bar', stack: 'total', data: [0.8, 0.8, 0.9, 0.9, 0.95, 0.98, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], itemStyle: { color: colors.info } },
            { name: 'Khác', type: 'bar', stack: 'total', data: [0.4, 0.4, 0.45, 0.48, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5], itemStyle: { color: colors.purple } }
        ]
    });

    const el2 = document.getElementById('chart-2-2-bar');
    if (!el2) return;
    echarts.init(el2).setOption({
        tooltip: { trigger: 'axis' },
        grid: { containLabel: true, left: '3%', right: '4%', bottom: '3%' },
        xAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        yAxis: { type: 'category', data: ['M&G Int', 'Ever Gain', 'Wanek', 'Phương', 'Hải Vương', 'Kim Phát', 'Timberland', 'Logistics VN', 'Vinalines', 'Trường Hải'] },
        series: [{ type: 'bar', data: [2.5, 2.1, 1.8, 1.5, 1.2, 1.0, 0.9, 0.8, 0.7, 0.6], itemStyle: { color: colors.primary }, label: { show: true, position: 'right', formatter: '{c} tỷ' } }]
    });

    const dd1 = document.getElementById('chart-2-2-drill-waterfall');
    if (dd1) echarts.init(dd1).setOption({
        tooltip: { trigger: 'axis' }, xAxis: { type: 'category', data: ['Tháng trước', 'Container', 'Vận tải', 'Kho bãi', 'Khác', 'Tháng này'] }, yAxis: { type: 'value' },
        series: [{ type: 'bar', data: [{ value: 7.8, itemStyle: { color: colors.gray } }, { value: 0.3, itemStyle: { color: colors.success } }, { value: 0.1, itemStyle: { color: colors.success } }, { value: -0.05, itemStyle: { color: colors.danger } }, { value: 0.05, itemStyle: { color: colors.success } }, { value: 8.2, itemStyle: { color: colors.primary } }] }]
    });

    const dd2 = document.getElementById('chart-2-2-drill-combo');
    if (dd2) echarts.init(dd2).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] }, yAxis: [{ type: 'value', name: 'Sản lượng' }, { type: 'value', name: 'Giá' }],
        series: [
            { name: 'Sản lượng', type: 'bar', data: [100, 105, 110, 112, 115, 120] },
            { name: 'Đơn giá', type: 'line', yAxisIndex: 1, data: [10, 10, 10, 9.8, 9.8, 9.7] }
        ]
    });

    const dd3 = document.getElementById('chart-2-2-drill-heatmap');
    if (dd3) echarts.init(dd3).setOption({
        tooltip: { position: 'top' },
        grid: { containLabel: true, bottom: '10%' },
        xAxis: { type: 'category', data: ['Container', 'Vận tải', 'Kho bãi', 'Khác'] }, yAxis: { type: 'category', data: ['M&G', 'Ever Gain', 'Wanek', 'Phương', 'Hải Vương'] },
        visualMap: { min: 0, max: 2, calculable: true, orient: 'horizontal', left: 'center', bottom: 0 },
        series: [{
            type: 'heatmap',
            data: [
                [0, 0, 1.5], [0, 1, 0.5], [0, 2, 0.2], [0, 3, 0.1], [0, 4, 0.0],
                [1, 0, 1.0], [1, 1, 0.8], [1, 2, 0.2], [1, 3, 0.1], [1, 4, 0.1],
                [2, 0, 0.5], [2, 1, 0.2], [2, 2, 0.8], [2, 3, 0.5], [2, 4, 0.2],
                [3, 0, 0.2], [3, 1, 0.1], [3, 2, 0.4], [3, 3, 0.1], [3, 4, 0.1]
            ].map(item => [item[1], item[0], item[2]])
        }]
    });

    const dd4 = document.getElementById('chart-2-2-drill-pareto');
    if (dd4) echarts.init(dd4).setOption({
        tooltip: { trigger: 'axis' }, xAxis: { type: 'category', data: ['M&G', 'Ever Gain', 'Wanek', 'Phương', 'Hải Vương', 'Khác'] }, yAxis: [{ type: 'value' }, { type: 'value', min: 0, max: 100 }],
        series: [
            { type: 'bar', data: [2.5, 2.1, 1.8, 1.5, 1.2, 5.0] },
            { type: 'line', yAxisIndex: 1, data: [18, 32, 45, 55, 63, 100], smooth: true }
        ]
    });

    const dd5 = document.getElementById('chart-2-2-drill-bar-container');
    if (dd5) echarts.init(dd5).setOption({
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['20ft', '40ft', '45ft'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [{ type: 'bar', data: [3.2, 4.1, 0.9], itemStyle: { color: colors.info } }]
    });

    const dd6 = document.getElementById('chart-2-2-drill-line-top');
    if (dd6) echarts.init(dd6).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: 'Wanek', type: 'line', data: [1.8, 1.7, 1.6, 1.5, 1.4, 1.2], smooth: true, itemStyle: { color: colors.danger } },
            { name: 'M&G', type: 'line', data: [2.3, 2.4, 2.5, 2.6, 2.6, 2.7], smooth: true, itemStyle: { color: colors.primary } }
        ]
    });

    const dd7 = document.getElementById('chart-2-2-drill-bar-route');
    if (dd7) echarts.init(dd7).setOption({
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        yAxis: { type: 'category', data: ['HP - SG', 'HP - Cát Lái', 'HP - Đà Nẵng', 'HP - Cái Mép'] },
        series: [{ type: 'bar', data: [2.8, 2.4, 1.5, 1.0], itemStyle: { color: colors.secondary } }]
    });
}

// Page 2.3 - Phan tich Chi phi
function initPage23() {
    const el1 = document.getElementById('chart-2-3-treemap');
    if (!el1) return;
    echarts.init(el1).setOption({
        tooltip: {},
        series: [{
            type: 'treemap',
            data: [
                {
                    name: 'Giá vốn', value: 5400, itemStyle: { color: colors.danger },
                    children: [
                        { name: 'Thuê sà lan', value: 2000 },
                        { name: 'Thuê xe đầu kéo', value: 1500 },
                        { name: 'Nhiên liệu', value: 800 },
                        { name: 'Nhân công TT', value: 600 },
                        { name: 'Khấu hao', value: 500 }
                    ]
                },
                {
                    name: 'CP QLDN', value: 1200, itemStyle: { color: colors.warning },
                    children: [
                        { name: 'Lương QL', value: 600 },
                        { name: 'Điện nước', value: 300 },
                        { name: 'Văn phòng', value: 300 }
                    ]
                },
                { name: 'CP Tài chính', value: 400, itemStyle: { color: colors.purple }, children: [{ name: 'Lãi vay', value: 400 }] }
            ]
        }]
    });

    const el2 = document.getElementById('chart-2-3-bar');
    if (!el2) return;
    echarts.init(el2).setOption({
        tooltip: { trigger: 'axis' },
        grid: { containLabel: true, left: '3%', right: '4%', bottom: '3%' },
        xAxis: { type: 'value', axisLabel: { formatter: '{value} tr' } },
        yAxis: { type: 'category', data: ['Thuê sà lan', 'Thuê xe đầu kéo', 'Nhiên liệu', 'Lương QL', 'Nhân công TT', 'Khấu hao', 'Lãi vay', 'Điện nước', 'Văn phòng', 'Bảo trì'] },
        series: [{
            type: 'bar',
            data: [2000, 1500, 800, 600, 600, 500, 400, 300, 300, 200],
            itemStyle: { color: colors.danger },
            label: { show: true, position: 'right', formatter: '{c} tr' }
        }]
    });

    const dd1 = document.getElementById('chart-2-3-drill-waterfall');
    if (dd1) echarts.init(dd1).setOption({
        tooltip: { trigger: 'axis' }, xAxis: { type: 'category', data: ['Tháng trước', 'Giá vốn', 'QLDN', 'Tài chính', 'Tháng này'] }, yAxis: { type: 'value' },
        series: [{
            type: 'bar', data: [
                { value: 6.8, itemStyle: { color: colors.gray } },
                { value: 0.15, itemStyle: { color: colors.danger } },
                { value: 0.05, itemStyle: { color: colors.danger } },
                { value: 0.0, itemStyle: { color: colors.gray } },
                { value: 7.0, itemStyle: { color: colors.primary } }
            ]
        }]
    });

    const dd2 = document.getElementById('chart-2-3-drill-line');
    if (dd2) echarts.init(dd2).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 }, xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] }, yAxis: { type: 'value' },
        series: [
            { name: 'Giá vốn', type: 'line', data: [4.5, 4.6, 4.8, 5.0, 5.2, 5.4] },
            { name: 'QLDN', type: 'line', data: [1.0, 1.0, 1.1, 1.1, 1.1, 1.2] }
        ]
    });

    const dd3 = document.getElementById('chart-2-3-drill-bar-vendor');
    if (dd3) echarts.init(dd3).setOption({
        tooltip: { trigger: 'axis' }, xAxis: { type: 'value' }, yAxis: { type: 'category', data: ['NCC sà lan A', 'NCC xe B', 'NCC dầu C', 'NCC điện D', 'NCC khác'] },
        series: [{ type: 'bar', data: [2.0, 1.5, 0.8, 0.5, 1.2], itemStyle: { color: colors.danger } }]
    });

    const dd4 = document.getElementById('chart-2-3-drill-scatter');
    if (dd4) echarts.init(dd4).setOption({
        xAxis: { name: 'Sản lượng' }, yAxis: { name: 'Chi phí' },
        series: [{ type: 'scatter', data: [[100, 5.0], [110, 5.4], [120, 5.8], [130, 6.1], [140, 6.5]], symbolSize: 10 }]
    });

    const dd5 = document.getElementById('chart-2-3-drill-bar-fixed');
    if (dd5) echarts.init(dd5).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
        xAxis: { type: 'category', data: ['Cố định', 'Biến đổi'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} t' } },
        series: [{ name: 'Chi phí', type: 'bar', data: [3.2, 3.8], itemStyle: { color: colors.secondary } }]
    });

    const dd6 = document.getElementById('chart-2-3-drill-combo');
    if (dd6) echarts.init(dd6).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] },
        yAxis: [{ type: 'value', axisLabel: { formatter: '{value} t' } }, { type: 'value', axisLabel: { formatter: '{value}%' } }],
        series: [
            { name: 'Chi phí', type: 'bar', data: [6.2, 6.4, 6.6, 6.7, 6.9, 7.0], itemStyle: { color: colors.warning } },
            { name: 'Tỷ lệ CP/DT', type: 'line', yAxisIndex: 1, data: [82, 81, 80, 79, 79, 78], smooth: true, itemStyle: { color: colors.success } }
        ]
    });

    const dd7 = document.getElementById('chart-2-3-drill-line-margin');
    if (dd7) echarts.init(dd7).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value}%' } },
        series: [
            { name: 'Gross margin', type: 'line', data: [35, 34, 34, 33, 33, 32], smooth: true, itemStyle: { color: colors.success } },
            { name: 'Net margin', type: 'line', data: [18, 17, 17, 16, 16, 15], smooth: true, itemStyle: { color: colors.primary } }
        ]
    });
}

// Page 2.4 - Lưu chuyển Tiền tệ
function initPage24() {
    const el1 = document.getElementById('chart-2-4-waterfall');
    if (!el1) return;
    echarts.init(el1).setOption({
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Tồn đầu', 'Thu KH', 'Thu khác', 'Chi NCC', 'Chi lương', 'Chi khác', 'Tồn cuối'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [{
            type: 'bar',
            data: [
                { value: 15.2, itemStyle: { color: colors.gray } },
                { value: 8.5, itemStyle: { color: colors.success } },
                { value: 1.0, itemStyle: { color: colors.info } },
                { value: -7.5, itemStyle: { color: colors.danger } },
                { value: -2.8, itemStyle: { color: colors.warning } },
                { value: -1.6, itemStyle: { color: colors.pink } },
                { value: 12.8, itemStyle: { color: colors.primary } }
            ],
            label: { show: true, position: 'top', formatter: '{c} tỷ' }
        }]
    });

    const columnEl = document.getElementById('chart-2-4-column');
    if (columnEl) echarts.init(columnEl).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
        xAxis: { type: 'category', data: ['T7', 'T8', 'T9', 'T10', 'T11', 'T12'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: 'Thu', type: 'bar', data: [8.8, 8.4, 8.1, 7.9, 7.8, 7.5], itemStyle: { color: colors.success } },
            { name: 'Chi', type: 'bar', data: [6.5, 7.1, 8.5, 7.2, 7.4, 8.0], itemStyle: { color: colors.danger } }
        ]
    });

    const el2 = document.getElementById('chart-2-4-area');
    if (el2) echarts.init(el2).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
        xAxis: { type: 'category', data: ['T7', 'T8', 'T9', 'T10', 'T11', 'T12'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: 'Tiền tồn', type: 'line', areaStyle: { opacity: 0.3 }, data: [18, 17.5, 16.8, 15.5, 14.2, 12.8], itemStyle: { color: colors.primary } },
            { name: 'Ngưỡng cảnh báo', type: 'line', data: [10, 10, 10, 10, 10, 10], lineStyle: { type: 'dashed', color: colors.danger } }
        ]
    });

    const runwayGauge = document.getElementById('chart-2-4-drill-gauge');
    if (runwayGauge) echarts.init(runwayGauge).setOption({
        series: [{
            type: 'gauge', min: 0, max: 60,
            radius: '100%', center: ['50%', '75%'], startAngle: 180, endAngle: 0,
            axisLine: { lineStyle: { width: 30, color: [[0.3, colors.danger], [0.6, colors.warning], [1, colors.success]] } },
            pointer: { length: '50%', width: 5 },
            axisLabel: { distance: -40, fontSize: 10 },
            detail: { show: true, fontSize: 20, fontWeight: 'bold', offsetCenter: [0, '30%'], formatter: '{value}' },
            data: [{ value: 32, name: 'Runway' }],
            title: { show: false }
        }]
    });

    const incomeStack = document.getElementById('chart-2-4-drill-stack-income');
    if (incomeStack) echarts.init(incomeStack).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: 'DV cảng', type: 'bar', stack: 'income', data: [2.0, 2.1, 2.2, 2.3, 2.4, 2.5], itemStyle: { color: colors.primary } },
            { name: 'DV logistics', type: 'bar', stack: 'income', data: [1.0, 1.1, 1.2, 1.3, 1.4, 1.5], itemStyle: { color: colors.accent } },
            { name: 'Thu khác', type: 'bar', stack: 'income', data: [0.5, 0.5, 0.6, 0.6, 0.7, 0.8], itemStyle: { color: colors.success } }
        ]
    });

    const outStack = document.getElementById('chart-2-4-drill-stack-outflow');
    if (outStack) echarts.init(outStack).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: 'NCC vận hành', type: 'bar', stack: 'out', data: [2.0, 2.1, 2.3, 2.4, 2.6, 2.8], itemStyle: { color: colors.danger } },
            { name: 'Lương', type: 'bar', stack: 'out', data: [1.0, 1.1, 1.1, 1.2, 1.2, 1.3], itemStyle: { color: colors.warning } },
            { name: 'Thuế & phí', type: 'bar', stack: 'out', data: [0.3, 0.3, 0.4, 0.4, 0.4, 0.5], itemStyle: { color: colors.secondary } }
        ]
    });

    const topOut = document.getElementById('chart-2-4-drill-bar-topout');
    if (topOut) echarts.init(topOut).setOption({
        tooltip: { trigger: 'axis' },
        grid: { containLabel: true, left: '3%', right: '4%', bottom: '3%' },
        xAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        yAxis: { type: 'category', data: ['Trả NCC sà lan', 'Chi lương', 'Mua thiết bị', 'Thuế'] },
        series: [{ type: 'bar', data: [2.5, 1.5, 1.2, 0.9], itemStyle: { color: colors.warning } }]
    });

    const dd1 = document.getElementById('chart-2-4-drill-combo1');
    if (dd1) echarts.init(dd1).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 }, xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] }, yAxis: { type: 'value' },
        series: [
            { name: 'Doanh thu', type: 'bar', data: [7.5, 7.8, 8.0, 8.1, 8.0, 8.2], itemStyle: { color: colors.primary } },
            { name: 'Tiền thu', type: 'line', data: [7.0, 7.5, 7.8, 7.5, 7.8, 7.5], itemStyle: { color: colors.success } }
        ]
    });

    const dd2 = document.getElementById('chart-2-4-drill-combo2');
    if (dd2) echarts.init(dd2).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 }, xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] }, yAxis: { type: 'value' },
        series: [
            { name: 'Chi phí', type: 'bar', data: [6.5, 6.8, 7.0, 7.1, 7.2, 7.0], itemStyle: { color: colors.warning } },
            { name: 'Tiền chi', type: 'line', data: [6.0, 6.5, 9.0, 6.8, 7.0, 11.9], itemStyle: { color: colors.danger } }
        ]
    });

    const dd3 = document.getElementById('chart-2-4-drill-line-cycle');
    if (dd3) echarts.init(dd3).setOption({
        tooltip: { trigger: 'axis' }, xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] }, yAxis: { type: 'value' },
        series: [{ type: 'line', data: [15, 18, 20, 22, 25, 32], smooth: true, itemStyle: { color: colors.purple } }]
    });
}
// Page 3.1 - Tổng quan công nợ
function initPage31() {
    const el1 = document.getElementById('chart-3-1-combo');
    if (!el1) return;
    echarts.init(el1).setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['Phải thu', 'Phải trả'], bottom: 0 },
        xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: 'Phải thu', type: 'line', data: [15, 15.5, 16, 16.2, 16.5, 17, 17.2, 17.5, 17.8, 18, 18, 18.2], smooth: true, itemStyle: { color: colors.primary } },
            { name: 'Phải trả', type: 'line', data: [14, 14.2, 14.5, 14.8, 15, 15, 15.2, 15.3, 15.3, 15.3, 15.3, 15.3], smooth: true, itemStyle: { color: colors.danger } }
        ]
    });

    const pieAR = document.getElementById('chart-3-1-pie-ar');
    if (pieAR) echarts.init(pieAR).setOption({
        tooltip: { trigger: 'item' }, legend: { bottom: 0 },
        series: [{ type: 'pie', radius: ['35%', '60%'], data: [{ value: 14.5, name: 'Trong hạn', itemStyle: { color: colors.success } }, { value: 3.7, name: 'Quá hạn', itemStyle: { color: colors.danger } }] }]
    });

    const pieAP = document.getElementById('chart-3-1-pie-ap');
    if (pieAP) echarts.init(pieAP).setOption({
        tooltip: { trigger: 'item' }, legend: { bottom: 0 },
        series: [{ type: 'pie', radius: ['35%', '60%'], data: [{ value: 12.6, name: 'Trong hạn', itemStyle: { color: colors.success } }, { value: 2.7, name: 'Quá hạn', itemStyle: { color: colors.warning } }] }]
    });

    const dsoLine = document.getElementById('chart-3-1-drill-line1');
    if (dsoLine) echarts.init(dsoLine).setOption({
        tooltip: { trigger: 'axis' }, xAxis: { type: 'category', data: ['T7', 'T8', 'T9', 'T10', 'T11', 'T12'] }, yAxis: { type: 'value' },
        series: [{ name: 'DSO', type: 'line', data: [35, 36, 38, 40, 42, 45], smooth: true, markLine: { data: [{ yAxis: 30, name: 'Target' }] } }]
    });

    const dpoLine = document.getElementById('chart-3-1-drill-line2');
    if (dpoLine) echarts.init(dpoLine).setOption({
        tooltip: { trigger: 'axis' }, xAxis: { type: 'category', data: ['T7', 'T8', 'T9', 'T10', 'T11', 'T12'] }, yAxis: { type: 'value' },
        series: [{ name: 'DPO', type: 'line', data: [35, 35, 36, 37, 38, 38], smooth: true, itemStyle: { color: colors.danger } }]
    });

    const cashCycle = document.getElementById('chart-3-1-drill-combo');
    if (cashCycle) echarts.init(cashCycle).setOption({
        tooltip: { trigger: 'axis' }, xAxis: { type: 'category', data: ['T7', 'T8', 'T9', 'T10', 'T11', 'T12'] }, yAxis: { type: 'value' },
        series: [{ name: 'Cash Cycle', type: 'bar', data: [0, 1, 2, 3, 4, 7], itemStyle: { color: colors.purple } }]
    });

    const dsoBar = document.getElementById('chart-3-1-drill-bar-dso');
    if (dsoBar) echarts.init(dsoBar).setOption({
        tooltip: { trigger: 'axis' },
        grid: { containLabel: true, left: '3%', right: '4%', bottom: '3%' },
        xAxis: { type: 'value', axisLabel: { formatter: '{value} ngày' } },
        yAxis: { type: 'category', data: ['Wanek', 'Timberland', 'M&G', 'Ever Gain'] },
        series: [{ type: 'bar', data: [75, 68, 40, 32], itemStyle: { color: colors.warning } }]
    });

    const dpoBar = document.getElementById('chart-3-1-drill-bar-dpo');
    if (dpoBar) echarts.init(dpoBar).setOption({
        tooltip: { trigger: 'axis' },
        grid: { containLabel: true, left: '3%', right: '4%', bottom: '3%' },
        xAxis: { type: 'value', axisLabel: { formatter: '{value} ngày' } },
        yAxis: { type: 'category', data: ['NCC sà lan', 'NCC nhiên liệu', 'NCC thiết bị', 'Thuế'] },
        series: [{ type: 'bar', data: [45, 38, 32, 25], itemStyle: { color: colors.success } }]
    });

    const stackAR = document.getElementById('chart-3-1-drill-stack-ar');
    if (stackAR) echarts.init(stackAR).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
        xAxis: { type: 'category', data: ['Trong hạn', '0-30d', '31-60d', '>60d'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [{ type: 'bar', stack: 'ar', data: [14.5, 2.0, 1.1, 0.6], itemStyle: { color: colors.info } }]
    });

    const stackAP = document.getElementById('chart-3-1-drill-stack-ap');
    if (stackAP) echarts.init(stackAP).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
        xAxis: { type: 'category', data: ['Trong hạn', '0-30d', '31-60d', '>60d'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [{ type: 'bar', stack: 'ap', data: [12.6, 1.2, 0.9, 0.6], itemStyle: { color: colors.secondary } }]
    });
}

// Page 3.2 - Chi tết phải thu & phải trả
function initPage32() {
    const el1 = document.getElementById('chart-3-2-bar1');
    if (!el1) return;
    echarts.init(el1).setOption({
        tooltip: { trigger: 'axis' },
        grid: { containLabel: true, left: '3%', right: '4%', bottom: '3%' },
        xAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        yAxis: { type: 'category', data: ['M&G Int', 'Ever Gain', 'Wanek', 'Dong Phuong', 'Hoi Vuong', 'Kim Phat', 'Timberland', 'Logistics VN', 'Vinalines', 'Truong Hai'] },
        series: [{
            type: 'bar',
            data: [3.2, 2.8, 2.1, 1.8, 1.5, 1.2, 1.0, 0.8, 0.6, 0.5],
            itemStyle: { color: colors.primary },
            label: { show: true, position: 'right', formatter: '{c} tỷ' }
        }]
    });

    const el2 = document.getElementById('chart-3-2-treemap');
    if (!el2) return;
    echarts.init(el2).setOption({
        tooltip: {},
        series: [{
            type: 'treemap',
            data: [
                { name: 'Vận hành', value: 4900, itemStyle: { color: colors.danger }, children: [{ name: 'Thuê sà lan', value: 2500 }, { name: 'Xe đầu kéo', value: 1800 }, { name: 'Phí cầu bến', value: 600 }] },
                { name: 'Nhân sự', value: 1500, itemStyle: { color: colors.warning }, children: [{ name: 'Lương', value: 1500 }] },
                { name: 'Cố định', value: 800, itemStyle: { color: colors.info }, children: [{ name: 'Tiền điện', value: 800 }] },
                { name: 'Bảo trì', value: 400, itemStyle: { color: colors.purple }, children: [{ name: 'Vật tư SC', value: 400 }] }
            ]
        }]
    });

    const dd1 = document.getElementById('chart-3-2-drill-stack');
    if (dd1) echarts.init(dd1).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 }, xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] }, yAxis: { type: 'value' },
        series: [
            { name: 'M&G', type: 'bar', stack: 'total', data: [2.5, 2.8, 3.0, 3.1, 3.2, 3.2] },
            { name: 'Wanek', type: 'bar', stack: 'total', data: [1.0, 1.2, 1.5, 1.8, 2.0, 2.1] }
        ]
    });

    const dd2 = document.getElementById('chart-3-2-drill-heatmap');
    if (dd2) echarts.init(dd2).setOption({
        tooltip: { position: 'top' },
        grid: { containLabel: true, bottom: '10%' },
        xAxis: { type: 'category', data: ['Under 30', '31-60', '61-90', '>90'] },
        yAxis: { type: 'category', data: ['M&G', 'Ever Gain', 'Wanek', 'Dong Phuong'] },
        visualMap: { min: 0, max: 2, orient: 'horizontal', left: 'center', bottom: 0 },
        series: [{
            type: 'heatmap',
            data: [
                [0, 0, 2.0], [0, 1, 0.5], [0, 2, 0.3], [0, 3, 0.2],
                [1, 0, 1.5], [1, 1, 0.8], [1, 2, 0.4], [1, 3, 0.1],
                [2, 0, 0.8], [2, 1, 0.4], [2, 2, 0.8], [2, 3, 0.3],
                [3, 0, 0.5], [3, 1, 0.2], [3, 2, 0.3], [3, 3, 0.1]
            ].map(item => [item[1], item[0], item[2]])
        }]
    });

    const barContract = document.getElementById('chart-3-2-drill-bar-contract');
    if (barContract) echarts.init(barContract).setOption({
        tooltip: { trigger: 'axis' },
        grid: { containLabel: true, left: '3%', right: '4%', bottom: '3%' },
        xAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        yAxis: { type: 'category', data: ['HD ABC001', 'HD ABC002', 'HD LOG003', 'HD CANG004'] },
        series: [{ type: 'bar', data: [1.2, 0.9, 0.7, 0.5], itemStyle: { color: colors.primary } }]
    });

    const barAging = document.getElementById('chart-3-2-drill-bar-aging');
    if (barAging) echarts.init(barAging).setOption({
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['0-7d', '8-15d', '16-30d', '>30d'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [{ type: 'bar', data: [2.1, 1.2, 0.8, 0.4], itemStyle: { color: colors.warning } }]
    });

    const priorityStack = document.getElementById('chart-3-2-drill-stack-priority');
    if (priorityStack) echarts.init(priorityStack).setOption({
        tooltip: { trigger: 'axis' }, legend: { bottom: 0 },
        xAxis: { type: 'category', data: ['Phải thu', 'Phải trả'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: 'Cao', type: 'bar', stack: 'priority', data: [2.5, 2.0], itemStyle: { color: colors.danger } },
            { name: 'Trung bình', type: 'bar', stack: 'priority', data: [1.0, 0.9], itemStyle: { color: colors.warning } },
            { name: 'Thấp', type: 'bar', stack: 'priority', data: [0.6, 0.5], itemStyle: { color: colors.success } }
        ]
    });

    const compareBar = document.getElementById('chart-3-2-drill-bar-compare');
    if (compareBar) echarts.init(compareBar).setOption({
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Vận hành', 'Nhân sự', 'Cố định', 'Bảo trì'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: 'Phải thu', type: 'bar', data: [1.8, 0.9, 0.5, 0.3], itemStyle: { color: colors.primary } },
            { name: 'Phải trả', type: 'bar', data: [1.2, 1.1, 0.8, 0.4], itemStyle: { color: colors.secondary } }
        ]
    });
}

// Page 3.3 - Aging Analysis
function initPage33() {
    const el1 = document.getElementById('chart-3-3-aging1');
    if (!el1) return;
    echarts.init(el1).setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['0-30 ngày', '31-60 ngày', '61-90 ngày', '>90 ngày'], bottom: 0 },
        xAxis: { type: 'category', data: ['M&G', 'Ever Gain', 'Wanek', 'Phương', 'Hải Vương'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: '0-30 ngày', type: 'bar', stack: 'total', data: [2.0, 1.8, 0.5, 1.2, 1.0], itemStyle: { color: agingColors[0] } },
            { name: '31-60 ngày', type: 'bar', stack: 'total', data: [0.8, 0.6, 0.4, 0.4, 0.3], itemStyle: { color: agingColors[1] } },
            { name: '61-90 ngày', type: 'bar', stack: 'total', data: [0.3, 0.3, 0.8, 0.2, 0.2], itemStyle: { color: agingColors[2] } },
            { name: '>90 ngày', type: 'bar', stack: 'total', data: [0.1, 0.1, 0.4, 0, 0], itemStyle: { color: agingColors[3] } }
        ]
    });

    const el2 = document.getElementById('chart-3-3-aging2');
    if (el2) echarts.init(el2).setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['0-30 ngày', '31-60 ngày', '61-90 ngày', '>90 ngày'], bottom: 0 },
        xAxis: { type: 'category', data: ['Vận hành', 'Nhân sự', 'Cố định', 'Bảo trì'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [
            { name: '0-30 ngày', type: 'bar', stack: 'total', data: [3.5, 1.2, 0.5, 0.2], itemStyle: { color: agingColors[0] } },
            { name: '31-60 ngày', type: 'bar', stack: 'total', data: [0.8, 0.2, 0.2, 0.1], itemStyle: { color: agingColors[1] } },
            { name: '61-90 ngày', type: 'bar', stack: 'total', data: [0.4, 0.1, 0.1, 0.1], itemStyle: { color: agingColors[2] } },
            { name: '>90 ngày', type: 'bar', stack: 'total', data: [0.2, 0, 0, 0], itemStyle: { color: agingColors[3] } }
        ]
    });

    const gaugeEl = document.getElementById('chart-3-3-drill-gauge');
    if (gaugeEl) echarts.init(gaugeEl).setOption({
        series: [{
            type: 'gauge', min: 0, max: 100,
            radius: '100%', center: ['50%', '75%'], startAngle: 180, endAngle: 0,
            axisLine: { lineStyle: { width: 30, color: [[0.4, colors.success], [0.7, colors.warning], [1, colors.danger]] } },
            pointer: { length: '50%', width: 5 },
            axisLabel: { distance: -40, fontSize: 10 },
            detail: { show: true, fontSize: 20, fontWeight: 'bold', offsetCenter: [0, '30%'], formatter: '{value}%' },
            data: [{ value: 62, name: 'Dự phòng' }],
            title: { show: false }
        }]
    });

    const lineEl = document.getElementById('chart-3-3-drill-line');
    if (lineEl) echarts.init(lineEl).setOption({
        tooltip: { trigger: 'axis' }, xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] }, yAxis: { type: 'value', axisLabel: { formatter: '{value}%' } },
        series: [{ name: '% Quá hạn', type: 'line', data: [5, 6, 8, 10, 12, 15], itemStyle: { color: colors.danger } }]
    });

    const paretoEl = document.getElementById('chart-3-3-drill-pareto');
    if (paretoEl) echarts.init(paretoEl).setOption({
        tooltip: { trigger: 'axis' }, xAxis: { type: 'category', data: ['Wanek', 'Timberland', 'Khác'] }, yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [{ type: 'bar', data: [1.2, 0.8, 0.5], itemStyle: { color: colors.danger } }]
    });

    const heatmapEl = document.getElementById('chart-3-3-drill-heatmap');
    if (heatmapEl) echarts.init(heatmapEl).setOption({
        tooltip: { position: 'top' },
        grid: { containLabel: true, bottom: '10%' },
        xAxis: { type: 'category', data: ['0-30', '31-60', '61-90', '>90'] },
        yAxis: { type: 'category', data: ['Wanek', 'Timberland', 'M&G', 'Ever Gain'] },
        visualMap: { min: 0, max: 2, orient: 'horizontal', left: 'center', bottom: 0 },
        series: [{
            type: 'heatmap',
            data: [
                [0, 0, 1.1], [0, 1, 0.4], [0, 2, 0.2], [0, 3, 0.1],
                [1, 0, 0.5], [1, 1, 0.4], [1, 2, 0.3], [1, 3, 0.1],
                [2, 0, 0.3], [2, 1, 0.2], [2, 2, 0.3], [2, 3, 0.4],
                [3, 0, 0.2], [3, 1, 0.1], [3, 2, 0.2], [3, 3, 0.1]
            ].map(item => [item[1], item[0], item[2]])
        }]
    });

    const barEl = document.getElementById('chart-3-3-drill-bar');
    if (barEl) echarts.init(barEl).setOption({
        tooltip: { trigger: 'axis' },
        grid: { containLabel: true, left: '3%', right: '4%', bottom: '3%' },
        xAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        yAxis: { type: 'category', data: ['Wanek', 'Timberland', 'Ever Gain', 'Khác'] },
        series: [{ type: 'bar', data: [1.2, 0.8, 0.4, 0.3], itemStyle: { color: colors.info } }]
    });

    const waterfallEl = document.getElementById('chart-3-3-drill-waterfall');
    if (waterfallEl) echarts.init(waterfallEl).setOption({
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Tháng trước', 'Phát sinh mới', 'Thu hồi', 'Điều chỉnh', 'Tháng này'] },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} tỷ' } },
        series: [{ type: 'bar', data: [3.0, 0.8, -0.4, 0.2, 3.6], itemStyle: { color: colors.secondary } }]
    });

    const recoveryEl = document.getElementById('chart-3-3-drill-line-recovery');
    if (recoveryEl) echarts.init(recoveryEl).setOption({
        tooltip: { trigger: 'axis' }, xAxis: { type: 'category', data: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] }, yAxis: { type: 'value' },
        series: [{ name: 'Thu hồi', type: 'line', data: [0.5, 0.4, 0.6, 0.3, 0.2, 0.1], itemStyle: { color: colors.success } }]
    });
}

// Handle window resize
window.addEventListener('resize', () => {
    document.querySelectorAll('.chart').forEach(el => {
        const chart = echarts.getInstanceByDom(el);
        if (chart) chart.resize();
    });
});

