<template>
    <div>
        <Slide :title="slidetitle"></Slide>
        <content-layout>
            <template v-slot:content>
                <h2>歷屆研討會論文發表</h2>
                <year-select></year-select>
                <br>
                <br>
                <publication-table></publication-table>
            </template>
        </content-layout>
    </div>
</template>

<script>
    import Slide from "@/components/common/Slide";
    import ContentLayout from "@/components/ContentLayout";
    import PublicationTable from "@/components/Academic/PublicationTable";
    import YearSelect from "@/components/Academic/YearSelect";

    const slidetitle = [
        {
            'chinese': '學術發表',
            'english': 'Academic publication',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
    ]

    export default {
        name: "Research",
        components:{
            Slide,
            ContentLayout,
            PublicationTable,
            YearSelect
        },
        data() {
            return{
                slidetitle: slidetitle
            }
        }
    }
</script>

<style scoped>
</style>
