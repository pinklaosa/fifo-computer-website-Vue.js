<template>
  <div>
    <vueper-slides
      class="no-shadow"
      :visible-slides="3"
      slide-multiple
      :gap="3"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :title="i.toString()"
        :image="slide.image"
        :content="slide.content"
      />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: {
    VueperSlides,
    VueperSlide,
    // Breadcrumb,
  },
};
</script>

<style>
</style>