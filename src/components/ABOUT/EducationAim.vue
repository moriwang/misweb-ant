<template>
    <div>
        <Slide :title="slidetitle"></Slide>
        <content-layout>
            <template v-slot:content>
                <h2>生涯規劃與發展</h2>
                <p>
                    本所建立學生堅實的知識基礎，兼於軟體開發及管理應用，以培養學生資訊系統管理專業能力；因應現今網路產業的蓬勃發展，加強學生對實務環境的洞察與分析能力、研究能力，以培養學生網路行銷專業能力；積極建立重視研究的文化氛圍，鼓勵學生撰寫研討會與期刊論文，並以各種獎勵措施，鼓勵學生出席國際研討會，投稿優良學術期刊及參加各種學術論文競賽，以培養學生能夠具有充分的研究能力，得以繼續進修博士班或從事研究與產業分析相關工作。 基於本所培養「資訊系統管理專業能力」、「網路行銷專業能力」、「研究能力」之教育目標，期許學生衡酌自身發展背景與個別需求差異，成為資訊系統管理專業人才、網路行銷專業人才及資管研究人才等三種人才。
                </p>
                <h2>願景及未來展望</h2>
                <p>
                    本所以培養資管碩士人才為最主要重點，與大學和技術學院進行專業分工，讓有興趣資訊管理與應用之學生，不論是技術背景或管理背景之同學，皆有進一步進修之機會。基於政府發展台灣為綠色矽島所規劃之願景，及資訊管理與應用已成為e化企業的核心競爭能力，顯示資訊管理碩士是目前業界最迫切需要的人力資源；本所之發展即以落實本校商學院規劃目標-提升教學品質、追求卓越研究、加強產學合作，朝向成為全國最專業的資管所目標邁進。
                </p>
            </template>
        </content-layout>
    </div>
</template>

<script>
    import Slide from "@/components/Slide";
    import ContentLayout from "@/components/ContentLayout";

    const slidetitle = [
        {
            'chinese': '教學目標',
            'english': 'Educational goals',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
    ]

    export default {
        name: "EducationAim",
        components:{
            Slide,
            ContentLayout
        },
        data() {
            return{
                slidetitle: slidetitle
            }
        }
    }
</script>

<style scoped>
</style>
