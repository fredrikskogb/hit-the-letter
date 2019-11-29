<template>
  <div class="about">
    <Nav></Nav>
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import LoginRegister from '@/components/loginRegister/LoginRegister.vue';
import Nav from '@/components/layout/Nav.vue';
import { IUser } from '@/types/index.ts';
import { user } from '@/mocks/user.ts';

export default Vue.extend ({

  components: {
    Nav
  },
  
})

</script>

<style lang="less">

  @import url('../styles/main.less');

  h1 {
    .text-styling;
    box-shadow: @text-box-shadow;
  }

</style>