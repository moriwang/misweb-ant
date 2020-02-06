<template>
    <content-layout :title="slidetitle">
        <template v-slot:content>
            <h2>基礎課程</h2>
            <p>
                為增進本所碩士班研究生在資訊及商管領域之基礎知識，便於銜接及學習本所碩士班規劃之核心課程及未來選修課程，凡本所碩士班入學新生未曾於學士班時期修習該科目，或入學考試未達本所碩士班訂定之最低標準者，應先修習基礎課程，且該科目不計入畢業學分。(大學修過可抵修)
            </p>
            <course-card :courses="foundationCourse"></course-card>
            <h2>必修課程</h2>
            <p>
                本所碩士班之課程設計，為兼顧資訊及商管領域之整合，並強調培養本所學生之研究能力，故核心課程設計含括管理資訊系統、研究方法、企業倫理等，以建立堅實之知識基礎。
            </p>
            <course-card :courses="obligatoryCourse"></course-card>
            <h2>實作課程</h2>
            <p>
                各領域需從6門課中任選兩門修習，其中1門需為主領域之科目。
            </p>
            <course-card :courses="handsonCourse"></course-card>
            <h2>專業選修課程</h2>
            <p>
                本所碩士班選修課程規劃，係參酌國內外各知名大學之資管課程規劃之，可分為以下兩大領域。
            </p>
            <course-card :courses="electiveCourses"></course-card>
            <br>
            <h2>歷年課程規劃表下載</h2>
            <div :key="k.linkCN" v-for="k in curriculumPlanning">
                <a :href="k.linkURL">
                    <a-icon type="file"/>
                    {{k.linkCN}}
                </a>
                <br>
            </div>
        </template>
    </content-layout>
</template>

<script>
    import ContentLayout from "@/components/ContentLayout";
    import CourseCard from "@/components/Student/CourseCard";
    import {getSlide, getLink, getCourse} from "@/api";


    export default {
        name: "Course",
        components: {
            ContentLayout,
            CourseCard
        },
        mounted() {
            this.getgetSlide(
                {
                    'pageId': this.$route.name,
                })

            this.getCourse()

            getLink(
                {
                    location: 'curriculum-planning'
                }
            ).then(response => {
                this.curriculumPlanning = response
            })
        },
        data() {
            return {
                slidetitle: [],
                foundationCourse: [],
                obligatoryCourse: [],
                handsonCourse: [],
                electiveCourses: [],
                curriculumPlanning: []
            }
        },
        methods: {
            getgetSlide(parameter) {
                getSlide(parameter).then(response => {
                    this.slidetitle = response
                })
            },

            getCourse() {
                getCourse({type: '基礎課程'}).then(response => {
                    this.foundationCourse = response
                })

                getCourse({type: '必修課程'}).then(response => {
                    this.obligatoryCourse = response
                })

                getCourse({type: '實作課程'}).then(response => {
                    this.handsonCourse = response
                })

                getCourse({type: '選修課程'}).then(response => {
                    this.electiveCourses = response
                })
            }
        }
    }
</script>

<style scoped>
</style>
