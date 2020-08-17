/* View UI */
<template>
  <div class="view">
    <h1>This is a viewUi page</h1>
    <SelectDrop />
  </div>
</template>view

<script>

import SelectDrop from "../components/ViewUi"

export default {
    name:'View',
    components:{
        SelectDrop
    }
}
</script>
<style lang="less" scoped>
.view{
  width: 90%;
  height: 90vh;
  background: #ccc;
  margin: 20px auto 40px;
}
 h1{
   margin-top: 60px;
   color: #000;
 }
</style>
