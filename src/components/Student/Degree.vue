<template>
    <div>
        <Slide :title="slidetitle"></Slide>
        <content-layout>
            <template v-slot:content>
                <h2>修業時程安排</h2>
                <br>
                <a-steps progressDot :current="4">
                    <a-step v-for="(k,index) in degreeProgress" :title="k.step" :description="k.describe" :key="index"/>
                </a-steps>
                <br>
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
                <div v-for="k in degreeRequirements" :key="k.fileName">
                    <a :href="k.fileURL"><a-icon type="file" /> {{k.fileName}}</a>
                    <br>
                </div>
            </template>
        </content-layout>
    </div>
</template>

<script>
    import Slide from "@/components/common/Slide";
    import ContentLayout from "@/components/ContentLayout";

    const slidetitle = [
        {
            'chinese': '修業規定',
            'english': 'Degree requirements',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
    ]

    const degreeRequirements = [
        {
            'fileURL': 'http://120.126.146.184/files/examinations/105.7z',
            'fileName': '國立台北大學資訊管理所修業規則1070320'
        },
    ]

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
    ]

    export default {
        name: "Degree",
        components:{
            Slide,
            ContentLayout
        },
        data() {
            return{
                slidetitle: slidetitle,
                degreeRequirements: degreeRequirements,
                degreeProgress: degreeProgress
            }
        }
    }
</script>

<style scoped>
</style>
