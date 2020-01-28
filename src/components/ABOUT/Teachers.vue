<template>
    <div>
        <Slide :title="slidetitle"></Slide>
        <div class="section-content">
            <h2>師資陣容</h2>
            <p>本所目前有專任教師5名，來自本校各系所與學術、企業界深具實務經驗的兼任教師10人，合聘教師1名，他系教師5名，以及行政人員1名。</p>
            <a-tabs defaultActiveKey="1">
                <a-tab-pane tab="專任教師" key="1" forceRender>
                    <teacher-card :teacherlist="fulltimeteacher"></teacher-card>
                </a-tab-pane>
                <a-tab-pane tab="合聘教師" key="2" forceRender>
                    <teacher-card :teacherlist="jointteacher"></teacher-card>
                </a-tab-pane>
                <a-tab-pane tab="他系教師" key="3" forceRender>
                    <teacher-card :teacherlist="otherteacher"></teacher-card>
                </a-tab-pane>
                <a-tab-pane tab="行政人員" key="4" forceRender>
                    <teacher-card :teacherlist="staff"></teacher-card>
                </a-tab-pane>
            </a-tabs>
        </div>
    </div>
</template>

<script>
    import Slide from "@/components/Slide";
    import TeacherCard from "@/components/common/TeacherCard";

    const slidetitle = [
        {
            'chinese': '師資介紹',
            'english': 'About the teachers',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
    ]

    const fulltimeteacher = [
        {
            'name': '江義平',
            'title': '教授（現任所長）',
            'office': '人文大樓7樓15室',
            'phone': '66715',
            'email': 'ipchiang@mail.ntpu.edu.tw',
            'education': '國立中興大學企業管理博士',
            'spec': '網路市場調查研究、網路消費行為、網路行銷、電子商務',
            'imgURL': 'http://120.126.146.184/images/faculty/ipchiang.jpg'
        },
        {
            'name': '溫演福',
            'title': '教授',
            'office': '法律學院8樓29室',
            'phone': '66897',
            'email': 'yeanfu@mail.ntpu.edu.tw',
            'education': '國立臺灣大學資訊管理博士',
            'spec': '雲端運算、行動商務技術、RFID整合應用、無線通訊網路',
            'imgURL': 'http://120.126.146.184/images/faculty/wef.jpg'
        },
        {
            'name': '汪志堅',
            'title': '教授',
            'office': '商學大樓6樓12室',
            'phone': '66673',
            'email': 'wangson@mail.ntpu.edu.tw',
            'education': '國立中興大學企業管理博士',
            'spec': '資訊網路行銷、網路行為、電子商務、知識管理',
            'imgURL': 'http://120.126.146.184/images/faculty/wangson.jpg'
        },
        {
            'name': '陳宗天',
            'title': '教授',
            'office': '商學大樓8樓11室',
            'phone': '66872',
            'email': 'misttc@mail.ntpu.edu.tw',
            'education': '美國亞歷桑那大學資訊管理博士',
            'spec': '進階資訊科技應用、資訊系統整合',
            'imgURL': 'http://120.126.146.184/images/faculty/ttc.jpg'
        },
        {
            'name': '方鄒昭聰',
            'title': '副教授',
            'office': '商學大樓8樓12室',
            'phone': '66873',
            'email': 'ctfang@gmail.com',
            'education': '淡江大學管理科學博士',
            'spec': '資訊系統發展與轉型、資料庫設計與管理、智慧型系統',
            'imgURL': 'http://120.126.146.184/images/faculty/ctfang.jpg'
        },
    ]

    const jointteacher = [
        {
            'name': '陳郁方',
            'title': '副教授',
            'office': '中研院資科所514室',
            'phone': '1514',
            'email': 'yfcat@iis.sinica.edu.tw',
            'education': '國立台灣大學資訊管理研究所博士',
            'spec': '軟件驗證，模型檢測，自動機理論，演算式機器學習，形式化方法，機器學習理論，雲端計算技術',
            'imgURL': 'http://120.126.146.184/images/faculty/yfc.jpg'
        },
    ]

    const otherteacher = [
        {
            'name': '蔡坤宏',
            'title': '教授',
            'office': '商學大樓',
            'phone': '66568',
            'email': 'atmas@mail.ntpu.edu.tw',
            'education': '國立臺北大學企管博士',
            'spec': '行銷研究專題研討、研究方法、新產品開發與管理、資料探勘',
            'imgURL': 'http://120.126.146.184/images/faculty/a.jpg'
        },
        {
            'name': '蔡顯童',
            'title': '教授',
            'office': '商學大樓 6F43',
            'phone': '66690',
            'email': 'hstsai@gm.ntpu.edu.tw',
            'education': '國立台灣大學國際企業博士',
            'spec': '虛擬社群行為、品牌社群行為、顧客關係管理、服務創新行為',
            'imgURL': 'http://120.126.146.184/images/faculty/cst.jpg'
        },
        {
            'name': '胡婉玲',
            'title': '副教授',
            'office': '商學大樓',
            'phone': '66894',
            'email': 'annehu@mail2000.com.tw',
            'education': '國立臺北大學企業管理博士',
            'spec': '電子商務、數位傳播與行銷、運動傳播媒體與公共關係',
            'imgURL': 'http://120.126.146.184/images/faculty/wlhu.jpg'
        },
        {
            'name': '曾俊元',
            'title': '助理教授',
            'office': '社會科學大樓4樓09室',
            'phone': '67124',
            'email': 'tsengcyt@mail.ntpu.edu.tw',
            'education': '美國加州大學戴維斯分校計算機科學博士',
            'spec': '網路入侵防禦、資訊安全、車載網路、無線網路、網路',
            'imgURL': 'http://120.126.146.184/images/faculty/henry.jpg'
        },
        {
            'name': '楊運秀',
            'title': '助理教授',
            'office': '商學大樓 5F09',
            'phone': '66570',
            'email': 'yolande@mail.ntpu.edu.tw',
            'education': '國立臺北大學企管博士',
            'spec': '行銷管理、消費者行為、資訊管理',
            'imgURL': 'http://120.126.146.184/images/faculty/yang.jpg'
        },
    ]

    const staff = [
        {
            'name': '鄧雅燕',
            'title': '助教',
            'office': '商學大樓8樓42室',
            'phone': '66894',
            'email': 'yyteng@mail.ntpu.edu.tw',
            'education': '朝陽科技大學學士',
            'spec': '行政業務',
            'imgURL': 'http://120.126.146.184/images/faculty/roff.jpg'
        },
    ]

    export default {
        name: "Teachers",
        components:{
            Slide,
            TeacherCard
        },
        data() {
            return{
                slidetitle: slidetitle,
                fulltimeteacher: fulltimeteacher,
                jointteacher: jointteacher,
                otherteacher: otherteacher,
                staff: staff
            }
        },
    }
</script>

<style scoped>
    .section-content {
        margin-left: auto;
        margin-right: auto;
        width: 1200px;
        padding: 30px 0;
    }

    @media only screen and (max-width: 1440px) {
        .section-content {
            margin-left: auto;
            margin-right: auto;
            width: 1100px
        }
    }

    @media only screen and (max-width: 1200px) {
        .section-content {
            margin-left: auto;
            margin-right: auto;
            width: 880px
        }
    }

    @media only screen and (max-width: 992px) {
        .section-content {
            margin-left: auto;
            margin-right: auto;
            width: 87.5%
        }
    }
</style>
