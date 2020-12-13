<template>
    <div class="resume-container">
        this is resume
    </div>
</template>
<script lang="ts">
export default {
    name:"resume",
    setup(){
    },
    props:{
        msg:String
    },
    methods:{
        
    },
    created(){
    },
    data() {
        return {
        }
    }
}
</script>
<style lang="less">
    .resume-container{
        display:flex;
        justify-content: space-between;
        width:1000px;
        margin:0 auto;
    }
</style>