<template>
  <div>
    <Nav></Nav>
    <div class="logged-in-name" v-if="user.id">
      <p>Logged in as {{ user.username }}</p>
      <p class="sign-out" @click="signOut">Sign out</p>
    </div>
    <CustomizationMenu/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import CustomizationMenu from '@/components/customizationMenu/CustomizationMenu.vue';
  import Nav from '@/components/layout/Nav.vue';
  import { mapGetters } from 'vuex';

  export default Vue.extend({

    name: "customization",
    components: {
      CustomizationMenu,
      Nav
    },
    computed: mapGetters(["user"])

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
</style>