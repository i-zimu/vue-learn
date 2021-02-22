<template>
  <div class="jsAudio">
    <h1>jsAudio</h1>
    <li>
      <van-button class="startVoice" size="small" type="primary" @click="startRecord">录音</van-button>
      <van-button class="endVoice" size="small" type="info" @click="endRecord">停止</van-button>
    </li>
  </div>
</template>

<script>
export default {
  name: "jsAudio",
  data() {
    return {};
  },
  methods: {
    startRecord() {
      const constraints = {
        audio: true,
        // video: true,
      };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (stream) {
          /* 使用这个stream stream */
          console.log(stream);
        })
        .catch(function (err) {
          /* 处理error */
          console.log("err", err);
        });
    },
    endRecord() {},
  },
};
</script>

<style lang="less" scoped>
.jsAudio {
}
</style>