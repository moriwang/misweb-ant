<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
            <h2>招生考試</h2>
            <p>
                本所每年招收碩士班學生共15名，入學方式分為二種：甄試及一般招生。甄試於每年十一、十二月間舉行，招收具學士學位學生，一般招生於每年三、四月間舉行，招收具學士學位之學生，及具2年以上工作經驗者。
            </p>
            <admission-table></admission-table>
            <br>
            <h2>招生簡章下載</h2>
            <div :key="k.linkCN" v-for="k in admissionbrochure">
                <a :href="k.linkURL">
                    <a-icon type="file-pdf"/>
                    {{k.linkCN}}</a>
                <br>
            </div>
            <br>
            <h2>歷屆考題</h2>
            <div :key="k.linkCN" v-for="k in previousExam">
                <a :href="k.linkURL">
                    <a-icon type="file"/>
                    {{k.linkCN}}</a>
                <br>
            </div>
        </template>
    </content-layout>
</template>

<script>
    import ContentLayout from "@/components/ContentLayout";
    import AdmissionTable from "@/components/Enrollment/AdmissionTable";
    import {linkManager, pageSlide} from "@/api";


    export default {
        name: "AdmissionsBrochure",
        components: {
            ContentLayout,
            AdmissionTable
        },
        mounted() {
            this.getPageSlide(
                {
                    'pageId': this.$route.name,
                })

            linkManager(
                {
                    location: 'admission-brochure'
                }
            ).then(response => {
                this.admissionbrochure = response
            })

            linkManager(
                {
                    location: 'previous-exam'
                }
            ).then(response => {
                this.previousExam = response
            })
        },
        data() {
            return {
                slidetitle: [],
                admissionbrochure: [],
                previousExam: []
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
