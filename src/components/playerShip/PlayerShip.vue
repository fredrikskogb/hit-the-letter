<template>
<div>
  <img src="../../assets/images/ufo.png" class="ufo-image"/>
</div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    
  })
</script>

<style lang="less" scoped>
.ufo-image {
  width: inherit;
  animation: sideways 3s linear infinite alternate;
}
div {
  position: absolute;
  margin: 0 auto;
  bottom: 20px;
  width: 350px;
  animation: rotation 0.2s linear infinite alternate;
}
@keyframes rotation { 
  50% { -webkit-transform: rotate(2deg); transform:rotate(2deg); } 
  100% { -webkit-transform: rotate(-2deg); transform:rotate(-2deg); } 
}

@keyframes sideways {
  50% { -webkit-transform: translate3d(-10px,2px,0); transform: translate3d(-10px,2px,0) } 
  100% { -webkit-transform: translate3d(10px,-2px,0); transform: translate3d(10px,-2px,0) } 

}

</style>