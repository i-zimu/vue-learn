<template>
  <div class="baiduMap">
    <h1>baiduMap</h1>
    <!-- <baidu-map class="bm-view">baidu</baidu-map> -->
    <!-- <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler"></baidu-map> -->
    <!-- <baidu-map class="map" :zoom="zoom" center="北京" /> -->
    <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
      <bm-polygon :path="polygonPath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolygonPath" />
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: "bd-map",

  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 15,
      polygonPath: [
        {lng: 116.412732, lat: 39.911707},
        {lng: 116.39455, lat: 39.910932},
        {lng: 116.403461, lat: 39.921336}
      ]
    };
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    },
     updatePolygonPath (e) {
      this.polygonPath = e.target.getPath()
    },
    addPolygonPoint () {
      this.polygonPath.push({lng: 116.404, lat: 39.915})
    }
  },
};
</script>
<style>
.map {
  width: 80%;
  margin: 100px auto;
  height: 650px;
}
</style>