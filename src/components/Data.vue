<template>
    <div class="data">{{ nowTime }}</div>
</template>

<script>
    export default {
        data() {
            return {
                nowTime: "",
            };
        },
        mounted() {
            this.currentTime();
        },
        beforeDestroy: function () {
            if (this.getDate) {
                clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
            }
        },
        methods: {
            currentTime() {
                setInterval(this.getDate, 500);
            },
            getDate() {
                const year = new Date().getFullYear();
                const month =
                    new Date().getMonth() + 1 < 10
                        ? "0" + (new Date().getMonth() + 1)
                        : new Date().getMonth() + 1;
                const date =
                    new Date().getDate() < 10
                        ? "0" + new Date().getDate()
                        : new Date().getDate();
                const hh =
                    new Date().getHours() < 10
                        ? "0" + new Date().getHours()
                        : new Date().getHours();
                const mm =
                    new Date().getMinutes() < 10
                        ? "0" + new Date().getMinutes()
                        : new Date().getMinutes();
                const ss =
                    new Date().getSeconds() < 10
                        ? "0" + new Date().getSeconds()
                        : new Date().getSeconds();
                const week = new Date().getDay();
                if (week === 1) {
                    this.nowWeek = "星期一";
                } else if (week === 2) {
                    this.nowWeek = "星期二";
                } else if (week === 3) {
                    this.nowWeek = "星期三";
                } else if (week === 4) {
                    this.nowWeek = "星期四";
                } else if (week === 5) {
                    this.nowWeek = "星期五";
                } else if (week === 6) {
                    this.nowWeek = "星期六";
                } else if (week === 7) {
                    this.nowWeek = "星期日";
                }
                this.nowTime =
                    year +
                    "." +
                    month +
                    "." +
                    date +
                    "" +
                    " " +
                    hh +
                    ":" +
                    mm +
                    ":" +
                    ss;
            },
        },
    };
</script>

<style lang="less" scoped>
    .data {
        position: absolute;
        top: 40px;
        right: 0;
        color: rgb(255, 255, 255);
        font-size: 24px;
        font-weight: 700;
        padding: 5px 20px;
    }
</style>