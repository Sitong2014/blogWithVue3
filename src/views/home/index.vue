<template>
    <div class="home-container">
        <div class="home-l">
            <div class="article-top-list">
                <div v-for="(item,i) in articleTop" :key="i" class="article-item">
                    <div class="a-i-t">
                        <span class="span-1">{{item.type}}</span>
                        <span>{{item.date}}</span>
                    </div>
                    <div class="content">
                        <h2 class="title">{{item.title}}</h2>
                        <div class="desc">{{item.desc}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-r"></div>
    </div>
</template>
<script lang="ts">
export default {
    name:"blogHome",
    setup(){
        console.log('bloghome')
    },
    props:{
        msg:String
    },
    methods:{
        
    },
    data() {
        return {
            articleTop:[
                {
                    type:'js',
                    date:'2020-12-10',
                    title:"五分钟搞懂ES6的Promise",
                    desc:"Promise链式调用和catch的使用 （它的链式调用跟JQ原理一致，在每一次then后面return一个新的promise对象，从而实现链式调用）"
                },
                {
                    type:'node',
                    date:'2020-12-10',
                    title:"浅谈express的中间件",
                    desc:"Promise链式调用和catch的使用 （它的链式调用跟JQ原理一致，在每一次then后面return一个新的promise对象，从而实现链式调用）"
                }
            ],
        }
    }
}
</script>
<style lang="less">
    .home-container{
        width:1000px;
        margin:0 auto;
        .home-l{
            width:77%;
            
            .article-top-list{
                .article-item{
                    padding:20px;
                    background-color:#fff;
                    border-radius:10px;
                    margin-bottom:20px;
                    cursor: pointer;
                    .a-i-t{
                        .span-1{
                            background: #1e87f0;
                        }
                        span:nth-child(1){
                            display: inline-block;
                            padding: 0 10px;
                            line-height: 1.5;
                            color: #fff;
                            vertical-align: middle;
                            white-space: nowrap;
                            border-radius: 3px;
                            font-size:12px;
                            margin-right:20px;
                        }
                        span:nth-child(2){
                            font-size: 12px;
                            color: #aaa;
                        }
                    }
                    .content{
                        margin-top:10px;
                        >h2.title{
                            font-size:18px;
                            font-weight:400;
                        }
                        >.desc{
                            font-size:14px;
                            color:#999;
                        }
                    }
                }
            }
        }
    }
</style>