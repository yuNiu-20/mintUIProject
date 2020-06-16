<template>
    <div>
        <h1>
            背景色
        </h1>
        <hr>
        <div class="picpre">
            <vue-preview :slides="list"></vue-preview>
        </div>

    </div>

</template>
<script>
    export  default {
        data(){
            return {
                list:[
                    {id:0, src:'/src/images/slt1.jpg',msrc:'/src/images/slt_m1.jpg',w:600,h:400},
                    {id:1, src:'/src/images/slt2.jpg',msrc:'/src/images/slt_m2.jpg',w:600,h:400},
                    {id:2, src:'/src/images/slt3.png',msrc:'/src/images/slt_m3.png',w:600,h:400}
                ]
            }
        }
    }

</script>
<style scoped lang="less">
    .picpre {
        /deep/ .my-gallery{   //deep深层作用选择器
            display: flex;
            flex-wrap:wrap;//默认换行
            figure{
                width: 30%;
                margin: 5px;
                img{
                    width: 100%;
                    height: 94px;
                    box-shadow: 0 0 8px #999;
                    border-radius: 5px;
                }
            }
        }
    }


</style>