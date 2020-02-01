<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
            <h2>修讀辦法</h2>
            <p>
                修業滿四學期表現優良者即可申請<br>
                於第八學期（含）之前去的學士學位並參與本校碩士班甄試入學或一般招生考試<br>
                取得碩士班研究生資格後，大學期間所選修之碩士班課程，其修業成績達七十分以上，可申請抵免<br>
                歡迎目前升大三和大四的同學申請
            </p>
            <br>
            <h2>五年一貫</h2>
            <a-steps :current="4" :direction="getDirection(screenWidth)" id="successive-progress" progressDot>
                <a-step :description="k.describe" :key="index" :title="k.step" v-for="(k,index) in successiveProgress"/>
            </a-steps>
            <br>
            <h2>問與答</h2>
            <div :key="k.question" v-for="k in successiveprogramQA">
                <h4>Q: {{k.question}}</h4>
                <p style="white-space: pre-wrap; margin-left:1.2em; text-indent: -1.2em;">A: {{k.answer}}</p>
            </div>
            <br>
            <h2>文件下載</h2>
            <div :key="k.fileName" v-for="k in successiveprogram">
                <a :href="k.fileURL">
                    <a-icon type="file-word"/>
                    {{k.fileName}}</a>
                <br>
            </div>
        </template>
    </content-layout>
</template>

<script>
    import ContentLayout from "@/components/ContentLayout";

    const slidetitle = [
        {
            'chinese': '一貫修讀學、碩士學位',
            'english': 'Successive bachelor-master program and double major program',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
    ];

    const successiveProgress = [
        {
            'step': '大四上',
            'describe':
                '論文 + 計劃主題探索\n' +
                '必修/選修課程研討'
        },
        {
            'step': '大四下',
            'describe': '論文 + 論文構想報告'
        },
        {
            'step': '碩一上',
            'describe':
                '論文提案報告\n' +
                '選修課與執行計劃'
        },
        {
            'step': '碩一下',
            'describe': '論文寫作與口試'
        },
    ];

    const successiveprogram = [
        {
            'fileURL': 'http://120.126.146.184/files/fiveyear/一貫修讀學、碩士學位1020723.docx',
            'fileName': '國立臺北大學資訊管理研究所一貫修讀學、碩士學位辦法'
        },
        {
            'fileURL': 'http://120.126.146.184/files/fiveyear/一貫修讀學、碩士學位申請表.docx',
            'fileName': '國立臺北大學資訊管理研究所一貫修讀學、碩士學位申請表'
        },
    ];

    const successiveprogramQA = [
        {
            'question': '「一貫修讀學、碩士學位」計畫申請資格為何？',
            'answer': '本校學士班與進修學士班學生'
        },
        {
            'question': '申請時間及地點',
            'answer':
                '申請截止日詳見公告信息\n' +
                '地點：商院8F42資管所辦公室'
        },
        {
            'question': '申請文件為何？',
            'answer': '申請表及歷年成績單'
        },
        {
            'question': '資管所提供哪些獎助學金？',
            'answer':
                '獎學金：NT$20,000（註冊入學後）\n' +
                '助學金：NT$2,500/月\n' +
                '工讀金：NT$4,000/月（優先資格\n' +
                '計畫助理金：NT$4,000~8,000/月（依參與的計畫而訂）'
        },
    ];


    export default {
        name: "SuccessiveProgram",
        components: {
            ContentLayout,
        },
        data() {
            return {
                screenWidth: '',
                slidetitle: slidetitle,
                successiveProgress: successiveProgress,
                successiveprogram: successiveprogram,
                successiveprogramQA: successiveprogramQA
            }
        },
        mounted() {
            this.screenWidth = document.body.clientWidth;
            window.onresize = () => {
                return (() => {
                    this.screenWidth = document.body.clientWidth;
                })();
            };
        },
        methods: {
            getDirection(width) {
                return (width < 680) ? 'vertical' : 'horizontal'
            }
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

    #successive-progress {
        margin-top: 30px;
        margin-bottom: 24px;
    }

    @media only screen and (max-width: 650px) {
        #successive-progress {
            margin-top: 0;
            margin-bottom: 0;
        }
    }
</style>
