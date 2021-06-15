<template>
  <div class="ddAudio">
    <h1>ddAudio</h1>
    <div class="btn">
      <van-button type="info" plain size="small" @click="startRecord">开始录音</van-button>
      <van-button type="info" plain size="small" @click="endRecord">结束录音</van-button>
    </div>
    <!-- <audio src="../../assets/audio/horse.mp3"></audio> -->
    <audio controls="controls" preload='none'>
      <source src="../../assets/audio/horse.mp3" type="audio/mp3" />
    </audio>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "ddAudio",
  data() {                                                                               
    return {};
  },
  methods: {
    startRecord() {
      console.log(this);
      dd.device.audio.startRecord({
        onSuccess: function () {
          //支持最长为300秒（包括）的音频录制，默认60秒(包括)。
          Toast("开始录音");
        },
        onFail: function (err) {
          Toast("error");
          // console.log(err)
        },
      });
    },
    endRecord() {
      this.$toast("结束录音");
    },
  },
};
</script>

<style lang="less" scoped>
.ddAudio {
  text-align: center;
  .btn {
    width: 300px;
    height: 120px;
    margin: 20px auto;
    background: #fff;
    .van-button {
      margin: 10px;
    }
  }
  audio {
    outline: none;
    margin: 2rem auto;
  }
  audio::-webkit-media-controls-enclosure {
    border-radius: 1rem 0;
    max-height: 40px;
    width: 80%;
  }
  audio::-webkit-media-controls-panel {
    background: skyblue;
  }

  audio::-webkit-media-controls-mute-button {
    display: none;
  }

  // audio::-webkit-media-controls-play-button

  // audio::-webkit-media-controls-timeline-container

  //   audio::-webkit-media-controls-current-time-display

  // audio::-webkit-media-controls-time-remaining-display

  //   audio::-webkit-media-controls-timeline

  // audio::-webkit-media-controls-volume-slider-container

  // audio::-webkit-media-controls-volume-slider

  // audio::-webkit-media-controls-seek-back-button

  // audio::-webkit-media-controls-seek-forward-button

  // audio::-webkit-media-controls-fullscreen-button

  // audio::-webkit-media-controls-rewind-button

  // audio::-webkit-media-controls-return-to-realtime-button

  // audio::-webkit-media-controls-toggle-closed-captions-button
}
</style>