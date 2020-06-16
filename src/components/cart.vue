<template>
    <div class="cartpage">
        <div class="mui-card products" v-for="item in infoList">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch v-model="$store.getters.getCartSelect[item.id]"
                               @change="selectChange(item.id,$store.getters.getCartSelect[item.id])"></mt-switch>
                    <img src="../images/cat.jpg" alt="">
                    <div class="info">
                        <h3>{{item.title}}{{item.id}}</h3>
                        <p>
                            <span class="price">￥{{item.price}}</span>
                            <numbox :count="$store.getters.getCartCount[item.id]" :id="item.id"></numbox>
                            <a href="#" @click.prevent="remove(item.id)">删除</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card caculate">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="leftbox">
                        <p>总计（不含运费）</p>
                        <p>
                            已勾选商品 <span class="red" >{{$store.getters.CartCaculate.count}}</span> 件
                            &nbsp;&nbsp;
                            总计 <span class="red">￥{{$store.getters.CartCaculate.price}}</span> 元
                        </p>
                    </div>
                     <mt-button type="danger" size="small">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import numbox from './subComponents/cartNumbox.vue';
    export default {
        data(){
            return{
                infoList:[
                    {id:2,title:'经济学法学医学系',price:'629'},
                    {id:1,title:'新款潮流发卡方结案率',price:'619'},
                    {id:3,title:`儿时的味道 回味经典`,price:'639'}
                ],
             cart:[]
            }
        },
        created() {
           this.getcartInfo();
        },
        components:{
            numbox
        },
        methods:{
            getcartInfo(){
                this.cart=this.$store.state.cart;
            },
            remove(id){

            },
            selectChange(goodsid,selected){
                this.$store.commit('updateSelect',{id:goodsid,select:selected})
            },

        }
    }
</script>
<style lang="less" scoped>
    .cartpage{
        background-color: #F2F2F2;
        /*width: 100%;*/
        /*height: 100%;*/
        overflow: hidden;
        .products{
            .mui-card-content-inner{
                display: flex;
                justify-content: space-around;
                img{
                    width: 60px;
                    height: 60px;
                }
                .info{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    h3{
                        font-size: 13px;
                        line-height: 25px;
                    }
                    p{

                        .price{
                            color: red;
                            font-weight: bold;
                        }
                    }
                }
            }

        }
        .caculate{
            .mui-card-content-inner{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .red{
                    color:red;
                    font-weight: bold;
                }
            }

        }
    }
</style>