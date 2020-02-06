<template>
    <div id="component-footer">
        <div class="container">
            <a-row :gutter="24">
                <a-col :lg="8" :sm="12" :xs="24">
                    <div class="footer-link">
                        <h3>相關連結</h3>
                        <div class="footer-link" :key="k.linkCN" v-for="k in footerLink">
                            <a :href="k.linkURL" target="_blank">{{k.linkCN}}</a>
                            <br>
                        </div>
                    </div>
                </a-col>
                <a-col :lg="8" :sm="0" :xs="0">
                    <h3>校園地圖</h3>
                    <a-tooltip :mouseEnterDelay="0.3">
                        <template slot="title">
                            <p style="font-size: 14px; margin: 0">點擊圖片放大查看</p>
                        </template>
                        <a :href="map" target="_blank">
                            <img class="footer-map" :src="map">
                        </a>
                    </a-tooltip>
                </a-col>
                <a-col :lg="8" :sm="12" :xs="24">
                    <div class="footer-contact">
                        <h3>聯絡資訊</h3>
                        <h3>
                            <a-icon theme="filled" type="facebook"/>
                        </h3>
                        <p><span>所辦助教：鄧雅燕 助教</span></p>
                        <p>地址：237 新北市三峽區大學路151號商學大樓8樓</p>
                        <p>信箱：yyteng@mail.ntpu.edu.tw</p>
                        <p>電話：(02)8674-1111 分機 66894</p>
                    </div>
                </a-col>
            </a-row>
        </div>
        <p class="footer-end">國立台北大學資訊管理所 ©{{year}} 版權所有</p>
    </div>
</template>

<script>
    import {getYear} from "@/utils";
    import {getLink} from "@/api";

    const year = getYear();

    export default {
        name: "Footer",
        mounted() {
            getLink(
                {
                    location: 'footer-link'
                }
            ).then(response => {
                this.footerLink = response
            })

            getLink(
                {
                    location: 'map'
                }
            ).then(response => {
                this.map = response[0].linkURL
            })
        },
        data() {
            return {
                footerLink:[],
                map: '',
                year: year,
            }
        },
    }
</script>

<style scoped>
    #component-footer {
        background-color: #E3ECEF;
        padding: 32px 0 0;
    }

    #component-footer .footer-map {
        height: 200px;
        object-fit: cover;
    }

    #component-footer .footer-contact {
        padding-left: 24px;
    }

    #component-footer .footer-end {
        margin: 0;
        text-align: center;
        font-size: 14px;
        padding-bottom: 12px;
    }

    #component-footer .container {
        min-height: 200px;
        margin-bottom: 24px;
        margin-left: auto;
        margin-right: auto;
        width: 1300px;
    }

    @media only screen and (max-width: 1440px) {
        #component-footer .container {
            margin-left: auto;
            margin-right: auto;
            width: 1100px
        }
    }

    @media only screen and (max-width: 1200px) {
        #component-footer .container {
            margin-left: auto;
            margin-right: auto;
            width: 880px
        }
    }

    @media only screen and (max-width: 992px) {
        #component-footer .container {
            margin-left: auto;
            margin-right: auto;
            width: 87.5%
        }

        #component-footer .footer-contact {
            padding-left: 0;
        }
    }

    @media only screen and (max-width: 576px) {
        #component-footer .footer-contact {
            margin-top: 30px;
        }
    }
</style>
