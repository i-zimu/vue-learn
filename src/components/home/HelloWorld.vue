<template>
    <div class="hello">
        <Data/>
        <div class="content">
            <div class="part">
                <h3>技术实现</h3>
                <ul>
                    <li>
                        <router-link to="/jQuery/page1">jQuery</router-link>
                    </li>
                    <li>
                        <router-link to="/view">View UI</router-link>
                    </li>
                    <li>
                        <router-link to="/Vue/index">Vue.js</router-link>
                    </li>
                    <li>
                        <router-link to="/JavaScript/index">JavaScript原生练习</router-link>
                    </li>
                </ul>
            </div>
            <div class="part">
                <h3>页面布局</h3>
                <ul>
                    <li>
                        <router-link to="/">Flex布局</router-link>
                    </li>

                    <li>
                        <router-link to="/">Grid布局</router-link>
                    </li>

                    <li>
                        <router-link to="/">Float布局</router-link>
                    </li>
                </ul>
            </div>
            <div class="part">
                <h3>Echarts 实例</h3>
                <ul>
                    <li>
                        <router-link to="/example">入门示例</router-link>
                    </li>

                    <li>
                        <router-link to="/gansuMap">甘肃地图</router-link>
                    </li>

                    <li>
                        <router-link to="/chinaMap">中国地图</router-link>
                    </li>
                </ul>
            </div>
            <div class="part">
                <h3>大屏展示</h3>
                <ul>
                    <li>
                        <router-link to="/largeScreenIndex">凉州区党建</router-link>
                    </li>

                    <li>
                        <router-link to="/echarts/gansuMap">甘肃地图</router-link>
                    </li>

                    <li>
                        <router-link to="/echarts/chinaMap">中国地图</router-link>
                    </li>
                </ul>
            </div>
            <div class="part">
                <h3>插件应用</h3>
                <ul>
                    <li>
                        <router-link to="/PicAddSub">图片预览插件</router-link>
                    </li>

                    <li>
                        <router-link to="/echarts/gansuMap">二维码</router-link>
                    </li>

                    <li>
                        <router-link to="/echarts/chinaMap">百度地图</router-link>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    import Data from "../Data";

    export default {
        name: "HelloWorld",
        components: {
            Data,
        },
        props: {
            msg: String,
        },
        data() {
            return {};
        },
    };
</script>

<style scoped lang="less">
    .hello {
        width: 100%;
        // height: 800px;
        text-align: center;
        color: rgb(56, 53, 53);
        overflow: scroll;
        overflow-y: auto;
    }

    h1 {
        font-size: 40px;
        line-height: 40px;
        margin: 20px 0;
    }

    h2 {
        padding: 40px 0 0;
        font-size: 20px;

        span {
            display: block;
            margin: 20px auto;
        }
    }

    h3 {
        padding: 20px 0;
        //   color: #97c8fa;
        font-size: 20px;
        font-weight: 400;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin-top: 30px;
    }

    li {
        display: inline-block;
        margin: 0 20px;
        font-size: 18px;
    }

    a {
        margin: 0 10px;
        color: #2a363b;
        text-decoration: none;
    }

    .content {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;

        .part {
            width: 18%;
            height: 340px;
            margin: 40px auto;
            border-top: 1px solid #2a363b;
            border-radius: 5px;
            color: #2a363b;
            background: #f1eded;

            ul {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;

                li {
                    height: 40px;
                    line-height: 40px;
                    padding: 5px 10px;
                    margin: 10px auto;
                }
            }
        }
    }
</style>
