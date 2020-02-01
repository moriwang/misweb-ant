<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
        </template>
    </content-layout>
</template>

<script>
    import ContentLayout from "@/components/ContentLayout";
    import {pageSlide} from "@/api";


    export default {
        name: "EMResearch",
        components: {
            ContentLayout,
        },
        mounted() {
            this.getPageSlide(
                {
                    'pageId': this.$route.name,
                })
        },
        data() {
            return {
                slidetitle: []
            }
        },
        methods: {
            getPageSlide(parameter) {
                pageSlide(parameter).then(response => {
                    this.slidetitle = response
                })
            },
        }
    }
</script>

<style scoped>
</style>
