<template>
    <div class="main">
<!--        <div class="mui-slider" id="slider">-->
<!--            <div class="mui-slider-group mui-slider-loop" >-->
<!--                &lt;!&ndash; 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) &ndash;&gt;-->
<!--                <div class="mui-slider-item mui-slider-item-duplicate">-->
<!--                    <a href="#">-->
<!--                        <img src="../images/slidepic4.jpg">-->
<!--                    </a>-->
<!--                </div>-->
<!--                &lt;!&ndash; 第一张 &ndash;&gt;-->
<!--                <div class="mui-slider-item mui-active">-->
<!--                    <a href="#">-->
<!--                        <img src="../images/slidepic1.jpg">-->
<!--                    </a>-->
<!--                </div>-->
<!--                &lt;!&ndash; 第二张 &ndash;&gt;-->
<!--                <div class="mui-slider-item ">-->
<!--                    <a href="#">-->
<!--                        <img src="../images/slidepic2.jpg">-->
<!--                    </a>-->
<!--                </div>-->
<!--                &lt;!&ndash; 第三张 &ndash;&gt;-->
<!--                <div class="mui-slider-item">-->
<!--                    <a href="#">-->
<!--                        <img src="../images/slidepic3.jpg">-->
<!--                    </a>-->
<!--                </div>-->
<!--                &lt;!&ndash; 第四张 &ndash;&gt;-->
<!--                <div class="mui-slider-item">-->
<!--                    <a href="#">-->
<!--                        <img src="../images/slidepic4.jpg">-->
<!--                    </a>-->
<!--                </div>-->
<!--                &lt;!&ndash; 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) &ndash;&gt;-->
<!--                <div class="mui-slider-item mui-slider-item-duplicate">-->
<!--                    <a href="#">-->
<!--                        <img src="../images/slidepic1.jpg">-->
<!--                    </a>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="mui-slider-indicator">-->
<!--                <div class="mui-indicator mui-active"></div>-->
<!--                <div class="mui-indicator"></div>-->
<!--                <div class="mui-indicator"></div>-->
<!--                <div class="mui-indicator"></div>-->
<!--            </div>-->
<!--        </div>-->
        <swiper :picList="picList" :isfull="true"></swiper>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                <img src="/src/images/menu1.png" >
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/picContent">
                <img src="/src/images/menu2.png" >
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/product">
                <img src="/src/images/menu3.png" >
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/message">
                <img src="/src/images/menu4.png" >
                <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/vedio">
                <img src="/src/images/menu5.png" >
                <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/contact">
                <img src="/src/images/menu6.png" >
                <div class="mui-media-body">联系我们</div></router-link></li>
        </ul>
    </div>
</template>
<script>
    // import  mui from '../lib/mui/js/mui.js';
    import swiper from "./subComponents/swiper.vue";
    export default {
        data(){
            return{
                picList:[
                    {id:1,img:"/src/images/slidepic1.jpg"},
                    {id:2,img:"/src/images/slidepic2.jpg"},
                    {id:3,img:"/src/images/slidepic3.jpg"},
                    {id:4,img:"/src/images/slidepic4.jpg"},
                ]
            }
        },
        created(){
            // this.getPic(); //跨域，无法获取
        },
        updated() {
            // mui.init({
            //     // 启用滑动
            //     swipeBack: true
            // });
            // this.init();
        },
        mounted(){
            this.init();
        },
        methods:{

            init(){
                //
                // var slider = mui("#slider");
                // // 配置定时轮播滑动
                // slider.slider({
                //     interval: 1000
                // });

            },
            getPic(){

                this.$http.get('http://vue.studyit.io/api/getlunbo').then(function(data) {

                    console.log(data);
                })

            }
        },
        components:{
            swiper
        }
    }


</script>
<style lang="less" scoped>
    * {
        touch-action: pan-y;
    }

    .mui-grid-view.mui-grid-9{
        background-color: #fff;
    }
    .mui-grid-view.mui-grid-9 .mui-media{
        font-size: 13px;
        background-color: #fff;
        border: none;
        img{
            width: 60px;
        }
        
    }

</style>