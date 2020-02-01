<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
            <h2>師資陣容</h2>
            <p>本所目前有專任教師5名，來自本校各系所與學術、企業界深具實務經驗的兼任教師10人，合聘教師1名，他系教師5名，以及行政人員1名。</p>
            <a-tabs defaultActiveKey="1">
                <a-tab-pane forceRender key="1" tab="專任教師">
                    <teacher-card :teacherlist="fulltimeteacher"></teacher-card>
                </a-tab-pane>
                <a-tab-pane forceRender key="2" tab="合聘教師">
                    <teacher-card :teacherlist="jointteacher"></teacher-card>
                </a-tab-pane>
                <a-tab-pane forceRender key="3" tab="他系教師">
                    <teacher-card :teacherlist="otherteacher"></teacher-card>
                </a-tab-pane>
                <a-tab-pane forceRender key="4" tab="行政人員">
                    <teacher-card :teacherlist="staff"></teacher-card>
                </a-tab-pane>
            </a-tabs>
        </template>
    </content-layout>
</template>

<script>
    import ContentLayout from "@/components/ContentLayout";
    import TeacherCard from "@/components/common/TeacherCard";
    import {teacherManager, pageSlide} from '@/api'

    export default {
        name: "Teachers",
        components: {
            ContentLayout,
            TeacherCard
        },
        mounted() {
            this.getPageSlide(
                {
                    'pageId': this.$route.name,
                })
            this.getTeacherList()
        },
        data() {
            return {
                slidetitle: [],
                fulltimeteacher: [],
                jointteacher: [],
                otherteacher: [],
                staff: []
            }
        },
        methods: {
            getPageSlide(parameter) {
                pageSlide(parameter).then(response => {
                    this.slidetitle = response
                })
            },

            getTeacherList() {
                teacherManager({state: '專任教師'}).then(response => {
                    this.fulltimeteacher = response
                })
                teacherManager({state: '合聘教師'}).then(response => {
                    this.jointteacher = response
                })
                teacherManager({state: '他系教師'}).then(response => {
                    this.otherteacher = response
                })
                teacherManager({state: '行政人員'}).then(response => {
                    this.staff = response
                })
            }
        }
    }
</script>

<style scoped>
</style>
