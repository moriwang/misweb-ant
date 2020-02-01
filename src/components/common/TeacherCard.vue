<template>
    <a-row :gutter="24">
        <a-col :key="index" :lg="8" :md="8" :sm="12" :xl="6" :xs="12" :xxl="6" class="wrapper"
               v-for="(k,index) in teacherlist">
            <div class="teacher-card">
                <a-card class="card-face card-front" hoverable>
                    <img
                            :src="k.imgURL"
                            alt="example"
                            slot="cover"
                            style="height:210px; object-fit: cover"
                    />
                    <a-card-meta :title="k.c_name + ' ' + k.title">
                        <template slot="description">
                            <p>辦公室：{{k.office}}</p>
                            <p>分機：{{k.phone}}</p>
                        </template>
                    </a-card-meta>
                </a-card>
                <a-card class="card-face card-back">
                    <a-card-meta :title="k.c_name + ' ' + k.title">
                        <template slot="description">
                            <p>辦公室：{{k.office}}</p>
                            <p>分機：{{k.phone}}</p>
                            <h4>E-mail：</h4>
                            <p>{{k.email}}</p>
                            <h4>學歷：</h4>
                            <p>{{k.education}}</p>
                            <h4>專長領域：</h4>
                            <p>{{k.spec}}</p>
                        </template>
                    </a-card-meta>
                </a-card>
            </div>
        </a-col>
    </a-row>
</template>

<script>
    export default {
        name: "TeacherCard",
        props: {
            teacherlist: {
                type: Array
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        perspective: 600px;
    }

    .teacher-card {
        position: relative;
        width: 100%;
        height: 375px;
        margin-bottom: 24px;
        transition: transform 1s;
        transform-style: preserve-3d;
    }

    .teacher-card:hover {
        transform: rotateY(180deg);
    }

    .teacher-card h4 {
        margin-bottom: 0;
    }

    .card-face {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: auto;
        text-align: center;
        backface-visibility: hidden;
    }

    .card-back {
        transform: rotateY(180deg);
        background-color: #F1F2F5;
    }
</style>
