<template>
  <div class="logged-in-name" v-if="user.id">
      <p>Logged in as {{ user.username }}</p>
      <p class="sign-out" @click="signOut">Sign out</p>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapGetters, mapActions } from 'vuex';

  export default Vue.extend({
    computed: mapGetters(["user"]),
    methods: {
      ...mapActions(["resetUserState"]),
      signOut() {
        this.resetUserState();
      }
    }
  })
</script>

<style lang="less" scoped>
@import url('../../styles/main.less');

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
</style>