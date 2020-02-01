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
    import {teacherList} from '@/api'

    const slidetitle = [
        {
            'chinese': '師資介紹',
            'english': 'About the teachers',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
    ];

    export default {
        name: "Teachers",
        components: {
            ContentLayout,
            TeacherCard
        },
        mounted() {
            this.getTeacherList()
        },
        data() {
            return {
                slidetitle: slidetitle,
                fulltimeteacher: [],
                jointteacher: [],
                otherteacher: [],
                staff: []
            }
        },
        methods: {
            getTeacherList() {
                teacherList().then(response => {
                    this.fulltimeteacher = response[0];
                    this.jointteacher = response[1];
                    this.otherteacher = response[2];
                    this.staff = response[3]
                })
            }
        }
    }
</script>

<style scoped>
</style>
