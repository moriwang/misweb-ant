<template>
    <a-carousel autoplay>
        <div v-for="(k, index) in title" :key="index">
<!--            <img src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/05/13/1/6297002.jpg&x=0&y=0&sw=0&sh=0&exp=3600">-->
            <img :src="k.imgURL">
            <div class="carousel-title">
                <h1>{{k.chinese}}</h1>
                <h2>{{k.english}}</h2>
            </div>
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
        background: #364d79;
        overflow: hidden;
        position: relative;
    }

    .ant-carousel img{
        width: 100%;
        object-fit: cover;
        filter: brightness(50%) contrast(70%);
    }

    .ant-carousel >>> .slick-slide .carousel-title {
        position: absolute;
        left: 60px;
        bottom: 50px;
        text-align: left;
    }

    .ant-carousel >>> .slick-slide .carousel-title h1 {
        font-size: 45px;
        color: #fff;
        margin-bottom: 10px;
    }

    .ant-carousel >>> .slick-slide .carousel-title h2 {
        color: #fff;
    }

    @media only screen and (max-width: 1440px) {
        .ant-carousel >>> .slick-slide {
            height: 400px;
        }

        .ant-carousel >>> .slick-slide .carousel-title {
            left: 50px;
            bottom: 40px;
        }

        .ant-carousel >>> .slick-slide .carousel-title h1 {
            font-size: 40px;
        }
    }

    @media only screen and (max-width: 1200px) {
        .ant-carousel >>> .slick-slide {
            height: 350px;
        }
    }

    @media only screen and (max-width: 992px) {
        .ant-carousel >>> .slick-slide {
            height: 300px;
        }

        .ant-carousel >>> .slick-slide .carousel-title {
            left: 30px;
            bottom: 20px;
        }

        .ant-carousel >>> .slick-slide .carousel-title h1 {
            font-size: 30px;
        }
    }

    @media only screen and (max-width: 576px) {
        .ant-carousel >>> .slick-slide {
            height: 250px;
        }
    }
</style>
