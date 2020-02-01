<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
            <h2>最新公告</h2>
            <news-card :news="news"></news-card>
        </template>
    </content-layout>
</template>

<script>
    import ContentLayout from "@/components/ContentLayout";
    import NewsCard from "@/components/common/NewsCard";

    const slidetitle = [
        {
            'chinese': '國立台北大學資訊管理所',
            'english': 'Graduate Institute of Information Management, NTPU',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
        {
            'chinese': '國立台北大學資訊管理所',
            'english': 'Graduate Institute of Information Management, NTPU',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        }
    ];

    const news = [
        {
            'tag': '招生',
            'tagcolor': 'rgba(231,99,97)',
            'title': '109學年度碩士班一般入學考試乙組面試名單公告',
            'date': '2020/01/16',
            'post': '一、面試日期109年02月12日(星期三)。\n' +
                '二、面試名單及各梯次報到時間請參考附檔。\n' +
                '三、面試地點：本校臺北校區教學大樓7樓714教室。\n' +
                '四、報到時，請攜帶具有照片之證件與甄試證(至報名系統列印)。\n' +
                '五、以上如有任何疑問，煩請來電(02)8674-1111 分機66894 鄧助教。 ',
            'attachment': [
                {
                    'fileName': '109年乙組面試名單',
                    'fileURL': 'http://120.126.146.184:5000/sharing/Ldg4630Sc'
                }
            ]
        },
        {
            'tag': '學術',
            'tagcolor': 'rgba(45,183,245)',
            'title': '2017年第十屆崇越論文大賞',
            'date': '2017/06/17',
            'post': '我今年接辦崇越論文大賞籌備工作，比賽報名時間到下周五(6/23)為止，想邀請您指導學生，或是您系上的同學，參加論文比賽。\n' +
                '\n' +
                '1. 同學需要鼓勵，才能積極脫離同溫層的小確幸\n' +
                '我們的學生，常常習於安逸，習於小確幸，習於「同溫層」，實在需要給予一些刺激。如果能積極鼓勵，培養學生鬥志，掌握每個可能的機會，對他的未來是很有幫助的。\n' +
                '\n' +
                '請給同學一個機會，督促指導學生，以及系上的研究生，參加論文競賽。同學因為習於同溫層，因此只要沒有督促，很難自動參賽。但老師適時的鼓勵，將是很重要的推手。\n' +
                '\n' +
                '2. 獎項眾多，有高達一百多個獎項\n' +
                '同學辛苦的寫完論文，我們應該鼓勵他們，參加競賽，培養自己的鬥志與企圖心。崇越論文大賞正式建立他們鬥志與企圖心的好機會，高達一百多個獎項，高達二成的得獎率，讓同學有極佳的機會能夠脫穎而出，進而培養同學的自信。\n' +
                '\n' +
                '3. 無需擔心「不夠學術」\n' +
                '您無須擔心指導學生的論文不夠學術，因為我們已調整了評審原則：強調「實務應用與問題解決」。\n' +
                '\n' +
                '4. MBA、EMBA、本國生、外籍生、博士生均可報名\n' +
                'http://thesis.topco-global.com/TopcoTRC/index.aspx\n' +
                '\n' +
                '(1.) 歡迎碩士生報名。\n' +
                '強調「實務應用與問題解決」。無須擔心學生論文不夠學術。\n' +
                '(2.) 歡迎EMBA報名。\n' +
                'EMBA組與一般生分開評比，您無須擔心EMBA論文學術性較低的問題，\n' +
                '(3.) 歡迎外籍生報名。不會講中文也沒關係。\n' +
                '請協助外籍生報名。外籍生可至以下頁面做文件下載及報名，網址為：http://www.tmi.org.tw/2017/06/2017-tsc-thesis-award-registration.html\n' +
                '(4.) 歡迎博士生報名。\n' +
                '\n' +
                '\n' +
                '\n' +
                '汪志堅　敬上\n' +
                '\n' +
                '國立臺北大學\n' +
                '電子商務研究中心主任 \n' +
                '資訊管理研究所教授\n' +
                '\n' +
                'Chih-Chien Wang, Ph.D, \n' +
                'Professor, National Taipei University ',
            'fileName': '',
            'fileURL': ''
        },
        {
            'tag': '所上活動',
            'tagcolor': 'rgba(13,181,39)',
            'title': '演講二 - 從經銷代理看到創業契機',
            'date': '2016/09/27',
            'post': '呂俊毅先生、麗茂股份有限公司業務副總進行演講',
            'fileName': '',
            'fileURL': ''
        },
        {
            'tag': '企業徵才',
            'tagcolor': 'rgba(246,154,41)',
            'title': 'XX企業徵才範例資訊',
            'date': '2016/09/27',
            'post': 'XX企業徵才範例資訊',
            'fileName': '',
            'fileURL': ''
        },
        {
            'tag': '所上活動',
            'tagcolor': 'rgba(13,181,39)',
            'title': '演講二 - 從經銷代理看到創業契機',
            'date': '2016/09/27',
            'post': '呂俊毅先生、麗茂股份有限公司業務副總進行演講',
            'fileName': '',
            'fileURL': ''
        },
        {
            'tag': '企業徵才',
            'tagcolor': 'rgba(246,154,41)',
            'title': 'XX企業徵才範例資訊',
            'date': '2016/09/27',
            'post': 'XX企業徵才範例資訊',
            'fileName': '',
            'fileURL': ''
        },
        {
            'tag': '所上活動',
            'tagcolor': 'rgba(13,181,39)',
            'title': '演講二 - 從經銷代理看到創業契機',
            'date': '2016/09/27',
            'post': '呂俊毅先生、麗茂股份有限公司業務副總進行演講',
            'fileName': '',
            'fileURL': ''
        },
        {
            'tag': '企業徵才',
            'tagcolor': 'rgba(246,154,41)',
            'title': 'XX企業徵才範例資訊',
            'date': '2016/09/27',
            'post': 'XX企業徵才範例資訊',
            'fileName': '',
            'fileURL': ''
        }
    ];

    export default {
        name: "Home",
        components: {
            ContentLayout,
            NewsCard
        },
        data() {
            return {
                slidetitle: slidetitle,
                news: news
            }
        }
    }
</script>

<style scoped>

</style>
