<template>
  <div class="home">
    <Nav></Nav>
    <div class="logged-in-name" v-if="user.id">
      <p>Logged in as {{ user.username }}</p>
      <p class="sign-out" @click="signOut">Sign out</p>
    </div>
    <LoginRegister v-if="!user.id" />
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import LoginRegister from '@/components/loginRegister/LoginRegister.vue';
import Nav from '@/components/layout/Nav.vue';
import { IUser } from '@/types/index.ts';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend ({

  name: 'home' as string,

  data() {
    return {
      // mock printing a user
    }
  }, 

  computed: mapGetters(['user']),

  components: {
    LoginRegister,
    Nav
  },

  methods: {
    ...mapActions(["resetUserState"]),
    signOut() {
      this.resetUserState();
    }
  },

  created(): void {
    
  }
})

</script>

<style lang="less" scoped>

  @import url('../styles/main.less');

  .logged-in-name {
    position: absolute;
    top: 5px;
    right: 5px;
    .text-styling;
    .sign-out {
      margin-top: 10px;
      cursor: pointer;
    }
  }

</style>>
