<template>
    <div>
        <a-row :gutter="24">
            <a-col :key="index" :md="8" :sm="12" :xl="6" :xs="24" v-for="(k,index) in news">
                <a-card :style="{'background-color':backgroundColor(k.tagcolor)}" @click="showModal(k)" hoverable
                        id="single-news">
                    <a-tag :color="k.tagcolor" @click="handleRoute(k.location)">{{k.tag}}</a-tag>
                    <br>
                    <h4 v-if="k.top">「置頂」{{k.title}}</h4>
                    <h4 v-else>{{k.title}}</h4>
                    <br>
                    <p>{{handleDate(k.date)}}</p>
                </a-card>
            </a-col>
        </a-row>
        <a-modal :title="singlenews.title" @ok="handleOk()" centered v-model="visible" width="600px">
            <template slot="footer">
                <div style="text-align: left;padding: 6px 8px" v-if="singlenews.attachment">
                    <h4>附件下載</h4>
                    <div :key="k.fileName" v-for="k in singlenews.attachment">
                        <a :href="k.fileURL">
                            <a-icon type="file"/>
                            {{k.fileName}}</a>
                        <br>
                    </div>
                </div>
                <div v-else>
                    <p></p>
                </div>
            </template>
            <p class="news-post">{{singlenews.post}}</p>
        </a-modal>
    </div>
</template>

<script>
    import {getDate} from '@/utils'

    export default {
        name: "NewsCard",
        props: {
            news: {
                type: Array
            }
        },
        data() {
            return {
                singlenews: [],
                visible: false
            }
        },
        methods: {
            backgroundColor(color) {
                return color.replace(')', ',0.03)')
            },
            showModal(k) {
                this.singlenews = k;
                this.visible = true
            },
            handleOk() {
                this.visible = false;
                this.singlenews = []
            },
            handleDate(date) {
                return getDate(date)
            },
            handleRoute(location) {
                if(location !== this.$route.name){
                    this.visible = false
                    this.$router.push({ name: location })
                }
            }
        }
    }
</script>

<style scoped>
    #single-news {
        height: 200px;
        margin-bottom: 24px;
    }

    @media only screen and (max-width: 549px) {
        #single-news {
            height: 170px;
        }
    }

    #single-news .ant-tag {
        margin-bottom: 12px;
    }

    #single-news p {
        position: absolute;
        bottom: 0;
        color: #666668;
    }

    .news-post {
        white-space: pre-wrap;
        margin-bottom: 0;
        padding-right: 12px
    }
</style>
