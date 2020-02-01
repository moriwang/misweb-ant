<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
        </template>
    </content-layout>
</template>

<script>
    import ContentLayout from "@/components/ContentLayout";

    const slidetitle = [
        {
            'chinese': '電子商務研究',
            'english': 'E-commerce research',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
    ];

    export default {
        name: "EMResearch",
        components: {
            ContentLayout,
        },
        data() {
            return {
                slidetitle: slidetitle
            }
        }
    }
</script>

<style scoped>
</style>
