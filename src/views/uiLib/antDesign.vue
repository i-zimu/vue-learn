<template>
  <div class="antDesign">
    <h1>antDesign</h1>
    <div class="uploderloding">
      <label for>上传附件：</label>
      <van-uploader accept=".pdf, .doc, .docx, .xls, .xlsx, .pptx, .ppt, .txt" v-model="fileList" :after-read="beforeRead">
        <!-- <van-button type="default">
          <van-icon name="plus" />
        </van-button>-->
      </van-uploader>
      <p style="margin-left: 5.4em;">支持文件类型：xls，xlsx，docx，doc，pptx，ppt，txt，pdf，</p>
    </div>
    <a-button type="primary">Primary</a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">Dashed</a-button>
    <Button type="danger">Danger</Button>
    <a-config-provider :auto-insert-space-in-button="false">
      <a-button type="primary">按钮</a-button>
    </a-config-provider>
    <B type="primary">按钮</B>
    <Button type="link">Link</Button>
  </div>
</template>

<script>
import { Button } from "ant-design-vue";
export default {
  name: "antDesign",
  components: {
    Button
  },
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    beforeRead(file, detail) {
      const abcd = (file.abc = 1);
      console.log(file, "detail", detail);
      if (abcd == 1) {
        file.status = "uploading";
        file.message = "上传中...";
        setTimeout(() => {
          file.status = "done";
          file.message = "上传成功";
          vant.Toast(file.message);
        }, 1000);
        clearTimeout();
      } else {
        file.status = "uploading";
        file.message = "上传中...";
        setTimeout(() => {
          file.status = "failed";
          file.message = "上传失败";
        }, 1000);
      }
      // return file,detail;
    }
  }
};
</script>

<style lang="less" scoped>
.antDesign {
}
</style>