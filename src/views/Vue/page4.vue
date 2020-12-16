<template>
<!-- vue-- -->
<div class="title">
    <vueBack> </vueBack>
    <h1>vue--</h1>
    <button @click="success='true'">11111</button>
    <Modal
            title="交易成功"
            v-model="success"
            :mask-closable="false"
            footer-hide="false"
            class="tips-modal">
            <div style="width:300px;height:140px;margin:20px auto;background:pink">Content of dialog</div>
            <p>衷心感谢您的支持与参与，请关注其他出让信息。挂牌编号为 </p>
            <p>Content of dialog</p>
        </Modal>
    
</div>
</template>

<script>
import vueBack from "../../components/vueBack"
export default {
  // name: 'title',
  data() { 
    return {
        success:false
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
<style scoped>
.tips-modal >>> .ivu-modal-header{
    background: #358ee6;
}
.tips-modal >>> .ivu-modal-header-inner{
    color: #fff;
}
.tips-modal >>> .ivu-icon-ios-close:before{
    background: #fff;
    border-radius: 21px;
}
</style>