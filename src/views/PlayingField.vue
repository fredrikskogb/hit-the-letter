<template>
  <div class="playing-field-container">
    <PlayingFieldLevel
      class="playing-field-level"
      :letters="letters"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import PlayingFieldLevel from "@/components/playingFieldLevel/PlayingFieldLevel.vue";

  export default Vue.extend({

    name: 'playingField',

    components: {
      PlayingFieldLevel
    },

    data(): {} {
      return {
        letters: [
          "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
          "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
        ]
      }
    }
    
  })
</script>

<style lang="less" scoped>

@import url('../styles/main.less');

.playing-field-container {
  width: 100vw;
  height: 100vh;
  .playing-field-level {
    padding-top: 50px;
  }

}



</style>