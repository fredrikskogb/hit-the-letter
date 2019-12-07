<template>
  <div class="next-level">
    <p>Your score: {{ points }} points.</p>
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

<style lang="less" scoped>
@import url('../../styles/main.less');

.next-level {
  display: inline-block;
  .hv-centering;
  .card;
  p {
    color: black;
  }
}

</style>