<template>
    <div id="main"  class="main"></div>
</template>
<script>
// import echarts from 'echarts'
export default {
  name: "app",
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);

      setTimeout(() => {
        window.onresize = function(){
          myChart.resize();
        }
        
      }, 10);
    }
  },
  mounted() {
    this.drawChart();
  }
};
</script>
<style lang="less" scoped>
.main{
  width: 60%;
  height: 50%;
  margin: 80px auto 0;
//   background: rgba(100,100,100,.5);
  color: aliceblue;
}
</style>

