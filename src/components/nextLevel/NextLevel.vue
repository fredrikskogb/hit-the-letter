<template>
  <div>
    <button @click="homeScreen" v-if="gameFailed">Game over. Return to home screen.</button>
    <button @click="nextLevel" v-if="!gameFailed">Good work. Go to next level.</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: "nextLevel",
    props: ["gameFailed"],
    methods: {
      homeScreen() {

      },
      nextLevel() {

      }
    }
  })
</script>

<style scoped>

</style>