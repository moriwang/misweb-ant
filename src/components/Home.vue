<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
            <h2>最新公告</h2>
            <news-card :news="news"></news-card>
        </template>
    </content-layout>
</template>

<script>
    import ContentLayout from "@/components/ContentLayout";
    import NewsCard from "@/components/common/NewsCard";
    import {newsManager, pageSlide} from "@/api";


    export default {
        name: "Home",
        components: {
            ContentLayout,
            NewsCard
        },
        mounted() {
            newsManager(
                {
                    location: '0'
                }
            ).then(response => {
                this.news = response
            })

            this.getPageSlide(
                {
                    'pageId': this.$route.name,
                })
        },
        data() {
            return {
                slidetitle: [],
                news: []
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
