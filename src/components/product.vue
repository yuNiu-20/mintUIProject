<template>
    <div class="products">
        <ul>
            <li>
                <img src="/src/images/wyb.jpg" alt="">
                <h3>一花一世界 一木一浮生 </h3>
                <div>
                    <p class="price">
                        <span class="newP">￥699</span>
                        <span class="oldP">￥899</span>
                    </p>
                    <p class="pay">
                        <span >热卖中</span>
                        <span>剩余60件</span>
                    </p>
                </div>
            </li>
            <li>
                <img src="/src/images/wyb.jpg" alt="">
                <h3>万家灯火 眼中明灭 照亮这长夜</h3>
                <div>
                    <p class="price">
                        <span class="newP">￥699</span>
                        <span class="oldP">￥899</span>
                    </p>
                    <p class="pay">
                        <span >热卖中</span>
                        <span>剩余60件</span>
                    </p>
                </div>
            </li>
            <li>
                <img src="/src/images/wyb.jpg" alt="">
                <h3>一草一天堂 一叶一如来</h3>
                <div>
                    <p class="price">
                        <span class="newP">￥699</span>
                        <span class="oldP">￥899</span>
                    </p>
                    <p class="pay">
                        <span >热卖中</span>
                        <span>剩余60件</span>
                    </p>
                </div>
            </li>

        </ul>
        
    </div>
</template>
<script>

</script>
<style lang="less" scoped>
    ul{
        padding: 0 5px;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            padding: 0 4px;
            width: 49%;
            border: 1px solid #9d9d9d;
            box-shadow: 0 0 3px #9d9d9d;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 5px;
            h3{
                font-size: 15px;
            }
            img{
                width: 100%;

            }
            div{
                background-color: #c0c0c0;
                p{
                    margin-bottom: 0;
                    line-height: 20px;
                }
                .price{
                    .newP{
                        color: red;
                        font-size: 16px;
                    }
                    .oldP{
                        margin-left: 12px;
                        font-size: 12px;
                        text-decoration: line-through;
                    }
                }
                .pay{
                    font-size: 12px;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>