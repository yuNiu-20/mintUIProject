<template>
    <div class="newscontent">
        <h3>这是商品内容概要</h3>

        <hr>
        <comments></comments>

    </div>
</template>
<script>
    import comment from './subComponents/comments.vue';

export default {

    data(){
        return {

        }
    },
    components:{
        comments:comment
    }
}

</script>
<style lang="less" scoped>
    hr{
        margin:20px 0;
        border: 0;
        border-top: 1px solid #a59494;
    }
    .mui-scroll{
        width: 800px;
        span{
            display: inline-block;
            width: 100px;
            height: 30px;
            background-color: pink;
        }

    }
</style>