<template>
        <div  class="blog-head-container">
            <div class="blog-head-box">
                <div class="userInfo">
                    <div class="userInfo-l">
                        <img src="../../assets/imgs/avatar.jpg" alt="">
                    </div>
                    <div class="userInfo-r">
                        <h3><a href="">MD.Ghost</a></h3>
                        <p>孤独的风中一只鬼</p>
                        <!-- <a-button type="primary">按钮</a-button> -->
                    </div>
                </div>
                <div class="menu-list" :class="isShort?'short':''">
                    <ul :class="isShort?'short':''">
                        <li>
                            <a href="/#/home">文章</a>
                        </li>
                        <li><a href="/#/serial">连载</a></li>
                        <li><a href="/#/resume">简历</a></li>
                        <li><a href="/#/msg">留言</a></li>
                        <li><a href="/#/position">步迹</a></li>
                        <li><a href="/#/other">其他</a></li>
                    </ul>
                </div>
                <div class="search-box">
                    <span class="icon icon-search"></span>
                    <a v-show="!isShort" @click="openMenu" href="javascript:void(0)"> <span class="close"></span></a>
                    <a v-show="isShort" @click="openMenu" href="javascript:void(0)"> <span class="open"></span></a>
                </div>
                <div class="menu-box">
                    <span @click="showDrawer" class="icon icon-menu"></span>
                </div>
            </div>
            <a-drawer
                title="MD.Ghost"
                placement="right"
                maskClosable="true"
                :closable="false"
                :visible="visible"
                :after-visible-change="afterVisibleChange"
                @close="onClose"
                >
                <ul>
                    <li>
                        <a href="/">文章</a>
                    </li>
                    <li><a href="/#/serial">连载</a></li>
                    <li><a href="/#/resume">简历</a></li>
                    <li><a href="/#/msg">留言</a></li>
                    <li><a href="/#/other">其他</a></li>
                </ul>
            </a-drawer>
        </div>
    
   
</template>
<script lang="ts">
import {defineComponent } from 'vue';
 export default defineComponent({
    setup(props) {
        console.log(props.msg)
    },
    
    props:{
        msg:String
    },

    methods:{
        openMenu(){
            this.isShort = !this.isShort;
        },
        onClose(){
            this.visible = false;
        },
        showDrawer(){
            this.visible = true;
        },
        afterVisibleChange(){
            
        }
    },
    data() {
        return {
            isShort:false,
            visible:false,
        }
    }

  });
</script>
<style lang="less">
    .blog-head-container{
        
        display:flex;
        justify-content: flex-start;
        // width:80%;
        margin:0 auto;
        max-width:1000px;
        .blog-head-box{
            // width:78%;
            // max-width:780px;
            padding:20px 20px;
            display:flex;
            justify-content:space-between;
            align-items: center;
            height:80px;
            margin:40px 0;
            background-color:#fff;
            border-radius:10px;
            .userInfo{
                display:flex;
                justify-content:space-between;
                align-items: center;
                .userInfo-l{
                    img{
                        width:50px;
                        height:50px;
                        border-radius:50%;
                    }
                }
                .userInfo-r{
                    margin-left:20px;
                    >h3{
                        font-weight: 400;
                        margin-top:10px;
                        a{
                            color:#333;
                            text-decoration: none;
                        }  
                    }
                    >p{
                        font-size:0.8rem;
                        color:#999;
                    }
                }
            }
            .menu-list{
                //width:50%;
                transition: all 0.3s cubic-bezier(0, 0.99, 0.2, 1);
                margin:0 70px;
                overflow: hidden;
                &.short{
                    //width:1px;
                }
                >ul{
                    margin:0;
                    &.short{
                        width:1px;
                        transform: translateX(-350px);
                        transition: all 0.3s cubic-bezier(0, 0.99, 0.2, 1);
                    }
                    display:flex;
                    justify-content:space-between;
                    align-items: center;
                    transition: all 0.3s cubic-bezier(0, 0.99, 0.2, 1);
                    transform: translateX(0px);
                    //width:350px;
                    overflow: hidden;
                    li{
                        list-style-type:none;
                        margin:0 15px;
                        >a{
                            color:#999;
                        }
                    }
                }
            
            }
            .search-box{
                width:70px;
                .icon-search{
                    width:18px;
                    height:18px;
                    transform: translateY(2px);
                    background-image:url(../../assets/imgs/search.svg);
                    cursor: pointer;
                }
                a>{
                    display:inline-block;
                    width:20px;
                    height:20px;
                    margin-left:25px;
                    .close{
                        display:inline-block;
                        width:20px;
                        height:1px;
                        
                        background-color:#999;
                        transform:translateY(-7px) rotate(0deg);
                        transition: all 0.3s cubic-bezier(0, 0.99, 0.2, 1);
                        background: transparent;
                        cursor: pointer;
                        
                        &::before{
                            transform: translateY(0) rotate(45deg);
                            background: #999;
                            content: "";
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            transition: all 0.3s cubic-bezier(0, 0.99, 0.2, 1);
                        }
                        &::after{
                            transform: translateY(0) rotate(135deg);
                            background: #999;
                            content: "";
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            transition: all 0.3s cubic-bezier(0, 0.99, 0.2, 1);
                        }
                        

                    }
                    .open{
                        display:inline-block;
                        width:20px;
                        height:1px;
                        background-color:#999;
                        transform:translateY(-7px) rotate(0deg);
                        transition: all 0.3s cubic-bezier(0, 0.99, 0.2, 1);
                        //background: transparent;
                        &::before{
                            transform: translateY(7px) rotate(0deg);
                            background: #999;
                            content: "";
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            transition: all 0.3s cubic-bezier(0, 0.99, 0.2, 1);
                        }
                        &::after{
                            transform: translateY(-7px) rotate(0deg);
                            background: #999;
                            content: "";
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            transition: all 0.3s cubic-bezier(0, 0.99, 0.2, 1);
                        }
                    }
                    &:hover{
                        .close::after{
                            transform: translateY(0) rotate(180deg);
                        }
                        .close::before{
                            transform: translateY(0) rotate(0deg);
                        }
                        .open::after{
                            transform: translateY(0) rotate(90deg);
                        }
                        .open::before{
                            transform: translateY(0) rotate(90deg);
                        }
                    }
                }
                
            }
            
        }
    }
    .ant-drawer-body{
        ul{
            li{
                list-style-type: none;
                 margin-bottom:20px;
                a{
                    font-size:14px;
                    color:#333;
                   
                }
            }
        }
    }
    /* 媒体查询 */
@media (max-width: 640px){
    .blog-head-container{
        width:100%;
        padding:10px;
        .blog-head-box{
            width:100%;
            margin: 10px 0px;
            .userInfo{
                min-width:165px;
                .userInfo-r{
                    h3{
                        font-size:14px;
                    }
                    p{
                        font-size:12px;
                    }
                }
            }
            .menu-list{
                display:none;
            }
            .search-box{
                display:none;
            }
            .menu-box{
                display: flex;
                align-items: center;
                justify-content:flex-end;
                width:60px;
                height:100%;
                .icon-menu{
                    width:24px;
                    height:24px;
                    cursor: pointer;
                    background-image:url(../../assets/imgs/menu.svg);
                }
            }
        }
    }
}
    
</style>