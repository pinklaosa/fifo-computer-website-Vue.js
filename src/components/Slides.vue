<template>
  <div class="px-3 mb-5">
    <vueper-slides fade :touchable="false" autoplay fixed-height="700px">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content"
      />
      <template #arrow-left>
        <i class="icon icon-arrow-left" />
      </template>

      <template #arrow-right>
        <i class="icon icon-arrow-right" />
      </template>
    </vueper-slides>
  </div>
</template>


<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    slides: [
      {
        title:
          "<div class='hero-caption'><h1>the best<br>your choice<br>for you</h1></div>",
        // You can also provide a URL for the image.
        image:
          require("@/assets/img/hero/h02.png"),
      },
      {
        title:
          "<div class='hero-caption'><h1>the best<br>your choice<br>for you</h1></div>",
        // You can also provide a URL for the image.
        image:
          require("@/assets/img/hero/h03.png"),
      },
      {
        title:
          "<div class='hero-caption'><h1>the best<br>your choice<br>for you</h1></div>",
        // You can also provide a URL for the image.
        image:
          require("@/assets/img/hero/h04.png"),
      },
      // Other slides.
    ],
  }),
};
</script>

<style lang="">
</style>