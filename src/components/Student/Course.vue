<template>
    <div>
        <Slide :title="slidetitle"></Slide>
        <content-layout>
            <template v-slot:content>
                <h2>基礎課程</h2>
                <p>
                    為增進本所碩士班研究生在資訊及商管領域之基礎知識，便於銜接及學習本所碩士班規劃之核心課程及未來選修課程，凡本所碩士班入學新生未曾於學士班時期修習該科目，或入學考試未達本所碩士班訂定之最低標準者，應先修習基礎課程，且該科目不計入畢業學分。(大學修過可抵修)                </p>
                <br>
                <h2>必修課程</h2>
                <p>
                    本所碩士班之課程設計，為兼顧資訊及商管領域之整合，並強調培養本所學生之研究能力，故核心課程設計含括管理資訊系統、研究方法、企業倫理等，以建立堅實之知識基礎。
                </p>
                <br>
                <h2>實作課程</h2>
                <p>
                    各領域需從6門課中任選兩門修習，其中1門需為主領域之科目。
                </p>
                <br>
                <h2>專業選修課程</h2>
                <p>
                    本所碩士班選修課程規劃，係參酌國內外各知名大學之資管課程規劃之，可分為以下兩大領域。
                </p>
                <br>
                <h2>歷年課程規劃表下載</h2>
                <div v-for="(k,index) in curriculumPlanning" :key="index">
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
            'chinese': '課程規劃',
            'english': 'Curriculum planning',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
    ]

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
    ]

    export default {
        name: "Course",
        components:{
            Slide,
            ContentLayout
        },
        data() {
            return{
                slidetitle: slidetitle,
                curriculumPlanning: curriculumPlanning
            }
        }
    }
</script>

<style scoped>
</style>
