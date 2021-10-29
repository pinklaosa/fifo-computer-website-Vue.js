<template>
  <div class="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Header/>
    <router-view />
    <Footer />
  </div>
</template>

<script>
//componant
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
   components: {
    Header,
    Footer,
  }
}
</script>

<style>
@import './assets/css/style.css';
</style>
