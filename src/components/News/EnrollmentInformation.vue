<template>
    <div>
        <Slide :title="slidetitle"></Slide>
        <content-layout>
            <template v-slot:content>
                <news-card :news="enrollmentInformation"></news-card>
            </template>
        </content-layout>
    </div>
</template>

<script>
    import Slide from "@/components/common/Slide";
    import ContentLayout from "@/components/ContentLayout";
    import NewsCard from "@/components/common/NewsCard";

    const slidetitle = [
        {
            'chinese': '招生訊息',
            'english': 'Enrollment Information',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
    ]

    const enrollmentInformation = [
        {
            'tag': '招生',
            'tagcolor': 'rgba(231,99,97)',
            'title': '109學年度碩士班一般入學考試乙組面試名單公告',
            'date': '2020/01/16',
            'post':'一、面試日期109年02月12日(星期三)。\n' +
                '二、面試名單及各梯次報到時間請參考附檔。\n' +
                '三、面試地點：本校臺北校區教學大樓7樓714教室。\n' +
                '四、報到時，請攜帶具有照片之證件與甄試證(至報名系統列印)。\n' +
                '五、以上如有任何疑問，煩請來電(02)8674-1111 分機66894 鄧助教。 ',
            'attachment':[
                {
                    'fileName': '109年乙組面試名單',
                    'fileURL': 'http://120.126.146.184:5000/sharing/Ldg4630Sc'
                }
            ]
        },
    ]

    export default {
        name: "Activity",
        components:{
            ContentLayout,
            Slide,
            NewsCard
        },
        data() {
            return{
                slidetitle: slidetitle,
                enrollmentInformation: enrollmentInformation
            }
        }
    }
</script>

<style scoped>
</style>
