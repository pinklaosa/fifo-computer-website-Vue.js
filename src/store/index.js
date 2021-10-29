import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cpu: null,
    mainboard: null,
    vga: null,
    ram: null,
    ssd: null,
    power: null,
    case: null,
    total: 0,
    totalCart: 0,
    cart: [],
    buildpc: [],
    costPc: 0,
    api: "http://localhost",
  },
  mutations: {
    setCpu(state, payload) {
      state.cpu = payload;
    },
    setMainboard(state, payload) {
      state.mainboard = payload;
    },
    setVga(state, payload) {
      state.vga = payload;
    },
    setRam(state, payload) {
      state.ram = payload;
    },
    setSsd(state, payload) {
      state.ssd = payload;
    },
    setPower(state, payload) {
      state.power = payload;
    },
    setCase(state, payload) {
      state.case = payload;
    },
    setTotal(state, payload) {
      let price = parseFloat(payload);
      state.total += price;
    },
    setTotalDel(state, payload) {
      let price = parseFloat(payload);
      state.total -= price;
    },
    setCart(state, payload) {
      state.cart.push(payload);
    },
    setBuild(state, payload) {
      state.buildpc.push(payload);
    },
    setCost(state, payload) {
      state.costPc = payload;
    },
    clsPc(state) {
      state.buildpc = [];
    },
    delCart(state, payload) {
      state.cart = state.cart.filter((d) => d.productID != payload);
    },
    setApi(state,payload){
      state.api = payload;
    }
  },
  actions: {
    setBuild(state, payload) {
      switch (payload.categoryID) {
        case "AAA06":
          state.commit("setCpu", payload);
          state.commit("setTotal", payload.productPrice);
          break;
        case "AAA07":
          state.commit("setMainboard", payload);
          state.commit("setTotal", payload.productPrice);
          break;
        case "AAA08":
          state.commit("setVga", payload);
          state.commit("setTotal", payload.productPrice);
          break;
        case "AAA09":
          state.commit("setRam", payload);
          state.commit("setTotal", payload.productPrice);
          break;
        case "AAA11":
          state.commit("setSsd", payload);
          state.commit("setTotal", payload.productPrice);
          break;
        case "AAA12":
          state.commit("setPower", payload);
          state.commit("setTotal", payload.productPrice);
          break;
        case "AAA13":
          state.commit("setCase", payload);
          state.commit("setTotal", payload.productPrice);
          break;
        default:
          break;
      }
    },
    setDeleted(state, payload) {
      switch (payload.categoryID) {
        case "AAA06":
          state.commit("setCpu", null);
          state.commit("setTotalDel", payload.productPrice);
          break;
        case "AAA07":
          state.commit("setMainboard", null);
          state.commit("setTotalDel", payload.productPrice);
          break;
        case "AAA08":
          state.commit("setVga", null);
          state.commit("setTotalDel", payload.productPrice);
          break;
        case "AAA09":
          state.commit("setRam", null);
          state.commit("setTotalDel", payload.productPrice);
          break;
        case "AAA11":
          state.commit("setSsd", null);
          state.commit("setTotalDel", payload.productPrice);
          break;
        case "AAA12":
          state.commit("setPower", null);
          state.commit("setTotalDel", payload.productPrice);
          break;
        case "AAA13":
          state.commit("setCase", null);
          state.commit("setTotalDel", payload.productPrice);
          break;
        default:
          break;
      }
    },
  },
  modules: {},
  getters: {
    getCpu: (state) => state.cpu,
    getMainboard: (state) => state.mainboard,
    getVga: (state) => state.vga,
    getRam: (state) => state.ram,
    getSsd: (state) => state.ssd,
    getCase: (state) => state.case,
    getPower: (state) => state.power,
    getTotal: (state) => state.total,
    getCart: (state) => { 
      // const newc = state.cart.map((d) => ({...d,quantity: 1}));
      return state.cart;
    },
    getTotalCart: (state) => state.totalCart,
    getBuild: (state) => state.buildpc,
    getCost: (state) => state.costPc,
    getApi: (state) => state.api,
  },
});
