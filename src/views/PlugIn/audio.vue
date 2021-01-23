<template>
  <div class="video">
    <div class="upLoad">
      <label for="pop_video" id="labelr">
        <video id="videoId" controls width="100%"></video>
        <input style="display:none;" id="pop_video" type="file" accept="video/*" capture="camcorder" v-on:change="getVideo('2')" name="fileTrans" ref="file" value="">
        <div class="inputVideo">上传视频</div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getVideo(typer) {
      //获取上传文件标签
      let filesId = document.getElementById("pop_video");
      let url = this.getFileURL(filesId.files[0]);
      if (url) {
        //给video标签设置src
        videoId.src = url;
      }
      let formData = new FormData();
      formData.append("file", filesId.files[0]);
      console.log(url);
    },
    getFileURL(file) {
      let getUrl = null;
      if (window.createObjectURL != undefined) {
        //basic
        getUrl = window.createObjectURL(file);
      } else if (window.URL != undefined) {
        //window.URL 标准定义
        //mozilla(firefox)
        //获取一个http格式的url路径，这个时候就可以设置<img>中的显示
        getUrl = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        //window.webkitURL是webkit的内核
        //webkit or chrome
        getUrl = window.webkitURL.createObjectURL(file);
      }
      return getUrl;

      //video 标签的 duration属性，获取当前视频的长度
      // let duration = videoId.duration
      // if (Math.floor(duration) > 60) {
      // that.layer.msg('视频不能大于60秒')
      // }
    },
  },
};
</script>

<style lang="less" scoped>
.upLoad {
  background-color: #fff;
  text-align: left;
  padding: 0.3rem;
}

.inputVideo {
  background-color: #00cc66;
  color: #fff;
  font-size: 0.32rem;
  width: 30%;
  height: 32px;
  line-height: 32px;
  border-radius: 0.4rem;
  text-align: center;
  margin: 0 auto;
}
</style>