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
    import {newsManager, pageSlide} from "@/api";


    export default {
        name: "Competition",
        components: {
            ContentLayout,
            NewsCard
        },
        mounted() {
            this.getPageSlide(
                {
                    'pageId': this.$route.name,
                })

            newsManager(
                {
                    location: '1-3'
                }
            ).then(response => {
                this.news = response
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
