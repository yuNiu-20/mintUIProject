<template>
    <div class="proinfo">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <p class="ball" v-show="ballflag" ref="lb"></p>
        </transition>

        <div class="mui-card">

       <swiper :picList="picList" :isfull="false"></swiper>

        </div>
        <div class="mui-card">
            <!--页眉，放置标题-->
            <div class="mui-card-header">
                <h3>商品名称</h3>
            </div>
            <!--内容区-->
            <div class="mui-card-content">
                <p>
                    <span>市场价：<del>￥1120</del> &nbsp;</span>
                    <span class="newPrice">销售价：￥998</span>
                </p>

                <div class="buy">
                    购买数量:
                 <numbox @getNum="getnum"></numbox>
                </div>


                <p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addCart">加入购物车</mt-button>
                </p>
            </div>

        </div>
        <div class="mui-card">
            <!--页眉，放置标题-->
            <div class="mui-card-header">
                <h3>商品参数</h3>
            </div>
            <!--内容区-->
            <div class="mui-card-content">
                <p>货号：243254543653632</p>
                <p>库存：60件</p>
                <p>上架时间：2020-6-8</p>
            </div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain>图文介绍</mt-button>
                <mt-button type="danger" size="large" plain>商品评论</mt-button>
            </div>
        </div>

    </div>
</template>
<script>
    import swiper from './subComponents/swiper.vue';
    import mui from '../lib/mui/js/mui.js';
    import numbox from './subComponents/numbox.vue';
    export default {
        data(){
            return{
                picList:[
                    {img:'/src/images/cat.jpg'},
                    {img:'/src/images/my.jpg'}
                ],
                ballflag:false,
                addNum:1

            }

        },
        mounted() {
            mui('.mui-numbox').numbox();
        },
        components:{
            swiper,
            numbox
        },
        methods:{
            beforeEnter(el){
               el.style.transform="translate(0,0)";
            },
            enter(el,done){
                var balltarget=this.$refs.lb.getBoundingClientRect();
                var finaltarget=document.getElementById('final').getBoundingClientRect();
                var X=finaltarget.left-balltarget.left;
                var Y=finaltarget.top-balltarget.top;
                el.offsetWidth;
                el.style.transition='all .5s cubic-bezier(0,-0.84,.34,.99)';
                el.style.transform="translate("+X+"px,"+Y+"px)";
                el.addEventListener('transitionend', done);

                // done();
            },
            afterEnter(el){

                this.ballflag=!this.ballflag;

            },
            getnum(count){
               this.addNum=count;

            },
            addCart(){
               this.ballflag=!this.ballflag;
                var one={
                    id: this.$route.params.id,
                    count: parseInt(this.addNum),
                    price:'6'+this.$route.params.id+'9',
                    selected:true
                };
                this.$store.commit('addInCart',one);
            }

        }
    }
</script>
<style lang="less" scoped>
    .proinfo{
        position: relative;
        .ball{
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            z-index: 99;
            left: 136px;
            top:300px;

        }
    }

    .mui-card{
        margin-top: 0;
        padding: 0 4px;
        .mui-card-header{
            h3{
                font-size: 16px;
                text-align: center;
            }
        }
        .mui-card-content{
            .newPrice{
                color: red;
                font-size: 14px;
            }
            .buy{
                margin: 8px 0;
            }

        }
        .mui-card-footer{
            display: block;
           button{
                margin: 5px 0;
            }
        }
    }

</style>