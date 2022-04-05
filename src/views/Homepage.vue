<template>
  <div class="home">
    <Slides />
    <Popular />
    <div class="recommend mt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-10">
            <div class="title-rec text-center mb-5">
              <h2>Recommend</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-xl-3 col-lg-3 col-md-6 col-sm-6"
            v-for="(data, index) in recommend"
            v-bind:key="index"
          >
            <div class="single-recommend text-center">
              <img :src="require('../assets/img/rec/' + data.img)"/>
              <div class="caption-rec">
                <h3>
                  <a href="/product">{{ data.name }}</a>
                </h3>
                <span>{{ data.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Herobuild />
    <Service />
  </div>
</template>

<script>
// import Hero from "../components/Home/Hero.vue";
import Herobuild from "../components/Home/Herobuild.vue";
import Slides from '../components/Slides.vue';
import Popular from '../components/Popular.vue';
import Service from '../components/Service.vue';

export default {
  name: "Home",
  data() {
    return {
      recommend: [
        {
          img: "mouse.png",
          name: "Logitech G502 Hero",
          price: "2590 THB.",
        },
        {
          img: "keyborad2.png",
          name: "K68 Cherry MX RED",
          price: "2890 THB.",
        },
        {
          img: "headset.png",
          name: "HyperX Cloud Flight S Wireless",
          price: "5590 THB.",
        },
        {
          img: "microphone.png",
          name: "Beyerdynamic Fox Profressional",
          price: "6990 THB.",
        },
      ],
    };
  },
  components: {
    //Hero,
    Herobuild,
    Popular,
    Service,
    Slides,
  },
};
</script>
