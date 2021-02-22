<template>
  <div class="eleUi">
    <h1>ElementUi</h1>
    <h3>时间控件</h3>
    <div class="block">
      <span class="demonstration">时间</span>
      <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间">
      </el-date-picker>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "eleUi",
  data() {
    return {
      value1: "",
    };
  },
};
</script>

<style lang="less" scoped>
.eleUi {
}
</style>
<style lang="less" scoped>
.mobile {
  
}
</style>