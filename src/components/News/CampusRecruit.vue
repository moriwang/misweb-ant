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
            'tag': '企業徵才',
            'tagcolor': 'rgba(246,154,41)',
            'title': 'XX企業徵才範例資訊',
            'date': '2016/09/27',
            'post': 'XX企業徵才範例資訊',
            'fileName': '',
            'fileURL': ''
        },
    ];

    export default {
        name: "CampusRecruit",
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
