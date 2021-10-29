import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuesax from "vuesax";
import "material-icons/iconfont/material-icons.css";
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import "vuesax/dist/vuesax.css"; //Vuesax styles
//componant

//view
import Homepage from "../views/Homepage.vue";
import Product from "../views/Product.vue";
// import Accessories from '../views/Accessories.vue';
import Pccomponent from "../views/Pccomponent.vue";
import Accessories from '../views/Accessories.vue';
import BuildPC from "../views/BuildPC.vue";
import Cart from '../views/Cart.vue';
import Contact from '../views/Contact.vue';
import Test from '../views/Test.vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(axios, VueAxios);
Vue.use(Vuesax);
Vue.use(VueperSlides);
Vue.use(VueperSlide);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
    children: [
      {
        path: "/product/pccomponent",
        component: Pccomponent,
      },
      {
        path: "/product/accessories",
        component: Accessories,
      },
    ],
  },
  {
    path: "/buildpc",
    component: BuildPC,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/about",
    component: Contact,
  },
  {
    path: "/test",
    component: Test,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
