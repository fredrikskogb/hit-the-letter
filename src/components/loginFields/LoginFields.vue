<template>
  <div class="login-input-fields">
    <input name="username" type="text" />
    <input name="password" type="password" />
    <button>Log in</button>
    <button>Sign up</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {

    }
  },
  
  props: [],

  components: {

  },

  methods: {

  },

  created () {
    console.log("login fields created");
  },
})
</script>

<style lang="less" scoped>
  @import url('../../styles/main.less');
</style>