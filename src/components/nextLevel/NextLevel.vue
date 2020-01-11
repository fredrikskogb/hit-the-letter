<template>
  <div class="next-level">
    <p class="points">Your score: {{ points }} points.</p>

    <p class="next-view-link" @click="homeScreen" v-if="gameFailed" 
    tabindex="0" v-on:keyup.enter="homeScreen" ref="failed">Game over. Return to home screen.</p>

    <p class="next-view-link" @click="nextLevel" v-if="!gameFailed" 
    tabindex="0" v-on:keyup.enter="nextLevel" ref="next">Good work. Go to next level.</p>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: "nextLevel",
    props: ["gameFailed", "points"],
    methods: {
      homeScreen() {
        this.$router.push({ path: '/customization-menu' })
      },
      nextLevel() {
        this.$emit("next-level", this.points);
      }
    },
    mounted() {
      if(this.$refs.failed) {
        const failed = this.$refs.failed as HTMLParagraphElement;
        failed.focus();
      } else {
        const next = this.$refs.next as HTMLParagraphElement;
        next.focus();
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
    color: white;
    text-align: center;
  }
  .next-view-link {
    cursor: pointer;
    font-style: italic;
    margin-top: 5px;
  }
}

</style>