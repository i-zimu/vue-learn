<template>
<!-- 案例公开 -->
  <div class="sl-caseOpen-page">
    <div class="content">
      <table cellspacing="0" border="0">
        <tr class="table-h">
          <th>信访人</th>
          <th>登记日期</th>
          <th>信访目的</th>
          <th>信访原因</th>
          <th>内容分类</th>
          <th>登记单位</th>
          <th>操作</th>
        </tr>
        <tr>
          <td>第一个</td>
          <td>2020.08.16</td>
          <td>1111111111</td>
          <td>AAAAAAA</td>
          <td>222222222</td>
          <td>甘肃省兰州市城关区xx街道</td>
          <td><i-Switch true-color="#13ce66" false-color="rgb(204, 204, 204)" /></td>
        </tr>
        <tr>
          <td>第一个</td>
          <td>2020.08.16</td>
          <td>1111111111</td>
          <td>AAAAAAA</td>
          <td>222222222</td>
          <td>甘肃省兰州市城关区xx街道</td>
          <td><i-Switch true-color="#13ce66" false-color="rgb(204, 204, 204)" /></td>
        </tr>
        <tr>
          <td>第一个</td>
          <td>2020.08.16</td>
          <td>1111111111</td>
          <td>AAAAAAA</td>
          <td>222222222</td>
          <td>甘肃省兰州市城关区xx街道</td>
          <td><i-Switch true-color="#13ce66" false-color="rgb(204, 204, 204)" /></td>
        </tr>
        <tr>
          <td>第一个</td>
          <td>2020.08.16</td>
          <td>1111111111</td>
          <td>AAAAAAA</td>
          <td>222222222</td>
          <td>甘肃省兰州市城关区xx街道</td>
          <td><i-Switch true-color="#13ce66" false-color="rgb(204, 204, 204)" /></td>
        </tr>
        <tr>
          <td>第一个</td>
          <td>2020.08.16</td>
          <td>1111111111</td>
          <td>AAAAAAA</td>
          <td>222222222</td>
          <td>甘肃省兰州市城关区xx街道</td>
          <td><i-Switch true-color="#13ce66" false-color="rgb(204, 204, 204)" /></td>
        </tr>
        <tr>
          <td>第一个</td>
          <td>2020.08.16</td>
          <td>1111111111</td>
          <td>AAAAAAA</td>
          <td>222222222</td>
          <td>甘肃省兰州市城关区xx街道</td>
          <td><i-Switch true-color="#13ce66" false-color="rgb(204, 204, 204)" /></td>
        </tr>
        <tr>
          <td>第一个</td>
          <td>2020.08.16</td>
          <td>1111111111</td>
          <td>AAAAAAA</td>
          <td>222222222</td>
          <td>甘肃省兰州市城关区xx街道</td>
          <td><i-Switch true-color="#13ce66" false-color="rgb(204, 204, 204)" show-total/></td>
        </tr>
        
      </table>
      <br><br><br>
      <Page :total="100" show-elevator />
    </div>
    <!-- <h1>This is a index page</h1> -->
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
    text-align: center;
    background: white;
    // margin: auto;
  }
  table{
    width: 98%;
    color: #000;
    font-size: 16px;
    font-family: 400;
    border: 1px solid rgb(207, 207, 207);
    margin: 60px auto 0;
  }
  .table-h{
    height: 35px;
    color: white;
    background: rgba(9, 165, 222,1);
  }
  td{
    height: 35px;
  }
</style>