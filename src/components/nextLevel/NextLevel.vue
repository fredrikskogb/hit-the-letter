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
    props: ["gameFailed", "points"],
    methods: {
      homeScreen() {
        this.$router.push({ path: '/' })
      },
      nextLevel() {
        this.$emit("next-level", this.points);
      }
    }
  })
</script>

<style scoped>

</style>