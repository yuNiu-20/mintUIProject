import $ from 'jquery';
import Vue from 'vue';
import './node_modules/bootstrap/dist/css/bootstrap.css'
import app from './app.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './src/router.js';
import './src/lib/mui/css/mui.css'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

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