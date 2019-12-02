<template>
  <div class="home">
    <Nav></Nav>
    <h1 class="">This is the home page.</h1>
    <p class="logged-in-name" v-if="loggedIn">Logged in as {{ user.email }}</p>
    <LoginRegister v-if="!loggedIn" />
    <CustomizationMenu v-if="loggedIn" />
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import LoginRegister from '@/components/loginRegister/LoginRegister.vue';
import Nav from '@/components/layout/Nav.vue';
import CustomizationMenu from '@/components/customizationMenu/CustomizationMenu.vue';
import { IUser } from '@/types/index.ts';
import { user } from '@/mocks/user.ts';

export default Vue.extend ({

  name: 'home' as string,

  data() {
    return {
      // mock printing a user
      user: user as IUser,
    }
  },

  props: ['loggedIn'],

  components: {
    LoginRegister,
    Nav,
    CustomizationMenu
  },
  
  created(): void {
   console.log('Logged in: '+ this.loggedIn);
  }
})

</script>

<style lang="less" scoped>

  @import url('../styles/main.less');

  h1 {
     .text-styling;
  }

  .logged-in-name {
    position: absolute;
    top: 5px;
    right: 5px;
    .text-styling;
  }

</style>>
