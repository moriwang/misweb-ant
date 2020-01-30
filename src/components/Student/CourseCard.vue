<template>
    <a-row :gutter="24">
        <a-col :lg="4" :md="6" :sm="8" :xs="12" v-for="k in courses" :key="k.name">
            <a-card id="single-course" hoverable :style="{'background-color': getCardColor(k)}">
                <div class="course-name">
                    <p>{{k.name}}</p>
                </div>
            </a-card>
        </a-col>
    </a-row>
</template>

<script>
    export default {
        name: "CourseCard",
        props: {
            courses:{
                type: Array
            }
        },
        methods:{
            getCardColor(k){
                if (k.field === 'system'){
                    return '#cfd4e7'
                }
                else if (k.field === 'manage'){
                    return '#e7cfbf'
                }
                else{
                    return '#cce4e7'
                }
            }
        }
    }
</script>

<style scoped>
    #single-course{
        border-radius: 10px;
        height: 100px;
        margin-bottom: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #single-course .course-name p{
        width: 100px;
        text-align: center;
        color: #494949;
        margin-top: 15px;
    }

</style>
