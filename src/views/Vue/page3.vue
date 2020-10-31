<template>
  <div class="in-main">
    <div class="i-title">兰州市国土业务人员交易管理流程</div>
    <div class="i-main"></div>
    <div class="tip">
      <div class="pic"></div>
      <div class="text" id="text">
        <p>功能须知：</p>
        <ul class="hide" style="display:block;">
          <li>1、挂牌时间必须比公告发布时间迟，至少相隔20天。</li>
          <li>2、挂牌截止时间必须比挂牌开始时间迟，至少相隔10天</li>
        </ul>
        <ul class="hide">
          <li>1.底价定价前先创建（使用已创建）专家组，再对资源分配专家组，最后专家定价。</li>
          <li>2.定价必须在挂牌公告截至前完成</li>
        </ul>
        <ul class="hide">
          <li>辅助管理中的节假日管理设置节假日信息 </li>
        </ul>
        <ul class="hide">
          <li>1.挂牌公告发布时间必须要在资源挂牌开始时间之前，否则将无法发布。</li>
          <li>2.挂牌公告发布后也可以根据需要发布补充公告。 </li>
        </ul>
        <ul class="hide">
          <li>审核竞得人信息后，再确认成交结果</li>
        </ul>
        <ul class="hide">
          <li>查看竞得人保证金交纳记录，确认竞得人信息，只有可退还列表才能进行保证金退还 </li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <ul class="content">
        <li>
          <!-- <img src="../assets/img/indexPage/icon1.png" alt=""> -->
          <h4>添加资源信息</h4>
        </li>
        <li>
          <!-- <img src="../assets/img/indexPage/icon2.png" alt=""> -->
          <h4>资源定价</h4>
        </li>
        <li>
          <!-- <img src="../assets/img/indexPage/icon3.png" alt=""> -->
          <h4>节假日管理</h4>
        </li>
        <li>
          <!-- <img src="../assets/img/indexPage/icon4.png" alt=""> -->
          <h4>发布挂牌公告</h4>
        </li>
        <li>
          <!-- <img src="../assets/img/indexPage/icon5.png" alt=""> -->
          <h4>成交结果确认</h4>
        </li>
        <li>
          <!-- <img src="../assets/img/indexPage/icon6.png" alt=""> -->
          <h4>保证金监管</h4>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.show();
  },
  methods: {
    show() {
      var title = document.querySelector(".content");
      var lis = title.querySelectorAll("li");
      var divLis = document.querySelectorAll(".hide");
      for (var i = 0; i < lis.length; i++) {
        //获取索引值
        lis[i].setAttribute("index", i);
        // console.log(i);
        lis[i].onclick = function () {
          var index = this.getAttribute("index");
          console.log(index);
          for (var i = 0; i < divLis.length; i++) {
            divLis[i].style.display = "none";
          }
          divLis[index].style.display = "block";
        };
      }
    },
  },
};
</script>
<style lang="less" scoped>
.in-main {
  width: 100%;
  //   height: 100%;
  position: relative;
  .i-title {
    position: absolute;
    top: 20px;
    left: 100px;
    width: 300px;
    height: 43px;
    margin: 20px auto;
    background: #54a5ff;
    color: #fff;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 36px;
    padding: 4px 10px;
    border-radius: 5px;
  }
  .i-main {
    width: 100%;
    height: 450px;
    margin: 10px auto;
    // background: url(~img/back/bg-index.png) no-repeat center;
  }
  .tip {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 150px;
    margin: 20px auto 20px;
    background: #f9feff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.16);
    border-radius: 16px;
    .pic {
      width: 108px;
      height: 108px;
    //   background: url(~img/indexPage/tip.png) no-repeat center;
      margin: 20px;
    }
    .text {
      width: 90%;
      height: 100%;
      p {
        height: 40px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        line-height: 40px;
        color: #358ee6;
        opacity: 1;
      }
      ul {
        width: 96%;
        height: 80px;
        margin: 10px 0;
        background: #faf9fa;
        border-radius: 10px;
        border: 1px solid rgba(255, 41, 41, 0.18);

        li {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          text-indent: 2em;
          line-height: 36px;
          color: #ff0000;
          opacity: 1;
        }
      }
    }
  }
  .bottom {
    width: 90%;
    height: 100px;
    margin: 40px auto 0;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
      li {
        width: 100px;
        height: 100px;
        margin: 0 10px;
        cursor: pointer;
        text-align: center;
      }
      h4 {
        width: 100px;
        margin-top: 20px;
        text-align: center;
        font-size: 16px;
      }
    }
  }
  .hide {
    display: none;
  }
}
</style>



