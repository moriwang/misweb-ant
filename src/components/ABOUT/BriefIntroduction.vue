<template>
    <div>
        <Slide :title="slidetitle"></Slide>
        <div style="padding: 0 50px">
            <h2>NOT IMPLEMENT</h2>
            <p>資訊管理研究所成立於民國90年8月，為臺北大學改制後首先成立的研究所，隸屬於本校商學院。本所為一獨立研究所，並未設置大學部，但仍充分整合商學院其它系所的資源，促使本所不論在教學、研究方面皆有良好的質量，也因此有極佳的內部組織管理機制及師生互動。本所為培育資訊社會與電子化企業所需專業與研究人才，發展方向著重在資訊系統管理與網路行銷二方面，以資訊科技為主軸，結合資訊系統開發與管理、資訊科學、網路市場調查及網路行為等領域相關知識，鼓勵學術研究與實務應用，期許學生日後成為資訊管理中堅人才。</p>
        </div>
    </div>
</template>

<script>
    import Slide from "@/components/Slide";

    const slidetitle = [
        {
            'chinese': '關於本所',
            'english': 'About the Graduate Institute of Information Management',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
    ]

    export default {
        name: "BriefIntroduction",
        components:{
            Slide
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
