<template>
    <div class="serial-container">
        <div class="serial-list">
            <div v-for="(item,i) in bookList" class="serial-item" :key="i">
                <div class="t">
                    <img :src="item.img" alt="">
                </div>
                <div class="b">
                    <h4>{{item.name}}</h4>
                    <p>{{item.desc}}</p>
                    <span class='span' :class="getType(item.type)">{{item.type==="1"?'现代小说':item.type==="2"?'武侠小说':'其他'}}</span>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name:"serial",
    setup(){
    },
    props:{
        msg:String
    },
    methods:{
         getType(type:String){
            switch(type){
                case "1":
                    return "span-1";
                    break
                case "2":
                    return "span-2";
                    break
                case "3":
                    return "span-3";
                default:
                    return "span-4"
            }
        }
    },
    created(){
        console.log("this is created")
    },
    data() {
        return {
            bookList:[
                {
                    name:"一城之痕",
                    desc:"记录几个少年的成长，和一个小城二十年的变迁...",
                    type:"1",
                    img:"@/assets/imgs/b1.jpg"
                },
                {
                    name:"风过琴箫鸣",
                    desc:"神雕侠侣和倚天屠龙记中间几十年的故事，本人续写的金庸同人小说",
                    type:"2",
                    img:"@/assets/imgs/b2.jpg"
                },
                {
                    name:"步迹",
                    desc:"成长伤痛",
                    type:"1",
                    img:"@/assets/imgs/b3.jpg"
                }
            ]
        }
    },
}
</script>
<style lang="less">
.serial-container{
        display:flex;
        justify-content: space-between;
        width:1000px;
        margin:0 auto;
        .serial-list{
            -moz-column-count:4;
            /* Firefox */
                -webkit-column-count:4;
            /* Safari 和 Chrome */
                column-count:4;
            -moz-column-gap:2em;
            -webkit-column-gap:2em;
            column-gap:2em;
            .serial-item{
                -moz-page-break-inside:avoid;
                -webkit-column-break-inside:avoid;
                break-inside:avoid;
                background-color:#fff;
                border-radius: 8px;
                width:240px;
                >.t{
                    cursor: pointer;
                    img{
                        width:240px;
                        border-top-left-radius: 8px;
                        border-top-right-radius: 8px;
                    }
                }
                >.b{
                    padding:10px;
                    width:100%;
                    .span{
                        display: inline-block;
                        margin-right: 5px;
                        padding: 2px 3px;
                        border-radius: 0 2px 2px 2px;
                        color:#fff;
                        font-size: 12px;
                        line-height: 1;
                    }
                    h4{
                        font-size:16px;
                        cursor: pointer;
                    }
                    .span-1{
                        background-color:#F26C98;
                    }
                    .span-2{
                        background-color:#5ab194;
                    }
                    .span-3{
                        background-color:#5d58a0;
                    }
                }
            }
            
        }
    }
</style>