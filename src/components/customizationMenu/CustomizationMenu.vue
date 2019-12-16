<template>
  <div class="customization-menu-wrapper">
      <router-link to="/playing-field" class="play-button">Play</router-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: "CustomizationMenu"
  })
</script>

<style lang="less" scoped>
	@import url('../../styles/main.less');

  .customization-menu-wrapper {
    .hv-centering;
    .play-button {
    .card;
     
    color: white;
    text-decoration: none;
    box-shadow: none;
    }
  }
</style>