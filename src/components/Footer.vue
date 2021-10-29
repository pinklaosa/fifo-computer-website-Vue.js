<template>
  <footer>
    <div class="footer-area footer-padding">
      <div class="container-fluid">
        <div class="row d-flex justify-content-between">
          <div class="col-xl-3 col-lg-3 col-md-8 col-sm-8">
            <div class="single-footer-caption mb-50">
              <div class="single-footer-caption mb-30">
                <!-- logo -->
                <div class="footer-logo mb-35">
                  <h1>FiFO</h1>
                </div>
                <div class="footer-tittle">
                  <div class="footer-pera">
                    <p>
                      Building your own PC and need ideas on where to get
                      started? Explore our build guides which cover systems for
                      a variety of use-cases and budgets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4">
            <div class="single-footer-caption mb-50">
              <div class="footer-tittle">
                <h4>Shop Category</h4>
                <ul>
                  <li><a href="#">CPU</a></li>
                  <li><a href="#">Mainboard</a></li>
                  <li><a href="#">RAM</a></li>
                  <li><a href="#">VGA</a></li>
                  <li><a href="#">Disk</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4">
            <div class="single-footer-caption mb-50">
              <div class="footer-tittle">
                <h4></h4>
                <ul>
                  <br />
                  <li><a href="#">Powersupply</a></li>
                  <li><a href="#">Case</a></li>
                  <li><a href="#">Monitor</a></li>
                  <li><a href="#">Mouses</a></li>
                  <li><a href="#">Key Board</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4">
            <div class="single-footer-caption mb-50">
              <div class="footer-tittle">
                <h4>Quick links</h4>
                <ul>
                  <li><a href="# ">Home</a></li>
                  <li><a href="# ">Contact</a></li>
                  <li><a @click="activePrompt = true">API</a></li>
                </ul>
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
                  <vs-input v-model="nameapi" width="100%"/>
                </div>
              </vs-prompt>
            </div>
          </div>

          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4">
            <div class="single-footer-caption mb-50">
              <div class="footer-tittle">
                <h4>Get in touch</h4>
                <ul>
                  <li><a>(+66) 090-9466523</a></li>
                  <li><a>support@fifo.com</a></li>
                </ul>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      nameapi: "",
      activePrompt: false,
    }
  },
  methods: {
    acceptApi(){
      this.$store.commit('setApi', this.nameapi);
       this.$vs.notify({
        color:'success',
        title:'Success',
        text:'The API link was successfully updated.'
      })
    },
  },
};
</script>

<style>
</style>