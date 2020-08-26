<template>
<div class="total">
     <ul>
       <li @click="Change()">1111</li>
       <li @click="Change()">2222</li>
       <li @click="Change()">3333</li>
       <li @click="Change()">4444</li>
       <li @click="Change()">5555</li>
     </ul>
</div>
</template>
<script>
import $ from 'jquery' 
 export default{
  methods:{
    Change(){
      $("li").toggleClass("li")
      console.dir($("li"));
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
  li{
    display: inline-block;
    width: 1200px;
    height: 40px;
    margin: 10px auto;
    background: pink;
    color: #000;
  }
  .li{
    background:url(../../assets/img/newScreen/bs-back.png);
  }
}
</style>