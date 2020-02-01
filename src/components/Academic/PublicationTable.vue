<template>
    <a-table :columns="columns" :dataSource="data" bordered>
    </a-table>
</template>

<script>
    const columns = [
        {
            title: '',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: '論文名稱',
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
        {
            title: '研討會名稱',
            key: 'seminar',
            dataIndex: 'seminar',
        },
    ];

    const data = [
        {
            key: '1',
            paper: '消防領域資料視覺化輔助決策系統',
            student: '蔣誌元',
            teacher: '方鄒昭聰\n溫演福',
            seminar: '2016國際學術研討會'
        },
        {
            key: '2',
            paper: '資料探勘應用於消防領域之關鍵績效指標研究',
            student: '吳帛儒',
            teacher: '方鄒昭聰',
            seminar: '2016國際學術研討會'
        },
        {
            key: '3',
            paper: '以資料探勘模組建立火警案件數量預測之研究',
            student: '邱政琦',
            teacher: '方鄒昭聰',
            seminar: '2015第十四屆北商大學術論壇-國際經營與管理實務研討會'
        },
        {
            key: '4',
            paper: '消費者跨屏採用及媒體參與行為探究',
            student: '吳佳惠',
            teacher: '江義平\n蔡坤宏',
            seminar: '2015全國商學研討會'
        },
        {
            key: '5',
            paper: '資訊視覺化技術內涵與其相關研究領域',
            student: '林盈萱',
            teacher: '陳宗天',
            seminar: '2015追求高教卓越國際學術研討會'
        },
        {
            key: '6',
            paper: '運動資料分析研究之智識建構',
            student: '李治平',
            teacher: '陳宗天',
            seminar: '2015追求高教卓越國際學術研討會'
        },
        {
            key: '7',
            paper: '從社交參與行為的角度探究社交廣告的影響',
            student: '羅詩惠',
            teacher: '江義平\n蔡坤宏',
            seminar: '第26屆國際資訊管理學術研討會'
        },
        {
            key: '8',
            paper: '行動裝置資訊安全之智識建構',
            student: '謝祥榆',
            teacher: '陳宗天\n何善輝（已退休）',
            seminar: '2015追求高教卓越國際學術研討會'
        },
        {
            key: '9',
            paper: '移動技術內涵與其相關研究領域',
            student: '邱則凱',
            teacher: '溫演福\n陳郁方',
            seminar: '2015追求高教卓越國際學術研討會'
        },
    ];

    export default {
        name: "PublicationTable",
        data() {
            return {
                data,
                columns,
            };
        },
    }
</script>

<style scoped>
    >>> .ant-table-tbody > tr > td {
        white-space: pre-wrap;
    }
</style>
