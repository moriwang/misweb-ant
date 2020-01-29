<template>
    <div>
        <Slide :title="slidetitle"></Slide>
        <content-layout>
            <template v-slot:content>
                <h2>常用表單下載</h2>
                <div v-for="(k,index) in downloads" :key="index">
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
            'chinese': '表單下載',
            'english': 'Downloads',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
    ]

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
    ]

    export default {
        name: "Download",
        components:{
            ContentLayout,
            Slide
        },
        data() {
            return{
                slidetitle: slidetitle,
                downloads: downloads
            }
        }
    }
</script>

<style scoped>
</style>
