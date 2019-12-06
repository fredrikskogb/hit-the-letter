<template>
  <div class="playing-field-container">
    <PlayingFieldBaseLevel
      class="playing-field-base-level"
      :letters="letters"
      :activeLetter="activeLetter"
      v-on:keydown="handleKeypress"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import PlayingFieldBaseLevel from "@/components/playingFieldBaseLevel/PlayingFieldBaseLevel.vue";

  export default Vue.extend({

    name: 'playingField',

    components: {
      PlayingFieldBaseLevel
    },

    methods: {
      handleKeypress(event: KeyboardEvent) {
        this.activeLetter = event.key;
        console.log(this.activeLetter);
        setTimeout(() => {
          this.activeLetter = "";
        }, 2);
      }
    },

    data(): {} {
      return {
        letters: [
          "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
          "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
        ],
        activeLetter: ""
      }
    }
    
  })
</script>

<style lang="less" scoped>

@import url('../styles/main.less');

.playing-field-container {
  width: 100vw;
  height: 100vh;
  .playing-field-base-level {
    padding-top: 50px;
  }

}



</style>