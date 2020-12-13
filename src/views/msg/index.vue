<template>
    <div class="msg-container">
        <div class="msg-list">
            <div v-for="(item,i) in msgList" :key="i" class="msg-item">
                <div class="t">
                    <div class="tl">
                        <img src="../../assets/imgs/mine.png" alt="">
                    </div>
                    <div class="tr">
                        <span class="user">{{item.name}}</span>
                        <span class="date">{{item.date}}</span>
                    </div>
                </div>
                <div class="b">
                    <p>{{item.content}}</p>
                </div>
            </div>
            <div v-if="msgList.length===0" class="no-msg">暂无评论</div>
        </div>
        <div class="edit-msg">
            <div class="t">
                <img src="../../assets/imgs/mine.png" alt="">
                <span>发表评论</span>
            </div>
            <div class="c">
                <a-textarea v-model:value="msgForm.msgContent" placeholder="Basic usage" :rows="4" />
            </div>
            <div class="b">
                <a-input v-model:value="msgForm.user" placeholder="取个名字" />
                <a-button type="primary">提交</a-button>
    
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name:"msg",
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
            msgForm:{
                user:"",
                msgContent:""
            },
            msgList:[
                {
                    name:"李逍遥",
                    content:"老子要锄强扶弱，成为一代大侠！",
                    date:"2020年12月13日 11:30:56"
                },
                {
                    name:"重楼",
                    content:"景天呢，我要跟你再战三百回合！",
                    date:"2020年12月13日 11:30:56"
                },
                {
                    name:"酒剑仙",
                    content:"千杯醉不倒，唯我酒剑仙！",
                    date:"2020年12月13日 11:30:56"
                },
            ]
        }
    }
}
</script>
<style lang="less">
    .msg-container{
        width:1000px;
        margin:0 auto;
        .msg-list{
            padding:20px;
            width:100%;
            background-color: #fff;
            border-radius: 8px;
            .msg-item{
                width:100%;
                margin-bottom:20px;
                border-bottom:1px solid #eee;
                .t{
                    width:100%;
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    .tl{
                        width:38px;
                        height:38px;
                        >img{
                            width:100%;
                            height:100%;
                        }
                    }
                    .tr{
                        display: flex;
                        justify-content: space-between;
                        width:950px;
                        span.user{
                            font-size:16px;
                            color:#333;
                        }
                        span.date{
                            font-size:14px;
                            color:#8590a6;
                        }

                    }
                }
                .b{
                    margin-left:38px;
                    p.content{
                        font-size:14px;
                        color:#666;
                    }
                }
            }
        }
        .edit-msg{
            margin-top:20px;
            padding:20px;
            border-radius:8px;
            background-color:#fff;
            .t{
                img{
                    width:38px;
                    height:38px;
                }
                
            }
            .c{
                margin:10px 0;
            }
            .b{
                .ant-input{
                    width:200px;
                    margin-right:10px;
                }
                text-align: right;
            }
        }
    }
</style>