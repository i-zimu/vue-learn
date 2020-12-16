<template>
    <div class="bottom" :style="{minHeight:minHeight + 'px' }">
        <div class="container">
            <div class="left">123</div>
            <div class="right">321111111111111111111111</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bottom",
        data() {
            return {
                minHeight: 0
            }
        },
        mounted() {
            this.minHeight = document.documentElement.clientHeight - 1000
            var that = this;
            window.onresize = function () {
                that.minHeight = document.documentElement.clientHeight - 1000
            }
        }
    }
</script>

<style scoped lang="less">
    .bottom {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 100px;
        background: #c1c1c1;
    }
</style>