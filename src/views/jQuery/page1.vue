<template>
<div class="total" >
       <div @click="Change()"></div>
</div>
</template>
<script>
import $ from 'jquery' 
 export default{
  methods:{
    Change(){
      $("div").toggleClass("div")
      // console.dir($("div"));
    }
  },
 }

</script>

<style lang="less" scoped>
.total{
  position: absolute;
  top:100;
  left: 200;
  width: 100%;
  margin: 60px auto 0;
  div{
    display: indivne-block;
    width: 1440px;
    height: 900px;
    margin: 10px auto;
    background: pink;
    background: url(../../assets/img/bg/bg-home.jpg);
    color: #000;
  }
  .div{
    background:url(../../assets/img/bg/bg.jpg);
  }
}
</style>