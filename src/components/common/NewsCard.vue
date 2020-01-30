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
                    <div v-for="(k,index) in singlenews.attachment" :key="index">
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
    const news = [
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
        {
            'tag': '學術',
            'tagcolor': 'rgba(45,183,245)',
            'title': '2017年第十屆崇越論文大賞',
            'date': '2017/06/17',
            'post':'我今年接辦崇越論文大賞籌備工作，比賽報名時間到下周五(6/23)為止，想邀請您指導學生，或是您系上的同學，參加論文比賽。\n' +
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
            'tagcolor': 'rgba(135,208,104)',
            'title': '演講二 - 從經銷代理看到創業契機',
            'date': '2016/09/27',
            'post':'呂俊毅先生、麗茂股份有限公司業務副總進行演講',
            'fileName': '',
            'fileURL': ''
        }
    ]

    export default {
        name: "NewsCard",
        data() {
            return{
                news: news,
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
