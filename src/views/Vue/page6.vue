<template>
  <div>
    <div id="qrcode"></div>
  </div>
</template>


<script>
import QRCode from 'qrcodejs2'  // 引入qrcode
export default {
  name : 'test',
  data(){
      return{
          text:
              `编号 G2015号
              竞得人 绿地集团西安置业有限公
              竞得时间 2020-11-25 20:51
              竞得流水号 LGTWJT20201116003FfF"`
      }
  },
  mounted () {
    this.qrcode();
  },
  methods: {
    qrcode() {
    new QRCode('qrcode', {
        width: 200,  
        height: 200,
        text: this.text, // 二维码地址
        colorDark : "#000",
        colorLight : "#fff",
      }),
      this.qrcodeCreater._el.title = '';
      document.getElementById("qrcode").innerHTML = "";
    },
  }
}
</script>

<style lang='less'>
#qrcode {
  display: inline-block;
  img {
    width: 232px;
    height: 232px;
    background-color: #fff; //设置白色背景色
    padding: 6px; // 利用padding的特性，挤出白边
  }
}
</style>