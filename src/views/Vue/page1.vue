<template>
<!-- 表单事故如绑定修饰符 -->
<div class="title">
    <vueBack> </vueBack>
    <div class="part">
        <h1>表单绑定修饰符</h1>
        <br>
        <h2>.trim</h2>
        <br>
        <p>如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：</p>
        <br>
        <input v-model.trim="msg">
        <br>
        <h3>{{msg}}</h3>
        <br>
    </div>
    <div class="part">
          <h2>.lazy</h2>
        <br>
        <p>在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转为在 change 事件_之后_进行同步：</p>
        <br>
        <input v-model.lazy="message">
        <br>
        <h3>{{message}}</h3>
        <br>
    </div>
    <div class="part">
          <h2>.number</h2>
        <br>
        <p>如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符：</p>
        <br>
        <input v-model.number="age" type="number">
        <br>
        <h3>{{age}}</h3>
        <br>   
    </div>
</div>
</template>

<script>
import vueBack from "../../components/vueBack"
export default {
  // name: 'title',
  data() { 
    return {
      msg: '.trim',
      message: 'lazy',
      age: '18'

    }
  },
   components:{
    vueBack
  }
 }
</script>

<style lang="less" scoped>
.part{
  text-align: center;
  border-bottom: 1px solid #ccc; 
  margin: 10px auto;
}
h1{
  color: #fff;
}
h2{
  margin: 10px 0;
  color: rgb(255, 185, 185);
}
p{
  width: 900px;
  margin: 0 auto;
  font-size: 22px;
  color: rgb(198, 237, 255);
  text-align: left;
  text-indent: 2em;
}
input{
  width: 200px;
  height: 40px;
  margin: 0 20px;
  padding-left: 10px;
}
  .title{
    width: 100%;
    margin: 0 auto;
  }
</style>