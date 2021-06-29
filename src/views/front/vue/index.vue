/* vue 学习列表 */
<template>
  <div class="total">
    <!-- <vueBack> </vueBack> -->
    <h1>vue 学习列表</h1>
    <ul>
      <li>
        <router-link to="/Vue/page1">表单绑定修饰符</router-link>
      </li>|
      <li>
        <router-link to="/Vue/page2">Modal弹窗</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import vueBack from "../../components/vueBack"
export default {
  name: "total",
  data() {
    return {};
  },
  components: {
    // vueBack
  }
};
</script>

<style lang="less" scoped>
.total {
  h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 60px auto 20px;
    text-align: center;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin-top: 40px;
    text-align: center;
  }
  li {
    display: inline-block;
    margin: 0 20px;
    font-size: 18px;
  }
  a {
    margin: 0 10px;
    color: rgb(149, 149, 160);
    text-decoration: none;
  }
}
</style>