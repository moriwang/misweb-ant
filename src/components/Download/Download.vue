<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
            <h2>常用表單下載</h2>
            <div :key="k.fileName" v-for="k in downloads">
                <a :href="k.fileURL">
                    <a-icon type="file"/>
                    {{k.fileName}}</a>
                <br>
            </div>
        </template>
    </content-layout>
</template>

<script>
    import ContentLayout from "@/components/ContentLayout";
    import {getSlide} from "@/api";


    const downloads = [
        {
            'fileURL': '',
            'fileName': '實習輔導教師訪視輔導紀錄表'
        },
        {
            'fileURL': '',
            'fileName': '校外實習合約書'
        },
        {
            'fileURL': '',
            'fileName': '校外實習考評表'
        },
        {
            'fileURL': '',
            'fileName': '學術著作抵免英文申請書'
        },
        {
            'fileURL': '',
            'fileName': '學術著作獎勵申請書'
        },
        {
            'fileURL': '',
            'fileName': '國立臺北大學資訊管理研究所碩士生學術著作審查申請書'
        }
    ];

    export default {
        name: "Download",
        components: {
            ContentLayout,
        },
        mounted() {
            this.getgetSlide(
                {
                    'pageId': this.$route.name,
                })
        },
        data() {
            return {
                slidetitle: [],
                downloads: downloads
            }
        },
        methods: {
            getgetSlide(parameter) {
                getSlide(parameter).then(response => {
                    this.slidetitle = response
                })
            },
        }
    }
</script>

<style scoped>
</style>
