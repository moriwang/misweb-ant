<template>
    <div>
        <Slide :title="title"></Slide>
        <div class="section-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    import Slide from "@/components/common/Slide";

    export default {
        name: "ContentLayout",
        props: {
            title: {
                type: Array
            }
        },
        components: {
            Slide,
        },
    }
</script>

<style scoped>
    .section-content {
        margin-left: auto;
        margin-right: auto;
        width: 1200px;
        padding: 40px 0 60px 0;
        position: relative;
    }

    @media only screen and (max-width: 1440px) {
        .section-content {
            margin-left: auto;
            margin-right: auto;
            width: 1100px
        }
    }

    @media only screen and (max-width: 1200px) {
        .section-content {
            margin-left: auto;
            margin-right: auto;
            width: 880px
        }
    }

    @media only screen and (max-width: 992px) {
        .section-content {
            margin-left: auto;
            margin-right: auto;
            width: 87.5%
        }
    }
</style>
