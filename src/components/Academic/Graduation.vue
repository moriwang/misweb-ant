<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
            <h2>歷屆畢業生論文</h2>
            <year-select></year-select>
            <br>
            <br>
            <graduation-table></graduation-table>
        </template>
    </content-layout>
</template>

<script>
    import ContentLayout from "@/components/ContentLayout";
    import YearSelect from "@/components/Academic/YearSelect";
    import GraduationTable from "@/components/Academic/GraduationTable";
    import {pageSlide} from "@/api";


    export default {
        name: "Graduation",
        components: {
            ContentLayout,
            YearSelect,
            GraduationTable
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
