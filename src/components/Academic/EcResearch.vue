<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
        </template>
    </content-layout>
</template>

<script>
    import ContentLayout from "@/components/ContentLayout";
    import {getSlide} from "@/api";


    export default {
        name: "EMResearch",
        components: {
            ContentLayout,
        },
        mounted() {
            this.getgetSlide(
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
            getgetSlide(parameter) {
                getSlide(parameter).then(response => {
                    this.slidetitle = response
                })
            },
        }
    }
</script>

<style scoped>
</style>
