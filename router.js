import VueRouter from 'vue-router';
import home from "./src/components/home.vue";
import member from "./src/components/member.vue";
import cart from "./src/components/cart.vue";
import search from "./src/components/search.vue";
import newslist from "./src/components/newslist.vue";
import newscontent from "./src/components/newscontent.vue";
import picContent from "./src/components/picContent.vue";
import onepic from "./src/components/onepic.vue";
import product from "./src/components/product.vue";

var router=new VueRouter({
    routes:[
        {path:'/home',component:home},
        {path:'/',redirect:'/home'},
        {path:'/member',component:member},
        {path:'/cart',component:cart},
        {path:'/search',component:search},
        {path:'/home/newslist',component:newslist},
        {path:'/home/newslist/:id',component:newscontent},
        {path:'/home/picContent',component:picContent},
        {path:'/home/picContent/:id',component:onepic},
        {path:'/home/product',component:product}
    ],
    linkActiveClass:'mui-active'
})
export default router;