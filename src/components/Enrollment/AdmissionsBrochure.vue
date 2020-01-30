<template>
    <div>
        <Slide :title="slidetitle"></Slide>
        <content-layout>
            <template v-slot:content>
                <h2>招生考試</h2>
                <p>
                    本所每年招收碩士班學生共15名，入學方式分為二種：甄試及一般招生。甄試於每年十一、十二月間舉行，招收具學士學位學生，一般招生於每年三、四月間舉行，招收具學士學位之學生，及具2年以上工作經驗者。
                </p>
                <admission-table></admission-table>
                <br>
                <h2>招生簡章下載</h2>
                <div v-for="k in admissionbrochure" :key="k.fileName">
                    <a :href="k.fileURL"><a-icon type="file-pdf" /> {{k.fileName}}</a>
                    <br>
                </div>
                <br>
                <h2>歷屆考題</h2>
                <div v-for="k in previousExam" :key="k.fileName">
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
    import AdmissionTable from "@/components/Enrollment/AdmissionTable";

    const slidetitle = [
        {
            'chinese': '招生簡章',
            'english': 'Admissions Brochure',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
    ]

    const admissionbrochure = [
        {
            'fileURL': 'http://120.126.146.184/files/admissions/regulations2_106.pdf',
            'fileName': '106學年度碩博士班研究所招生簡章'
        },
        {
            'fileURL': 'http://120.126.146.184/files/admissions/regulations1_106.pdf',
            'fileName': '106學年度碩博士班研究所甄試簡章'
        },
        {
            'fileURL': 'http://120.126.146.184/files/admissions/regulations2_105.pdf',
            'fileName': '105學年度碩博士班研究所招生簡章'
        },
        {
            'fileURL': 'http://120.126.146.184/files/admissions/regulations1_105.pdf',
            'fileName': '105學年度碩博士班研究所甄試簡章'
        }
    ]

    const previousExam = [
        {
            'fileURL': 'http://120.126.146.184/files/examinations/105.7z',
            'fileName': '台北大學資訊管理所 105 年試題'
        },
        {
            'fileURL': 'http://120.126.146.184/files/examinations/104.7z',
            'fileName': '台北大學資訊管理所 104 年試題'
        },
        {
            'fileURL': 'http://120.126.146.184/files/examinations/103.7z',
            'fileName': '台北大學資訊管理所 103 年試題'
        },
    ]

    export default {
        name: "AdmissionsBrochure",
        components:{
            Slide,
            ContentLayout,
            AdmissionTable
        },
        data() {
            return{
                slidetitle: slidetitle,
                admissionbrochure: admissionbrochure,
                previousExam: previousExam
            }
        }
    }
</script>

<style scoped>
</style>
