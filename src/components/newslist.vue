<template>
    <ul class="mui-table-view">

        <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id" >
            <router-link :to="'/home/newslist/'+item.id">
                <img class="mui-media-object mui-pull-left" src="../images/cat.jpg">
                <div class="mui-media-body">
                    <h1>{{item.title}}</h1>
                    <p class="mui-ellipsis">
                        <span>{{item.date|dateFormat}}</span>
                        <span>click: {{item.click}}次</span>
                    </p>
                </div>
            </router-link>
        </li>

    </ul>
</template>
<script>
    export default {
        data(){
            return{

                list:[
                    {id:1,title:'小品',date:'2012-12-12 12:34:56',click:2},
                    {id:2,title:'小hua',date:'2019-12-12 10:31:23',click:1},
                ]
            }
        },
        methods:{
            turn(){

            }
        }
    }
</script>
<style lang="less" scoped>
.mui-media-body{
    h1{
        font-size: 14px;
    }
    .mui-ellipsis{
        font-size: 12px;
        color: #2aabd2;
        display: flex;
        justify-content: space-between;
    }
}
</style>