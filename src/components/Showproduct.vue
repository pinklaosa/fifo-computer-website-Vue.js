<template>
  <div class="product-box">
    <vs-row vs-justify="start">
      <vs-col
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="3"
        class="p-3"
        v-for="(data, index) in cProduct"
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
              ></vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            cProduct:[],
        }
    },
    mounted() {
        axios
      .get(
        "http://localhost/fifo_api/get_tbl_products.php"
      )
      .then((res) => {
        const respo = res.data;
        this.cProduct = respo.filter((d) => {
          return d.categoryID == "AAA01";
        });
      });
    },
};
</script>

<style>
</style>