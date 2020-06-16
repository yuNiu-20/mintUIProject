<template>
    <div class="mainbox">
        <mt-header fixed title="顶部">
            <span slot="left" @click="back" v-show="flag">
                <mt-button icon="back">返回</mt-button>
            </span>
        </mt-header>
        <transition>
            <router-view></router-view>
        </transition>


        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-ny" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-ny" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-ny" to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span id="final" class="mui-badge">{{$store.getters.num}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-ny" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>

</template>
<script>
    export default {
        data(){
            return{
                cartnum:0,
                flag:false
            }

        },
        created() {
           this.flag= this.$route.path=='/home'?false:true;
        },
        methods:{
            back(){
                this.$router.go(-1);
            }
        },
        watch:{
            '$route.path': function (newVal,oldVal) {
                if(newVal=='/home'){
                    this.flag=false;
                }else{
                    this.flag=true;
                }
            }
        }
    }
</script>
<style>
    * {
        touch-action: pan-y;
    }
    body,html{
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
    .mainbox{
        padding-top: 40px;
        padding-bottom: 50px;
        width: 100%;
        height: 100%;

        overflow-x: hidden;


    }
    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    .v-enter-active, .v-leave-active{
        transition: all 0.5s;
    }
    .mui-bar-tab .mui-tab-item-ny
    {
        display: table-cell;
        overflow: hidden;

        width: 1%;
        height: 50px;

        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;

        color: #929292;
    }
    .mui-bar-tab .mui-tab-item-ny.mui-active
    {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item-ny .mui-icon
    {
        top: 3px;

        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .mui-tab-item-ny .mui-icon ~ .mui-tab-label
    {
        font-size: 11px;

        display: block;
        overflow: hidden;

        text-overflow: ellipsis;
    }
    .mui-bar-tab .mui-tab-item-ny .mui-icon:active
    {
        background: none;
    }
    .mui-tab-item-ny.mui-plus-hidden, .mui-tab-item-ny.mui-wechat-hidden
    {
        display: table-cell !important;
    }
    .mui-plus .mui-tab-item-ny.mui-plus-visible, .mui-wechat .mui-tab-item-ny.mui-wechat-visible
    {
        display: table-cell !important;
    }
</style>