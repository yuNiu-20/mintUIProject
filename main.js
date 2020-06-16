import $ from 'jquery';
import Vue from 'vue';
import './node_modules/bootstrap/dist/css/bootstrap.css'
import app from './app.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router.js';
import './src/lib/mui/css/mui.css';
import './src/lib/mui/css/icons-extra.css';

import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.emulateJSON=true;

import mintUI from 'mint-ui';
Vue.use(mintUI);
import './node_modules/mint-ui/lib/style.css'

// import { Header,Swipe, SwipeItem,Button,} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(Button.name, Button);
// Vue.component(SwipeItem.name, SwipeItem);

import  VuePreview from 'vue-preview';
Vue.use(VuePreview);

import Vuex from 'vuex'
Vue.use(Vuex);

var cartpro=JSON.parse(localStorage.getItem('cart')||'[]');

var store=new Vuex.Store({
    state:{
        cart:cartpro
    },
    mutations:{
        addInCart(state,pro){
            var flag=false;
            state.cart.some(function (ele,idx) {
                if(pro.id===ele.id){
                    ele.count+=parseInt(pro.count);
                    flag=true;
                    return true;
                }
            });
            if(!flag){
                state.cart.push(pro);
            }

         localStorage.setItem('cart',JSON.stringify(state.cart));
        },
        getCartCount(state,info){
            state.cart.some(item=>{
                if(info.id==item.id){
                    item.count=info.count;
                    return true;
                }
            });
            localStorage.setItem('cart',JSON.stringify(state.cart));
        },
        updateSelect(state,info){
            state.cart.some(item=>{
                if(item.id==info.id){
                    item.selected=info.select;
                    return true;
                }
            })
            localStorage.setItem('cart',JSON.stringify(state.cart));

        }

    },
    getters:{
       num(state){
           var number=0;
           state.cart.forEach(function (ele,idx) {
               number+= parseInt(ele.count);
           });
           return number;
       },
        getCartCount(state){
           var o={};
           state.cart.forEach(item=>{
               o[item.id]=item.count;
           });
           return o;
        },
        getCartSelect(state){
           var o={};
           state.cart.forEach(item=>{
               o[item.id]=item.selected;
           });
           return o;
        },

        CartCaculate(state){
           var o={count:0,price:0};
           state.cart.forEach(item=>{
               if(item.selected){
                   o.count+=parseInt(item.count);
                   o.price+=parseInt(item.count)*parseInt(item.price);
               }

           });
           return o;
        }
    }
})

import moment from 'moment';
Vue.filter('dateFormat',function (datestr,pattern="YYYY-MM-DD HH:mm:ss") {
  return moment(datestr).format(pattern);
})

$(function () {

    var vm=new Vue({
        el:"#app",
        data:{
            msg:'webpack'
        },

        render: function (createElements) {
            return createElements(app)

        },
        router,
        store
    })
})