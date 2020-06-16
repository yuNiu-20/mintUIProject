<template>
    <div>
        <mt-swipe :auto="5000" class="swiperbox">
            <mt-swipe-item v-for="item in picList" :key="item.id" id="picbox">
                <img :src="item.img" :class="isfull?'isfull':''">
            </mt-swipe-item>

        </mt-swipe>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:['picList','isfull']
}
</script>
<style lang="less" scoped>
    .swiperbox{
        height: 200px;
        text-align: center;

    .mt-swipe-item{
        height: 100%;
        text-align: center;

    }
    img{
        height: 100%;
    }
    }
    .isfull{
        width: 100%;
    }
</style>