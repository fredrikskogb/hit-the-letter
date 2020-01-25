<template>
  <div class="home">
    <Nav></Nav>
    <LoggedIn></LoggedIn>
    <LoginRegister v-if="!user.id" />
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import LoginRegister from '@/components/loginRegister/LoginRegister.vue';
import Nav from '@/components/layout/Nav.vue';
import LoggedIn from "@/components/loggedIn/LoggedIn.vue";
import { mapGetters } from 'vuex';

export default Vue.extend ({

  name: 'home' as string,

  data() {
    return {
      loggedIn: false,
      localStorageLevel: "",
      localStoragePoints: ""
    }
  }, 

  computed: mapGetters(['user']),

  components: {
    LoginRegister,
    Nav,
    LoggedIn
  },

})

</script>

<style lang="less" scoped>

  @import url('../styles/main.less');

  .home {

    .highscore-title {
      text-decoration: underline;
      margin-bottom: 5px;
    }

    .logged-in-container {
      position: absolute;
      top: 5px;
      right: 5px;
      .text-styling;
      .sign-out {
        margin-top: 10px;
        cursor: pointer;
      }
    }

  }

</style>>
