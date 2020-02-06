<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
            <news-card :news="news"></news-card>
            <div style="text-align: center; margin-top: 10px">
                <a-button type="" @click="getMoreNews()" v-if="loadmore">加載更多</a-button>
                <p v-else style="font-size: 14px; color: #b1b1b4">—— 没有更多了 ——</p>
            </div>
        </template>
    </content-layout>
</template>

<script>
    import ContentLayout from "@/components/ContentLayout";
    import NewsCard from "@/components/common/NewsCard";
    import {newsManager, newsMore, pageSlide} from "@/api";


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
                this.news = response[0]
                this.total = response[1]
                if(this.news.length < this.total){
                    this.loadmore = true
                }
            })
        },
        data() {
            return {
                slidetitle: [],
                news: [],
                total: '',
                page: 1,
                loadmore: false
            }
        },
        methods: {
            getPageSlide(parameter) {
                pageSlide(parameter).then(response => {
                    this.slidetitle = response
                })
            },
            getMoreNews() {
                let parameter = {
                    'page': this.page,
                    'location': '1-3'
                }
                if (this.total - this.news.length > 0){
                    newsMore(parameter).then(response => {
                        this.news = this.news.concat(response)
                        this.page ++
                        if (this.news.length == this.total){
                            this.loadmore = false
                        }
                    })
                }
                else{
                    this.loadmore = false
                }
            },
        }
    }
</script>

<style scoped>
</style>
