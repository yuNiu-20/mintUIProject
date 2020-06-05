import $ from 'jquery';
import Vue from 'vue';
import './node_modules/bootstrap/dist/css/bootstrap.css'
import app from './app.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router.js';
import './src/lib/mui/css/mui.css';
import './src/lib/mui/css/icons-extra.css';
import  mui from './src/lib/mui/js/mui.js';
import VueResource from 'vue-resource';
Vue.use(VueResource);
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

$(function () {

    var vm=new Vue({
        el:"#app",
        data:{
            msg:'webpack'
        },

        render: function (createElements) {
            return createElements(app)

        },
        router
    })
})