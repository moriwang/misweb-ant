<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
            <news-card :news="news"></news-card>
        </template>
    </content-layout>
</template>

<script>
    import ContentLayout from "@/components/ContentLayout";
    import NewsCard from "@/components/common/NewsCard";

    const slidetitle = [
        {
            'chinese': '所務公告',
            'english': 'Administrative announcement',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
    ];

    const news = [
        {
            'tag': '所上活動',
            'tagcolor': 'rgba(13,181,39)',
            'title': '演講二 - 從經銷代理看到創業契機',
            'date': '2016/09/27',
            'post': '呂俊毅先生、麗茂股份有限公司業務副總進行演講',
            'fileName': '',
            'fileURL': ''
        },
    ];

    export default {
        name: "Notice",
        components: {
            ContentLayout,
            NewsCard
        },
        data() {
            return {
                slidetitle: slidetitle,
                news: news
            }
        }
    }
</script>

<style scoped>

</style>
