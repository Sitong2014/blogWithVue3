<template>
    <div class="home-container">
        <div class="home-l">
            <a-list class="article-top-list" item-layout="horizontal" :data-source="articleList">
                <template #renderItem="{ item }">
                    <a-list-item>
                        <div  class="article-item">
                            <div class="a-i-t">
                                <span :class="getType(item.type)" class="span-1">{{getTypeName(item.type)}}</span>
                                <span>{{item.update_stamp}}</span>
                            </div>
                            <div class="content">
                                <h2 @click="goDetail(item)" class="title">{{item.title}}</h2>
                                <div class="desc">{{item.summary}}</div>
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
                    <li @click="goDetail(item)" v-for="(item) in lastArticle" :key="item.article_id">{{item.title}}</li>
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
import service from "../../request";
import { useRoute, useRouter } from  'vue-router';
export default {
    name:"blogHome",
    setup(){
        const route = useRoute()
        const router = useRouter()
        return {route,router}
    },
    props:{
        msg:String
    },
    methods:{
        getArticle(){
            service.post("/article/find").then(res=>{
                console.log(res);
                this.articleList = res.data;
            })
        },
        getLastrticle(){
            service.post("/article/findNew").then(res=>{
                console.log(res);
                this.lastArticle = res.data;
            })
        },
        getTypeName(type:Number){
            switch (type) {
                case 0:
                    return 'js'
                    break;
                case 1:
                    return 'css'
                    break;
                case 2:
                    return 'html'
                    break;
                case 3:
                    return 'node'
                    break;
                case 4:
                    return '杂文'
                    break;
                case 5:
                    return '其他'
                default:
                    return '其他'
                    break;
            }
        },
        getType(type:Number){
            switch (type) {
                case 0:
                    return 'span-1'
                    break;
                case 1:
                    return 'span-2'
                    break;
                case 2:
                    return 'span-3'
                    break;
                case 3:
                    return 'span-4'
                    break;
                case 4:
                    return 'span-5'
                    break;
                case 5:
                    return 'span-6'
                default:
                    return 'span-7'
                    break;
            }
        },
        onLoadMore(){

        },
        goDetail(item:any){
            console.log(item.article_id);
            this.router.push({
                path:"/articleDetail",
                query:{
                    id:item.article_id
                }
            })
        }
        
    },
    created(){
    },
    mounted(){
        this.getArticle();
        this.getLastrticle();
    },
    data() {
        return {
            headFixed:false,
            loading: true,
            loadingMore: false,
            showLoadingMore: true,
            articleList:[],
            lastArticle:[]
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
                             cursor: pointer;
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