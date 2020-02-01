<template>
    <a-locale-provider :locale="locale">
        <div id="app">
            <router-view></router-view>
        </div>
    </a-locale-provider>
</template>

<script>
    import zh_TW from 'ant-design-vue/lib/locale-provider/zh_TW'

    export default {
        name: 'app',
        data() {
            return {
                locale: zh_TW
            }
        }
    }
</script>

<style>
    #app {
        font-family: -apple-system, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei', 'ST Heiti', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
