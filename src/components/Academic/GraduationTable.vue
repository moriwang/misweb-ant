<template>
    <a-table :columns="columns" :dataSource="data" bordered>
    </a-table>
</template>

<script>
    const columns = [
        {
            title:'',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title:'論文名稱',
            dataIndex: 'paper',
            key: 'paper',
        },
        {
            title: '學生名稱',
            dataIndex: 'student',
            key: 'student',
        },
        {
            title: '老師名稱',
            dataIndex: 'teacher',
            key: 'teacher',
        },
    ];

    const data = [
        {
            index: '1',
            paper: '結合使用者與項目為基礎之協同過濾文獻推薦系統－學術大數據之應用',
            student: '王俐涵',
            teacher: '陳宗天',
        },
        {
            index: '2',
            paper: '改進深度學習自動作曲系統－應用更豐富的MIDI資料',
            student: '林桓均',
            teacher: '陳宗天',
        },
        {
            index: '3',
            paper: '字串型態的使用者行為分布建模',
            student: '陳彥杰',
            teacher: '溫演福\n陳郁方',
        },
        {
            index: '4',
            paper: '台灣電影口碑語料庫之建置架構',
            student: '楊少捷',
            teacher: '汪志堅',
        },
        {
            index: '5',
            paper: '應用人工智慧方法偵測網軍口碑',
            student: '劉家瑋',
            teacher: '汪志堅',
        },
        {
            index: '6',
            paper: '社群媒體廣告對顧客參與影響之研究',
            student: '王怜惠',
            teacher: '江義平',
        },
        {
            index: '7',
            paper: '5G網路緩存與傳輸效能改善－以Facebook內容傳遞為例',
            student: '蔡汶儒',
            teacher: '溫演福',
        },
        {
            index: '8',
            paper: '緊急醫療物資儲備中心選址知研究',
            student: '林士傑',
            teacher: '方鄒昭聰',
        },
        {
            index: '9',
            paper: '根基於IEEE 802.11ac 傳輸模式選擇以增進服務品質研究',
            student: '陳彥竹',
            teacher: '溫演福',
        },
        {
            index: '10',
            paper: '利用機器學習辨識專有名詞－以提升中文斷字斷詞的績效',
            student: '吳冠誼',
            teacher: '陳宗天',
        },
    ];

    export default {
        name: "GraduationTable",
        data() {
            return {
                data,
                columns,
            };
        },
    }
</script>

<style scoped>
    >>>.ant-table-tbody > tr > td {
        white-space: pre-wrap;
    }
</style>
