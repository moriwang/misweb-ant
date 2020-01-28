<template>
    <a-table :columns="columns" :dataSource="data" bordered :pagination="false">
    </a-table>
</template>

<script>
    const data = [
        {
            key: '1',
            category: '甄試',
            type: '',
            admissions: '6',
            subjects: '資料審查',
            percent: '50%',
        },
        {
            key: '2',
            category: '甄試',
            type: '',
            admissions: '6',
            subjects: '口試',
            percent: '50%',
        },
        {
            key: '3',
            category: '一般招生',
            type: '甲',
            admissions: '5',
            subjects: '選考(2選1)：\n' +
                '1. 管理資訊系統\n' +
                '2. 計算機概論',
            percent: '100%',
        },
        {
            key: '4',
            category: '一般招生',
            type: '乙',
            admissions: '4',
            subjects: '資料審查',
            percent: '50%',
        },
        {
            key: '5',
            category: '一般招生',
            type: '乙',
            admissions: '6',
            subjects: '口試',
            percent: '50%',
        },
    ]

    export default {
        name: "AdmissionTable",
        data() {
            const columns = [
                {
                    title: '考試別',
                    dataIndex: 'category',
                    customRender: (value, row, index) => {
                        const obj = {
                            children: value,
                            attrs: {},
                        };
                        if (index === 0) {
                            obj.attrs.rowSpan = 2;
                        }
                        if (index === 1) {
                            obj.attrs.colSpan = 0;
                        }
                        if (index === 2) {
                            obj.attrs.rowSpan = 3;
                        }
                        if (index === 3) {
                            obj.attrs.colSpan = 0;
                        }
                        if (index === 4) {
                            obj.attrs.colSpan = 0;
                        }
                        return obj;
                    },
                },
                {
                    title: '組別',
                    dataIndex: 'type',
                    customRender: (value, row, index) => {
                        const obj = {
                            children: value,
                            attrs: {},
                        };
                        if (index === 0) {
                            obj.attrs.rowSpan = 2;
                        }
                        if (index === 1) {
                            obj.attrs.colSpan = 0;
                        }
                        if (index === 3) {
                            obj.attrs.rowSpan = 2;
                        }
                        if (index === 4) {
                            obj.attrs.colSpan = 0;
                        }
                        return obj;
                    },
                },
                {
                    title: '錄取人數',
                    dataIndex: 'admissions',
                    customRender: (value, row, index) => {
                        const obj = {
                            children: value,
                            attrs: {},
                        };
                        if (index === 0) {
                            obj.attrs.rowSpan = 2;
                        }
                        if (index === 1) {
                            obj.attrs.colSpan = 0;
                        }
                        return obj;
                    },
                },
                {
                    title: '考試科目',
                    colSpan: 2,
                    dataIndex: 'subjects',
                },
                {
                    title: '百分比',
                    colSpan: 0,
                    dataIndex: 'percent',
                },
            ];
            return{
                data,
                columns,
            }
        }
    }
</script>

<style scoped>
    >>>.ant-table-tbody > tr > td {
        white-space: pre-wrap;
    }
</style>
