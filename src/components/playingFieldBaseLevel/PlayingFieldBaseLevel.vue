<template>
    <div class="letters-container">
      <div class="letter-container" v-for="letter in letters" :key="letter">
        <PlayingFieldLetter :letter="letter"></PlayingFieldLetter>
      </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import PlayingFieldLetter from "@/components/playingFieldLetter/PlayingFieldLetter.vue";

  export default Vue.extend({

    name: "playingFieldBaseLevel",

    components: {
      PlayingFieldLetter
    },

    props: ["letters"]
    
  })
</script>

<style lang="less" scoped>
@import url('../../styles/main.less');

.letters-container {
  user-select: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80vw;
  margin: 0 auto;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100vw;
    user-select: initial;
  }
  .letter-container {
    background-color: @letter-background-color;
    border-radius: @card-border-radius;
    flex-basis: 15%;
    height: 50px;
    margin: 20px;
    box-shadow: 0px 0px 2px 0px rgba(255,255,255,1);

    color: rgb(199, 195, 195);
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -2px black;
    font-size: 1.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>