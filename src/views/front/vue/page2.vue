<template>
  <!-- vue-router -->
  <div class="title">
    <vueBack> </vueBack>
    <div class="title">
      <ul>
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
      </ul>
    </div>
    <div class="text" style="display:block;">一兰州市公共资源交易中心：</div>
    <div class="text">二公共资源交易中心：</div>
    <div class="text">三州市公共资源交易中心：</div>
    <div class="text">四州市公共资源交易中心：</div>
  </div>
</template>

<script>
import vueBack from "../../components/vueBack";
export default {
  // name: 'title',
  components: {
    vueBack,
  },
  data() {
    return {};
  },
  mounted() {
    this.show();
  },
  methods: {
    show() {
      var title = document.querySelector(".title");
      var lis = title.querySelectorAll("li");
      var divLis = document.querySelectorAll(".text");
      for (var i = 0; i < lis.length; i++) {
        //设置索引值
        lis[i].setAttribute("index", i);
        console.log(i);
        lis[i].onmouseover = function () {
          var index = this.getAttribute("index");
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
.title {
  width: 100%;
  margin: 0 auto;
  h1 {
    color: #fff;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      width: 100px;
      height: 30px;
      cursor: pointer;
      background: pink;
      margin: 5px;
      color: #000;
      text-align: center;
    }
  }
  .text {
    display: none;
    width: 200px;
    height: 60px;
    background: white;
    margin: 10px auto;
  }
  .change {
    background: red;
    color: #fff;
  }
}
</style>