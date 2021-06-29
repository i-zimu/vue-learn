<template>
  <div class="watermark">
    <h2>水印</h2>
  </div>
</template>
<script>
import { removeWatermark, setWaterMark } from '@/utils/watermark'
export default {
  name: "watermark",
  data () {
   return {}
  },
  mounted() {
    setWaterMark('水印', '水印内容');
},
destroyed() {
    removeWatermark();
},
  methods:{}
}
</script>
<style lang="less" scoped>
.watermark{}
</style>