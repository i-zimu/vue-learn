<template>
<!-- 单选框控制div显示与隐藏 -->
  <div class="pageTwo">
    <h1>单选框控制div显示与隐藏</h1>
    <ul class="set1">
        <li><strong class="orange ">*</strong>请您对我们的服务进行评价</li>
        <li><span class="webnamesec sizese">
          <label><input type="radio" name="identity" value="满意" @click="radioClick()"/>满意</label>
          <label> <input type="radio" name="identity" value="基本满意" @click="radioClick()"/>基本满意</label>
          <label><input type="radio" name="identity" value="不满意" @click="radioClick()"/>不满意</label>
          </span></li>
 </ul>
<ul class="set1" id="contentinpt" style="display:none">
     <li><strong class="orange fontsize20"></strong>内容</li>
     <li>
     <span class="webname">
     <textarea name="content" cols="4" id="content" placeholder="请输入内容" maxlength="300"></textarea>
     </span>
     </li>
</ul>
  </div>
</template>
<script>
export default {
    data(){
      return{

      }
    },
    methods:{
     radioClick (){
          //定义一个变量show，show获取的是被选中的radio对应的值
          var show="";
          //取到所有的单选
          var apm = document.getElementsByName("identity");
          //遍历
          for(var i=0;i < apm.length;i++){
          //取到所选中的值checked
              if(apm[i].checked)
                  show = apm[i].value;
          }
          //接下来就是对取到的值，进行显示和隐藏操作。
          switch (show){
              case '满意':
                  // document.getElementById("casea").style.display="block";
                  document.getElementById("contentinpt").style.display="none";
                  break;
              case '基本满意':
                  // document.getElementById("casea").style.display="none";
                  document.getElementById("contentinpt").style.display="none";
                  break;
              case '不满意':
                  // document.getElementById("casea").style.display="none";
                  document.getElementById("contentinpt").style.display="block";
                  break;
              default:
                  document.getElementById("casea").style.display="none";
                  document.getElementById("contentinpt").style.display="none";
                  break;
          }

      }
    }
  }
</script>
<style lang="less" scoped>
.pageTwo{
  width: 100%;
  text-align: center;
  margin-top: 60px;
  background: rgb(40, 40, 45);
  h1{
    margin: 20px auto;
  }
  li{
    font-size: 20px;
    font-weight: normal;
  }
  input{
    font-size: 22px;
    font-weight: 700;
    margin: 20px 10px;
  }
  textarea{
    width: 800px;
    height: 120px;
    margin: 0 auto;
  }
}
</style>