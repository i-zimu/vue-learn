<template>
  <div id="gansusheng_map" class="gansuMap"></div>
</template>

<script>
import gansusheng from "../../assets/json/province/gansu.json";
export default {
  name: "EchartsMap",
  data() {
    return {};
  },

  mounted() {
    var zbzs = {};
    var _data;
    _data = this.initMapData(gansusheng, zbzs);
    this.canvaschengduMap(_data);
  },
  methods: {
    initMapData(mapJson, zbzs) {
      var mapData = [];
      for (var i = 0; i < mapJson.features.length; i++) {
        mapData.push({
          name: mapJson.features[i].properties.name,
          value: zbzs[mapJson.features[i].properties.name],
        });
      }
      return mapData;
    },
    //绘制中国地图,传入鼠标移入时显示的省份数据
    canvaschengduMap: function () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementById("gansusheng_map")
      );
      myChart.showLoading();
      //注意这里的zigong与下面的series.map一致
      this.$echarts.registerMap("gansu", gansusheng);

      myChart.hideLoading();

      // 绘制图表
      let option = {
        tooltip: {
          show: true, //是否显示提示框组件，包括提示框浮层和 axisPointer。 [ default: true ]
          trigger: "item", //触发类型。 [ default: 'item' ]
          showDelay: 0,
          transitionDuration: 0.2,
          backgroundColor: "rgba(49, 66, 215, 0.7)",
        },
        //  backgroundColor: 'rgba(0, 10, 52, 1)',
        geo: {
          map: "gansu",
          aspectScale: 0.8,
          layoutCenter: ["48%", "53%"], //地图位置
          layoutSize: "121%",
          roam: false,
          itemStyle: {
            normal: {
              borderColor: "rgba(147, 235, 248, 1)",
              borderWidth: 0.5,
              color: "#163B72",
              opacity: 0.5,
              shadowColor: "rgba(23,24,27,1)",
              shadowOffsetY: 12,
              shadowBlur: 3,
            },
            emphasis: {
              areaColor: "#2a333d",
            },
          },
          label: {
            //   show: true,
            emphasis: {
              show: false,
            },
          },
          z: 2,
        },
        series: [
          {
            type: "map",
            map: "gansu",
            tooltip: {
              show: true,
            },
            label: {
              // show: true,
              color: "#F8E71C",
              fontSize: 12,
              emphasis: {
                show: false,
              },
            },
            aspectScale: 0.8,
            layoutCenter: ["48%", "49%"], //地图位置
            layoutSize: "121%",
            roam: false,
            itemStyle: {
              normal: {
                borderColor: "rgba(147, 235, 248, 0.6)",
                borderWidth: 0.8,
                areaColor: {
                  type: "linear-gradient",
                  x: 0,
                  y: 1,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#3CB9FA", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#2070D2", // 50% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
              emphasis: {
                // areaColor: 'rgba(147, 235, 248, 0)'
                areaColor: {
                  type: "linear-gradient",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#FD8B25", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#FBE526", // 50% 处的颜色
                    },
                  ],
                },
              },
            },
            zlevel: 1,
          },
        ],
      };

      myChart.setOption(option);

      let sizeFun = function () {
        myChart.resize();
      };
      window.addEventListener("resize", sizeFun);

      // setTimeout(() => {
      //   window.onresize = function () {
      //     myChart.resize();
      //   };
      // }, 10);
    },
  },
};
</script>

<style lang="less" scoped>
.gansuMap {
  box-sizing: border-box;
  width: 60%;
  height: 50%;
  margin: 2.5rem auto;
  background: rgba(100, 100, 100, 0.5);
}
</style>
