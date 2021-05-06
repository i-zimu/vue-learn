<template>
  <div class="iTree">
    iTree
    <Tree ref="leftTreeDataRef" :data="leftTreeData" class="demo-tree-render" />
  </div>
</template>

<script>
export default {
  name: "iTree",
  data() {
    return {
      leftTreeData: [
        {
          title: "parent 1",
          expand: true,
          // render: (h, { root, node, data }) => {
          //   return h(
          //     "span",
          //     {
          //       style: {
          //         display: "inline-block",
          //         width: "100%"
          //       }
          //     },
          //     [
          //       h("span", [
          //         h("Icon", {
          //           props: {
          //             type: "ios-folder-outline"
          //           },
          //           style: {
          //             marginRight: "8px"
          //           }
          //         }),
          //         h("span", data.title)
          //       ]),
          //       h(
          //         "span",
          //         {
          //           style: {
          //             display: "inline-block",
          //             float: "right",
          //             marginRight: "32px"
          //           }
          //         },
          //         [
          //           h("Button", {
          //             props: Object.assign({}, this.buttonProps, {
          //               icon: "ios-add",
          //               type: "primary"
          //             }),
          //             style: {
          //               width: "64px"
          //             },
          //             on: {
          //               click: () => {
          //                 this.append(data);
          //               }
          //             }
          //           })
          //         ]
          //       )
          //     ]
          //   );
          // },
          children: [
            {
              title: "child 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1",
                  expand: true
                },
                {
                  title: "leaf 1-1-2",
                  expand: true
                }
              ]
            },
            {
              title: "child 1-2",
              expand: true,
              children: [
                {
                  title: "leaf 1-2-1",
                  expand: true
                },
                {
                  title: "leaf 1-2-1",
                  expand: true
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    //左侧树添加图标
    addIcon(rows) {
      rows.forEach(item => {
        if (item.flevel === 1) {
          item.render = (h, { root, node, data }) => {
            return h(
              "span",
              { style: { display: "inline-block", width: "100%" } },
              [
                h("span", [
                  h("Icon", {
                    attrs: {
                        src: node.node.expand
                            ? require("../../assets/img/largeScreen/icon-location.png")
                            : require("../../assets/img/largeScreen/icon-location.png") //图片的地址
                    },
                    props: { type: "ios-folder-outline" },
                    style: { 
                      verticalAlign: "middle",
                            display: "inline-block",
                            margin: "2px 3px 5px 3px",
                            height: "16px",
                            width: "16px",
                            cursor: "pointer"}
                  }),
                  h("span", data.title)
                ])
              ]
            );
          };
        } else {
          item.render = (h, { root, node, data }) => {
            return h(
              "span",
              { style: { display: "inline-block", width: "100%" } },
              [
                h("span", [
                  h("Icon", {
                    props: { type: "ios-paper-outline" },
                    style: { marginRight: "8px" }
                  }),
                  h("span", data.title)
                ])
              ]
            );
          };
        }
        if (item.children != undefined && item.children.length > 0) {
          this.addIcon(item.children);
        }
      });
      return rows;
    }
  }
};
</script>

<style>
.demo-tree-render .ivu-tree-title {
  width: 100%;
}
</style>