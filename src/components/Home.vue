<template>
    <Slide :title="slidetitle"></Slide>
</template>

<script>
    import Slide from "@/components/Slide";

    const slidetitle = [
        {
            'chinese': '資訊管理所',
            'english': 'Graduate Institute of Information Management',
            'imgURL': ''
        },
        {
            'chinese': '資訊管理所',
            'english': 'Graduate Institute of Information Management',
            'imgURL': ''
        }
    ]

    export default {
        name: "Home",
        components:{
            Slide
        },
        data() {
            return{
                slidetitle: slidetitle
            }
        }
    }
</script>

<style scoped>

</style>
