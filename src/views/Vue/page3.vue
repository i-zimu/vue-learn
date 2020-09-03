<template>
<!-- VueX -->
<div class="title">
    <vueBack> </vueBack>
    <h1>VueX</h1>
</div>
</template>

<script>
import vueBack from "../../components/vueBack"
export default {
  // name: 'title',
  data() { 
    return {

    }
  },
   components:{
    vueBack
  }
 }
</script>

<style lang="less" scoped>
  .title{
    width: 100%;
    margin: 0 auto;
    h1{
  color: #fff;
}
  }
</style>