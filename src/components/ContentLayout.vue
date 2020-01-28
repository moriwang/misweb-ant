<template>
    <div class="section-content">
        <slot name="content"></slot>
    </div>
</template>

<script>
    export default {
        name: "ContentLayout"
    }
</script>

<style scoped>
    .section-content {
        margin-left: auto;
        margin-right: auto;
        width: 1200px;
        padding: 40px 0;
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
