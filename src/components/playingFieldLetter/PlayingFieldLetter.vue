<template>
  <div class="letter">
    <p>{{letter}}</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({

    name: "playingFieldLetter",

    props: ["letter"]
    
  })
</script>

<style lang="less" scoped>
@import url('../../styles/main.less');


</style>