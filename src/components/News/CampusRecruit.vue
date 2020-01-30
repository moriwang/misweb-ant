<template>
    <div>
        <Slide :title="slidetitle"></Slide>
        <content-layout>
            <template v-slot:content>
                <news-card :news="news"></news-card>
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
            'chinese': '企業徵才',
            'english': 'Campus recruit',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
    ]

    const news = [
        {
            'tag': '企業徵才',
            'tagcolor': 'rgba(246,154,41)',
            'title': 'XX企業徵才範例資訊',
            'date': '2016/09/27',
            'post':'XX企業徵才範例資訊',
            'fileName': '',
            'fileURL': ''
        },
    ]

    export default {
        name: "CampusRecruit",
        components:{
            ContentLayout,
            Slide,
            NewsCard
        },
        data() {
            return{
                slidetitle: slidetitle,
                news: news
            }
        }
    }
</script>

<style scoped>
</style>
