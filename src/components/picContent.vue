<template>
    <div>
        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in cateList" :key="item.id">
                    {{item.title}}
                </a>

            </div>
        </div>
        <ul class="pic-list">
            <router-link v-for="item in picList" :to="'/home/picContent/'+item.id" tag="li">
                <img v-lazy="item.addr">
                <div class="pic-info">
                    <div class="info-title">{{item.title}}</div>
                    <div class="info-body">{{item.descr}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
    import mui from '../lib/mui/js/mui.js'
    export default {
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                scrollX: true, //是否横向滚动
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        data(){
            return{
                cateList:[
                    {id:0,title:'全部'},
                    {id:1,title:'新闻'},
                    {id:2,title:'娱乐'},
                    {id:3,title:'名人'},
                    {id:4,title:'宠物'},
                    {id:5,title:'景色'},
                    {id:6,title:'动漫'},
                    {id:7,title:'论文'},
                ],
              picList: [
                 {id:0,title:'背景色',addr:'/src/images/pic1.jpg',descr:'爽肤水凤凰健康发拉进来经济法垃圾分类附加费经济法凉' +
                         '开水解放路口数据分类卡机弗兰克斯杰夫格林放大镜结果来看的结果来看时间规律开关机'},
                  {id:2,title:'背景色',addr:'/src/images/pic1.jpg',descr:'爽肤水凤凰健康发拉进来经济法垃圾分类附加费经济法凉' +
                          '开水解放路口数据分类卡机弗兰克斯杰夫格林放大镜结果来看的结果来看时间规律开关机'},
                  {id:3,title:'背景色',addr:'/src/images/pic1.jpg',descr:'爽肤水凤凰健康发拉进来经济法垃圾分类附加费经济法凉' +
                          '开水解放路口数据分类卡机弗兰克斯杰夫格林放大镜结果来看的结果来看时间规律开关机'},
                  {id:4,title:'背景色',addr:'/src/images/pic1.jpg',descr:'爽肤水凤凰健康发拉进来经济法垃圾分类附加费经济法凉' +
                          '开水解放路口数据分类卡机弗兰克斯杰夫格林放大镜结果来看的结果来看时间规律开关机'},
                  {id:5,title:'背景色',addr:'/src/images/pic2.jpg',descr:'爽肤水凤凰健康发拉进来经济法垃圾分类附加费经济法凉' +
                          '开水解放路口数据分类卡机弗兰克斯杰夫格林放大镜结果来看的结果来看时间规律开关机'},
                  {id:6,title:'背景色',addr:'/src/images/pic2.jpg',descr:'爽肤水凤凰健康发拉进来经济法垃圾分类附加费经济法凉' +
                          '开水解放路口数据分类卡机弗兰克斯杰夫格林放大镜结果来看的结果来看时间规律开关机'},
                  {id:7,title:'背景色',addr:'/src/images/pic2.jpg',descr:'爽肤水凤凰健康发拉进来经济法垃圾分类附加费经济法凉' +
                          '开水解放路口数据分类卡机弗兰克斯杰夫格林放大镜结果来看的结果来看时间规律开关解放路口数据分类卡机弗兰克' +
                          '斯杰夫格林放大镜结果来看的结果来看时间规律开关解放路口数据分类卡机弗兰克斯杰夫格林放大镜结果来看的结果来' +
                          '看时间规律开关解放路口数据分类卡机弗兰克斯杰夫格林放大镜结果来看的结果来看时间规律开关机'},
                  {id:8,title:'背景色',addr:'/src/images/pic3.gif',descr:'爽肤水凤凰健康发拉进来经济法垃圾分类附加费经济法凉' +
                          '开水解放路口数据分类卡机弗兰克斯杰夫格林放大镜结果来看的结果来看时间规律开关机'},
                  {id:9,title:'背景色',addr:'/src/images/pic4.gif',descr:'爽肤水凤凰健康发拉进来经济法垃圾分类附加费经济法凉' +
                          '开水解放路口数据分类卡机弗兰克斯杰夫格林放大镜结果来看的结果来看时间规律开关机'}


             ]
            }
        }
    }
</script>
<style lang="less" scoped>

    .pic-list{
        list-style: none;
        padding: 8px;
        li{
            margin-bottom: 10px;
            text-align: center;
            background-color: #cccccc;
            box-shadow: 2px 2px 2px #9d9d9d;
            position: relative;
            img{
                width: 100%;
            }
            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;

            }
            .pic-info{
                color: white;
                background-color: rgba(0,0,0,0.3);
                position: absolute;
                bottom: 0;
                text-align: left;
                padding: 0 5px;
                .info-title{
                    font-size: 16px;
                }
                .info-body{
                    font-size: 13px;
                    max-height: 60px;
                }
            }
        }

    }
</style>