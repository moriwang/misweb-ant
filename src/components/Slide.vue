<template>
    <a-carousel autoplay>
        <div v-for="(k, index) in title" :key="index">
<!--            <img src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600">-->
            <img :src="k.imgURL">
            <h1>{{k.chinese}}</h1>
            <h2>{{k.english}}</h2>
        </div>
    </a-carousel>
</template>

<script>
    export default {
        name: "Slide",
        props:{
            title:{
                type: Array
            }
        }
    }
</script>

<style scoped>
    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 450px;
        width: 100%;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;
        position: relative;
    }

    .ant-carousel img{
        width: 100%;
        object-fit: cover;
        filter: brightness(50%) contrast(70%);
    }

    .ant-carousel >>> .slick-slide h1 {
         position: absolute;
         left: 60px;
         bottom: 40px;
         font-size: 45px;
         color: #fff;
    }

    .ant-carousel >>> .slick-slide h2 {
        position: absolute;
        left: 60px;
        bottom: 0;
        color: #fff;
    }
</style>
