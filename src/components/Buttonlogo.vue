<template >
<div class="brand mt-4 mb-4">
  <b-row>
    <b-col cols="2" v-for="(data, index) in images" v-bind:key="index" class="px-3 py-2">
      <div class="logo-b p-1">
        <img
          :src="require('../assets/img/brand/' + data.url)"
          alt=""
          width="200"
        />
      </div>
    </b-col>
  </b-row>
</div>
  
</template>
<script>
export default {
  data() {
    return {
      images: [
        { url: "corsair.png" },
        { url: "logitech (1).png" },
        { url: "msi.png" },
        { url: "asus.png" },
        { url: "fantech.png" },
        { url: "intel.png" },
        { url: "microsoft.png" },
        { url: "hp.png" },
        { url: "microlab.png" },
        { url: "mdtech.png" },
        { url: "mi.png" },
        { url: "gigabyte.png" },
        { url: "kingston.png" },
        { url: "genius.png" },
        { url: "oker.png" },
        { url: "rapoo.png" },
        { url: "asrock.png" },
        { url: "gskill.png" },
        { url: "nubwo.png" },
        { url: "signo.png" },
        { url: "amd.png" },
        { url: "wacom.png" },
        { url: "DJ.png" },
        { url: "magictech.png" },
      ],
    };
  },
};
</script>
<style >
</style>