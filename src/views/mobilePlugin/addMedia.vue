<template>
  <div class="addMedia">
    <h1>addMedia</h1>
    <!-- 语音 -->
    <div class="audio">
      <input type="file" id="file" />
      <audio controls id="audio_id">
        <!-- <source src=""> -->
        <source src="../../assets/audio/horse.mp3">
      </audio>
      <li>
        <van-button class="startVoice" size="small" type="primary" @click="startRecord">录音</van-button>
        <van-button class="endVoice" size="small" type="info" @click="endRecord">停止</van-button>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "addMedia",
  data() {
    return {
      names: "", //判断设备系统
      startDom: null,
      endDom: null,
      fileDom: null,
      videoDom: null,
      media: {
        // isText: "text", //用于区分上传的是文本还是音频,音频:village,文本:text
        speakerRecFile: "", //仅音频文件有该字段是上传文件,小程序这边是录音后生成的文件地址当上传地址
        text: "", //仅文本时有该字段,限定1000字
        media_name: "", //任务名
        kind: "", //分类信息： 0-其他 1-政治宣导 2-通知 3-消防警报 4-新闻知识 5-文体娱乐
      },
    };
  },
  created() {
    this.check();
  },
  mounted() {
    this.startDom = document.querySelector(".startVoice");
    this.endDom = document.querySelector(".endVoice");
    //element.addEventListener(event, function, useCapture) 方法用于向指定元素添加事件句柄。 第三个参数指定事件是否在捕获或冒泡阶段执行
    // this.startDom.addEventListener("click", this.startRecord(), false);
    // this.endDom.addEventListener("click", this.endRecord(), false);
    //alert(0);
    window.recordComplete = this.recordComplete;
    window.deleteSuccess = this.deleteSuccess;
    window.failRecord = this.failRecord;

    this.fileDom = document.getElementById("file");
    this.videoDom = document.getElementById("audio_id");
    // alert(1);
    // alert(this.videoDom);
    this.fileInit();
  },
  beforeDestroy() {
    //removeEventListener() 方法用于移除由 addEventListener() 方法添加的事件句柄。
    // this.startDom.removeEventListener("click", this.startRecord());
    // this.endDom.removeEventListener("click", this.endRecord());
    // this.videoDom.removeEventListener("ended", this.touch);
    this.fileDom.removeEventListener("change", this.touch);

    if (this.fileDom.files[0] && window.js) {
      js.recordingEvent(3, this.fileDom.files[0].name);
    }
  },
  methods: {
    //开始录音
    startRecord() {
      try {
        if (this.names == "isAndroid") {
          console.log(this.names);
          js.recordingEvent(1, "");
        } else if (this.names == "isiOS") {
          //   window.webkit.messageHandlers.startRecord.postMessage(null);
        }
      } catch (err) {
        console.error(err);
      }
    },
    //停止录音
    endRecord(that) {
      this.$toast("停止");
      try {
        if (this.names == "isAndroid") {
          js.recordingEvent(2, "");
        } else if (this.names == "isiOS") {
          //   window.webkit.messageHandlers.endRecord.postMessage(null);
          //that.fileDom.click();
        }
      } catch (err) {
        console.error(err);
        that.fileDom.click();
      }
    },
    //完成录音回调
    recordComplete(that, base64, dataObj) {
      if (this.check() == "isAndroid") {
        that.fileDom.click();
      } else if (this.check() == "isiOS") {
        try {
          that.videoDom.src = "data:audio/wav;base64," + base64;
          dataObj.speakerRecFile = this.dataURLtoFile(
            that.videoDom.src,
            new Date().getTime() + ".mp3"
          );
          that.canPlayVideo = true;
          that.recordName = "点击播放";
        } catch (err) {
          console.log(err);
        }
      }
    },

    //判断系统
    check() {
      //  navigator.userAgent  您的浏览器发送的用户代理标题 windows android ios
      //  navigator.appVersion  返回浏览器的平台和版本信息
      var u = navigator.userAgent,
        app = navigator.appVersion;
      //如果输出结果是true就判定是android终端或者uc浏览器
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
      //HUAWEISEA  小康的手机掉不动file dom元素，暂时将公共获取手机型号代码搬到页面了
      //根据输出结果true或者false来判断ios终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      let name = "";
      if (isAndroid) {
        name = "isAndroid";
      } else if (isiOS) {
        name = "isiOS";
      }
      this.names = name;
    },
    //文件
    fileInit() {
      this.fileDom.addEventListener("change", () => {
        var file = this.fileDom.files[0];
        // alert(file)
        var url = URL.createObjectURL(file);
        console.log(url);
        this.videoDom.src = url;

        //let reader = new FileReader();
        //reader.readAsDataURL(file);
        this.media.speakerRecFile = file;
        console.log(this.media.speakerRecFile);

        this.canPlayVideo = true;
        this.recordName = "点击播放";
      });
      //onended	事件在视频/音频（audio/video）播放结束时触发。
      this.videoDom.addEventListener(
        "ended",
        () => {
          this.recordName = "点击播放";
          this.onLineVideo = false;
        },
        false
      );
    },
  },
};
</script>

<style lang="less" scoped>
.addMedia {
  .audio {
    width: 75%;
    height: 200px;
    text-align: center;
    margin: 100px auto;
    padding: 20px 0;
    background: #005e84;
    li {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: 20px auto;
      .van-button {
        padding: 0 20px;
      }
    }
  }
  audio {
    width: 260px;
    height: 36px;
    margin: 20px auto;
    outline: none;
  }
  audio::-webkit-media-controls {
    position: static;
  }
  audio::-webkit-media-controls-enclosure {
    width: 80%;
  }
  audio::-webkit-media-controls-enclosure {
    border-radius: 8px 0;
    background: skyblue;
    z-index: 99;
  }
  audio::-webkit-media-controls-panel {
    padding: 0;
  }
}
</style>