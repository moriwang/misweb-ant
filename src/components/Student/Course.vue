<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
            <h2>基礎課程</h2>
            <p>
                為增進本所碩士班研究生在資訊及商管領域之基礎知識，便於銜接及學習本所碩士班規劃之核心課程及未來選修課程，凡本所碩士班入學新生未曾於學士班時期修習該科目，或入學考試未達本所碩士班訂定之最低標準者，應先修習基礎課程，且該科目不計入畢業學分。(大學修過可抵修)
            </p>
            <course-card :courses="foundationCourse"></course-card>
            <h2>必修課程</h2>
            <p>
                本所碩士班之課程設計，為兼顧資訊及商管領域之整合，並強調培養本所學生之研究能力，故核心課程設計含括管理資訊系統、研究方法、企業倫理等，以建立堅實之知識基礎。
            </p>
            <course-card :courses="obligatoryCourse"></course-card>
            <h2>實作課程</h2>
            <p>
                各領域需從6門課中任選兩門修習，其中1門需為主領域之科目。
            </p>
            <course-card :courses="handsonCourse"></course-card>
            <h2>專業選修課程</h2>
            <p>
                本所碩士班選修課程規劃，係參酌國內外各知名大學之資管課程規劃之，可分為以下兩大領域。
            </p>
            <course-card :courses="electiveCourses"></course-card>
            <br>
            <h2>歷年課程規劃表下載</h2>
            <div :key="k.fileName" v-for="k in curriculumPlanning">
                <a :href="k.fileURL">
                    <a-icon type="file"/>
                    {{k.fileName}}
                </a>
                <br>
            </div>
        </template>
    </content-layout>
</template>

<script>
    import ContentLayout from "@/components/ContentLayout";
    import CourseCard from "@/components/Student/CourseCard";
    import {pageSlide} from "@/api";


    const foundationCourse = [
        {
            'name': '統計學',
            'field': 'both'
        },
        {
            'name': '資料庫系統',
            'field': 'both'
        }
    ];

    const obligatoryCourse = [
        {
            'name': '管理資訊系統',
            'field': 'both'
        },
        {
            'name': '研究方法',
            'field': 'both'
        },
        {
            'name': '企業倫理',
            'field': 'both'
        },
        {
            'name': '論文',
            'field': 'both'
        },
        {
            'name': '軟體工程',
            'field': 'system'
        },
        {
            'name': '系統與網路管理',
            'field': 'system'
        },
        {
            'name': '資訊系統開發與管理專題',
            'field': 'system'
        },
        {
            'name': '網路行銷管理',
            'field': 'manage'
        },
        {
            'name': '電子商務',
            'field': 'manage'
        },
        {
            'name': '數位行銷',
            'field': 'manage'
        }
    ];

    const handsonCourse = [
        {
            'name': '雲端資源規劃實作',
            'field': 'system'
        },
        {
            'name': '行動網系統實作',
            'field': 'system'
        },
        {
            'name': '資料分析實作',
            'field': 'system'
        },
        {
            'name': '社群行銷實作',
            'field': 'manage'
        },
        {
            'name': '數位創新實作',
            'field': 'manage'
        },
        {
            'name': '產業觀察實作',
            'field': 'manage'
        }
    ];

    const electiveCourses = [
        {
            'name': '資料探勘(跨)',
            'field': 'both'
        },
        {
            'name': '金融科技(跨)',
            'field': 'both'
        },
        {
            'name': '資料庫管理',
            'field': 'system'
        },
        {
            'name': '資訊安全',
            'field': 'system'
        },
        {
            'name': '資料通訊管理',
            'field': 'system'
        },
        {
            'name': '物件導向軟體工程',
            'field': 'system'
        },
        {
            'name': '服務導向架構專題研討',
            'field': 'system'
        },
        {
            'name': '行動網路技術與應用',
            'field': 'system'
        },
        {
            'name': '物聯網',
            'field': 'system'
        },
        {
            'name': '資訊科技理論與應用(企)',
            'field': 'system'
        },
        {
            'name': '智慧型系統',
            'field': 'system'
        },
        {
            'name': '資訊視覺化',
            'field': 'system'
        },
        {
            'name': '資訊科學專題研討',
            'field': 'system'
        },
        {
            'name': '高等電腦網路',
            'field': 'system'
        },
        {
            'name': '企業資源規劃',
            'field': 'system'
        },
        {
            'name': '雲端運算',
            'field': 'system'
        },
        {
            'name': '大數據分析',
            'field': 'system'
        },
        {
            'name': '人工智慧',
            'field': 'system'
        },
        {
            'name': '數量方法',
            'field': 'manage'
        },
        {
            'name': '多變量分析',
            'field': 'manage'
        },
        {
            'name': '資管個案專題研討',
            'field': 'manage'
        },
        {
            'name': '供應鏈管理',
            'field': 'manage'
        },
        {
            'name': '網路消費行為專題研討',
            'field': 'manage'
        },
        {
            'name': '行銷研究專題研討(企)',
            'field': 'manage'
        },
        {
            'name': '新產品行銷專題研討(企)',
            'field': 'manage'
        },
        {
            'name': '網站企劃(企)',
            'field': 'manage'
        },
        {
            'name': '顧客關係管理',
            'field': 'manage'
        },
        {
            'name': '資訊傳播專題研討',
            'field': 'manage'
        },
        {
            'name': '網路市場調查專題研討',
            'field': 'manage'
        },
        {
            'name': '網路行為專題研討',
            'field': 'manage'
        },
        {
            'name': '網路創業專題研討',
            'field': 'manage'
        },
        {
            'name': '網路創業管理',
            'field': 'manage'
        },
        {
            'name': '服務行銷專題研討(企)',
            'field': 'manage'
        },
        {
            'name': '金融商品行銷(企)',
            'field': 'manage'
        },
        {
            'name': '關係行銷專題研討(企)',
            'field': 'manage'
        },
        {
            'name': '服務創新管理(企)',
            'field': 'manage'
        },
    ];

    const curriculumPlanning = [
        {
            'fileURL': 'http://120.126.146.184/files/fiveyear/一貫修讀學、碩士學位1020723.docx',
            'fileName': '106 年課程科目規劃表'
        },
        {
            'fileURL': 'http://120.126.146.184/files/fiveyear/一貫修讀學、碩士學位申請表.docx',
            'fileName': '105 年課程科目規劃表'
        },
        {
            'fileURL': 'http://120.126.146.184/files/fiveyear/一貫修讀學、碩士學位申請表.docx',
            'fileName': '104 年課程科目規劃表'
        },
        {
            'fileURL': 'http://120.126.146.184/files/fiveyear/一貫修讀學、碩士學位申請表.docx',
            'fileName': '103 年課程科目規劃表'
        },
        {
            'fileURL': 'http://120.126.146.184/files/fiveyear/一貫修讀學、碩士學位申請表.docx',
            'fileName': '102 年課程科目規劃表'
        },
        {
            'fileURL': 'http://120.126.146.184/files/fiveyear/一貫修讀學、碩士學位申請表.docx',
            'fileName': '101 年課程科目規劃表'
        },
    ];

    export default {
        name: "Course",
        components: {
            ContentLayout,
            CourseCard
        },
        mounted() {
            this.getPageSlide(
                {
                    'pageId': this.$route.name,
                })
        },
        data() {
            return {
                slidetitle: [],
                foundationCourse: foundationCourse,
                obligatoryCourse: obligatoryCourse,
                handsonCourse: handsonCourse,
                electiveCourses: electiveCourses,
                curriculumPlanning: curriculumPlanning
            }
        },
        methods: {
            getPageSlide(parameter) {
                pageSlide(parameter).then(response => {
                    this.slidetitle = response
                })
            },
        }
    }
</script>

<style scoped>
</style>
