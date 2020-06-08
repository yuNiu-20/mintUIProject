<template>
    <div class="commentsContainer">
        <h3>评论</h3>
        <hr>

        <textarea placeholder="请输入评论内容" v-model="content">

        </textarea>
        <mt-button type="primary" size="large" @click="commit">提交评论</mt-button>
        <br>
        <h3>评论列表</h3>
        <hr>
        <ul>
            <li v-for="(item,i) in comList" class="com">
                <div class="com-title">
                    <span>第{{i+1}}楼: {{item.user}}</span>
                    <span>{{item.time|dateFormat}}</span>
                </div>
                <p class="com-body">{{item.content}}</p>
            </li>
        </ul>

    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
 export default {
     data(){
         return {
             content:'',
             id:'',
             comList:[{id:1,user:'one',content:'评论过啦',time:'2020-3-4'}]
         }
     },
     methods:{
         commit(){
             if(this.content.trim().length==0){
                 return Toast('请输入评论内容');
             }
           var com={};

           com.id=this.comList[0].id+1;
           com.user='匿名用户';

           com.content=this.content.trim();
           com.time=Date.now();
           this.comList.unshift(com);
             this.content='';
         }
     }
 }
</script>
<style scoped lang="less">
    .commentsContainer{
        margin:5px;
    h3{
        font-size: 16px;
    }
    hr{
        margin:10px 0;
        border: 0;
        border-top: 1px solid #a59494;
    }
    textarea{
       height: 100px;
     }
        ul{
            padding: 0;
            .com{
                list-style: none;

                .com-title{
                    padding: 0 8px;
                    background-color: #c0c0c0;
                    display: flex;
                    justify-content: space-between;
                }
                .com-body{
                    padding: 0 8px;
                    font-size: 13px;
                    line-height: 20px;
                }
            }
        }

    }
</style>