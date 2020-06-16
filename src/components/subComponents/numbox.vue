<template>
    <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' data-numbox-max='10'>
        <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>

        <input class="mui-numbox-input" type="number"  value="1" ref="num"  @change="get"/>
          <!--        为什么v-model="num"不行？？？-->
        <button class="mui-btn mui-numbox-btn-plus " id="initial" type="button">+</button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        get(){
            this.$emit('getNum',this.$refs.num.value);
        }
    },

}
</script>
<style lang="less" scoped>

</style>