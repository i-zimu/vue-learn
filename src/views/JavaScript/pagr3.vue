<template>
    <div>
        <div class="cicle A"></div>
        <div class="cicle B"></div>

    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {
            this.show();
        },
        methods: {
            show() {
            }

        }

    }
</script>

<style lang="less" scoped>
    .cicle{
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background: pink;
    }

</style>