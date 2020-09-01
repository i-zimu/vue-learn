<template>
<!-- 信访事项查询 -->
  <div class="sl-caseOpen-page">
    <div class="content">
      <div class="header">
        <a href="#">信访事项查询</a>
        <div class="head-t">(注意：标有<span>*</span>的必须填写)</div>
      </div>
      <hr>
      <div class="main">
        <div class="main-top">
          <div class="left">
            <ul>
          <li>
            <span>*</span>姓名：
            <input type="text" maxlength="7">
          </li>
          <li>
            <span>*</span>查询码
            <input type="text" maxlength="20">
          </li>
        </ul>
          </div>
          <div class="right">
            <div class="tips">
              <h3>注意：</h3>
              <ul>
                <li>1.只有输入全部信息，本页面的“查询”按钮才能使用。</li>
                <li>2.必须准确输入信访事项查询码才能查询到信息。</li>
                <li>3.信访事项查询码采用半角的数字输入。</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="main-bottom">
          <input type="button" value="查询" id="">
          <input type="button" value="返回" id="">
          <input type="reset" value="重置" class="reset">
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.sl-caseOpen-page{
  background: rgb(40, 40, 45);

}
  .content{
    position: absolute;
    top: 260px;
    left: 410px;
    width: 1000px;
    height: 560px;
    color: #000;
    background: white;
  }
  a{
    list-style-type: none;
    color: rgb(189, 91, 77);
  }
  span{
    display: inline-block;
    color: rgb(189, 91, 77);
    height: 35px;
    padding: 0 10px;
    line-height: 35px;
  }
  .header{
    display: flex;
    justify-content: flex-start;
    width: 98%;
    margin: 60px auto 0;
  .head-t{
    display: inline;
    margin-left: 10px;
  }
  }
  .main{

  }
  .main .main-top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 98%;
      margin: 20px auto;
      .left{

      ul{
        li{
          list-style-type: none;
          padding-left: 10px;
          input{
          width: 210px;
          height: 20px;
          padding-left: 5px;
          margin-top: 20px;
          }
        }
      }
      }
      .right{
        width: 50%;
        .tips{
          width: 320px;
          height: 120px;
          color: rgb(169, 68, 66);
          background: rgb(242, 222, 222);
          margin: 20px auto 0;
          h3{
            height: 40px;
            padding-left: 45px;
            line-height: 40px;
          }
          li{
            list-style: none;
            font-size: 12px;
            font-weight: normal;
            padding-left: 10px;
            line-height: 25px;
          }
        }
      }
  }
      .main-bottom{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 98%;
        text-align: center;
        input{
          width: 80px;
          height: 26px;
          color: #fff;
          background:linear-gradient(rgb(41, 179, 229),rgb(16, 153, 199) );
          border: none;
          margin-left: 20px;
          cursor: pointer;
          border: none;
          outline: none;
        }
        input:hover{
          width: 80px;
          height: 26px;
          color: #fff;
          background: rgb(41, 179, 229);
          border: none;
          margin-left: 20px;
        }
        .reset{
          color: #000;
          background: rgb(241, 240, 240);
        }
        .reset:hover{
          color: #000;
          background: rgb(224, 224, 224);
        }

      }
</style>