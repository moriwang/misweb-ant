<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
            <h2>歷屆研討會論文發表</h2>
            <year-select></year-select>
            <br>
            <br>
            <publication-table></publication-table>
        </template>
    </content-layout>
</template>

<script>
    import ContentLayout from "@/components/ContentLayout";
    import PublicationTable from "@/components/Academic/PublicationTable";
    import YearSelect from "@/components/Academic/YearSelect";
    import {pageSlide} from "@/api";


    export default {
        name: "Research",
        components: {
            ContentLayout,
            PublicationTable,
            YearSelect
        },
        mounted() {
            this.getPageSlide(
                {
                    'pageId': this.$route.name,
                })
        },
        data() {
            return {
                slidetitle: []
            }
        },
        methods: {
            getPageSlide(parameter) {
                pageSlide(parameter).then(response => {
                    this.slidetitle = response
                })
            },
        }
    }
</script>

<style scoped>
</style>
