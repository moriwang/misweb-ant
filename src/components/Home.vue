<template>
    <div>
    <Slide :title="slidetitle"></Slide>
        <content-layout>
            <template v-slot:content>
                <h2>最新公告</h2>
                <news-card></news-card>
            </template>
        </content-layout>
    </div>
</template>

<script>
    import Slide from "@/components/common/Slide";
    import ContentLayout from "@/components/ContentLayout";
    import NewsCard from "@/components/common/NewsCard";

    const slidetitle = [
        {
            'chinese': '國立台北大學資訊管理所',
            'english': 'Graduate Institute of Information Management, NTPU',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
        {
            'chinese': '國立台北大學資訊管理所',
            'english': 'Graduate Institute of Information Management, NTPU',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        }
    ]

    export default {
        name: "Home",
        components:{
            Slide,
            ContentLayout,
            NewsCard
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
