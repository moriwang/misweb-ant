<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
            <h2>修業時程安排</h2>
            <a-steps :current="4" :direction="getDirection(screenWidth)" id="degree-progress" progressDot>
                <a-step :description="k.describe" :key="index" :title="k.step" v-for="(k,index) in degreeProgress"/>
            </a-steps>
            <br>
            <h2>學術著作之要求</h2>
            <p>
                碩士班學生取得碩士學位前，應至少有一篇中文學術著作發表或被接受於學術出版品上
                ；或至少有一篇英文學術著作達到可發表之水準，其標準由指導教授認定。<br>
                本要求可以考取本所審核通過之專業認證證照代替學術著作之發表。
            </p>
            <br>
            <h2>資管實作能力之要求</h2>
            <p>
                碩士班學生畢業前，至少需符合下列之一的實作能力要求<br>
                1.資訊系統開發<br>
                2.網站建置及發展<br>
                3.系統分析<br>
                4.網路行銷企劃及分析<br>
                5.社群分析經營行銷<br>
                6.數位內容創新活動<br>
                7.其它有關資訊系統開發或網路行銷等<br>
            </p>
            <!--                <br>-->
            <h4>* 參加實習者可抵「學術著作」、「資管實作」共2項畢業能力要求。</h4>
            <br>
            <h2>英語能力之要求</h2>
            <p>
                碩士班學生畢業前，需符合至少下列之一的基本英語能力要求：<br>
                1.以英文撰寫學位論文<br>
                2.投稿以英文為官方語言之國際研討會，稿件並獲得接受<br>
                3.通過全民英檢中級測驗，或者相當於全民英檢中級測驗之其他語言能力測驗<br>
                4.投稿以英文為官方語言之國際期刊並獲得第一階段審查結果為通過或修改<br>
            </p>
            <br>
            <h2>全球視野能力之要求</h2>
            <p>
                碩士班學生入學後，需參加「國外學術交流」活動，活動種類以點數計，畢業前共需完成6點。
            </p>
            <br>
            <h2>歷年修業規定下載</h2>
            <div :key="k.linkCN" v-for="k in degreeRequirements">
                <a :href="k.linkURL">
                    <a-icon type="file"/>
                    {{k.linkCN}}</a>
                <br>
            </div>
        </template>
    </content-layout>
</template>

<script>
    import ContentLayout from "@/components/ContentLayout";
    import {pageSlide, linkManager} from "@/api";


    const degreeProgress = [
        {
            'step': '商請指導教授',
            'describe': '第一學年第二學期期中考試前'
        },
        {
            'step': '論文構想發表',
            'describe': '學位口試前二學期前通過論文構想發表'
        },
        {
            'step': '論文計畫書發表',
            'describe': '學位口試前一學期前通過論文計畫書發表'
        },
        {
            'step': '學位口試',
            'describe': '修畢規定課程與學分，得申請學位考試'
        },
    ];

    export default {
        name: "Degree",
        components: {
            ContentLayout
        },
        mounted() {
            linkManager(
                {
                    location: 'degree-requirements'
                }
            ).then(response => {
                this.degreeRequirements = response
            })

            this.getPageSlide(
                {
                    'pageId': this.$route.name,
                })
            this.screenWidth = document.body.clientWidth;
            window.onresize = () => {
                return (() => {
                    this.screenWidth = document.body.clientWidth;
                })();
            };
        },
        data() {
            return {
                screenWidth: '',
                slidetitle: [],
                degreeRequirements: [],
                degreeProgress: degreeProgress
            }
        },
        methods: {
            getDirection(width) {
                return (width < 680) ? 'vertical' : 'horizontal'
            },
            getPageSlide(parameter) {
                pageSlide(parameter).then(response => {
                    this.slidetitle = response
                })
            },
        }
    }
</script>

<style scoped>
    >>> .ant-steps-dot .ant-steps-item-content {
        width: 150px;
    }

    >>> .ant-steps-item-description {
        width: 150px;
        white-space: pre-wrap;
    }


    #degree-progress {
        margin-top: 30px;
        margin-bottom: 24px;
    }

    @media only screen and (max-width: 650px) {
        #degree-progress {
            margin-top: 0;
            margin-bottom: 0;
        }
    }
</style>
