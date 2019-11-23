<template>
  <div class="home">
    <h1 class="">This is the home page.</h1>
    <LoginRegister></LoginRegister>
  </div>
</template>

<script>

import Vue from 'vue'
import LoginRegister from '@/components/loginRegister/LoginRegister';

export default Vue.extend ({
  name: 'home',
  components: {
    LoginRegister
  }
})

</script>

<style lang="less" scoped>

  @import url('../styles/main.less');

  h1 {
     .text-styling;
  }

</style>>
