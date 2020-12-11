<template>
    <div class="serial-container">
        this is serial
    </div>
</template>
<script lang="ts">
export default {
    name:"blogHome",
    setup(){
    },
    props:{
        msg:String
    },
    methods:{
        
    },
    created(){
        console.log("this is created")
    },
    data() {
        return {
        }
    }
}
</script>
<style lang="less">
</style>