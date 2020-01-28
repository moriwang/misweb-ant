<template>
    <div>
        <Slide :title="slidetitle"></Slide>
        <div style="padding: 0 50px">
            <h2>NOT IMPLEMENT</h2>
        </div>
    </div>
</template>

<script>
    import Slide from "@/components/common/Slide";

    const slidetitle = [
        {
            'chinese': '所務公告',
            'english': 'Administrative announcement',
            'imgURL': 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600'
        },
    ]

    export default {
        name: "Notice",
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
