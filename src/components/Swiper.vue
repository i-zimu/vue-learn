<template>
  <div class="swiper-wrap">
    <Carousel autoplay v-model="value2" loop :autoplay-speed="3000">
      <CarouselItem>
        <div class="demo-carousel">
          <img class="imgSty" :src="img1" alt="">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img class="imgSty" :src="img2" alt="">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img class="imgSty" :src="img3" alt="">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img class="imgSty" :src="img4" alt="">
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  name: "swiper-wrap",
  data() {
    return {
      value2: 0,
      img1: require("../assets/img/index/screen1.jpg"),
      img2: require("../assets/img/index/screen2.jpg"),
      img3: require("../assets/img/index/screen3.jpg"),
      img4: require("../assets/img/index/screen4.jpg"),
    };
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.swiper-wrap {
  width: 100%;
  background: #005e84;
  overflow: hidden;
}
.imgSty{
  width: 1920px;
  height: 700px;
}
</style>