<template>
    <a-locale-provider :locale="locale">
        <div id="app">
            <router-view v-if="isRouterAlive"></router-view>
        </div>
    </a-locale-provider>
</template>

<script>
    import zh_TW from 'ant-design-vue/lib/locale-provider/zh_TW'

    export default {
        name: 'app',
        provide (){
            return{
                reload: this.reload
            }
        },
        data() {
            return {
                locale: zh_TW,
                isRouterAlive: true
            }
        },
        methods: {
            reload (){
                this.isRouterAlive = false
                this.$nextTick(function(){
                    this.isRouterAlive = true
                })
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
