<template>
    <div class="home-container">
        <div class="home-c">
            <div class="title">
                <h3>{{title}}</h3>
                <p><span style="margin-right:20px;">MD.Ghost</span> {{date}}</p>
            </div>
            <div class="article-content" v-html="articleDetail"></div>
        </div>
        <!-- <div class="home-r">
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
        </div> -->
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
    computed:{
        articleId():any{
            return this.route.query.id;
        }
    },
    methods:{
        getArticleDetail(){
            service.post("/article/find",{
                id:this.articleId
            }).then(res=>{
                console.log(res);
                this.articleDetail = res.data[0].content;
                this.title = res.data[0].title
                this.date = res.data[0].update_stamp
            })
        },
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
        this.getArticleDetail();
    },
    mounted(){
        this.getArticle();
        this.getLastrticle();
    },
    data() {
        return {
            articleList:[],
            lastArticle:[],
            articleDetail:"",
            title:"",
            date:""
        }
    },
    watch:{
        articleId:{
            handler(n){
                this.articleId = n;
                this.getArticleDetail();
            },
            immediate: true
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
        .home-c{
            padding:20px;
            background-color:#fff;
            border-radius: 10px;
            width:100%;
            .title{
                >h3{
                    font-size:28px;
                    color:#333;
                    font-weight: 400;
                }
                >p{
                    font-size:16px;
                }
            }
            .article-content{
                padding:20px 0px;
                
            }
            button.more-btn{
                padding:0 40px;
                background-color:#fff;
                border:none;
            }
        }
    }
</style>