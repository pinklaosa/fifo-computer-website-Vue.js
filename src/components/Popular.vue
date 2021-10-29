<template>
  <div class="px-3">
    <vueper-slides
    :bullets="false"
      class="no-shadow"
      :visible-slides="4"
      slide-multiple
      :gap="4"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    >
      <template #arrow-left>
        <i class="icon icon-arrow-left" />
      </template>

      <template #arrow-right>
        <i class="icon icon-arrow-right" />
      </template>
      <vueper-slide v-for="(data,i) in images" :key="i" :image="data.img"/>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  data() {
    return {
      images:[
        {
          img: require("@/assets/img/popular/popular01.png"),
        },
        {
          img: require("@/assets/img/popular/popular02.png"),
        },
        {
          img: require("@/assets/img/popular/popular05.png"),
        },
        {
          img: require("@/assets/img/popular/popular04.png"),
        },
        {
          img: require("@/assets/img/popular/popular06.png"),
        },
        {
          img: require("@/assets/img/popular/popular07.png"),
        },
        {
          img: require("@/assets/img/popular/popular08.png"),
        },
        {
          img: require("@/assets/img/popular/popular09.png"),
        },
      ]
    }
  },
  components: { VueperSlides, VueperSlide },
};
</script>

<style>
</style>