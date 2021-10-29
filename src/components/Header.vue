<template>
  <fixed-header :threshold="300">
    <div class="navbar">
      <div class="main-header">
        <div class="main-menu d-flex flex-row">
          <div class="logo">
            <img src="../assets/FIFO.png" alt="" width="50" />
          </div>
          <div class="mt-1 p-2 pr-4">
            <router-link to="/">HOME</router-link>
          </div>
          <div class="mt-1 p-2 pr-4">
            <router-link to="/buildpc"> BUILD PC </router-link>
          </div>
          <div class="mt-1 p-2 pr-4">
            <router-link to="/product">PRODUCT</router-link>
          </div>
          <div class="mt-1 p-2 pr-4">
            <router-link to="/about">CONTACT</router-link>
          </div>
          <div class="mt-1 p-2 pr-4">
            <a href="#" @click="activePrompt = true">API</a>
          </div>
          <vs-prompt
            @cancel="nameapi = ''"
            @accept="acceptApi"
            @close="close"
            :active.sync="activePrompt"
            color="#ff5757"
          >
            <div class="con-exemple-prompt">
              Enter api
              <vs-input v-model="nameapi" width="100%" />
            </div>
          </vs-prompt>
        </div>
      </div>
      <div class="d-flex flex-row-reverse">
        <div class="mt-1 p-2 pr-5">
          <router-link to="/cart">
            <div class="card-stor">
              <img src="../assets/img/icon/card.svg" alt="" />
              <span> {{ this.$store.getters.getCart.length }} </span>
              <img src="../assets/img/icon/pc.svg" alt="" class="mx-2" />
              <span> {{ this.$store.getters.getBuild.length }} </span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </fixed-header>
</template>

<script>
import FixedHeader from "vue-fixed-header";

export default {
  data() {
    return {
      nameapi: "",
      activePrompt: false,
    };
  },
  methods: {
    acceptApi() {
      this.$store.commit("setApi", this.nameapi);
      this.$vs.notify({
        color: "success",
        title: "Success",
        text: "The API link was successfully updated.",
      });
    },
  },
  components: {
    FixedHeader,
  },
};
</script>

<style>
</style>