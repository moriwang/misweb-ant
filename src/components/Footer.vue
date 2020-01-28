<template>
    <div id="component-footer">
        <div class="container">
            <a-row :gutter="24">
                <a-col :lg="8" :sm="12" :xs="24">
                    <h3>相關連結</h3>
                    <a>NTPU English Website</a>
                    <br>
                    <a>國立臺北大學資管所舊所網</a>
                    <br>
                    <a>國立臺北大學</a>
                    <br>
                    <a>國立臺北大學圖書館</a>
                    <br>
                    <a>臺灣博碩士論文知識加值系統</a>
                    <br>
                    <a>電子商務研究期刊</a>
                    <br>
                    <a>Google 學術搜尋</a>
                    <br>
                    <a>臺北大學學生手冊</a>
                </a-col>
                <a-col :lg="8" :sm="0" :xs="0">
                    <h3>校園地圖</h3>
                    <img class="footer-map" src="https://www.ntpu.edu.tw/chinese/about/images/maps_all_2019.jpg">
                </a-col>
                <a-col :lg="8" :sm="12" :xs="24">
                    <h3>聯絡資訊</h3>
                    <h3><a-icon theme="filled" type="facebook" /></h3>
                    <p><span>所辦助教：鄧雅燕 助教</span></p>
                    <p>地址：237 新北市三峽區大學路151號商學大樓8樓</p>
                    <p>信箱：yyteng@mail.ntpu.edu.tw</p>
                    <p>電話：(02)8674-1111 分機 66894</p>
                </a-col>
            </a-row>
        </div>
        <p class="footer-end">國立台北大學資訊管理所 ©{{year}} 版權所有</p>
    </div>
</template>

<script>
    import {getYear} from "@/utils";
    const year = getYear()

    export default {
        name: "Footer",
        data() {
            return{
                year:year
            }
        }
    }
</script>

<style scoped>
    #component-footer{
        background-color: #E3ECEF;
        padding: 32px 50px 0;
    }

    #component-footer .container{
        min-height: 200px;
        margin-bottom: 24px;
    }

    #component-footer .footer-map{
        height: 200px;
        object-fit: cover;
    }

    #component-footer .footer-end{
        margin: 0;
        text-align: center;
        font-size: 14px;
        padding-bottom: 12px;
    }
</style>
