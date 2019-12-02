<template>
  <div class="customization-menu-wrapper">
    <!-- TODO: Customization options -->
    <button>
      <router-link to="/playing-field">Play</router-link>
    </button>
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
    button {
      color: @linkColor;
    }
  }
</style>