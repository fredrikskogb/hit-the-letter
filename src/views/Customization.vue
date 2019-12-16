<template>
  <div>
    <Nav></Nav>
    <LoggedIn/>
    <CustomizationMenu/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import CustomizationMenu from '@/components/customizationMenu/CustomizationMenu.vue';
  import LoggedIn from '@/components/loggedIn/LoggedIn.vue';
  import Nav from '@/components/layout/Nav.vue';
  import { mapGetters, mapActions } from 'vuex';

  export default Vue.extend({

    name: "customization",
    components: {
      CustomizationMenu,
      Nav,
      LoggedIn
    },
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

</style>