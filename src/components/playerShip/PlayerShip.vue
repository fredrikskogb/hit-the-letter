<template>
<div>
  <img :src="getShipUrl()" class="ufo-image" alt="Player ship"/>
</div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: "playerShip",
    
    methods: {
      getShipUrl(): any {
        const shipFromLocalStorage = localStorage.getItem("ship");
        
        // Webpack causes this comparison to be used instead of using a variable
        if(shipFromLocalStorage === "ufo.png") {
          return require("../../assets/images/ufo.png");
        } else if (shipFromLocalStorage === "ufo2.png") {
          return require("../../assets/images/ufo2.png");
        } else if (shipFromLocalStorage === "ufo3.png") {
          return require("../../assets/images/ufo3.png");
        }
        
      }
    }
    
  })
</script>

<style lang="less" scoped>
.ufo-image {
  height: 50px;
  animation: sideways 3s linear infinite alternate;
}
div {
  position: absolute;
  margin: 0 auto;
  bottom: 120px;
  animation: rotation 0.2s linear infinite alternate;
  box-shadow: 3px 140px 19px -7px rgba(0,0,0,0.2);
}

@keyframes rotation { 
  50% { -webkit-transform: rotate(1deg); transform:rotate(1deg); } 
  100% { -webkit-transform: rotate(-1deg); transform:rotate(-1deg); } 
}

@keyframes sideways {
  50% { transform: translate(-5px) } 
  100% { transform: translate(5px) } 
}

</style>