<template>
    <div id="navbar">
        <div class="logo">
            <img src="../../assets/logo_ntpu.png" />
        </div>
        <a-menu theme="light" mode="horizontal" style="line-height: 64px" class="nav-menu"
                :defaultSelectedKeys="[$route.name]"
                :subMenuCloseDelay="0">
            <a-menu-item key="home">
                <router-link :to="{path: '/home'}" exact>首頁</router-link>
            </a-menu-item>
            <a-sub-menu key="1">
                <span slot="title" class="submenu-title-wrapper">最新消息</span>
                <a-menu-item key="1-1">
                    <router-link :to="{name: '1-1'}" exact>所務公告</router-link>
                </a-menu-item>
                <a-menu-item key="1-2">
                    <router-link :to="{name: '1-2'}" exact>活動資訊</router-link>
                </a-menu-item>
                <a-menu-item key="1-3">
                    <router-link :to="{name: '1-3'}" exact>比賽資訊</router-link>
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="2">
                <template slot="title" class="submenu-title-wrapper">系所介紹</template>
                <a-menu-item key="2-1">
                    <router-link :to="{name: '2-1'}" exact>關於本所</router-link>
                </a-menu-item>
                <a-menu-item key="2-2">
                    <router-link :to="{name: '2-2'}" exact>教育目標</router-link>
                </a-menu-item>
                <a-menu-item key="2-3">
                    <router-link :to="{name: '2-3'}" exact>師資介紹</router-link>
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="3">
                <template slot="title" class="submenu-title-wrapper">招生資訊</template>
                <a-menu-item key="3-1">
                    <router-link :to="{name: '3-1'}" exact>招生簡章</router-link>
                </a-menu-item>
                <a-menu-item key="3-2">
                    <router-link :to="{name: '3-2'}" exact>一貫修讀學、碩士學位</router-link>
                </a-menu-item>
                <a-menu-item key="3-3">
                    <a href="http://www.ntpu.edu.tw/exam/" target="_blank">台北大學招生資訊網 <a-icon type="link" style="color: #1DA57A"/></a>
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="4">
                <template slot="title" class="submenu-title-wrapper">學術研究</template>
                <a-menu-item key="4-1">
                    <router-link :to="{name: '4-1'}" exact>學術發表</router-link>
                </a-menu-item>
                <a-menu-item key="4-2">
                    <router-link :to="{name: '4-2'}" exact>歷屆論文</router-link>
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="5">
                <template slot="title" class="submenu-title-wrapper">學生資訊</template>
                <a-menu-item key="5-1">
                    <router-link :to="{name: '5-1'}" exact>課程規劃</router-link>
                </a-menu-item>
                <a-menu-item key="5-2">
                    <router-link :to="{name: '5-2'}" exact>修業規定</router-link>
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="6">
                <template slot="title" class="submenu-title-wrapper">表單與連結</template>
                <a-menu-item key="6-1">
                    <router-link :to="{name: '6-1'}" exact>表單下載</router-link>
                </a-menu-item>
                <a-menu-item key="6-2">
                    <a href="http://goo.gl/forms/LlMbFWXwzyxiYgV52" target="_blank">畢業校友回填 <a-icon type="link" style="color: #1DA57A"/></a>
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    #navbar .logo img{
        height: 50px;
        object-fit: cover;
        float: left;
        margin: 5px 50px;
    }

    #navbar .nav-menu{
        text-align: right;
        padding-right: 50px;
    }
</style>
