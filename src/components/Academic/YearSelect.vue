<template>
    <a-select :defaultValue="year[0]" style="width: 100%">
        <a-select-option v-for="(k,index) in year" :key="index" :value="k">{{k}}</a-select-option>
    </a-select>
</template>

<script>
    const year = ['106學年','105學年','104學年','103學年','102學年','101學年']

    export default {
        name: "YearSelect",
        data() {
            return{
                year:year
            }
        }
    }
</script>

<style scoped>

</style>
