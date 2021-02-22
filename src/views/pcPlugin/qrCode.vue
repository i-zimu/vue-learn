<template>
  <vue-qr class="qr"  :text="text" style="width:200px;height:200px"></vue-qr>
</template>

<script>
import vueQr from "vue-qr";
export default {
  name: "qecode",
  data() {
    return {
        name: 'tom',
        friend: 'jerry',
        text: '标题\n\r内容',
    };
  },
  components: {
    vueQr,
  },
  mounted(){
      console.log(111111)
  }
};
</script>
