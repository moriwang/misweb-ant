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
    import {pageSlide} from "@/api";

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
        mounted() {
            this.getPageSlide(
                {
                    'pageId': this.$route.name,
                })
        },
        data() {
            return {
                slidetitle: [],
                news: news
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
