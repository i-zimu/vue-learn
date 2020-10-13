<template>
  <div class="largeScreen-wrap">
    <br />
    <br />
    <br />
    <br />
    <h1>modal 对话框</h1>
    <br />
    <br />
    <br />
    <br />

    <div class="main">
      <ul>
        <li>
          <Button @click="modal1 = true">表单提交1</Button>
          <Button @click="modal2 = true">表单提交2</Button>
          <Modal v-model="modal1" draggable scrollable title="表单 1">
            <div>
              <div class="left">
                <h1>正安县扶贫分析概况</h1>
                <div class="content">
                  <Form
                    ref="formValidate"
                    :model="formValidate"
                    :rules="ruleValidate"
                    :label-width="80"
                  >
                    <!-- <FormItem label="Name" prop="name">
                      <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
                    </FormItem> -->
                    <!-- <FormItem label="E-mail" prop="mail">
                      <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
                    </FormItem> -->
                    <FormItem label="City" prop="city">
                      <Select v-model="formValidate.city" placeholder="Select your city">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                      </Select>
                    </FormItem>
                    <FormItem label="Gender" prop="gender">
                      <RadioGroup v-model="formValidate.gender">
                        <Radio label="male">Male</Radio>
                        <Radio label="female">Female</Radio>
                      </RadioGroup>
                    </FormItem>
                    <FormItem label="Hobby" prop="interest">
                      <CheckboxGroup v-model="formValidate.interest">
                        <Checkbox label="Eat"></Checkbox>
                        <Checkbox label="Sleep"></Checkbox>
                        <Checkbox label="Run"></Checkbox>
                        <Checkbox label="Movie"></Checkbox>
                      </CheckboxGroup>
                    </FormItem>
                    <FormItem>
                      <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                      <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                    </FormItem>
                  </Form>
                </div>
              </div>
              <div class="right">
                <!-- <img src="../../assets/img/largeScreen/pic-sichuan.png" alt=""> -->
              </div>
            </div>
          </Modal>
          <Modal v-model="modal2" draggable scrollable title="Modal 2">
            <div>表单提交2</div>
          </Modal>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal1: false,
      modal2: false,
      formValidate: {
        name: "",
        mail: "",
        city: "",
        gender: "",
        interest: [],
        date: "",
        time: "",
        desc: "",
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur",
          },
        ],
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur",
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" },
        ],
        city: [
          {
            required: true,
            message: "Please select the city",
            trigger: "change",
          },
        ],
        gender: [
          {
            required: true,
            message: "Please select gender",
            trigger: "change",
          },
        ],
        interest: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "Choose at least one hobby",
            trigger: "change",
          },
          {
            type: "array",
            max: 2,
            message: "Choose two hobbies at best",
            trigger: "change",
          },
        ],
        date: [
          {
            required: true,
            type: "date",
            message: "Please select the date",
            trigger: "change",
          },
        ],
        time: [
          {
            required: true,
            type: "string",
            message: "Please select time",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "Please enter a personal introduction",
            trigger: "blur",
          },
          {
            type: "string",
            min: 20,
            message: "Introduce no less than 20 words",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>

/* iview样式修改 */
<style lang="less">
.ivu-btn {
  width: 138px;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  background: rgba(2, 176, 207, 0.7);
  margin: 0 20px;
}
.ivu-modal-content-drag {
  position: absolute;
  width: 1000px;
  height: 600px;
}
</style>
<style lang="less" scoped>
h1 {
  width: 100%;
  text-align: center;
}
.main {
  width: 90%;
  height: 600px;
  margin: 40px auto;
  // background: pink;
  ul {
    width: 40%;
    height: 400px;
    line-height: 400px;
    margin: 0 auto;
    padding: 60px auto 0;
    list-style: none;
    background: rgba(2, 176, 207, 0.7);
    text-align: center;
    li {
      .left {
        width: 500px;
      }
      .right {
        width: 520px;
      }
    }
  }
}
</style>