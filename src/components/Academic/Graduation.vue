<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
            <h2>歷屆畢業生論文</h2>
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
    import {getSlide, getPaperYearList, getPaper} from "@/api";

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
    ];

    export default {
        name: "Graduation",
        components: {
            ContentLayout,
        },
        mounted() {
            this.getgetSlide(
                {
                    'pageId': this.$route.name,
                })

            getPaperYearList({'graduation': 1}
            ).then(response => {
                this.yearlist = response
                this.getPaper({
                    'year': this.yearlist[0],
                    'graduation': 1
                })
            })
        },
        data() {
            return {
                slidetitle: [],
                columns: columns,
                data:[],
                yearlist: []
            }
        },
        methods: {
            handleChange(value) {
                // eslint-disable-next-line no-console
                // console.log(`selected ${value}`);
                this.getPaper({
                    'year': value,
                    'graduation': 1
                })
            },

            getgetSlide(parameter) {
                getSlide(parameter).then(response => {
                    this.slidetitle = response
                })
            },

            getPaper(parameter) {
                getPaper(parameter).then(response => {
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
