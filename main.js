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
        router
    })
})