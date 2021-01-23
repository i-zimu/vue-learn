<template>

      <div>
            <van-popup v-model="isAddPageShow" position="right" :overlay="true" :lock-scroll="true"             :close-on-click-overlay="false" class="fullPage">

                  <div class="header_box">

                        <van-nav-bar title="选择抄送人" :fixed="true" left-arrow :z-index="300" @click-left="goBack"></van-nav-bar>

                    </div>

                  <section class="index_container">

                       
        <!-- 点击搜索 -->

                        <van-search v-if="letterPageShow" v-model="searchNames" placeholder="输入您要找的人名、手机号或部门" show-action                     shape="round" @search="searchBtn">

                              <div slot="action" @click="searchBtn">搜索</div>

                          </van-search>

                        <div class="input_wrap" v-if="!letterPageShow">

                              <p @click="toSearch">

                                   
            <van-icon name="search" size="20px" />

                                    <span>请输入您要搜索的人名或手机号或部门</span>

                               
          </p>

                          </div>

                        <div class="staffList">

                              <div v-if="!letterPageShow">

                                    <span class="company_name">有限公司</span>

                                    <div v-for="(item,index) in deptData" :key="index" class="deptList">

                                          <div>

                                                <van-checkbox :name="item" v-model="item.isChecked" style="background-color: #f2f6fc"                                     @click.stop="allSingleChange(item.isChecked,index)"></van-checkbox>

                                            </div>

                                          <van-collapse class="department_title" v-model="activeNames" accordion>

                                                <van-collapse-item :name="index" :title="item.deptName">

                                                      <div v-for="(itemList,index1) in item.userList" :key="index1">

                                                            <van-checkbox :name="itemList" v-model="itemList.isChecked"                                             @click.stop="SingleChecked(itemList, index)"></van-checkbox>

                                                            <img :src="itemList.headImg ? BASE_IMG_URL+itemList.headImg: headImg">

                                                            <span>{{itemList.name}}</span>

                                                            <a :href="'tel:'+itemList.loginName">{{itemList.loginName}}</a>

                                                        </div>

                                                  </van-collapse-item>

                                            </van-collapse>

                                      </div>

                                </div>

                              <div :class="{ 'mintstyle' :letterPageShow } " v-if="letterPageShow">

                                    <van-checkbox-group v-model="lettersListIdArr">

                                          <van-cell-group>

                                                <van-cell v-for="(item, index) in lettersList" :key="index"                                     @click="lettersListToggle(item, index)">

                                                      <div class="cell">

                                                           
                    <van-checkbox :name="item.id" ref="lettersListCheckboxes"                                             @click="lettersListToggle(item, index)" />

                                                            <img :src="item.headImg ? BASE_IMG_URL+item.headImg : headImg">

                                                            <div class="content">

                                                                  <p>

                                                                        <span>{{item.name}}</span>

                                                                        <a :href="'tel:'+item.loginName">{{item.loginName}}</a>

                                                                    </p>

                                                                  <span>有限公司—{{item.deptName}}</span>

                                                              </div>

                                                       
                  </div>

                                                  </van-cell>

                                            </van-cell-group>

                                      </van-checkbox-group>

                                </div>

                              <div class="noFind" v-if="noFind">找不到该联系人</div>

                          </div>

                        <Loading :successFlag="successFlag" :errorFlag="errorFlag" :loading="isShow"></Loading>

                   
      </section>

                  <div v-if="letterPageShow" class="totalBtn" @click="letterPageBtnFn">

                        确定选择({{lettersListIdArr.length}})</div>

                  <div v-else class="totalBtn" @click="addStaff">确定添加({{resultIdArr.length}})</div>

              </van-popup>

        </div>

</template>

js:

<script>
import headerBar from "@/components/header";

import { BASE_URL_IMG } from "@/api/uploadImg";

import { reqDepartMent, reqLetter } from "@/api/staff";

import Loading from "@/components/Loading";

export default {
  props: {
    isAddPageShow: Boolean,
  },

  data() {
    return {
      isShow: false,

      successFlag: false,

      errorFlag: false,

      allList: [],

      deptData: [],

      deptDataChecked: [],

      letters: [],

      lettersList: [],

      activeNames: "1",

      BASE_IMG_URL: BASE_URL_IMG,

      headImg: require("./img/1.jpg"),

      letterPageShow: false,

      searchLetter: [],

      searchNames: "",

      checkedFlag: false,

      noFind: false,

      lettersListIdArr: [],
    };
  },

  created() {
    this.searchNames = "";

    this.lettersListIdArr = [];

    this.lettersList = [];

    this.getDept();
  },

  computed: {
    resultIdArr() {
      let arr = [];

      this.deptData.forEach((depts) => {
        depts.userList.forEach((list) => {
          if (list.isChecked) {
            arr.push({
              id: list.id,

              name: list.name,
            });
          }
        });
      });

      return arr;
    },
  },

  methods: {
    letterPageBtnFn() {
      this.noFind = false;

      this.letterPageShow = false;

      this.searchNames = "";

      this.lettersListIdArr = [];

      this.lettersList = [];
    },

    lettersListToggle(item, index) {
      this.$refs.lettersListCheckboxes[index].toggle();

      let itemId = item.id;

      let checked = this.lettersListIdArr.find((id) => itemId == id);

      let data = {};

      let i = 0;

      this.deptData.forEach((depts, depIndex) => {
        let isMyChild = false;

        depts.userList.forEach((el) => {
          if (el.id == itemId) {
            el.isChecked = checked;

            isMyChild = true;
          }
        });

        if (isMyChild) {
          let allChecked = depts.userList.every((list) => list.isChecked);

          depts.isChecked = allChecked;

          data = depts;

          i = depIndex;
        }
      });

      this.deptData.splice(i, 1, data);
    }, //部门 全选

    allSingleChange(checked, index) {
      let userList = this.deptData[index].userList;

      let idArr = [];

      userList.forEach((item) => {
        item.isChecked = checked;

        idArr.push(item.id);
      });

      this.$set(this.deptData[index], "userList", userList);
    }, //部门单选

    SingleChecked(itemList, index) {
      let userList = this.deptData[index].userList;

      let allChecked = userList.every((list) => list.isChecked);

      this.$set(this.deptData[index], "isChecked", allChecked);
    }, //头部返回按钮

    goBack() {
      //需要带选中的列表

      this.searchNames = "";

      this.getDept();

      this.noFind = false;

      this.letterPageShow = false;

      this.lettersList = [];

      this.lettersListIdArr = [];

      this.$emit("closePage");
    }, //确定添加

    addStaff() {
      //直接关闭弹窗

      this.letterPageShow = false;

      this.$emit("upMaiList", this.resultIdArr);

      this.searchNames = "";

      this.getDept();
    }, //过滤数组

    filterCopy(arr) {
      let result = {};

      let finalResult = [];

      for (let i = 0; i < arr.length; i++) {
        result[arr[i].id] = arr[i];
      }

      for (let j in result) {
        finalResult.push(result[j]);
      }

      return finalResult;
    }, //打开搜索弹窗

    toSearch() {
      this.letterPageShow = true;

      this.noFind = false;
    }, //部门分类

    getDept() {
      this.isShow = true;

      this.successFlag = true;

      reqDepartMent()
        .then((res) => {
          if (res.code == 200) {
            this.isShow = false;

            this.successFlag = false;

            this.deptData = res.body;

            this.deptData.forEach((item) => {
              this.$set(item, "isChecked", false);

              item.userList.forEach((list) => {
                this.$set(list, "isChecked", false);
              });
            });
          } else {
            this.$toast("数据获取失败");

            this.isShow = true;

            this.successFlag = false;

            this.errorFlag = true;
          }
        })

        .catch((err) => {
          this.$toast("服务器错误");

          this.isShow = true;

          this.successFlag = false;

          this.errorFlag = true;
        });
    },

    searchBtn() {
      this.isShow = true;

      this.successFlag = true;

      if (!this.searchNames) this.searchNames = null;

      reqLetter({
        names: this.searchNames,
      })
        .then((res) => {
          if (res.code == 200) {
            this.isShow = false;

            this.successFlag = false;

            this.letters = res.body;

            if (res.body.length <= 0) {
              this.noFind = true;
            } else {
              this.noFind = false;
            }

            let data = res.body;

            this.lettersList = data;

            data.forEach((item) => {
              let arr = this.resultIdArr.filter((el) => item.id == el.id);

              arr[0] && this.lettersListIdArr.push(arr[0].id);
            });

            this.letterPageShow = true;
          } else {
            this.$toast("数据获取失败");

            this.isShow = true;

            this.successFlag = false;

            this.errorFlag = true;
          }
        })

        .catch((err) => {
          this.$toast("服务器错误");

          this.isShow = true;

          this.successFlag = false;

          this.errorFlag = true;
        });
    },

    isChinese: function (temp) {
      var re = /[^\u4E00-\u9FA5]/;

      if (re.test(temp)) {
        return false;
      }

      return true;
    },

    isChar: function (char) {
      var reg = /[A-Za-z]/;

      if (!reg.test(char)) {
        return false;
      }

      return true;
    },
  },

  components: {
    headerBar,

    Loading,
  },
};
</script>
