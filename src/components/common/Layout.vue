<template>
    <a-layout id="components-layout" style="min-height:100vh; background-color: white">
        <a-layout-header>
            <Navbar></Navbar>
        </a-layout-header>
        <a-layout-content>
            <router-view></router-view>
        </a-layout-content>
        <a-layout-footer>
            <Footer></Footer>
        </a-layout-footer>
    </a-layout>
</template>

<script>
    import Navbar from "@/components/common/Navbar"
    import Footer from "@/components/common/Footer"

    export default {
        name: "Layout.vue",
        components: {
            Navbar,
            Footer
        }
    }
</script>

<style scoped>
    #components-layout .ant-layout-header{
        padding: 0;
    }

    #components-layout .ant-layout-content{
        min-height: unset;
    }

    #components-layout .ant-layout-footer{
        padding:0
    }
</style>

