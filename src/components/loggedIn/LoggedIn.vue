<template>
    <div class="logged-in-container">

        <div v-if="user.id">

            <p>Logged in as {{ user.username }}</p>
            <p class="sign-out" @click="signOut">Sign out</p>

        </div>

        <div v-if="!user.id">

            <p class="highscore-title">Highscore</p>
            <p>Points: {{this.localStoragePoints}}</p>
            <p>level: {{this.localStorageLevel}}</p>

        </div>

    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapGetters, mapActions } from 'vuex';

  export default Vue.extend({
    data() {
        return {
            loggedIn: false,
            localStorageLevel: "",
            localStoragePoints: ""
        }
    },
    computed: mapGetters(["user"]),
    methods: {
      ...mapActions(["resetUserState"]),
      signOut() {
        this.resetUserState();
      },
      getLocalStorageHighscore() {
        this.localStorageLevel = localStorage.getItem("level") as string;
        this.localStoragePoints = localStorage.getItem("points") as string;
      }
    },
    created() {
      this.getLocalStorageHighscore();
    }
  })
</script>

<style lang="less" scoped>
@import url('../../styles/main.less');

.logged-in-container {

    position: absolute;
    top: 5px;
    right: 5px;
    .text-styling;

    div {

      .sign-out {
        margin-top: 10px;
        cursor: pointer;
      }

      .highscore-title {
        margin-bottom: 10px;
        text-decoration: underline;
      }

    }
  }
</style>