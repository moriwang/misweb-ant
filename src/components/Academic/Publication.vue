<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
            <h2>歷屆研討會論文發表</h2>
            <div v-if="yearlist[0]">
                <a-select :defaultValue="yearlist[0].toString()" style="width: 100%" @change="handleChange">
                    <a-select-option :key="year" :value="year.toString()" v-for="year in yearlist">{{year}} 學年度</a-select-option>
                </a-select>
            </div>
            <br>
            <a-table :columns="columns" :dataSource="data" bordered :pagination="false">
            </a-table>
        </template>
    </content-layout>
</template>

<script>
    import ContentLayout from "@/components/ContentLayout";
    import {pageSlide, paperManager, paperyearList} from "@/api";

    const columns = [
        {
            title: '',
            dataIndex: 'key',
            key: 'key',
            width: '5%',
            align: 'center'
        },
        {
            title: '論文名稱',
            dataIndex: 'thesis',
            key: 'thesis',
            width: '40%',
        },
        {
            title: '學生名稱',
            dataIndex: 'student',
            key: 'student',
            width: '13%',
        },
        {
            title: '老師名稱',
            dataIndex: 'teacher',
            key: 'teacher',
            width: '17%',
        },
        {
            title: '研討會名稱',
            key: 'seminar',
            dataIndex: 'seminar',
        },
    ];

    export default {
        name: "Research",
        components: {
            ContentLayout,
        },
        mounted() {
            this.getPageSlide(
                {
                    'pageId': this.$route.name,
                })

            paperyearList({'graduation': 0}
            ).then(response => {
                this.yearlist = response
                this.getPaper({
                    'year': this.yearlist[0],
                    'graduation': 0
                })
            })
        },
        data() {
            return {
                slidetitle: [],
                yearlist: [],
                columns: columns,
                data:[],
            }
        },
        methods: {
            handleChange(value) {
                // eslint-disable-next-line no-console
                // console.log(`selected ${value}`);
                this.getPaper({
                    'year': value,
                    'graduation': 0
                })
            },

            getPageSlide(parameter) {
                pageSlide(parameter).then(response => {
                    this.slidetitle = response
                })
            },

            getPaper(parameter) {
                paperManager(parameter).then(response => {
                    for (let i = 0; i < response.length; i++){
                        response[i].key = i + 1
                    }
                    this.data = response
                })
            },
        }
    }
</script>

<style scoped>
    >>> .ant-table-tbody > tr > td {
        white-space: pre-wrap;
    }
</style>
