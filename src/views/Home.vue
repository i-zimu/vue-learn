<template>
    <div class="home-wrap">
        <h1>{{ msg }}</h1>
        <ul>
            <li>首页</li>
            <li>页面重构</li>
            <li>页面布局</li>
            <li>Echarts实例</li>
            <li>大屏展示</li>
        </ul>
        <div class="home">
            <HelloWorld/>
        </div>
        <!-- <Bottom/> -->
    </div>
</template>

<script>
    import HelloWorld from "@/components/home/HelloWorld.vue";
    // import Bottom from "../common/Bottom.vue";

    export default {
        name: "Home",
        components: {
            HelloWorld,
            // Bottom
        },
        data() {
            return {
                msg: "FontCode Learning~~",
            };
        },
    };
</script>
<style scoped lang="less">
    .home-wrap {
        background: #ffffff;
        h1 {
            height: 100px;
            line-height: 100px;
            margin: 0;
            font-size: 40px;
            letter-spacing: 2px;
            color: #f8eeee;
            background: #fc523b;
        }

        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: nowrap;
            list-style: none;
            width: 100%;
            height: 40px;
            line-height: 40px;
            background: #333333;

            li {
                padding: 0 20px;
                background: #333333;
                color: #c1c1c1;
                cursor: pointer;
            }

            li:hover {
                color: #fff;
            }
        }

        .home {
            color: #2a363b;
            width: 1226px;
            margin: 0 auto;
            background: #f5f5f5;

            h2 {
                padding: 40px 0 0;
                font-size: 20px;

                span {
                    display: block;
                    margin: 20px auto;
                }

            }
        }
    }
</style>

