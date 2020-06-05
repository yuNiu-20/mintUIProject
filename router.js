import VueRouter from 'vue-router';
import home from "./src/components/home.vue";
import member from "./src/components/member.vue";
import cart from "./src/components/cart.vue";
import search from "./src/components/search.vue";

var router=new VueRouter({
    routes:[
        {path:'/home',component:home},
        {path:'/',redirect:'/home'},
        {path:'/member',component:member},
        {path:'/cart',component:cart},
        {path:'/search',component:search}
    ],
    linkActiveClass:'mui-active'
})
export default router;