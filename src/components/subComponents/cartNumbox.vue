<template>
    <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' data-numbox-max='10' style="height: 25px">
        <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>

        <input class="mui-numbox-input" type="number"  :value="count" ref="num"  @change="get" readonly/>
        <!--        为什么v-model="num"不行？？？-->
        <button class="mui-btn mui-numbox-btn-plus " id="initial" type="button">+</button>
    </div>
</template>
<script>
    import mui from "../../lib/mui/js/mui";

    export default {
        data(){
            return{

            }
        },
        mounted() {
            mui('.mui-numbox').numbox();
        },
        methods:{
            get(){
             // console.log(this.$refs.num.value);
             // console.log(this.id);
             this.$store.commit('getCartCount',{id:this.id,count:this.$refs.num.value})

            }
        },
        props:['count','id']

    }
</script>
<style lang="less" scoped>

</style>