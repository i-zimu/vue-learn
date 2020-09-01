<template>
  <div class="hello">
    <!-- <div class="back"></div> -->
      <h3>前端练习生</h3> 
  <div class="content">
    <div>
      <h3>JavaScript原生案例</h3>
    <ul>
      <li><router-link to="/JavaScript/page1">jQuery</router-link></li>|
      <li><router-link to="/JavaScript/page2">JavaScript原生练习</router-link></li>
      <!-- <li><router-link to="/JavaScript/page1">信访事项查询</router-link></li>
      <li><router-link to="/JavaScript/page2">单选框显示/隐藏</router-link></li> -->
    </ul>
    </div>
  </div>  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="less">
.hello{
  width: 100%;
  height: 100vh;
  text-align: center;
  background: rgb(40, 42, 45);
  padding-top: 60px;
}
.back{
  width: 50px;
  height: 50px;
  color: #97c8fa;
  background: url(../../assets/jq.png) no-repeat;
  background-size: contain;
}
h1{
  padding: 40px 0 0;
}
h2{
  padding: 40px 0 0;
  span{
    display: block;
    margin: 20px auto;
  }
}
h3 {
  padding: 40px 0 ;
  color: #97c8fa;

}
ul {
  list-style-type: none;
  padding: 0;
  margin-top: 30px;
}
li {
  display: inline-block;
  margin: 0 20px;
  font-size: 18px;
}
a{
  margin: 0 10px;
  color: rgb(149, 149, 160);
  text-decoration: none;
}
</style>
