<template>
  <div class="buildpc">
    <Top />
    <div class="centerx">
      <vs-popup fullscreen :title="category" :active.sync="popup">
        <div class="container">
          <b-row class="px-5 pt-3">
            <b-col cols="12">
              <vs-row vs-justify="start">
                <vs-col
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="3"
                  class="p-3"
                  v-for="(data, index) in buildPC"
                  v-bind:key="index"
                >
                  <vs-card actionable class="cardx">
                    <div slot="media">
                      <img
                        :src="
                          require('../assets/img/product/' + data.productIMG)
                        "
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
                          icon="bookmark"
                          class="m-1"
                          @click="
                            $vs.notify({
                              title: 'Success',
                              text: data.productName,
                              color: 'success',
                              icon: 'check_box',
                            }),
                              selected($event, data)
                          "
                        ></vs-button>
                      </vs-row>
                    </div>
                  </vs-card>
                </vs-col>
              </vs-row>
            </b-col>
          </b-row>
        </div>
      </vs-popup>
    </div>
    <div class="summary-box">
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            class="p-1 bread"
            role="tab"
            v-b-toggle.accordion-1
            style="background-color: #b32b2b"
          >
            <div class="summary-title pt-2">
              <b-row>
                <b-col cols="9"> </b-col>
                <b-col cols="1" class="text-right">
                  <p>Total :</p>
                </b-col>
                <b-col cols="1" class="text-center">
                  <p>{{ this.$store.getters.getTotal }}</p>
                </b-col>
                <b-col cols="1">
                  <p>THB.</p>
                </b-col>
              </b-row>
            </div>
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body class="summary-body">
              <b-container class="mt-4">
                <b-row>
                  <b-col cols="2" class="text-right">
                    <p>CPU :</p>
                    <p>Mainboard :</p>
                    <p>Graphics Card :</p>
                    <p>Ram :</p>
                    <p>SSD :</p>
                    <p>Power Supply :</p>
                    <p>Case :</p>
                  </b-col>
                  <b-col cols="6">
                    <p v-if="cpu">
                      {{ cpu.productName }}
                    </p>
                    <p v-if="!cpu">-</p>

                    <p v-if="mainboard">
                      {{ mainboard.productName }}
                    </p>
                    <p v-if="!mainboard">-</p>

                    <p v-if="vga">
                      {{ vga.productName }}
                    </p>
                    <p v-if="!vga">-</p>

                    <p v-if="ram">
                      {{ ram.productName }}
                    </p>
                    <p v-if="!ram">-</p>

                    <p v-if="ssd">
                      {{ ssd.productName }}
                    </p>
                    <p v-if="!ssd">-</p>

                    <p v-if="power">
                      {{ power.productName }}
                    </p>
                    <p v-if="!power">-</p>

                    <p v-if="casepc">
                      {{ casepc.productName }}
                    </p>
                    <p v-if="!casepc">-</p>
                  </b-col>
                  <b-col cols="4">
                    <div class="p-3">
                      <h5>summary</h5>
                      <div class="mb-3 mt-2">
                        <vs-progress :percent="100" color="#ff5757" :height="2"
                          >danger</vs-progress
                        >
                      </div>
                      <b-row class="mt-1">
                        <b-col class="text-start">
                          <p>cost</p>
                        </b-col>
                        <b-col class="text-right">
                          <p>
                            {{ this.$store.getters.getTotal }}
                            THB
                          </p>
                        </b-col>
                      </b-row>
                      <div class="mb-3">
                        <vs-progress :percent="100" color="#ff5757" :height="2"
                          >danger</vs-progress
                        >
                      </div>
                      <div class="pt-1">
                        <vs-button
                          color="#ff5757"
                          type="line"
                          style="width: 100%"
                          v-if="this.$store.getters.getTotal > 0"
                          v-on:click="openConfirm()"
                          >CONFIRM</vs-button
                        >
                        <vs-button
                          color="#ff5757"
                          type="line"
                          style="width: 100%"
                          v-if="!this.$store.getters.getTotal"
                          disabled
                          >CONFIRM</vs-button
                        >
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
    <br />
    <!-- <div class="title-product font-2 pl-5">
      <h1>Build PC</h1>
      <p>You can select a component.</p>
    </div> -->
    <div class="px-2 mb-3">
      <vs-progress :percent="100" color="danger" :height="2"
        >danger</vs-progress
      >
    </div>
    <div class="px-4">
      <div class="build-box">
        <b-row align-h="around">
          <!--Mainboard-->
          <b-col cols="4">
            <button
              v-if="!mainboard"
              class="component"
              @click="compo($event, 'Mainboard'), (popup = true)"
            >
              <img src="../assets/img/icon/main.png" alt="" />
              <h5>Mainboard</h5>
            </button>
            <vs-card
              v-else-if="mainboard"
              class="selected-component py-4 pt-5 px-3"
            >
              <b-container>
                <b-row>
                  <b-col cols="5">
                    <img
                      :src="
                        require('../assets/img/product/' + mainboard.productIMG)
                      "
                      alt=""
                      width="140"
                    />
                  </b-col>
                  <b-col cols="7">
                    <h5>
                      {{ mainboard.productName }}
                    </h5>
                    <p>{{ mainboard.productPrice }} THB.</p>
                  </b-col>
                </b-row>
              </b-container>
              <div slot="footer">
                <vs-row vs-justify="flex-end">
                  <button
                    type="flat"
                    class="del"
                    v-on:click="deleteCom($event, mainboard)"
                  >
                    <vs-icon icon="delete" size="16px"></vs-icon>
                  </button>
                </vs-row>
              </div>
            </vs-card>
          </b-col>

          <!--Graphic Card-->
          <b-col cols="4">
            <button
              v-if="!vga"
              class="component"
              @click="compo($event, 'Graphic Card'), (popup = true)"
            >
              <img src="../assets/img/icon/gpu.png" alt="" />
              <h5>Graphics Card</h5>
            </button>
            <vs-card v-else-if="vga" class="selected-component py-4 pt-5 px-3">
              <b-container>
                <b-row>
                  <b-col cols="5">
                    <img
                      :src="require('../assets/img/product/' + vga.productIMG)"
                      alt=""
                      width="140"
                    />
                  </b-col>
                  <b-col cols="7">
                    <h5>
                      {{ vga.productName }}
                    </h5>
                    <p>{{ vga.productPrice }} THB.</p>
                  </b-col>
                </b-row>
              </b-container>
              <div slot="footer">
                <vs-row vs-justify="flex-end">
                  <button
                    type="flat"
                    class="del"
                    v-on:click="deleteCom($event, vga)"
                  >
                    <vs-icon icon="delete" size="16px"></vs-icon>
                  </button>
                </vs-row>
              </div>
            </vs-card>
          </b-col>
        </b-row>
        <br />
        <br />
        <b-row align-h="center" align-v="center">
          <!--CPU-->
          <b-col cols="4">
            <button
              v-if="!cpu"
              class="component"
              @click="compo($event, 'CPU'), (popup = true)"
            >
              <img src="../assets/img/icon/processor.png" alt="" />
              <h5>CPU</h5>
            </button>

            <vs-card v-else-if="cpu" class="selected-component py-4 pt-5 px-3">
              <b-container>
                <b-row>
                  <b-col cols="5">
                    <img
                      :src="require('../assets/img/product/' + cpu.productIMG)"
                      alt=""
                      width="140"
                    />
                  </b-col>
                  <b-col cols="7">
                    <h5>
                      {{ cpu.productName }}
                    </h5>
                    <p>{{ cpu.productPrice }} THB.</p>
                  </b-col>
                </b-row>
              </b-container>
              <div slot="footer">
                <vs-row vs-justify="flex-end">
                  <button
                    type="flat"
                    class="del"
                    v-on:click="deleteCom($event, cpu)"
                  >
                    <vs-icon icon="delete" size="16px"></vs-icon>
                  </button>
                </vs-row>
              </div>
            </vs-card>
          </b-col>

          <!--Case PC-->
          <b-col cols="4" class="px-5">
            <button
              v-if="!casepc"
              class="case"
              @click="compo($event, 'Case PC'), (popup = true)"
            >
              <img src="../assets/img/icon/tower.png" alt="" />
              <h4>Case</h4>
            </button>
            <vs-card
              v-else-if="casepc"
              class="selected-component py-4 pt-5 px-3"
            >
              <b-container>
                <b-row>
                  <b-col cols="12">
                    <img
                      :src="
                        require('../assets/img/product/' + casepc.productIMG)
                      "
                      alt=""
                      width="140"
                    />
                  </b-col>
                  <b-col cols="12" class="mt-5">
                    <h5>
                      {{ casepc.productName }}
                    </h5>
                    <p>{{ casepc.productPrice }} THB.</p>
                  </b-col>
                </b-row>
              </b-container>
              <div slot="footer">
                <vs-row vs-justify="flex-end">
                  <button
                    type="flat"
                    class="del"
                    v-on:click="deleteCom($event, casepc)"
                  >
                    <vs-icon icon="delete" size="16px"></vs-icon>
                  </button>
                </vs-row>
              </div>
            </vs-card>
          </b-col>

          <!--Ram-->
          <b-col cols="4">
            <button
              v-if="!ram"
              class="component"
              @click="compo($event, 'Ram'), (popup = true)"
            >
              <img src="../assets/img/icon/ram.png" alt="" />
              <h5>Memory</h5>
            </button>
            <vs-card v-else-if="ram" class="selected-component py-4 pt-5 px-3">
              <b-container>
                <b-row>
                  <b-col cols="5">
                    <img
                      :src="require('../assets/img/product/' + ram.productIMG)"
                      alt=""
                      width="140"
                    />
                  </b-col>
                  <b-col cols="7">
                    <h5>
                      {{ ram.productName }}
                    </h5>
                    <p>{{ ram.productPrice }} THB.</p>
                  </b-col>
                </b-row>
              </b-container>
              <div slot="footer">
                <vs-row vs-justify="flex-end">
                  <button
                    type="flat"
                    class="del"
                    v-on:click="deleteCom($event, ram)"
                  >
                    <vs-icon icon="delete" size="16px"></vs-icon>
                  </button>
                </vs-row>
              </div>
            </vs-card>
          </b-col>
        </b-row>
        <br />
        <br />
        <b-row align-h="around">
          <!--Power Supply-->
          <b-col cols="4">
            <button
              v-if="!power"
              class="component"
              @click="compo($event, 'Power Supply'), (popup = true)"
            >
              <img src="../assets/img/icon/power-supply.png" alt="" />
              <h5>Power supply</h5>
            </button>
            <vs-card
              v-else-if="power"
              class="selected-component py-4 pt-5 px-3"
            >
              <b-container>
                <b-row>
                  <b-col cols="5">
                    <img
                      :src="
                        require('../assets/img/product/' + power.productIMG)
                      "
                      alt=""
                      width="140"
                    />
                  </b-col>
                  <b-col cols="7">
                    <h5>
                      {{ power.productName }}
                    </h5>
                    <p>{{ power.productPrice }} THB.</p>
                  </b-col>
                </b-row>
              </b-container>
              <div slot="footer">
                <vs-row vs-justify="flex-end">
                  <button
                    type="flat"
                    class="del"
                    v-on:click="deleteCom($event, power)"
                  >
                    <vs-icon icon="delete" size="16px"></vs-icon>
                  </button>
                </vs-row>
              </div>
            </vs-card>
          </b-col>

          <!--SSD-->
          <b-col cols="4">
            <button
              v-if="!ssd"
              class="component"
              @click="compo($event, 'SSD'), (popup = true)"
            >
              <img src="../assets/img/icon/hdd.png" alt="" />
              <h5>Storage</h5>
            </button>
            <vs-card v-else-if="ssd" class="selected-component py-4 pt-5 px-3">
              <b-container>
                <b-row>
                  <b-col cols="5">
                    <img
                      :src="require('../assets/img/product/' + ssd.productIMG)"
                      alt=""
                      width="140"
                    />
                  </b-col>
                  <b-col cols="7">
                    <h5>
                      {{ ssd.productName }}
                    </h5>
                    <p>{{ ssd.productPrice }} THB.</p>
                  </b-col>
                </b-row>
              </b-container>
              <div slot="footer">
                <vs-row vs-justify="flex-end">
                  <button
                    type="flat"
                    class="del"
                    v-on:click="deleteCom($event, ssd)"
                  >
                    <vs-icon icon="delete" size="16px"></vs-icon>
                  </button>
                </vs-row>
              </div>
            </vs-card>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="px-2 mb-3">
      <vs-progress :percent="100" color="danger" :height="2"
        >danger</vs-progress
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Top from "../components/Top.vue";
// import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
// import Breadcrumb from "../components/Breadcrumb.vue";

export default {
  data() {
    return {
      category: null,
      popup: false,
      aProduct: [],
      activeConfirm: false,
    };
  },
  methods: {
    compo(e, value) {
      this.category = value;
      e.preventDefault();
    },
    selected(e, data) {
      this.$store.dispatch("setBuild", data);
      e.preventDefault();
    },
    deleteCom(e, id) {
      this.$store.dispatch("setDeleted", id);
      e.preventDefault();
    },
    openConfirm() {
      this.$vs.dialog({
        type: "confirm",
        color: "#ff5757",
        title: `Confirm`,
        text: "Are you sure with this pc ?",
        accept: this.acceptAlert,
      });
    },
    acceptAlert() {
      this.$store.commit('setCost', this.$store.getters.getTotal);
      this.$vs.notify({
        color: "success",
        title: "Success",
        text: "Your PC was successfully added",
        icon: "check_box",
      });
      if (this.cpu) {
        this.$store.commit("setBuild", this.cpu);
        this.$store.dispatch('setDeleted', this.cpu);
      }
      if (this.mainboard) {
        this.$store.commit("setBuild", this.mainboard);
        this.$store.dispatch('setDeleted', this.mainboard);
      }
      if (this.vga) {
        this.$store.commit("setBuild", this.vga);
        this.$store.dispatch('setDeleted', this.vga);
      }
      if (this.ram) {
        this.$store.commit("setBuild", this.ram);
        this.$store.dispatch('setDeleted', this.ram);
      }
      if (this.ssd) {
        this.$store.commit("setBuild", this.ssd);
        this.$store.dispatch('setDeleted', this.ssd);
      }
      if (this.power) {
        this.$store.commit("setBuild", this.power);
        this.$store.dispatch('setDeleted', this.power);
      }
      if (this.casepc) {
        this.$store.commit("setBuild", this.casepc);
        this.$store.dispatch('setDeleted', this.casepc);
      }
      console.log(this.$store.getters.getBuild);
    },
  },

  computed: {
    buildPC() {
      return this.aProduct.filter((d) => {
        return d.categoryName == this.category;
      });
    },
    casepc() {
      return this.$store.getters.getCase;
    },
    cpu() {
      return this.$store.getters.getCpu;
    },
    mainboard() {
      return this.$store.getters.getMainboard;
    },
    vga() {
      return this.$store.getters.getVga;
    },
    ram() {
      return this.$store.getters.getRam;
    },
    ssd() {
      return this.$store.getters.getSsd;
    },
    power() {
      return this.$store.getters.getPower;
    },
    
  },
  mounted() {
    axios.get(this.$store.getters.getApi+"/fifo_api/get_tbl_products.php").then((res) => {
      const respo = res.data;
      this.aProduct = respo.filter((d) => {
        return d.typeID == "F01";
      });
    });
  },
  components: {
    Top,
  },
};
</script>

<style>
</style>