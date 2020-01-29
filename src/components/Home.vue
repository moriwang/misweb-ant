<template>
    <div>
    <Slide :title="slidetitle"></Slide>
        <content-layout>
            <template v-slot:content>
                <h2>本所沿革與發展方向</h2>
                <p>資訊管理研究所成立於民國90年8月，為臺北大學改制後首先成立的研究所，隸屬於本校商學院。本所為一獨立研究所，並未設置大學部，但仍充分整合商學院其它系所的資源，促使本所不論在教學、研究方面皆有良好的質量，也因此有極佳的內部組織管理機制及師生互動。本所為培育資訊社會與電子化企業所需專業與研究人才，發展方向著重在資訊系統管理與網路行銷二方面，以資訊科技為主軸，結合資訊系統開發與管理、資訊科學、網路市場調查及網路行為等領域相關知識，鼓勵學術研究與實務應用，期許學生日後成為資訊管理中堅人才。</p>
                <br>
                <h2>獎助學金</h2>
                <p>本所提供各項獎助學金供本所研究生申請， 凡本所研究生皆可申請，項目有：<br>
                    1.一般助理：協助本所之工作。如：電腦、網站維護助理、行政助理、所辦值班助理等<br>
                    2.研究助理：協助本所專任教師研究計畫書撰寫與學術研究。<br>
                    3.研究獎勵：本所學生出席國際研討會發表著作或投稿國際期刊並刊登者，給予研究獎勵。</p>
                <br>
                <h2>學術活動</h2>
                <p>本所提供各項獎助學金供本所研究生申請， 凡本所研究生皆可申請，項目有：<br>
                    1.資訊管理系列專題演講：每學期不定時邀請企業界及教育學者蒞臨演講，由演講者分享實務經驗，給予本所研究生新的啟發。<br>
                    2.電子商務期刊：由本所出版之「電子商務研究」季刊，在資管學界享有盛名，並獲本校出版品獎勵審查委員會評定為頭等獎。<br>
                    3.電子商務學術研討會：舉辦全國性的電子商務學術研討會，每年皆有來自國內百餘所大學學者參與盛會。<br>
                    4.學生論文發表：本所學生畢業前，均至少投稿一篇國內外研討會論文，歷屆同學表現均獲好評。</p>
            </template>
        </content-layout>
    </div>
</template>

<script>
    import Slide from "@/components/common/Slide";
    import ContentLayout from "@/components/ContentLayout";

    const slidetitle = [
        {
            'chinese': '國立台北大學資訊管理所',
            'english': 'Graduate Institute of Information Management, NTPU',
            'imgURL': 'https://i.pinimg.com/originals/c8/51/4c/c8514c54faec1b2dc8a253c7ead4983a.jpg'
        },
        {
            'chinese': '國立台北大學資訊管理所',
            'english': 'Graduate Institute of Information Management, NTPU',
            'imgURL': 'https://i.pinimg.com/originals/c8/51/4c/c8514c54faec1b2dc8a253c7ead4983a.jpg'
        }
    ]

    export default {
        name: "Home",
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
