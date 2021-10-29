<template>
  <div>
    <div class="show-product">
      <b-row>
        <b-col cols="1">
          <div class="title-category font-2">
            <h1>Component</h1>
          </div>
        </b-col>
        <b-col cols="1" class="text-center">
          <div class="menu">
            <b-row>
              <b-col
                cols="12"
                v-for="(data, index) in pccomponent"
                v-bind:key="index"
                class="p-1"
              >
                <vs-button
                  type="border"
                  class="menu-box"
                  color="#ff5757"
                  v-on:click="selected($event, data.categoryID)"
                >
                  <img
                    :src="
                      require('../assets/img/icon/' + data.categoryID + '.png')
                    "
                    alt=""
                  />
                </vs-button>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col cols="10">
          <div class="product-box" v-if="selecting != null">
            <vs-row vs-justify="start">
              <vs-col
                type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
                class="p-3"
                v-for="(data, index) in categoryList"
                v-bind:key="index"
              >
                <vs-card actionable class="cardx">
                  <div slot="media">
                    <!-- <img :src="$withBase('/card.png')" /> -->
                    <!-- <img src="../assets/img/rec/headset.png" alt=""> -->
                    <img
                      :src="require('../assets/img/product/' + data.productIMG)"
                      alt=""
                    />
                  </div>
                  <div class="product-name">
                    <h5>{{ data.productName }}</h5>
                  </div>
                  <div slot="footer">
                    <vs-row vs-justify="flex-end">
                      <vs-button color="primary" type="gradient"
                        >{{ data.productPrice }} THB.</vs-button
                      >
                      <vs-button
                        color="danger"
                        type="gradient"
                        icon="shopping_cart"
                        class="m-1"
                        v-on:click="
                          selectProduct($event, data),
                            $vs.notify({
                              title: 'Success',
                              text: data.productName,
                              color: 'success',
                              icon: 'check_box',
                            })
                        "
                      ></vs-button>
                    </vs-row>
                  </div>
                </vs-card>
              </vs-col>
            </vs-row>
          </div>
          <div class="product-box" v-if="selecting == null">
            <vs-row vs-justify="start">
              <vs-col
                type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
                class="p-3"
                v-for="(data, index) in aProduct"
                v-bind:key="index"
              >
                <vs-card actionable class="cardx">
                  <div slot="media">
                    <!-- <img :src="$withBase('/card.png')" /> -->
                    <!-- <img src="../assets/img/rec/headset.png" alt=""> -->
                    <img
                      :src="require('../assets/img/product/' + data.productIMG)"
                      alt=""
                    />
                  </div>
                  <div class="product-name">
                    <h5>{{ data.productName }}</h5>
                  </div>
                  <div slot="footer">
                    <vs-row vs-justify="flex-end">
                      <vs-button color="primary" type="gradient"
                        >{{ data.productPrice }} THB.</vs-button
                      >
                      <vs-button
                        color="danger"
                        type="gradient"
                        icon="shopping_cart"
                        class="m-1"
                        v-on:click="
                          selectProduct($event, data),
                            $vs.notify({
                              title: 'Success',
                              text: data.productName,
                              color: 'success',
                              icon: 'check_box',
                            })
                        "
                      ></vs-button>
                    </vs-row>
                  </div>
                </vs-card>
              </vs-col>
            </vs-row>
          </div>
        </b-col>
      </b-row>
    </div>

    <div class="px-5 mb-3">
      <vs-progress :percent="100" color="danger" :height="2"
        >danger</vs-progress
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import Router from 'vue-router';
// import Showproduct from "../components/Showproduct.vue";
export default {
  name: "Component",
  // components: {Showproduct},
  data() {
    return {
      pccomponent: [],
      aProduct: [],
      selecting: null,
    };
  },

  methods: {
    selected(e, id) {
      this.selecting = id;
      e.preventDefault();
    },
    selectProduct(e, product) {
      this.$store.commit("setCart", product);
      e.preventDefault();
    },
  },
  computed: {
    categoryList() {
      return this.aProduct.filter((d) => {
        return d.categoryID == this.selecting;
      });
    },
  },
  mounted() {
    axios.get(this.$store.getters.getApi+"/fifo_api/get_tbl_category.php").then((res) => {
      const pccomponent = res.data;
      this.pccomponent = pccomponent.filter((d) => {
        return d.typeID == "F01";
      });
    });

    axios.get(this.$store.getters.getApi+"/fifo_api/get_tbl_products.php").then((res) => {
      const respo = res.data;
      this.aProduct = respo.filter((d) => {
        return d.typeID == "F01";
      });
    });
  },
};
</script>

<style>
</style>