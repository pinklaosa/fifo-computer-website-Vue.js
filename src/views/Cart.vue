<template>
  <div class="cart p-5">
    <b-row>
      <b-col cols="8">
        <div class="p-5 shopping-cart">
          <b-row>
            <b-col class="text-start">
              <h2>Shopping Cart</h2>
            </b-col>
            <b-col class="text-right"
              ><h2>{{ cartAll.length }} items</h2></b-col
            >
          </b-row>

          <div class="mb-3 mt-4">
            <vs-progress :percent="100" color="danger" :height="2"
              >danger</vs-progress
            >
          </div>
          <!-- Product Start -->
          <div class="p-5" v-if="cartAll.length == 0">
            <div class="text-center emptry-cart">
              <router-link to="/product">
                <img src="../assets/img/icon/cart.png" alt="" width="120" />
              </router-link>

              <h4 class="mt-4">- Your cart is empty -</h4>
            </div>
          </div>

          <div class="p-3" v-if="cartAll.length > 0">
            <b-row class="toprow">
              <b-col cols="7">
                <div class="title-row-cart">
                  <p>product details</p>
                </div>
              </b-col>
              <b-col cols="2">
                <div class="title-row-cart text-center">
                  <p>quantity</p>
                </div>
              </b-col>
              <b-col cols="2">
                <div class="title-row-cart text-center">
                  <p>price</p>
                </div>
              </b-col>
              <b-col cols="1">
                <div class="title-row-cart text-center">
                  <p></p>
                </div>
              </b-col>
            </b-row>

            <b-row
              class="product-cart mt-2"
              v-for="(data, index) in cartAll"
              v-bind:key="index"
            >
              <b-col cols="7">
                <div class="detail-cart py-1">
                  <b-row>
                    <b-col cols="4">
                      <img
                        :src="
                          require('../assets/img/product/' + data.productIMG)
                        "
                        alt=""
                      />
                    </b-col>
                    <b-col class="py-3">
                      <h5>{{ data.productName }}</h5>
                      <p>{{ data.categoryName }}</p>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
              <b-col cols="2">
                <div class="text-center pt-3">
                  <p>1</p>
                </div>
              </b-col>
              <b-col cols="2">
                <div class="text-center pt-4">
                  <p>{{ data.productPrice }} THB</p>
                </div>
              </b-col>
              <b-col cols="1">
                <div class="text-center pt-4">
                  <button class="del-cart" type="flat">
                    <vs-icon
                      icon="delete"
                      size="16px"
                      color="#706f6f"
                      v-on:click="delProduct($event, data)"
                    ></vs-icon>
                  </button>
                </div>
              </b-col>
            </b-row>
          </div>
          <!-- Product end -->

          <!-- Build PC  Start-->
          <div class="buildpc-cart p-3" v-if="pc.length > 0">
            <h5>Builded PC</h5>
            <div class="mb-3 mt-2">
              <vs-progress :percent="100" color="danger" :height="2"
                >danger</vs-progress
              >
            </div>
            <div class="mt-4">
              <b-row align-v="center">
                <b-col cols="1">
                  <h1>1</h1>
                </b-col>
                <b-col cols="8">
                  <b-row align-v="center">
                    <b-col cols="4">
                      <img
                        :src="
                          require('../assets/img/product/' +
                            this.pc[this.pc.length - 1].productIMG)
                        "
                        width="80%"
                        alt=""
                      />
                    </b-col>
                    <b-col>
                      <div>
                        <h5>
                          {{ namepcset }}
                          <span
                            ><button
                              type="flat"
                              class="b-edit"
                              @click="activePrompt = true"
                            >
                              <vs-icon icon="edit" color="#706f6f"></vs-icon>
                            </button>
                          </span>
                        </h5>
                        <vs-prompt
                          @cancel="namepc = ''"
                          @accept="acceptAlert2"
                          @close="close"
                          :active.sync="activePrompt"
                        >
                          <div class="con-exemple-prompt">
                            Enter the name for a computer.
                            <vs-input v-model="namepc" />
                          </div>
                        </vs-prompt>
                      </div>
                      <vs-button
                        line-origin="left"
                        color="dark"
                        type="line"
                        @click="detailspc = true"
                        >Details</vs-button
                      >
                    </b-col>
                  </b-row>
                </b-col>
                <b-col cols="2">
                  <p>{{ this.$store.getters.getCost }} thb</p>
                </b-col>
                <b-col cols="1">
                  <button class="del-cart" type="flat">
                    <vs-icon
                      icon="delete"
                      size="24px"
                      color="#706f6f"
                      v-on:click="openConfirm()"
                    ></vs-icon>
                  </button>
                </b-col>
              </b-row>
            </div>
          </div>
          <!-- End Build PC -->
        </div>
      </b-col>
      <b-col cols="4">
        <div class="pt-4">
          <div class="summary-cart">
            <div class="p-5 shopping-cart">
              <h4>summary order</h4>
              <div class="mb-3 mt-2">
                <vs-progress :percent="100" color="#3482B3" :height="2"
                  >danger</vs-progress
                >
              </div>
              <b-row class="mt-4">
                <b-col class="text-start">
                  <p>
                    items <span class="ml-2">{{ cartAll.length }}</span>
                  </p>
                </b-col>
                <b-col class="text-right"> {{ priceTotalItems }} THB. </b-col>
              </b-row>
              <b-row class="mt-4">
                <b-col class="text-start">
                  <p>PC</p>
                </b-col>
                <b-col class="text-right"> {{ pricepc }} THB. </b-col>
              </b-row>
              <div class="mt-4">
                <p>shipping</p>
                <div class="p-2">
                  <vs-select
                    color="colorx"
                    class="selectExample"
                    v-model="selectShipping"
                    width="100%"
                    ><vs-select-item
                      :key="index"
                      :value="item.value"
                      :text="item.text"
                      v-for="(item, index) in shipping"
                    />
                  </vs-select>
                </div>
              </div>
              <div class="mt-5">
                <p>promo code</p>
                <div class="p-2">
                  <vs-input
                    icon-after="true"
                    icon="verified"
                    class="inputx"
                    v-model="promo"
                    style="width: 100%"
                  />
                </div>
              </div>
              <div class="mb-3 mt-4">
                <vs-progress :percent="100" color="#3482B3" :height="2"
                  >danger</vs-progress
                >
              </div>
              <b-row class="mt-4">
                <b-col class="text-start">
                  <p>total cost :</p>
                </b-col>
                <b-col class="text-right">
                  <p>{{ priceTotal }} THB</p>
                </b-col>
              </b-row>
              <div class="pt-4">
                <vs-button
                  color="primary"
                  type="gradient"
                  style="width: 100%"
                  v-if="priceTotal > 0"
                  v-on:click="checkout()"
                  >CHECKOUT</vs-button
                >
                <vs-button
                  color="primary"
                  type="gradient"
                  style="width: 100%"
                  v-if="!priceTotal"
                  
                  disabled
                  >CHECKOUT</vs-button
                >
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <vs-popup class="holamundo" title="Your component" :active.sync="detailspc">
      <div class="px-2 pt-2">
        <div v-for="(data, index) in pc" v-bind:key="index">
          <b-row>
            <b-col cols="4" class="text-center">
              <img
                :src="require('../assets/img/product/' + data.productIMG)"
                alt=""
                width="100"
              />
            </b-col>
            <b-col cols="8">
              <h5>{{ data.productName }}</h5>
              <p>{{ data.categoryName }}</p>
              <p>{{ data.productPrice }} THB</p>
            </b-col>
          </b-row>
          <hr />
        </div>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import Router from "vue-router";
const route = new Router({
  mode: "history",
});
export default {
  data() {
    return {
      quantity: 1,
      detailspc: false,
      selectShipping: 0,
      promo: "",
      activePrompt: false,
      namepcset: "Name your computer",
      namepc: "",
      shipping: [
        {
          text: "Select Delivery",
          value: 0,
        },
        {
          text: "Standard Delivery - 25.00 THB",
          value: 25,
        },
        {
          text: "EMS - 35.00 THB",
          value: 35,
        },
        {
          text: "Fastest Delivery - 50.00 THB",
          value: 50,
        },
        {
          text: "Oneday Delivery - 200.00 THB",
          value: 200,
        },
      ],
    };
  },
  computed: {
    quantityPro() {
      return 1;
    },
    cartAll() {
      return this.$store.getters.getCart;
    },
    priceTotalItems() {
      return this.cartAll.reduce(
        (a, b) => a + (parseFloat(b["productPrice"]) || 0),
        0
      );
    },
    pricePomo() {
      let promoPrice;
      if (this.promo == "") {
        promoPrice = 0;
      } else if (this.promo == "FIFO") {
        promoPrice = 40;
      }
      return promoPrice;
    },
    priceTotal() {
      return (
        this.priceTotalItems +
        this.selectShipping +
        this.pricepc -
        this.pricePomo
      );
    },
    pricepc() {
      return this.pc.reduce(
        (a, b) => a + (parseFloat(b["productPrice"]) || 0),
        0
      );
    },
    pc() {
      return this.$store.getters.getBuild;
    },
  },
  methods: {
    openConfirm() {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure for delete ?",
        accept: this.acceptAlert,
      });
    },
    acceptAlert() {
      this.$store.commit("clsPc");
      this.$vs.notify({
        color: "danger",
        title: "Deleted",
        text: "PC was successfully deleted",
      });
    },
    acceptAlert2() {
      this.namepcset = this.namepc;
    },
    delProduct(e, d) {
      this.$store.commit("delCart", d.productID);
      e.preventDefault();
    },
    test(e) {
      console.log(this.cartAll[0].quantity);
      e.preventDefault();
    },
    checkout(){
       this.$vs.dialog({
        type:'confirm',
        color: 'success',
        title: `Confirm order`,
        text: 'Are you ready for pay ?',
        accept:this.acceptCheckout,
      })
    },
    acceptCheckout(){
      route.push('/');
      route.go();
    },
  },
  components: {},
};
</script>

<style>
</style>