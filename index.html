<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Báo cáo Kế toán Tài chính - Mockup</title>
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #1e3a8a;
            --primary-light: #3b82f6;
            --secondary: #475569;
            --accent: #06b6d4;
            --success: #10b981;
            --warning: #f59e0b;
            --danger: #ef4444;
            --muted: #94a3b8;
            --bg: #eef2ff;
            --card-bg: #ffffff;
            --border: #e2e8f0;
            --shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
            --radius: 14px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #e0e7ff, #f8fafc);
            color: #0f172a;
            line-height: 1.45;
        }

        /* Sidebar */
        .sidebar {
            position: fixed;
            left: 0;
            top: 0;
            width: 260px;
            height: 100vh;
            background: linear-gradient(180deg, #0f172a, #1e3a8a);
            color: white;
            padding: 24px 0;
            overflow-y: auto;
            box-shadow: 6px 0 25px rgba(15, 23, 42, 0.35);
        }

        .sidebar h2 {
            padding: 0 24px 20px;
            font-size: 16px;
            letter-spacing: 1px;
            border-bottom: 1px solid rgba(148, 163, 184, 0.25);
        }

        .report-group {
            margin-top: 18px;
        }

        .report-title {
            padding: 10px 24px;
            font-size: 12px;
            font-weight: 600;
            color: #c7d2fe;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .nav-item {
            padding: 10px 24px 10px 38px;
            cursor: pointer;
            font-size: 13px;
            color: #e2e8f0;
            transition: all 0.2s;
            border-left: 3px solid transparent;
        }

        .nav-item:hover {
            background: rgba(59, 130, 246, 0.25);
        }

        .nav-item.active {
            background: rgba(59, 130, 246, 0.45);
            border-left-color: #fbbf24;
        }

        /* Main content */
        .main {
            margin-left: 260px;
            padding: 32px 40px;
            min-height: 100vh;
            background: var(--bg);
        }

        .content-wrapper {
            max-width: 1680px;
            margin: 0 auto 60px;
        }

        .page {
            display: none;
            margin-bottom: 48px;
            animation: fadeIn 0.35s ease;
        }

        .page.active {
            display: block;
        }

        /* Header */
        .page-header {
            background: var(--card-bg);
            padding: 24px;
            border-radius: var(--radius);
            margin-bottom: 24px;
            border: 1px solid var(--border);
            box-shadow: var(--shadow);
        }

        /* Inline Guidance Styles */
        .page-instruction {
            background: rgba(59, 130, 246, 0.05);
            border-left: 3px solid var(--primary-light);
            padding: 12px 16px;
            margin-bottom: 20px;
            font-size: 14px;
            color: #475569;
            font-style: italic;
            border-radius: 4px;
        }

        .chart-subtitle {
            font-size: 12px;
            color: #64748b;
            font-weight: 400;
            margin-top: 4px;
            line-height: 1.4;
        }

        .page-header h1 {
            font-size: 22px;
            color: var(--primary);
        }

        .page-header p {
            color: var(--secondary);
            font-size: 13px;
            margin-top: 6px;
        }

        /* KPI Cards */
        .kpi-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 18px;
            margin-bottom: 24px;
        }

        .kpi-card {
            background: var(--card-bg);
            padding: 18px;
            border-radius: var(--radius);
            border: 1px solid var(--border);
            box-shadow: var(--shadow);
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .kpi-card .label {
            font-size: 12px;
            color: var(--muted);
            margin-bottom: 6px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .kpi-card .value {
            font-size: 24px;
            font-weight: 700;
            color: var(--primary);
        }

        .kpi-card .change {
            font-size: 11px;
            margin-top: 6px;
        }

        .kpi-card .change.up {
            color: var(--success);
        }

        .kpi-card .change.down {
            color: var(--danger);
        }

        /* Chart containers */
        .chart-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 20px;
            margin-bottom: 22px;
        }

        .chart-row.single {
            grid-template-columns: 1fr;
        }

        .chart-row.auto {
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }

        .chart-row.tight {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }

        .chart-box {
            background: var(--card-bg);
            padding: 18px;
            border-radius: var(--radius);
            border: 1px solid var(--border);
            box-shadow: var(--shadow);
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .chart-box h3 {
            font-size: 14px;
            color: #1f2937;
            margin-bottom: 8px;
            font-weight: 600;
        }

        .chart {
            height: 300px;
        }

        .chart.small {
            height: 280px;
        }

        .chart.medium {
            height: 280px;
        }

        .chart.large {
            height: 360px;
        }

        .chart.tiny {
            height: 160px;
        }

        .section-block {
            margin: 30px 0;
            padding: 22px;
            border-radius: var(--radius);
            border: 1px dashed #cbd5f5;
            background: rgba(255, 255, 255, 0.75);
            box-shadow: 0 10px 25px rgba(148, 163, 184, 0.18);
        }

        .section-heading {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
            gap: 10px;
        }

        .section-heading h2 {
            font-size: 15px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            color: var(--primary);
        }

        .section-heading p {
            font-size: 12px;
            color: var(--muted);
        }

        /* Layout riêng cho BC1.2 */
        .layout-1-2-top {
            display: grid;
            grid-template-columns: 2fr 3fr;
            gap: 24px;
            margin-bottom: 28px;
            align-items: stretch;
        }

        .layout-1-2-top .kpi-panel {
            background: var(--card-bg);
            border-radius: var(--radius);
            border: 1px solid var(--border);
            box-shadow: var(--shadow);
            padding: 18px 18px 4px;
        }

        .layout-1-2-top .kpi-row {
            margin-bottom: 0;
        }

        .layout-1-2-top .chart-box {
            height: 100%;
        }

        .section-block.section-1-2-decomp .chart-box .chart.small {
            height: 420px;
        }

        .layout-1-2-top .chart {
            height: 220px;
        }

        @media (max-width: 1200px) {
            .layout-1-2-top {
                grid-template-columns: 1fr;
            }
        }

        /* Table */
        .data-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
        }

        .data-table th {
            background: #f8fafc;
            padding: 10px;
            text-align: left;
            font-weight: 600;
            color: #475569;
            border-bottom: 2px solid var(--border);
        }

        .data-table td {
            padding: 10px;
            border-bottom: 1px solid var(--border);
        }

        .data-table tr:hover {
            background: #f8fafc;
        }

        /* Bảng cân đối kế toán đẹp hơn */
        .balance-summary h3 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 15px;
        }

        .balance-summary h3::after {
            content: 'Tính theo tỷ đồng';
            font-size: 11px;
            font-weight: 500;
            color: var(--muted);
        }

        .balance-summary .data-table {
            border-radius: 10px;
            overflow: hidden;
        }

        .balance-summary .data-table th {
            background: linear-gradient(90deg, #e0f2fe, #eef2ff);
            color: #1e3a8a;
        }

        .balance-summary .data-table tbody tr:nth-child(odd) {
            background: #f9fafb;
        }

        .balance-summary .data-table tbody tr:nth-child(even) {
            background: #ffffff;
        }

        .balance-summary .data-table tbody tr td[style*="font-weight: 600"] {
            background: #eff6ff;
            color: #1d4ed8;
        }

        .balance-summary .data-table tbody tr td[style*="padding-left: 20px;"] {
            color: #0f172a;
        }

        .balance-summary .data-table tbody tr td[style*="padding-left: 40px;"] {
            color: #334155;
        }

        /* Badge */
        .badge {
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 10px;
            font-weight: 600;
        }

        .badge.green {
            background: #dcfce7;
            color: #166534;
        }

        .badge.yellow {
            background: #fef9c3;
            color: #854d0e;
        }

        .badge.orange {
            background: #ffedd5;
            color: #9a3412;
        }

        .badge.red {
            background: #fee2e2;
            color: #991b1b;
        }

        /* Page 3.2 Enhanced Styling */
        .page-3-2-top-row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
            margin-bottom: 22px;
        }

        .page-3-2-gauges {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .page-3-2-bottom-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 22px;
        }

        .heatmap-card {
            position: relative;
        }

        .heatmap-card .chart {
            padding: 12px;
            background: #fafafa;
            border-radius: 8px;
        }

        .table-card {
            display: flex;
            flex-direction: column;
        }

        .table-header-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }

        .table-header-row h3 {
            margin: 0;
            font-size: 14px;
            color: #1f2937;
            font-weight: 600;
        }

        .table-actions {
            display: flex;
            gap: 6px;
        }

        .table-action-btn {
            padding: 6px 10px;
            background: #f3f4f6;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            cursor: pointer;
            font-size: 12px;
            transition: all 0.2s;
        }

        .table-action-btn:hover {
            background: #e5e7eb;
        }

        .table-wrapper {
            flex: 1;
            overflow-y: auto;
            max-height: 320px;
        }

        .enhanced-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
        }

        .enhanced-table th {
            background: linear-gradient(90deg, #f0f9ff, #f3f4f6);
            padding: 12px;
            text-align: left;
            font-weight: 600;
            color: #1f2937;
            border-bottom: 2px solid #e5e7eb;
            position: sticky;
            top: 0;
            z-index: 10;
        }

        .enhanced-table td {
            padding: 12px;
            border-bottom: 1px solid #f3f4f6;
        }

        .enhanced-table tr:hover {
            background: #f9fafb;
        }

        .table-row-high {
            border-left: 3px solid #ef4444;
        }

        .table-row-medium {
            border-left: 3px solid #f59e0b;
        }

        .table-row-low {
            border-left: 3px solid #10b981;
        }

        .customer-info {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .customer-avatar {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: #e0e7ff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 11px;
            color: #1e3a8a;
        }

        .customer-name {
            font-weight: 500;
            color: #1f2937;
        }

        .amount-value {
            font-weight: 600;
            color: #1e3a8a;
        }

        .aging-badge {
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 500;
        }

        .aging-badge.aging-high {
            background: #fee2e2;
            color: #991b1b;
        }

        .aging-badge.aging-medium {
            background: #ffedd5;
            color: #9a3412;
        }

        .aging-badge.aging-low {
            background: #dcfce7;
            color: #166534;
        }

        .priority-badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
        }

        @media (max-width: 1200px) {
            .sidebar {
                width: 230px;
            }

            .main {
                margin-left: 230px;
                padding: 28px;
            }

            .page-3-2-top-row {
                grid-template-columns: 1fr;
            }

            .page-3-2-bottom-row {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 992px) {
            .sidebar {
                position: relative;
                width: 100%;
                height: auto;
            }

            .main {
                margin-left: 0;
                padding: 24px;
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(6px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* ============ PAGE 3.2 SPECIFIC STYLES ============ */

        /* Top Row: 3 Columns (Gauges | Bar Chart | Bar Chart) */
        .page-3-2-top-row {
            display: grid;
            grid-template-columns: 1fr 1.5fr 1.5fr;
            gap: 20px;
            margin-bottom: 24px;
        }

        .page-3-2-gauges {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        /* Bottom Row: 2 Columns (Heatmap | Table) */
        .page-3-2-bottom-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        /* Gauge Card Styling */
        .gauge-card {
            background: linear-gradient(135deg, #ffffff, #f8fafc);
            border: 1px solid #e0e7ff;
            position: relative;
            overflow: hidden;
        }

        .gauge-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #3b82f6, #06b6d4);
        }

        .gauge-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .gauge-icon {
            font-size: 20px;
        }

        .gauge-header h3 {
            margin: 0;
            font-size: 13px;
            color: #374151;
        }

        .gauge-chart {
            height: 180px !important;
        }

        .gauge-footer {
            text-align: center;
            margin-top: 8px;
            padding-top: 10px;
            border-top: 1px dashed #e5e7eb;
        }

        .gauge-target {
            font-size: 11px;
            color: #6b7280;
            background: #f3f4f6;
            padding: 4px 12px;
            border-radius: 20px;
        }

        /* Bar Chart Card Styling */
        .bar-chart-card {
            background: linear-gradient(135deg, #ffffff, #fefefe);
            border: 1px solid #e2e8f0;
        }

        .chart-header-enhanced {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
            padding-bottom: 10px;
            border-bottom: 1px solid #f1f5f9;
        }

        .chart-header-left {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .chart-icon {
            font-size: 18px;
        }

        .chart-header-enhanced h3 {
            margin: 0;
            font-size: 14px;
            color: #1f2937;
        }

        .chart-badge {
            font-size: 11px;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 20px;
        }

        .chart-badge.danger {
            background: linear-gradient(135deg, #fef2f2, #fee2e2);
            color: #dc2626;
            border: 1px solid #fecaca;
        }

        .chart-badge.success {
            background: linear-gradient(135deg, #f0fdf4, #dcfce7);
            color: #16a34a;
            border: 1px solid #bbf7d0;
        }

        .bar-horizontal {
            height: 220px !important;
        }

        /* ============ PAGE 3.3 SPECIFIC STYLES ============ */
        .page-3-3-row1 {
            display: grid;
            grid-template-columns: 1fr 1.2fr 1.2fr;
            gap: 20px;
            margin-bottom: 22px;
        }

        .page-3-3-row2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 22px;
        }

        .chart-header-with-toggle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }

        .chart-header-with-toggle h3 {
            margin: 0;
            font-size: 14px;
            color: #1f2937;
        }

        .toggle-buttons {
            display: flex;
            gap: 4px;
            background: #f3f4f6;
            padding: 3px;
            border-radius: 8px;
        }

        .toggle-btn {
            padding: 6px 14px;
            border: none;
            background: transparent;
            color: #6b7280;
            font-size: 12px;
            font-weight: 500;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s;
        }

        .toggle-btn:hover {
            color: #374151;
        }

        .toggle-btn.active {
            background: #1e3a8a;
            color: #ffffff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 1200px) {
            .page-3-3-row1 {
                grid-template-columns: 1fr;
            }

            .page-3-3-row2 {
                grid-template-columns: 1fr;
            }
        }

        /* Bottom Row - already defined above, remove this duplicate */

        /* Heatmap Card */
        .heatmap-card {
            background: #ffffff;
        }

        .heatmap-chart {
            height: 320px !important;
        }

        .bar-horizontal-large {
            height: 360px !important;
        }

        /* Table Header Row with Actions */
        .table-header-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }

        .table-header-row h3 {
            margin: 0;
            font-size: 14px;
            color: #1f2937;
        }

        .table-actions {
            display: flex;
            gap: 8px;
        }

        .table-action-btn {
            background: linear-gradient(135deg, #3b82f6, #1e3a8a);
            border: none;
            border-radius: 6px;
            padding: 6px 10px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.2s;
        }

        .table-action-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4);
        }

        /* Enhanced Table Card */
        .table-card {
            background: linear-gradient(135deg, #ffffff, #fafbfc);
        }

        .table-total {
            font-size: 12px;
            font-weight: 600;
            color: #1e3a8a;
            background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
            padding: 5px 12px;
            border-radius: 20px;
        }

        .table-wrapper {
            max-height: 340px;
            overflow-y: auto;
            border-radius: 10px;
            border: 1px solid #e5e7eb;
        }

        .enhanced-table {
            border-radius: 10px;
            overflow: hidden;
        }

        .enhanced-table thead th {
            background: #1e3a8a;
            color: #ffffff;
            font-weight: 600;
            padding: 14px 12px;
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 0.5px;
        }

        .enhanced-table tbody tr {
            transition: all 0.2s ease;
        }

        .enhanced-table tbody tr:hover {
            transform: translateX(4px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .table-row-high {
            background: linear-gradient(90deg, #fef2f2, #ffffff);
            border-left: 3px solid #ef4444;
        }

        .table-row-medium {
            background: linear-gradient(90deg, #fffbeb, #ffffff);
            border-left: 3px solid #f59e0b;
        }

        .table-row-low {
            background: linear-gradient(90deg, #f0fdf4, #ffffff);
            border-left: 3px solid #10b981;
        }

        .customer-info {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .customer-avatar {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: linear-gradient(135deg, #3b82f6, #1e3a8a);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: 700;
        }

        .customer-name {
            font-weight: 500;
            color: #1f2937;
        }

        .amount-value {
            font-weight: 700;
            color: #1e3a8a;
            font-size: 13px;
        }

        .aging-badge {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 600;
        }

        .aging-high {
            background: linear-gradient(135deg, #fef2f2, #fee2e2);
            color: #dc2626;
            border: 1px solid #fecaca;
        }

        .aging-medium {
            background: linear-gradient(135deg, #fffbeb, #fef3c7);
            color: #d97706;
            border: 1px solid #fde68a;
        }

        .aging-low {
            background: linear-gradient(135deg, #f0fdf4, #dcfce7);
            color: #16a34a;
            border: 1px solid #bbf7d0;
        }

        .priority-badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 5px 10px !important;
            font-size: 11px !important;
        }

        .badge.green {
            background: linear-gradient(135deg, #f0fdf4, #dcfce7);
            color: #166534;
            border: 1px solid #bbf7d0;
        }

        /* Responsive for Page 3.2 */
        @media (max-width: 1200px) {
            .page-3-2-top-row {
                grid-template-columns: 1fr;
            }

            .page-3-2-gauges {
                flex-direction: row;
            }

            .page-3-2-bottom-row {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            .page-3-2-gauges {
                flex-direction: column;
            }
        }

        /* Home Page Styles */
        .home-container {
            display: flex;
            flex-direction: column;
            gap: 40px;
        }

        .home-section-title {
            font-size: 20px;
            color: var(--primary);
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .home-section-title::before {
            content: '';
            width: 4px;
            height: 24px;
            background: var(--primary-light);
            border-radius: 4px;
        }

        .report-overview-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }

        .report-overview-card {
            background: white;
            padding: 30px;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            border: 1px solid var(--border);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .report-overview-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary-light);
        }

        .report-overview-card::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, transparent 50%, rgba(59, 130, 246, 0.05) 50%);
        }

        .report-overview-card h3 {
            font-size: 18px;
            color: var(--primary);
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .report-overview-card p {
            font-size: 14px;
            color: #64748b;
            line-height: 1.6;
        }

        .analysis-flow-container {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .flow-card {
            background: white;
            padding: 24px;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            border: 1px solid var(--border);
        }

        .flow-header {
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px dashed var(--border);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .flow-steps {
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 15px;
            padding: 20px 0;
            background: #fdfdfd;
            border-radius: 12px;
            border: 1px solid #f1f5f9;
        }

        .step-box {
            background: white;
            padding: 15px 20px;
            border-radius: 10px;
            border: 1px solid var(--border);
            font-size: 13px;
            color: #334155;
            position: relative;
            flex: 1;
            min-width: 220px;
            max-width: 300px;
            text-align: center;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            display: flex;
            flex-direction: column;
            justify-content: center;
            transition: all 0.2s;
        }

        .step-box:hover {
            border-color: var(--primary-light);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .step-box.active {
            background: var(--primary);
            color: white;
            border-color: var(--primary);
            box-shadow: 0 10px 15px -3px rgba(30, 58, 138, 0.2);
        }

        .step-arrow {
            color: var(--primary-light);
            font-size: 24px;
            font-weight: 900;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.6;
            user-select: none;
        }

        .step-box .step-hint {
            display: block;
            font-size: 11px;
            margin-top: 4px;
            opacity: 0.8;
            font-style: italic;
        }

        /* ============ REPORT OVERVIEW CARD - EXPANDED ============ */
        .report-overview-card {
            display: flex;
            flex-direction: column;
            gap: 0;
        }

        .card-intro {
            font-size: 13.5px;
            color: #475569;
            line-height: 1.65;
            margin-bottom: 14px;
        }

        .card-meta-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 14px;
            flex-wrap: wrap;
        }

        .card-meta-label {
            font-size: 11px;
            font-weight: 600;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            white-space: nowrap;
        }

        .audience-tag {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            background: #eff6ff;
            color: #1e40af;
            border: 1px solid #bfdbfe;
            padding: 3px 9px;
            border-radius: 20px;
            font-size: 11.5px;
            font-weight: 500;
        }

        .card-divider {
            border: none;
            border-top: 1px dashed #e2e8f0;
            margin: 12px 0;
        }

        .card-pages-title {
            font-size: 11px;
            font-weight: 700;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 0.07em;
            margin-bottom: 10px;
        }

        .page-item {
            display: flex;
            gap: 10px;
            align-items: flex-start;
            padding: 8px 0;
            border-bottom: 1px solid #f1f5f9;
        }

        .page-item:last-child {
            border-bottom: none;
        }

        .page-num-badge {
            flex-shrink: 0;
            background: var(--primary);
            color: white;
            font-size: 10px;
            font-weight: 700;
            padding: 3px 7px;
            border-radius: 5px;
            margin-top: 1px;
            letter-spacing: 0.02em;
        }

        .page-item-content {
            flex: 1;
        }

        .page-item-name {
            font-size: 12.5px;
            font-weight: 600;
            color: #1e3a8a;
            margin-bottom: 2px;
        }

        .page-item-desc {
            font-size: 11.5px;
            color: #64748b;
            line-height: 1.5;
        }

        .card-page-count {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            background: #f0fdf4;
            color: #166534;
            border: 1px solid #bbf7d0;
            padding: 3px 10px;
            border-radius: 20px;
            font-size: 11.5px;
            font-weight: 600;
        }
    </style>
</head>

<body>
    <div class="sidebar">
        <h2 id="sidebar-title" style="cursor: pointer;">📊 BÁO CÁO TÀI CHÍNH</h2>

        <div class="report-group">
            <div class="report-title">HƯỚNG DẪN</div>
            <div class="nav-item" data-page="page-home" style="color: #fbbf24; font-weight: 600;">📖 Hướng dẫn sử dụng &
                Đọc BC</div>
        </div>

        <div class="report-group">
            <div class="report-title">BC1: Tổng quan Tài chính</div>
            <div class="nav-item active" data-page="page-1-1">1.1 Dashboard Tổng quan</div>
            <div class="nav-item" data-page="page-1-2">1.2 Khả năng thanh toán</div>
            <div class="nav-item" data-page="page-1-3">1.3 Bảng Cân đối Kế toán</div>
        </div>

        <div class="report-group">
            <div class="report-title">BC2: KQKD & Dòng tiền</div>
            <div class="nav-item" data-page="page-2-1">2.1 Tổng quan KQKD</div>
            <div class="nav-item" data-page="page-2-2">2.2 Phân tích Doanh thu</div>
            <div class="nav-item" data-page="page-2-3">2.3 Phân tích Chi phí</div>
            <div class="nav-item" data-page="page-2-4">2.4 Lưu chuyển Tiền tệ</div>
        </div>

        <div class="report-group">
            <div class="report-title">BC3: Quản lý Công nợ</div>
            <div class="nav-item" data-page="page-3-1">3.1 Tổng quan Công nợ</div>
            <div class="nav-item" data-page="page-3-2">3.2 Nợ phải thu</div>
            <div class="nav-item" data-page="page-3-3">3.3 Nợ phải trả</div>
        </div>
    </div>

    <div class="main">
        <div class="content-wrapper">
            <!-- Page Home -->
            <div id="page-home" class="page active">
                <div class="page-header">
                    <h1>Chào mừng bạn đến với Hệ thống Báo cáo Tài chính</h1>
                    <p>Hệ thống cung cấp cái nhìn toàn diện về sức khỏe tài chính, hiệu quả kinh doanh và tình hình công
                        nợ của doanh nghiệp.</p>
                </div>

                <div class="home-container">
                    <!-- Section 1 -->
                    <div class="home-section">
                        <div class="home-section-title">Nội dung cốt lõi</div>
                        <div class="report-overview-grid">
                            <!-- BC1 -->
                            <div class="report-overview-card">
                                <h3>📈 BC1: Tổng quan Tài chính</h3>
                                <p class="card-intro">Cung cấp bức tranh tổng thể về sức khỏe tài chính doanh nghiệp — từ quy mô tài sản, cơ cấu nguồn vốn đến khả năng thanh khoản ngắn hạn. Giúp lãnh đạo định vị mức độ an toàn và tự chủ tài chính trước khi đi vào phân tích vận hành.</p>
                                <div class="card-meta-row">
                                    <span class="card-meta-label">Phục vụ:</span>
                                    <span class="audience-tag">👔 Ban lãnh đạo</span>
                                    <span class="audience-tag">💼 CFO / Giám đốc Tài chính</span>
                                    <span class="audience-tag">📋 Kế toán trưởng</span>
                                </div>
                                <div class="card-meta-row">
                                    <span class="card-meta-label">Quy mô:</span>
                                    <span class="card-page-count">📄 3 trang báo cáo</span>
                                </div>
                                <hr class="card-divider">
                                <div class="card-pages-title">Chi tiết từng trang</div>
                                <div class="page-item">
                                    <span class="page-num-badge">1.1</span>
                                    <div class="page-item-content">
                                        <div class="page-item-name">Dashboard Tổng quan</div>
                                        <div class="page-item-desc">KPI cốt lõi (tổng tài sản, tiền, phải thu, nợ, VCSH), xu hướng 6 tháng và hai đồng hồ đo hệ số thanh toán hiện hành & tỷ lệ Nợ/Vốn chủ.</div>
                                    </div>
                                </div>
                                <div class="page-item">
                                    <span class="page-num-badge">1.2</span>
                                    <div class="page-item-content">
                                        <div class="page-item-name">Khả năng thanh toán</div>
                                        <div class="page-item-desc">Phân tích 5 hệ số thanh toán (tiền mặt, nhanh, hiện hành, Nợ/VCSH, lãi vay). Đi từ lớp phòng thủ tổng quát đến chi tiết để xác định điểm nghẽn thanh khoản.</div>
                                    </div>
                                </div>
                                <div class="page-item">
                                    <span class="page-num-badge">1.3</span>
                                    <div class="page-item-content">
                                        <div class="page-item-name">Bảng Cân đối Kế toán</div>
                                        <div class="page-item-desc">Phân rã cơ cấu tài sản, nợ phải trả và vốn chủ theo tỷ trọng. Bảng tóm tắt 3 kỳ (quý này / quý trước / đầu năm) để thấy tốc độ biến động.</div>
                                    </div>
                                </div>
                            </div>

                            <!-- BC2 -->
                            <div class="report-overview-card">
                                <h3>💰 BC2: KQKD & Dòng tiền</h3>
                                <p class="card-intro">Đánh giá hiệu quả vận hành kinh doanh qua doanh thu, chi phí, lợi nhuận và dòng tiền thực tế. Giúp nhận diện các "điểm nghẽn" làm ăn mòn lợi nhuận và rủi ro thiếu hụt tiền mặt.</p>
                                <div class="card-meta-row">
                                    <span class="card-meta-label">Phục vụ:</span>
                                    <span class="audience-tag">👔 Ban lãnh đạo</span>
                                    <span class="audience-tag">📊 Giám đốc Kinh doanh</span>
                                    <span class="audience-tag">📋 Kế toán trưởng</span>
                                </div>
                                <div class="card-meta-row">
                                    <span class="card-meta-label">Quy mô:</span>
                                    <span class="card-page-count">📄 4 trang báo cáo</span>
                                </div>
                                <hr class="card-divider">
                                <div class="card-pages-title">Chi tiết từng trang</div>
                                <div class="page-item">
                                    <span class="page-num-badge">2.1</span>
                                    <div class="page-item-content">
                                        <div class="page-item-name">Tổng quan KQKD</div>
                                        <div class="page-item-desc">Biểu đồ cầu thác từ doanh thu xuống lợi nhuận thuần, cơ cấu lợi nhuận theo dịch vụ và so sánh với cùng kỳ năm trước.</div>
                                    </div>
                                </div>
                                <div class="page-item">
                                    <span class="page-num-badge">2.2</span>
                                    <div class="page-item-content">
                                        <div class="page-item-name">Phân tích Doanh thu</div>
                                        <div class="page-item-desc">Cơ cấu theo loại dịch vụ, top 10 khách hàng (toggle doanh thu / sản lượng), heatmap KH × Dịch vụ và Pareto 80/20.</div>
                                    </div>
                                </div>
                                <div class="page-item">
                                    <span class="page-num-badge">2.3</span>
                                    <div class="page-item-content">
                                        <div class="page-item-name">Phân tích Chi phí</div>
                                        <div class="page-item-desc">Top 10 khoản chi lớn nhất (lọc cố định / biến đổi), xu hướng chi phí theo thời gian và tương quan chi phí – sản lượng.</div>
                                    </div>
                                </div>
                                <div class="page-item">
                                    <span class="page-num-badge">2.4</span>
                                    <div class="page-item-content">
                                        <div class="page-item-name">Lưu chuyển Tiền tệ</div>
                                        <div class="page-item-desc">Waterfall dòng tiền vào–ra, phân tách 3 hoạt động (kinh doanh / đầu tư / tài chính) và chỉ số Days of Cash để cảnh báo sớm thiếu tiền.</div>
                                    </div>
                                </div>
                            </div>

                            <!-- BC3 -->
                            <div class="report-overview-card">
                                <h3>🤝 BC3: Quản lý Công nợ</h3>
                                <p class="card-intro">Theo dõi và kiểm soát toàn bộ vòng đời công nợ — từ phải thu khách hàng đến phải trả nhà cung cấp. Giảm thiểu rủi ro đọng vốn và duy trì uy tín tín dụng của doanh nghiệp.</p>
                                <div class="card-meta-row">
                                    <span class="card-meta-label">Phục vụ:</span>
                                    <span class="audience-tag">🗂️ Kế toán Công nợ</span>
                                    <span class="audience-tag">💼 Trưởng phòng Tài chính</span>
                                    <span class="audience-tag">👔 Ban lãnh đạo</span>
                                </div>
                                <div class="card-meta-row">
                                    <span class="card-meta-label">Quy mô:</span>
                                    <span class="card-page-count">📄 3 trang báo cáo</span>
                                </div>
                                <hr class="card-divider">
                                <div class="card-pages-title">Chi tiết từng trang</div>
                                <div class="page-item">
                                    <span class="page-num-badge">3.1</span>
                                    <div class="page-item-content">
                                        <div class="page-item-name">Tổng quan Công nợ</div>
                                        <div class="page-item-desc">So sánh tổng phải thu (AR) vs phải trả (AP), tỷ lệ quá hạn / trong hạn và dự báo dòng tiền: Thu AR → Trả AP → Số dư cuối kỳ.</div>
                                    </div>
                                </div>
                                <div class="page-item">
                                    <span class="page-num-badge">3.2</span>
                                    <div class="page-item-content">
                                        <div class="page-item-name">Nợ phải thu (AR)</div>
                                        <div class="page-item-desc">Danh sách ưu tiên thu nợ (gắn với hệ số thanh toán nhanh), heatmap aging theo khách hàng và bảng chi tiết phân loại mức độ rủi ro.</div>
                                    </div>
                                </div>
                                <div class="page-item">
                                    <span class="page-num-badge">3.3</span>
                                    <div class="page-item-content">
                                        <div class="page-item-name">Nợ phải trả (AP)</div>
                                        <div class="page-item-desc">Cơ cấu nợ ngắn / dài hạn, Pareto top NCC theo dư nợ, lịch aging đến hạn và bảng trạng thái thanh toán từng nhà cung cấp.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Section 2 -->
                    <div class="home-section">
                        <div class="home-section-title">Luồng đọc báo cáo (Workflows)</div>
                        <div class="analysis-flow-container">
                            <!-- Luồng 1 -->
                            <div class="flow-card">
                                <div class="flow-header">🔄 Luồng 1: Đánh giá sức khỏe thanh khoản</div>
                                <div class="flow-steps">
                                    <div class="step-box active">
                                        <b>Trang 1.1</b>
                                        <span class="step-hint">Xem Hệ số hiện hành > 1.1?</span>
                                    </div>
                                    <div class="step-arrow">➜</div>
                                    <div class="step-box">
                                        <b>Trang 1.2</b>
                                        <span class="step-hint">Kiểm tra Hệ số Tiền mặt & Nhanh</span>
                                    </div>
                                    <div class="step-arrow">➜</div>
                                    <div class="step-box">
                                        <b>Trang 3.2</b>
                                        <span class="step-hint">Nếu kẹt ở Phải thu ➔ Lên KH thu nợ</span>
                                    </div>
                                </div>
                                <p
                                    style="font-size: 13px; color: #475569; margin-top: 20px; line-height: 1.6; background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0;">
                                    <b
                                        style="color: var(--primary); display: block; margin-bottom: 10px; font-size: 15px;">🔍
                                        Chi tiết lộ trình:</b>
                                    1. Đầu tiên, người đọc truy cập <b>Trang 1.1 Dashboard Tổng quan</b> để kiểm tra chỉ
                                    số "Hệ số thanh toán hiện hành". Nếu chỉ số này đang nằm trên mức an toàn (1.1),
                                    doanh nghiệp cần xác định các yếu tố duy trì bền vững. Nếu dưới 1.1, cần tìm hiểu
                                    nguyên nhân cốt lõi thông qua các báo cáo chuyên sâu.<br><br>
                                    2. Tiếp theo, chuyển sang <b>Trang 1.2 Khả năng thanh toán</b> để phân tích lớp
                                    phòng thủ thanh khoản: kiểm tra xem "Hệ số thanh toán bằng tiền" có đủ đáp ứng các
                                    nợ ngắn hạn ngay lập tức không. Nếu chưa đủ, hãy xem xét "Hệ số thanh toán nhanh"
                                    (bao gồm cả các khoản phải thu).<br><br>
                                    3. Nếu việc cộng thêm Phải thu giúp hệ số đạt mức an toàn, điều đó khẳng định rằng
                                    sức khỏe tài chính phụ thuộc hoàn toàn vào việc thu hồi nợ khách hàng. Khi đó, hãy
                                    sang báo cáo <b>BC3 Quản lý Công nợ</b> để phân tích chi tiết khả năng thu nợ, đánh
                                    giá rủi ro tín dụng và đề xuất phương án thu hồi hợp lý nhất.
                                </p>
                            </div>

                            <!-- Luồng 2 -->
                            <div class="flow-card">
                                <div class="flow-header">📉 Luồng 2: Truy tìm nguyên nhân Lợi nhuận giảm</div>
                                <div class="flow-steps">
                                    <div class="step-box active">
                                        <b>Trang 2.1</b>
                                        <span class="step-hint">So sánh LN với cùng kỳ</span>
                                    </div>
                                    <div class="step-arrow">➜</div>
                                    <div class="step-box">
                                        <b>Tách nguyên nhân</b>
                                        <span class="step-hint">Do Doanh thu hay Chi phí?</span>
                                    </div>
                                    <div class="step-arrow">➜</div>
                                    <div class="step-box">
                                        <b>Trang 2.2 / 2.3</b>
                                        <span class="step-hint">Phân tích sâu để tìm phương án</span>
                                    </div>
                                </div>
                                <p
                                    style="font-size: 13px; color: #475569; margin-top: 20px; line-height: 1.6; background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0;">
                                    <b
                                        style="color: var(--primary); display: block; margin-bottom: 10px; font-size: 15px;">🔍
                                        Chi tiết lộ trình:</b>
                                    1. Người đọc bắt đầu tại <b>Trang 2.1 Tổng quan KQKD</b> để đánh giá hiệu quả lợi
                                    nhuận thông qua việc so sánh với cùng kỳ năm trước. Bước này giúp xác định xu hướng
                                    lợi nhuận đang tăng trưởng hay sụt giảm so với lịch sử doanh nghiệp.<br><br>
                                    2. Nếu kết quả sụt giảm (Xấu), cần thực hiện "bóc tách rủi ro": xác định nguyên nhân
                                    cốt lõi đến từ việc hụt giảm Doanh thu hay do Chi phí vận hành đang tăng quá cao so
                                    với cùng kỳ.<br><br>
                                    3. <b>Nếu do Doanh thu:</b> Chuyển sang <b>Trang 2.2 Phân tích Doanh thu</b> để tìm
                                    hiểu mảng kinh doanh hoặc loại hình sản phẩm nào đang suy yếu. <b>Nếu do Chi
                                        phí:</b> Chuyển sang <b>Trang 2.3 Phân tích Chi phí</b> để xác định đó là sự
                                    thay đổi của chi phí cố định hay chi phí biến đổi tăng đột biến, nguyên nhân đến từ
                                    hạng mục chi phí cụ thể nào để tìm hướng khắc phục kịp thời.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Page 1.1 -->
            <div id="page-1-1" class="page">
                <div class="page-header">
                    <h1>BC1.1 Tổng quan tài chính</h1>
                </div>
                <div class="kpi-row">
                    <div class="kpi-card">
                        <div class="label">Tổng tài sản</div>
                        <div class="value">128.5 tỷ</div>
                        <div class="change up">+5.2% vs quý trước</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">Tiền & tương đương tiền</div>
                        <div class="value">12.8 tỷ</div>
                        <div class="change down">-3.1% vs quý trước</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">Phải thu khách hàng</div>
                        <div class="value">18.2 tỷ</div>
                        <div class="change up">+8.5% vs quý trước</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">Nợ phải trả</div>
                        <div class="value">45.6 tỷ</div>
                        <div class="change up">+2.3% vs quý trước</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">Phải trả NCC</div>
                        <div class="value">15.3 tỷ</div>
                        <div class="change down">-1.8% vs quý trước</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">Vốn chủ sở hữu</div>
                        <div class="value">82.9 tỷ</div>
                        <div class="change up">+6.8% vs đầu năm</div>
                    </div>
                </div>
                <div class="chart-row auto">
                    <div class="chart-box">
                        <h3>Xu hướng tài sản & nợ (6 tháng)</h3>
                        <p class="chart-subtitle">Theo dõi khoảng chênh lệch giữa TS và Nợ. Khoảng trống này càng rộng
                            cho thấy tiềm lực tài chính tự chủ càng tăng.</p>
                        <div id="chart-1-1-trend" class="chart"></div>
                    </div>
                    <div class="chart-box">
                        <h3>Hệ số thanh toán hiện hành</h3>
                        <p class="chart-subtitle">Chỉ số được tính từ tỷ lệ của tổng tài sản ngắn hạn và nợ ngắn
                            hạn, Mục tiêu chỉ số là > 1.1 và cần làm gì để đạt được thì sẽ xem trong trang 1.2.</p>
                        <div id="chart-1-1-gauge-current" class="chart small"></div>
                    </div>
                    <div class="chart-box">
                        <h3>Tỷ lệ Nợ/Vốn chủ</h3>
                        <p class="chart-subtitle">Đo lường mức độ rủi ro tài chính. Tỷ lệ này giảm đồng nghĩa với việc
                            doanh nghiệp đang giảm nợ vay.</p>
                        <div id="chart-1-1-gauge-de" class="chart small"></div>
                    </div>
                </div>
                <div class="section-block section-1-1-drill">
                    <div class="section-heading">
                        <h2>Chi tiết tiền & nợ</h2>
                    </div>
                    <div class="chart-row auto">
                        <div class="chart-box">
                            <h3>Cơ cấu Tiền (TM vs TG)</h3>
                            <p class="chart-subtitle">Xem xét tỷ lệ tiền gửi ngân hàng để tối ưu hóa doanh thu hoạt động
                                tài chính (lãi tiền gửi).</p>
                            <div id="chart-1-1-drill-donut" class="chart small"></div>
                        </div>
                        <div class="chart-box">
                            <h3>Top 5 Khoản làm TS tăng/giảm</h3>
                            <p class="chart-subtitle">Xác định các "driver" chính làm thay đổi quy mô tài sản trong quý
                                (như đầu tư mới hoặc thanh lý).</p>
                            <div id="chart-1-1-drill-bar1" class="chart small"></div>
                        </div>
                        <div class="chart-box">
                            <h3>Top 5 Khoản làm Nợ tăng/giảm</h3>
                            <p class="chart-subtitle">Chi tiết các nguồn làm tăng nghĩa vụ nợ, giúp quản lý dòng tiền
                                trả nợ chủ động hơn.</p>
                            <div id="chart-1-1-drill-bar2" class="chart small"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Page 1.2 (Khả năng thanh toán - trước đây 1.3) -->
            <div id="page-1-2" class="page">
                <div class="page-header">
                    <h1>BC1.2 Khả năng thanh toán</h1>
                </div>
                <div class="page-instruction">
                    Phân tích khả năng đáp ứng các nghĩa vụ tài chính ngắn hạn. Các biểu đồ dưới đây đi từ tổng quát
                    (Tài sản ngắn hạn) đến chi tiết (Tiền mặt) để xác định điểm nghẽn thanh khoản.
                </div>
                <div class="chart-row auto">
                    <div class="chart-box">
                        <h3>Hệ số thanh toán bằng tiền</h3>
                        <p class="chart-subtitle">Tỷ lệ tiền mặt sẵn có để trả nợ ngay lập tức.</p>
                        <div id="chart-1-3-g4" class="chart tiny"></div>
                    </div>
                    <div class="chart-box">
                        <h3>Hệ số thanh toán nhanh</h3>
                        <p class="chart-subtitle">Khả năng trả nợ không phụ thuộc vào hàng tồn kho.</p>
                        <div id="chart-1-3-g2" class="chart tiny"></div>
                    </div>
                    <div class="chart-box">
                        <h3>Hệ số thanh toán hiện hành</h3>
                        <p class="chart-subtitle">Tổng tài sản ngắn hạn so với nợ ngắn hạn.</p>
                        <div id="chart-1-3-g1" class="chart tiny"></div>
                    </div>
                    <div class="chart-box">
                        <h3>Tỷ lệ Nợ/Vốn chủ sở hữu</h3>
                        <p class="chart-subtitle">Mức độ sử dụng đòn bẩy tài chính (Debt-to-Equity).</p>
                        <div id="chart-1-3-g3" class="chart tiny"></div>
                    </div>
                    <div class="chart-box">
                        <h3>Khả năng thanh toán lãi vay</h3>
                        <p class="chart-subtitle">Mức độ an toàn của lợi nhuận so với lãi vay phải trả.</p>
                        <div id="chart-1-3-g5" class="chart tiny"></div>
                    </div>
                </div>
                <div class="section-block">
                    <div class="section-heading">
                        <h2>Giải thích các tỷ số</h2>
                    </div>
                    <div class="chart-row auto">
                        <div class="chart-box">
                            <h3>TSNH vs Nợ NH + Hệ số hiện hành</h3>
                            <p class="chart-subtitle">So sánh quy mô Tài sản ngắn hạn và Nợ ngắn hạn. Xem chi tiết các
                                khoản Phải thu tại báo cáo 3.2 nếu hệ số này biến động mạnh.</p>
                            <div id="chart-1-3-drill-combo1" class="chart small"></div>
                        </div>
                        <div class="chart-box">
                            <h3>(TSNH - HTK) vs Nợ NH + Hệ số nhanh</h3>
                            <p class="chart-subtitle">Loại bỏ Hàng tồn kho để đánh giá khả năng thanh toán bằng các tài
                                sản có tính thanh khoản cao hơn.</p>
                            <div id="chart-1-3-drill-combo2" class="chart small"></div>
                        </div>
                        <div class="chart-box">
                            <h3>Tiền vs Nợ NH + Hệ số tiền mặt</h3>
                            <p class="chart-subtitle">Đánh giá mức độ an toàn tuyệt đối. Tiền mặt là lớp phòng thủ cuối
                                cùng trước các nghĩa vụ nợ đến hạn.</p>
                            <div id="chart-1-3-drill-combo3" class="chart small"></div>
                        </div>
                    </div>
                    <div class="chart-row auto">
                        <div class="chart-box">
                            <h3>Nợ vs VCSH + Tỷ lệ Nợ/Vốn CSH</h3>
                            <p class="chart-subtitle">Xem xét sự cân bằng giữa vốn vay và vốn tự có. Xem thêm BC1.1 để
                                thấy xu hướng dài hạn.</p>
                            <div id="chart-1-3-drill-de" class="chart small"></div>
                        </div>
                        <div class="chart-box">
                            <h3>LN trước lãi vs Chi phí lãi + Khả năng trả lãi</h3>
                            <p class="chart-subtitle">Phân tích biên an toàn lợi nhuận. Nếu chỉ số này thấp, rủi ro mất
                                khả năng chi trả là rất lớn.</p>
                            <div id="chart-1-3-drill-interest" class="chart small"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Page 1.3 (Bảng Cân đối Kế toán - trước đây 1.2) -->
            <div id="page-1-3" class="page">
                <div class="page-header">
                    <h1>BC1.3 Bảng Cân đối Kế toán</h1>
                </div>
                <div class="page-instruction">
                    Phân tích cấu trúc Tài sản và Nguồn vốn. Xem xét sự tương quan giữa các khoản mục để đánh giá mức độ
                    ổn định và hiệu quả sử dụng nguồn vốn của doanh nghiệp.
                </div>
                <!-- Phần 1: KPI + Line/Bar -->
                <div class="layout-1-2-top">
                    <div class="kpi-panel">
                        <div class="kpi-row">
                            <div class="kpi-card">
                                <div class="label">Tài sản ngắn hạn</div>
                                <div class="value">55.0 tỷ</div>
                                <div class="change up">+3.0 tỷ vs quý trước</div>
                            </div>
                            <div class="kpi-card">
                                <div class="label">Tài sản dài hạn</div>
                                <div class="value">73.5 tỷ</div>
                                <div class="change up">+2.5 tỷ vs quý trước</div>
                            </div>
                            <div class="kpi-card">
                                <div class="label">Nợ phải trả</div>
                                <div class="value">45.6 tỷ</div>
                                <div class="change up">+1.1 tỷ vs quý trước</div>
                            </div>
                            <div class="kpi-card">
                                <div class="label">Vốn chủ sở hữu</div>
                                <div class="value">82.9 tỷ</div>
                                <div class="change up">+4.4 tỷ vs quý trước</div>
                            </div>
                        </div>
                    </div>
                    <div class="chart-box">
                        <h3>Tổng tài sản & so với cùng kỳ</h3>
                        <p class="chart-subtitle">So sánh quy mô tài sản hiện tại với các mốc lịch sử để thấy tốc độ
                            tăng trưởng quy mô doanh nghiệp.</p>
                        <div id="chart-1-2-total-linebar" class="chart"></div>
                    </div>
                </div>

                <!-- Phần 2: Decomposition charts -->
                <div class="section-block section-1-2-decomp">
                    <div class="section-heading">
                        <h2>Phân rã cơ cấu Tài sản - Nguồn vốn</h2>
                    </div>
                    <div class="chart-row auto">
                        <div class="chart-box">
                            <h3>Phân rã Tổng tài sản</h3>
                            <p class="chart-subtitle">Tỷ trọng các nhóm tài sản. Nhấp vào các phần để xem chi tiết biến
                                động từng khoản mục.</p>
                            <div id="chart-1-2-decomp-asset" class="chart small"></div>
                        </div>
                        <div class="chart-box">
                            <h3>Phân rã Nợ phải trả</h3>
                            <p class="chart-subtitle">Cơ cấu nợ ngắn và dài hạn. Xem BC3.3 để phân tích chi tiết các nhà
                                cung cấp.</p>
                            <div id="chart-1-2-decomp-liab" class="chart small"></div>
                        </div>
                        <div class="chart-box">
                            <h3>Phân rã Vốn chủ sở hữu</h3>
                            <p class="chart-subtitle">Nguồn gốc vốn chủ (Lợi nhuận giữ lại vs Vốn góp). Phản ánh khả
                                năng tích lũy nội tại.</p>
                            <div id="chart-1-2-decomp-equity" class="chart small"></div>
                        </div>
                    </div>
                </div>

                <div class="chart-box balance-summary">
                    <h3>Bảng cân đối tóm tắt</h3>
                    <p class="chart-subtitle">Tổng hợp các chỉ tiêu cốt lõi. Hãy đối chiếu các con số này với các biểu
                        đồ phân rã phía trên để thấy bức tranh chi tiết.</p>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Chỉ tiêu</th>
                                <th>Quý này</th>
                                <th>Quý trước</th>
                                <th>Đầu năm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="font-weight: 600;">Tổng tài sản</td>
                                <td style="font-weight: 600;">128.5 tỷ</td>
                                <td style="font-weight: 600;">123.0 tỷ</td>
                                <td style="font-weight: 600;">115.0 tỷ</td>
                            </tr>
                            <tr>
                                <td style="padding-left: 20px;">- Tài sản ngắn hạn</td>
                                <td>55.0 tỷ</td>
                                <td>52.0 tỷ</td>
                                <td>45.0 tỷ</td>
                            </tr>
                            <tr>
                                <td style="padding-left: 40px;">Tiền &amp; tương đương tiền</td>
                                <td>12.8 tỷ</td>
                                <td>12.5 tỷ</td>
                                <td>11.0 tỷ</td>
                            </tr>
                            <tr>
                                <td style="padding-left: 40px;">Phải thu</td>
                                <td>18.2 tỷ</td>
                                <td>17.0 tỷ</td>
                                <td>15.0 tỷ</td>
                            </tr>
                            <tr>
                                <td style="padding-left: 40px;">Hàng tồn kho</td>
                                <td>11.3 tỷ</td>
                                <td>10.8 tỷ</td>
                                <td>9.0 tỷ</td>
                            </tr>
                            <tr>
                                <td style="padding-left: 40px;">Tài sản ngắn hạn khác</td>
                                <td>12.7 tỷ</td>
                                <td>11.7 tỷ</td>
                                <td>10.0 tỷ</td>
                            </tr>
                            <tr>
                                <td style="padding-left: 20px;">- Tài sản dài hạn</td>
                                <td>73.5 tỷ</td>
                                <td>71.0 tỷ</td>
                                <td>70.0 tỷ</td>
                            </tr>
                            <tr>
                                <td style="font-weight: 600;">Nợ phải trả</td>
                                <td style="font-weight: 600;">45.6 tỷ</td>
                                <td style="font-weight: 600;">44.5 tỷ</td>
                                <td style="font-weight: 600;">42.0 tỷ</td>
                            </tr>
                            <tr>
                                <td style="padding-left: 20px;">- Nợ ngắn hạn</td>
                                <td>31.6 tỷ</td>
                                <td>29.5 tỷ</td>
                                <td>28.0 tỷ</td>
                            </tr>
                            <tr>
                                <td style="padding-left: 20px;">- Nợ dài hạn</td>
                                <td>14.0 tỷ</td>
                                <td>15.0 tỷ</td>
                                <td>14.0 tỷ</td>
                            </tr>
                            <tr>
                                <td style="font-weight: 600;">Vốn chủ sở hữu</td>
                                <td style="font-weight: 600;">82.9 tỷ</td>
                                <td style="font-weight: 600;">78.5 tỷ</td>
                                <td style="font-weight: 600;">73.0 tỷ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Page 2.1 -->
            <div id="page-2-1" class="page">
                <div class="page-header">
                    <h1>BC2.1 Tổng quan Kết quả kinh doanh</h1>
                </div>
                <div class="page-instruction">
                    Theo dõi hiệu quả kinh doanh qua doanh thu, lợi nhuận và biên lợi nhuận. Sử dụng biểu đồ cầu thác để
                    xác định các yếu tố ăn mòn lợi nhuận.
                </div>
                <div class="kpi-row">
                    <div class="kpi-card">
                        <div class="label">Doanh thu thuần</div>
                        <div class="value">8.2 tỷ</div>
                        <div class="change up">+12% vs kế hoạch</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">Lợi nhuận gộp</div>
                        <div class="value">2.8 tỷ</div>
                        <div class="change">Margin 34%</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">Lợi nhuận thuần</div>
                        <div class="value">1.2 tỷ</div>
                        <div class="change">Margin 15%</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">EBITDA</div>
                        <div class="value">1.8 tỷ</div>
                        <div class="change up">+8% vs cùng kỳ</div>
                    </div>
                </div>
                <div class="chart-row">
                    <div class="chart-box" style="grid-column: span 1;">
                        <h3>Cầu thác: Doanh thu → Lợi nhuận</h3>
                        <p class="chart-subtitle">Xác định các khoản chi phí lớn nhất làm giảm lợi nhuận thuần từ doanh
                            thu ban đầu.</p>
                        <div id="chart-2-1-waterfall" class="chart" style="height: 320px;"></div>
                    </div>
                    <div class="chart-box">
                        <h3>Cơ cấu Lợi nhuận theo Dịch vụ</h3>
                        <p class="chart-subtitle">Giúp nhận diện mảng kinh doanh cốt lõi mang lại giá trị cao nhất cho
                            doanh nghiệp.</p>
                        <div id="chart-2-1-profit-pie" class="chart" style="height: 320px;"></div>
                    </div>
                </div>
                <div class="chart-row">
                    <div class="chart-box">
                        <h3>Lợi nhuận theo thời gian so với năm trước</h3>
                        <p class="chart-subtitle">So sánh hiệu quả hàng tháng với năm trước để thấy được tính chu kỳ và
                            tăng trưởng.</p>
                        <div id="chart-2-1-profit-combo" class="chart"></div>
                    </div>
                    <div class="chart-box">
                        <h3>Doanh thu và Chi phí theo thời gian</h3>
                        <p class="chart-subtitle">Kiểm soát tương quan giữa tốc độ tăng doanh thu và tốc độ tăng chi phí
                            vận hành. Để đánh giá nguyên nhân của việc lợi nhuận gặp vấn đề đến từ doanh thu thì sẽ tìm
                            hiểu ở trang 2.2. còn nếu do chi phí thì sẽ tìm hiểu ở trang 2.3</p>
                        <div id="chart-2-1-revenue-cost-bar" class="chart"></div>
                    </div>
                </div>
            </div>

            <!-- Page 2.2 -->
            <div id="page-2-2" class="page">
                <div class="page-header">
                    <h1>BC2.2 Phân tích Doanh thu</h1>
                </div>
                <div class="page-instruction">
                    Đánh giá hiệu suất bán hàng qua cơ cấu khách hàng và dịch vụ. Xác định nhóm khách hàng mang lại 80%
                    giá trị doanh nghiệp.
                </div>
                <div class="kpi-row">
                    <div class="kpi-card">
                        <div class="label">DT tháng này</div>
                        <div class="value">8.2 tỷ</div>
                        <div class="change up">+5% vs tháng trước</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">DT lũy kế</div>
                        <div class="value">72.5 tỷ</div>
                        <div class="change up">+8% vs cùng kỳ</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">% hoàn thành KH</div>
                        <div class="value">92%</div>
                        <div class="change">Còn 8% để đạt KH năm</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">Tăng trưởng YoY</div>
                        <div class="value">+15%</div>
                        <div class="change up">So với năm trước</div>
                    </div>
                </div>
                <div class="chart-row">
                    <div class="chart-box">
                        <h3>Cơ cấu Doanh thu theo loại</h3>
                        <p class="chart-subtitle">Phân tích sự cân bằng và đa dạng hóa các lĩnh vực kinh doanh chính.
                        </p>
                        <div id="chart-2-2-type-pie" class="chart"></div>
                    </div>
                    <div class="chart-box">
                        <h3>Doanh thu và Sản lượng theo thời gian</h3>
                        <p class="chart-subtitle">Theo dõi biến động quy mô bán hàng và giá bán bình quân (Unit Price).
                        </p>
                        <div id="chart-2-2-linebar" class="chart"></div>
                    </div>
                </div>

                <div class="section-block">
                    <div class="section-heading">
                        <h2>Phân tích Chi tiết Doanh thu</h2>
                    </div>
                    <div class="chart-row auto">
                        <div class="chart-box">
                            <h3>Top 10 Khách hàng</h3>
                            <p class="chart-subtitle">Sử dụng nút toggle để chuyển đổi giữa xem theo Doanh thu và Sản
                                lượng.</p>
                            <div style="margin-bottom: 5px;">
                                <button id="btn-2-2-revenue"
                                    style="padding: 8px 16px; margin-right: 8px; background: var(--primary); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600;">Theo
                                    Doanh thu</button>
                                <button id="btn-2-2-quantity"
                                    style="padding: 8px 16px; background: #d1d5db; color: #374151; border: none; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600;">Theo
                                    Sản lượng</button>
                            </div>
                            <div id="chart-2-2-top-customers" class="chart"></div>
                        </div>
                        <div class="chart-box">
                            <h3>Heatmap: Khách hàng x Dịch vụ</h3>
                            <p class="chart-subtitle">Nhận diện rủi ro phụ thuộc quá mức hoặc cơ sở khách hàng lý tưởng.
                            </p>
                            <div id="chart-2-2-heatmap" class="chart"></div>
                        </div>
                        <div class="chart-box">
                            <h3>Pareto đóng góp % Doanh thu</h3>
                            <p class="chart-subtitle">Xác định 20% khách hàng đóng góp 80% doanh thu (Nguyên lý Pareto).
                            </p>
                            <div id="chart-2-2-pareto" class="chart"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Page 2.3 -->
            <div id="page-2-3" class="page">
                <div class="page-header">
                    <h1>BC2.3 Phân tích Chi phí</h1>
                </div>
                <div class="page-instruction">
                    Tối ưu hóa bảng chi phí bằng cách phân tích cơ cấu cố định/biến đổi và quản trị hiệu quả sử dụng
                    nguồn lực doanh nghiệp.
                </div>
                <div class="kpi-row">
                    <div class="kpi-card">
                        <div class="label">Tổng chi phí</div>
                        <div class="value">7.0 tỷ</div>
                        <div class="change down">+3% vs quý trước</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">Giá vốn</div>
                        <div class="value">5.4 tỷ</div>
                        <div class="change">66% DT</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">Chi phí Bán hàng</div>
                        <div class="value">1.2 tỷ</div>
                        <div class="change">15% DT</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">Chi phí Tài chính</div>
                        <div class="value">0.4 tỷ</div>
                        <div class="change">5% DT</div>
                    </div>
                </div>

                <div class="chart-row">
                    <div class="chart-box">
                        <h3>Cơ cấu Chi phí theo loại</h3>
                        <p class="chart-subtitle">Phân loại các khoản chi phí lớn nhất để xác định trọng tâm cắt giảm
                            hoặc tối ưu.</p>
                        <div id="chart-2-3-type-pie" class="chart"></div>
                    </div>
                    <div class="chart-box">
                        <h3>Top 10 Khoản chi lớn nhất</h3>
                        <p class="chart-subtitle">Sử dụng bộ lọc để xem chi tiết các lái trưởng chi phí (Cost Drivers)
                            theo tính chất cố định/biến đổi.</p>
                        <div style="margin-bottom: 6px;">
                            <button id="btn-2-3-all"
                                style="padding: 8px 16px; margin-right: 8px; background: var(--primary); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600;">Toàn
                                bộ</button>
                            <button id="btn-2-3-fixed"
                                style="padding: 8px 16px; margin-right: 8px; background: #d1d5db; color: #374151; border: none; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600;">Chi
                                phí cố định</button>
                            <button id="btn-2-3-variable"
                                style="padding: 8px 16px; background: #d1d5db; color: #374151; border: none; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600;">Chi
                                phí biến đổi</button>
                        </div>
                        <div id="chart-2-3-top-expenses" class="chart"></div>
                    </div>
                </div>

                <div class="section-block">
                    <div class="section-heading">
                        <h2>Chi tiết Chi phí</h2>
                    </div>
                    <div class="chart-row auto">
                        <div class="chart-box">
                            <h3>Xu hướng chi phí cố định và chi phí biến đổi</h3>
                            <p class="chart-subtitle">Kiểm soát điểm hòa vốn qua việc theo dõi sự ổn định của chi phí cố
                                định khi sản lượng thay đổi.</p>
                            <div id="chart-2-3-trend-line" class="chart small"></div>
                        </div>
                        <div class="chart-box">
                            <h3>Chi phí so với Doanh thu (tỷ lệ phần trăm)</h3>
                            <p class="chart-subtitle">Đảm bảo tốc độ tăng chi phí vận hành luôn thấp hơn tốc độ tăng
                                trưởng doanh thu.</p>
                            <div id="chart-2-3-ratio-combo" class="chart small"></div>
                        </div>
                    </div>
                    <div class="chart-row auto">
                        <div class="chart-box">
                            <h3>Chi phí theo nhà cung cấp</h3>
                            <p class="chart-subtitle">Nhận diện các đối tác chiến lược để đàm phán chính sách giá và
                                công nợ tốt hơn.</p>
                            <div id="chart-2-3-vendor-bar" class="chart small"></div>
                        </div>
                        <div class="chart-box">
                            <h3>Sản lượng so với Chi phí</h3>
                            <p class="chart-subtitle">Đánh giá tính kinh tế theo quy mô để xác định mức sản lượng tối ưu
                                chi phí.</p>
                            <div id="chart-2-3-quantity-scatter" class="chart small"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Page 2.4 -->
            <div id="page-2-4" class="page">
                <div class="page-header">
                    <h1>BC2.4 Lưu chuyển Tiền tệ</h1>
                </div>
                <div class="page-instruction">
                    Quản trị dòng tiền để đảm bảo khả năng thanh toán. Dòng tiền dương từ hoạt động kinh doanh ổn định
                    là ưu tiên hàng đầu.
                </div>
                <div class="kpi-row">
                    <div class="kpi-card">
                        <div class="label">Tồn đầu kỳ</div>
                        <div class="value">15.2 tỷ</div>
                        <div class="change">TM 2.1 + TG 13.1</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">Thu trong kỳ</div>
                        <div class="value">9.5 tỷ</div>
                        <div class="change up">+8% vs quý trước</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">Chi trong kỳ</div>
                        <div class="value">11.9 tỷ</div>
                        <div class="change down">+12% vs quý trước</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">Net Cash Flow</div>
                        <div class="value">-2.4 tỷ</div>
                        <div class="change down">Cần theo dõi sát</div>
                    </div>
                    <div class="kpi-card">
                        <div class="label">Days of Cash</div>
                        <div class="value">32 ngày</div>
                        <div class="change">~1 tháng chi phí</div>
                    </div>
                </div>
                <div class="chart-row">
                    <div class="chart-box">
                        <h3>Biến động dòng tiền</h3>
                        <p class="chart-subtitle">Tổng hợp các dòng tiền nạp vào và rút ra chính để tính toán Net Cash
                            Flow trong kỳ.</p>
                        <div id="chart-2-4-waterfall" class="chart"></div>
                    </div>
                    <div class="chart-box">
                        <h3>Biến động dòng tiền theo thời gian</h3>
                        <p class="chart-subtitle">Dự báo các thời điểm thiếu hụt tiền mặt để chủ động phương án huy động
                            vốn ngắn hạn.</p>
                        <div id="chart-2-4-cashflow-linebar" class="chart"></div>
                    </div>
                </div>

                <div class="section-block">
                    <div class="section-heading">
                        <h2>Chi tiết Dòng tiền</h2>
                    </div>
                    <div class="chart-row auto">
                        <div class="chart-box">
                            <h3>I. Lưu chuyển tiền từ hoạt động kinh doanh</h3>
                            <p class="chart-subtitle">Dòng tiền từ hoạt động lõi. Cần theo dõi để đảm bảo thu hồi tiền
                                từ bán hàng kịp thời.</p>
                            <div id="chart-2-4-operating" class="chart small"></div>
                        </div>
                        <div class="chart-box">
                            <h3>II. Lưu chuyển tiền từ hoạt động đầu tư</h3>
                            <p class="chart-subtitle">Phản ánh mức độ đầu tư vào tài sản cố định hoặc các khoản đầu tư
                                tài chính dài hạn.</p>
                            <div id="chart-2-4-investing" class="chart small"></div>
                        </div>
                        <div class="chart-box">
                            <h3>III. Lưu chuyển tiền từ hoạt động tài chính</h3>
                            <p class="chart-subtitle">Các hoạt động vay/trả nợ và chi trả cổ tức cho cổ đông.</p>
                            <div id="chart-2-4-financing" class="chart small"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Page 3.1 -->
            <div id="page-3-1" class="page">
                <div class="page-header">
                    <h1>BC3.1 Tổng quan Công nợ</h1>
                </div>
                <div class="page-instruction">
                    Theo dõi cân bằng vốn lưu động qua việc đối soát giữa các khoản phải thu (AR) và phải trả (AP). Đảm
                    bảo dòng tiền thu hồi đủ để đáp ứng các nghĩa vụ nợ đến hạn.
                </div>

                <!-- Row 1: 4 Charts (1fr 1fr 1fr 1fr) -->
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 20px; margin-bottom: 22px;">
                    <!-- Chart 1: Gauge AR -->
                    <div class="chart-box">
                        <h3>Phải thu (Tổng: 18.2 tỷ)</h3>
                        <p class="chart-subtitle">Tiềm năng thu hồi tiền mặt từ khách hàng.</p>
                        <div id="chart-3-1-gauge-ar" class="chart small"></div>
                    </div>

                    <!-- Chart 2: Gauge AP -->
                    <div class="chart-box">
                        <h3>Phải trả (Tổng: 15.3 tỷ)</h3>
                        <p class="chart-subtitle">Nghĩa vụ thanh toán cho nhà cung cấp và các bên liên quan.</p>
                        <div id="chart-3-1-gauge-ap" class="chart small"></div>
                    </div>

                    <!-- Chart 3: Pie AR -->
                    <div class="chart-box">
                        <h3>Phải thu: Quá hạn vs Trong hạn</h3>
                        <p class="chart-subtitle">Cảnh báo sớm rủi ro nợ xấu nếu tỷ lệ quá hạn tăng cao.</p>
                        <div id="chart-3-1-pie-ar" class="chart small"></div>
                    </div>

                    <!-- Chart 4: Pie AP -->
                    <div class="chart-box">
                        <h3>Phải trả: Quá hạn vs Trong hạn</h3>
                        <p class="chart-subtitle">Đánh giá mức độ tuân thủ cam kết thanh toán và uy tín tín dụng.</p>
                        <div id="chart-3-1-pie-ap" class="chart small"></div>
                    </div>
                </div>

                <!-- Row 2: 2 Charts (1fr 1fr) -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 22px;">
                    <!-- Chart 5: Line Chart -->
                    <div class="chart-box">
                        <h3>Phải thu vs Phải trả (12T)</h3>
                        <p class="chart-subtitle">So sánh kỳ hạn thu và trả để tối ưu hóa chu kỳ tiền mặt.</p>
                        <div id="chart-3-1-combo" class="chart"></div>
                    </div>

                    <!-- Chart 6: Waterfall Chart -->
                    <div class="chart-box">
                        <h3>Dự báo Dòng tiền: Bắt đầu → Thu AR → Trả AP → Kết thúc</h3>
                        <p class="chart-subtitle">Mô phỏng khả năng chi trả dựa trên dòng tiền thu nợ dự kiến.</p>
                        <div id="chart-3-1-waterfall" class="chart"></div>
                    </div>
                </div>
            </div>

            <!-- Page 3.2 -->
            <div id="page-3-2" class="page">
                <div class="page-header">
                    <h1>BC3.2 Nợ phải thu</h1>
                    <div class="page-instruction">
                        Phân tích chi tiết tình trạng nợ phải thu và khả năng thanh toán của khách hàng. Ưu tiên xử lý
                        các khoản nợ quá hạn có giá trị lớn.
                    </div>
                </div>

                <!-- Row 1: 3 Columns (Gauges | Top KH | Tín dụng KH) -->
                <div class="page-3-2-top-row">
                    <!-- Column 1: 2 Gauges (Vertical Stack) -->
                    <div class="page-3-2-gauges">
                        <div class="chart-box gauge-card">
                            <h3>Tỷ lệ thanh toán nhanh</h3>
                            <p class="chart-subtitle">Khả năng thanh toán tức thời. Mục tiêu duy trì > 1.0.</p>
                            <div id="chart-3-2-gauge-qr" class="chart gauge-chart"></div>
                        </div>
                        <div class="chart-box gauge-card">
                            <h3>Tỷ lệ Thu nợ để đạt mức thanh toán nhanh</h3>
                            <p class="chart-subtitle">Chỉ số dựa vào số lượng nợ đã thu hồi so với tỷ lệ nợ cần thu hồi
                                để đạt được mức có khả năng thanh toán các khoản nợ ngắn hạn</p>
                            <div id="chart-3-2-gauge-qr-target" class="chart gauge-chart"></div>
                        </div>
                    </div>

                    <!-- Column 2: Top KH Nợ nhiều nhất -->
                    <div class="chart-box bar-chart-card">
                        <h3>Top KH Nợ nhiều nhất (Cần Thu)</h3>
                        <p class="chart-subtitle">Danh sách các khách hàng cần phải thu hồi nợ để đạt đủ tỷ lệ nợ còn
                            thiếu để đáp ứng khả năng thanh toán. Danh sách được sắp xếp từ các khách hàng có số lượng
                            nợ lớn nhất đến nhỏ nhất cho đến khi đủ khoản thu cần.
                        </p>
                        <div id="chart-3-2-top-customers" class="chart bar-horizontal-large"></div>
                    </div>

                    <!-- Column 3: Tín dụng KH -->
                    <div class="chart-box bar-chart-card">
                        <h3>Tín dụng KH (Tỷ lệ Thanh toán Lịch sử)</h3>
                        <p class="chart-subtitle">Phân loại khách hàng dựa trên lịch sử tuân thủ thời hạn thanh toán.
                        </p>
                        <div id="chart-3-2-customer-credit" class="chart bar-horizontal-large"></div>
                    </div>
                </div>

                <!-- Row 2: 2 Columns (Heatmap | Table) -->
                <div class="page-3-2-bottom-row">
                    <!-- Left: Heatmap -->
                    <div class="chart-box heatmap-card">
                        <h3>Heatmap: KH x Aging Bucket</h3>
                        <p class="chart-subtitle">Nhận diện các nhóm khách hàng có xu hướng chây ì hoặc gặp khó khăn tài
                            chính.</p>
                        <div id="chart-3-2-heatmap-customer-aging" class="chart heatmap-chart"></div>
                    </div>

                    <!-- Right: Table -->
                    <div class="chart-box table-card">
                        <div class="table-header-row">
                            <h3>Chi tiết Phải thu theo KH</h3>

                        </div>
                        <div class="table-wrapper">
                            <table class="data-table enhanced-table">
                                <thead>
                                    <tr>
                                        <th>Khách hàng</th>
                                        <th>Số tiền</th>
                                        <th>Aging</th>
                                        <th>Ưu tiên</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table-row-high">
                                        <td>
                                            <div class="customer-info">

                                                <span class="customer-name">Delta Transport Co.</span>
                                            </div>
                                        </td>
                                        <td><span class="amount-value">3.2 tỷ</span></td>
                                        <td><span class="aging-badge aging-high">45 ngày</span></td>
                                        <td><span class="badge red priority-badge">🔴 Cao</span></td>
                                    </tr>
                                    <tr class="table-row-high">
                                        <td>
                                            <div class="customer-info">

                                                <span class="customer-name">Logistics Plus Vietnam</span>
                                            </div>
                                        </td>
                                        <td><span class="amount-value">2.8 tỷ</span></td>
                                        <td><span class="aging-badge aging-high">38 ngày</span></td>
                                        <td><span class="badge red priority-badge">🔴 Cao</span></td>
                                    </tr>
                                    <tr class="table-row-medium">
                                        <td>
                                            <div class="customer-info">

                                                <span class="customer-name">Express Global Ltd</span>
                                            </div>
                                        </td>
                                        <td><span class="amount-value">2.1 tỷ</span></td>
                                        <td><span class="aging-badge aging-medium">25 ngày</span></td>
                                        <td><span class="badge orange priority-badge">🟠 TB</span></td>
                                    </tr>
                                    <tr class="table-row-medium">
                                        <td>
                                            <div class="customer-info">

                                                <span class="customer-name">Swift Shipping Co.</span>
                                            </div>
                                        </td>
                                        <td><span class="amount-value">1.9 tỷ</span></td>
                                        <td><span class="aging-badge aging-medium">15 ngày</span></td>
                                        <td><span class="badge orange priority-badge">🟠 TB</span></td>
                                    </tr>
                                    <tr class="table-row-low">
                                        <td>
                                            <div class="customer-info">

                                                <span class="customer-name">Ocean Freight Solutions</span>
                                            </div>
                                        </td>
                                        <td><span class="amount-value">1.5 tỷ</span></td>
                                        <td><span class="aging-badge aging-low">10 ngày</span></td>
                                        <td><span class="badge green priority-badge">🟢 Thấp</span></td>
                                    </tr>
                                    <tr class="table-row-low">
                                        <td>
                                            <div class="customer-info">

                                                <span class="customer-name">Direct Cargo Services</span>
                                            </div>
                                        </td>
                                        <td><span class="amount-value">1.2 tỷ</span></td>
                                        <td><span class="aging-badge aging-low">5 ngày</span></td>
                                        <td><span class="badge green priority-badge">🟢 Thấp</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Page 3.3 -->
            <div id="page-3-3" class="page">
                <div class="page-header">
                    <h1>BC3.3 Nợ phải trả</h1>
                    <div class="page-instruction">
                        Quản lý mối quan hệ với NCC và tối ưu hóa thời gian chiếm dụng vốn hợp lý mà không gây ảnh hưởng
                        đến uy tín doanh nghiệp.
                    </div>
                </div>

                <!-- Row 1: Pie + Bar with Toggle + Pareto -->
                <div class="page-3-3-row1">
                    <!-- Pie Chart: Nợ ngắn hạn vs Dài hạn -->
                    <div class="chart-box">
                        <h3>Cơ cấu Nợ phải trả</h3>
                        <p class="chart-subtitle">Tỷ lệ nợ ngắn hạn và dài hạn trong tổng nghĩa vụ trả nợ.</p>
                        <div id="chart-3-3-debt-pie" class="chart" style="height: 320px;"></div>
                    </div>

                    <!-- Bar Chart with Toggle -->
                    <div class="chart-box">
                        <div class="chart-header-with-toggle">
                            <h3>Chi tiết các khoản Nợ</h3>
                            <div class="toggle-buttons">
                                <button class="toggle-btn active" data-type="short"
                                    onclick="toggleDebtChart('short')">Ngắn hạn</button>
                                <button class="toggle-btn" data-type="long" onclick="toggleDebtChart('long')">Dài
                                    hạn</button>
                            </div>
                        </div>
                        <p class="chart-subtitle" style="margin-top: -10px; margin-bottom: 10px;">Theo dõi dư nợ theo
                            từng phân loại (vay ngân hàng, trả NCC, khác). Sử dụng nút gạt để xem nợ ngắn/dài hạn.</p>
                        <div id="chart-3-3-debt-bar" class="chart" style="height: 280px;"></div>
                    </div>

                    <!-- Pareto Chart: Top NCC theo dư nợ -->
                    <div class="chart-box">
                        <h3>Top NCC theo Dư nợ (Pareto)</h3>
                        <p class="chart-subtitle">20% nhà cung cấp chiếm giữ phần lớn dư nợ phải trả.</p>
                        <div id="chart-3-3-pareto" class="chart" style="height: 320px;"></div>
                    </div>
                </div>

                <!-- Row 2: Charts + Table -->
                <div class="page-3-3-row2">
                    <!-- Trend Line Chart -->
                    <div class="chart-box">
                        <h3>Xu hướng Nợ phải trả (6 tháng)</h3>
                        <p class="chart-subtitle">Kiểm soát tốc độ tăng nợ so với tốc độ tăng trưởng quy mô kinh doanh.
                        </p>
                        <div id="chart-3-3-trend" class="chart" style="height: 280px;"></div>
                    </div>

                    <!-- Aging Bar Chart -->
                    <div class="chart-box">
                        <h3>Aging Nợ phải trả</h3>
                        <p class="chart-subtitle">Lịch trình thanh toán đến hạn để chủ động kế hoạch dòng tiền chi trả.
                        </p>
                        <div id="chart-3-3-aging" class="chart" style="height: 280px;"></div>
                    </div>
                </div>

                <!-- Row 3: Detailed Table -->
                <div class="chart-box" style="margin-top: 20px;">
                    <div class="table-header-row">
                        <h3>Chi tiết các khoản Phải trả</h3>
                    </div>
                    <div class="table-wrapper" style="max-height: 350px;">
                        <table class="data-table enhanced-table">
                            <thead>
                                <tr>
                                    <th>Nhà cung cấp</th>
                                    <th>Loại nợ</th>
                                    <th>Số tiền (tỷ)</th>
                                    <th>Ngày đến hạn</th>
                                    <th>Aging</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-row-high">
                                    <td><span class="customer-name">NCC Vật tư Miền Nam</span></td>
                                    <td>Ngắn hạn</td>
                                    <td><span class="amount-value">4.2 tỷ</span></td>
                                    <td>15/12/2024</td>
                                    <td><span class="aging-badge aging-high">52 ngày</span></td>
                                    <td><span class="badge red">Quá hạn</span></td>
                                </tr>
                                <tr class="table-row-high">
                                    <td><span class="customer-name">Cty TNHH Logistics Toàn Cầu</span></td>
                                    <td>Ngắn hạn</td>
                                    <td><span class="amount-value">3.8 tỷ</span></td>
                                    <td>20/12/2024</td>
                                    <td><span class="aging-badge aging-high">47 ngày</span></td>
                                    <td><span class="badge red">Quá hạn</span></td>
                                </tr>
                                <tr class="table-row-medium">
                                    <td><span class="customer-name">Công ty CP Sà Lan Việt</span></td>
                                    <td>Ngắn hạn</td>
                                    <td><span class="amount-value">2.5 tỷ</span></td>
                                    <td>05/01/2025</td>
                                    <td><span class="aging-badge aging-medium">31 ngày</span></td>
                                    <td><span class="badge orange">Sắp đến hạn</span></td>
                                </tr>
                                <tr class="table-row-medium">
                                    <td><span class="customer-name">Tập đoàn Vận tải Biển Đông</span></td>
                                    <td>Dài hạn</td>
                                    <td><span class="amount-value">5.0 tỷ</span></td>
                                    <td>15/06/2025</td>
                                    <td><span class="aging-badge aging-low">-</span></td>
                                    <td><span class="badge green">Trong hạn</span></td>
                                </tr>
                                <tr class="table-row-low">
                                    <td><span class="customer-name">NCC Nhiên liệu ABC</span></td>
                                    <td>Ngắn hạn</td>
                                    <td><span class="amount-value">1.8 tỷ</span></td>
                                    <td>10/01/2025</td>
                                    <td><span class="aging-badge aging-low">15 ngày</span></td>
                                    <td><span class="badge green">Trong hạn</span></td>
                                </tr>
                                <tr class="table-row-low">
                                    <td><span class="customer-name">Cty Bảo hiểm PVI</span></td>
                                    <td>Ngắn hạn</td>
                                    <td><span class="amount-value">1.2 tỷ</span></td>
                                    <td>20/01/2025</td>
                                    <td><span class="aging-badge aging-low">5 ngày</span></td>
                                    <td><span class="badge green">Trong hạn</span></td>
                                </tr>
                                <tr class="table-row-low">
                                    <td><span class="customer-name">Ngân hàng BIDV</span></td>
                                    <td>Dài hạn</td>
                                    <td><span class="amount-value">8.0 tỷ</span></td>
                                    <td>30/12/2026</td>
                                    <td><span class="aging-badge aging-low">-</span></td>
                                    <td><span class="badge green">Trong hạn</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="mockup_charts.js"></script>
</body>

</html>
