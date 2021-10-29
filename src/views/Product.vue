<template>
  <div class="product">
    <Top />
    <infinite-slide-bar :barStyle="{ background: '#B32B2B', padding: '10px 0' }" class="fs">
      <span style="color: #fff">Helo World, I love FiFO</span>
    </infinite-slide-bar>
    <Buttonlogo />
    <hr>
    <div class="top-product">
      <div class="title-product font-2 pl-5">
        <h1>Categories</h1>
        <p>Browse from {{ products.length }} items</p>
      </div>
      <div class="px-5 mb-3">
        <vs-progress :percent="100" color="danger" :height="2"
          >danger</vs-progress
        >
      </div>
      <div class="category mb-2">
        <b-row>
          <b-col>
            <router-link to="/product/accessories">
              <div class="category-box py-4">
                <img src="../assets/img/icon/AAA01.png" alt="" />
                <h5>Accessories</h5>
              </div>
            </router-link>
          </b-col>
          <b-col>
            <router-link to="/product/pccomponent">
              <div class="category-box py-4">
                <img src="../assets/img/icon/AAA08.png" alt="" />
                <h5>Computer component</h5>
              </div>
            </router-link>
          </b-col>
        </b-row>
      </div>
      <div class="px-5 mb-3">
        <vs-progress :percent="100" color="danger" :height="2"
          >danger</vs-progress
        >
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Top from "../components/Top.vue";
import Router from "vue-router";
import InfiniteSlideBar from "vue-infinite-slide-bar";
// import Breadcrumb from "../components/Breadcrumb.vue";
import Buttonlogo from "../components/Buttonlogo.vue";

const route = new Router({
  mode: "history",
});
export default {
  components: { Top, Buttonlogo, InfiniteSlideBar },
  name: "Product",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    goAcc: (e) => {
      const type = "accessories";
      route.push(`/product/${type}`);
      route.go();
      e.preventDefault();
    },
    goCom: (e) => {
      const type = "component";
      route.push(`/product/${type}`);
      route.go();
      e.preventDefault();
    },
  },
  mounted() {
    axios.get(this.$store.getters.getApi+"/fifo_api/get_tbl_products.php").then((res) => {
      const respo = res.data;
      this.products = respo;
    });
  },
};
</script>

<style>
</style>