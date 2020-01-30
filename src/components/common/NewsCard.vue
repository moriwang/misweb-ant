<template>
    <div>
        <a-row :gutter="24">
            <a-col :xl="6" :md="8" :sm="12" :xs="24" v-for="(k,index) in news" :key="index">
                <a-card id="single-news" :style="{'background-color':backgroundColor(k.tagcolor)}" hoverable @click="showModal(k)">
                    <a-tag :color="k.tagcolor">{{k.tag}}</a-tag>
                    <br>
                    <h4>{{k.title}}</h4>
                    <br>
                    <p>{{k.date}}</p>
                </a-card>
            </a-col>
        </a-row>
        <a-modal :title="singlenews.title" centered v-model="visible" @ok="handleOk()" width="600px">
            <template slot="footer">
                <div v-if="singlenews.attachment" style="text-align: left;padding: 6px 8px">
                    <h4>附件下載</h4>
                    <div v-for="k in singlenews.attachment" :key="k.fileName">
                        <a :href="k.fileURL"><a-icon type="file" /> {{k.fileName}}</a>
                        <br>
                    </div>
                </div>
                <div v-else>
                    <p> </p>
                </div>
            </template>
            <p class="news-post">{{singlenews.post}}</p>
        </a-modal>
    </div>
</template>

<script>
    export default {
        name: "NewsCard",
        props:{
            news:{
                type: Array
            }
        },
        data() {
            return{
                singlenews: [],
                visible: false
            }
        },
        methods: {
            backgroundColor(color){
                return color.replace(')',',0.03)')
            },
            showModal(k){
                this.singlenews = k
                this.visible = true
            },
            handleOk(){
                this.visible = false
                this.singlenews = []
            },
        }
    }
</script>

<style scoped>
    #single-news{
        height: 200px;
        margin-bottom: 24px;
    }

    @media only screen and (max-width: 549px) {
        #single-news{
            height: 170px;
        }
    }

    #single-news .ant-tag{
        margin-bottom: 12px;
    }

    #single-news p{
        position: absolute;
        bottom: 0;
        color: #666668;
    }

    .news-post{
        white-space: pre-wrap;
        margin-bottom: 0;
        padding-right: 12px
    }
</style>
