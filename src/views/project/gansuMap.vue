<template>
  <!-- <div class="echarts">
    <div :style="{height:'420px',width:'100%'}" ref="myEchart"></div>
  </div> -->
  <div id="map" style="width:800px;height: 500px;"></div>
</template>
<script src="https://img.hcharts.cn/highmaps/highmaps.js"></script>
<script src="https://data.jianshukeji.com/geochina/gansu.js"></script>
<script>
  import echarts from "echarts";
  import 'echarts/map/js/province/gansu.js' // 引入甘肃地图数据
  export default {
    props: ["renderData"],
    data() {
      return {
        chart: null
      };
    },
    mounted() {
      this.initEchartMap();
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
//       initEchartMap() {
//         //console.log(this.renderData)
//         //这里我们用固定的数据，真正使用时，用父组件传递来的数据替换series即可
//         let myChart = echarts.init(this.$refs.myEchart);     
//         window.onresize = myChart.resize;
//         // myChart.setOption({ 
//           let citys = [{"name":"兰州","value":64},{"name":"嘉峪关","value":56},
//                       {"name":"金昌","value":45},{"name":"白银","value":15},
//                       {"name":"天水","value":30},{"name":"武威","value":89},
//                       {"name":"张掖","value":54},{"name":"平凉","value":51},
//                       {"name":"酒泉","value":72},{"name":"庆阳","value":47},
//                       {"name":"定西","value":50},{"name":"陇南","value":61},
//                       {"name":"临夏","value":14},{"name":"甘南","value":87}],
// // 初始化图表
//   map = new Highcharts.Map('map', {
//   title: {
//     text: '甘肃省'
//   },
//   colorAxis: {
//     min: 0,
//     minColor: 'rgb(255,255,255)',
//     maxColor: '#006cee'
//   },
//   series: [{
//     data: citys,
//     name: '随机数据',
//     mapData: Highcharts.maps['cn/gansu'],
//     joinBy: 'name' // 根据 name 属性进行关联
//   }]
// }),
//         // })
//       }
    }
  }
</script>
<style lang="less" scoped>
.echarts{
  width: 1200px;
  height: 720px;
  margin: 80px auto 0;
  padding-top: 80px;
  background: pink;
}
</style>