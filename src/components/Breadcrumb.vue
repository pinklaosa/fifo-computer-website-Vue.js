<template>
<div class="bread">
    <!-- <vs-breadcrumb :items="this.items" align="center" :color="color" ></vs-breadcrumb> -->
</div>
  
</template>

<script>
export default {
  data() {
    return {
    color:'#ff5757',
      items: [
        {
          title: "Home",
          href: "#",
        },
        {
          title: "Product",
          href: "#",
          active: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>