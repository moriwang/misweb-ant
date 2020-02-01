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

    const slidetitle = [
        {
            'chinese': '歷屆論文',
            'english': 'Graduation thesis',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
    ];

    export default {
        name: "Graduation",
        components: {
            ContentLayout,
            YearSelect,
            GraduationTable
        },
        data() {
            return {
                slidetitle: slidetitle
            }
        }
    }
</script>

<style scoped>
</style>
