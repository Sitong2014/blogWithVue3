<template>
    <div class="home-container">
        <div class="home-l">
            <a-list class="article-top-list" item-layout="horizontal" :data-source="articleList">
                <template #renderItem="{ item }">
                    <a-list-item>
                        <div  class="article-item">
                            <div class="a-i-t">
                                <span :class="getType(item.type)" class="span-1">{{item.type}}</span>
                                <span>{{item.date}}</span>
                            </div>
                            <div class="content">
                                <h2 class="title">{{item.title}}</h2>
                                <div class="desc">{{item.desc}}</div>
                            </div>
                        </div>
                    </a-list-item>
                </template>
                <template #loadMore>
                    <div
                        v-if="showLoadingMore"
                        :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
                    >
                        <a-spin v-if="loadingMore" />
                        <a-button class="more-btn" v-else @click="onLoadMore">加载更多</a-button>
                    </div>
                </template>
            </a-list>
            <div class="article-top-list">
                
            </div>
            
        </div>
        <div class="home-r">
            <div class="type-list type-list-1">
                <h3>最近文章</h3>
                <ul>
                    <li>五分钟搞懂ES6的Promise</li>
                    <li>浅谈express的中间件</li>
                    <li>webGL中的拾色器</li>
                    <li>css3的黑科技</li>
                    <li>构建自己的3d地图</li>
                </ul>
            </div>
            <div class="type-list type-list-2">
                <h3>文章分类</h3>
                <ul>
                    <li>js</li>
                    <li>css</li>
                    <li>html</li>
                    <li>nodejs</li>
                    <li>webgl</li>
                    <li>杂文</li>
                    <li>其他</li>
                </ul>
            </div>
        </div>
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
        getType(type:string){
            switch (type) {
                case "js":
                    return 'span-1'
                    break;
                case "css":
                    return 'span-2'
                    break;
                case "nodejs":
                    return 'span-3'
                    break;
                case "webGL":
                    return 'span-4'
                    break;
                case "杂文":
                    return 'span-5'
                    break;
                case 'html':
                    return 'span-6'
                default:
                    return 'span-7'
                    break;
            }
        },
        onLoadMore(){

        },
        
    },
    created(){
    },
    mounted(){
        
    },
    data() {
        return {
            headFixed:false,
            loading: true,
            loadingMore: false,
            showLoadingMore: true,
            articleList:[
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
                },
                {
                    type:'html',
                    date:'2020-12-10',
                    title:"DOM操作不得不说的故事",
                    desc:"Promise链式调用和catch的使用 （它的链式调用跟JQ原理一致，在每一次then后面return一个新的promise对象，从而实现链式调用）"
                },
                {
                    type:'css',
                    date:'2020-12-10',
                    title:"CSS3你不知道的黑科技",
                    desc:"Promise链式调用和catch的使用 （它的链式调用跟JQ原理一致，在每一次then后面return一个新的promise对象，从而实现链式调用）"
                },
                {
                    type:'webGL',
                    date:'2020-12-10',
                    title:"构建自己的3d地图",
                    desc:"使用deckgl和mapbox构建的三维地图"
                },
                {
                    type:'杂文',
                    date:'2020-12-10',
                    title:"关于何时梧桐台湾，我有话说",
                    desc:"勿谓言之不预！"
                },
                {
                    type:'js',
                    date:'2020-12-10',
                    title:"ES6语法大解析",
                    desc:"Promise链式调用和catch的使用 （它的链式调用跟JQ原理一致，在每一次then后面return一个新的promise对象，从而实现链式调用）"
                },
                {
                    type:'node',
                    date:'2020-12-10',
                    title:"",
                    desc:"Promise链式调用和catch的使用 （它的链式调用跟JQ原理一致，在每一次then后面return一个新的promise对象，从而实现链式调用）"
                },
            ],
        }
    }
}
</script>
<style lang="less">
    .home-container{
        display:flex;
        justify-content: space-between;
        width:1000px;
        margin:0 auto;
        .home-l{
            padding-bottom:20px;
            width:73%;
            .article-top-list{
                li.ant-list-item{
                    padding:0;
                }
                .article-item{
                    width:100%;
                    padding:20px;
                    background-color:#fff;
                    border-radius:10px;
                    margin-bottom:20px;
                    cursor: pointer;
                    .a-i-t{
                        .span-1{
                            background: #1e87f0;
                        }
                        .span-2{
                            background: #22e9e6;
                        }
                        .span-3{
                            background: #ffcd26;
                        }
                        .span-4{
                            background: #8ccca5;
                        }
                        .span-5{
                            background: #6d90db;
                        }
                        .span-6{
                            background: #f1a6cc;
                        }
                        .span-7{
                            background: hsl(54, 17%, 45%);
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
            button.more-btn{
                padding:0 40px;
                background-color:#fff;
                border:none;
            }
        }
        .home-r{
            width:24%;
            .type-list{
                width:100%;
                padding:20px;
                background-color:#fff;
                border-radius:10px;
                margin-bottom:20px;
                h3{
                    font-size:18px;
                    padding-bottom:10px;
                    border-bottom:1px solid #ccc;
                }
                ul{
                    li{
                        list-style-type:none;
                        margin:10px 0;
                        &:hover{
                            text-decoration:underline;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>