<template>
  <div class="change-ship-container">
    <div class="fas-container">
      <i class="fas fa-chevron-left"></i>
    </div>
    <img class="ufo" :src="url">
    <div class="fas-container">
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({

    data() {
      return {
        url: require("../../assets/images/ufo.png")
      }
    },
    methods: {
      swipe() {

      }
    }
    
  })
</script>

<style lang="less" scoped>
  .change-ship-container {

    display: flex;
    justify-content: space-around;
    align-items: center;

    .fas-container {

      padding: 10px;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
        overflow: hidden;
        transition-duration: 200ms;
      }

    }

    .ufo {
      width: 100px;
      animation: rotation 0.2s linear infinite alternate;
    }
  
  }

  @keyframes rotation { 
    50% { -webkit-transform: rotate(1deg); transform:rotate(1deg); } 
    100% { -webkit-transform: rotate(-1deg); transform:rotate(-1deg); } 
  }
  
</style>