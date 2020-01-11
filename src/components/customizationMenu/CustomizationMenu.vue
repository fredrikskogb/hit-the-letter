<template>
  <div class="customization-menu-wrapper">
    <div class="selection-container">
      <router-link to="/playing-field" class="play-button"><h3>Play</h3></router-link>
      <div class="change-ship" @click="toggleShip">
        <h3>Change ship</h3>  
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="change-layout">
        <h3>Change layout</h3>
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
    <div class="choose-customization-area" :class="{'not-selected' : !selected}">
        <ChangeShip v-if="changeShip"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ChangeShip from '@/components/changeShip/ChangeShip.vue';

  export default Vue.extend({
    name: "CustomizationMenu",
    components: {
      ChangeShip
    },
    data() {
      return  {
        selected: false,
        changeShip: false,
      }
    },
    methods: {
      toggleShip() {
        this.selected = !this.selected;
        this.changeShip = !this.changeShip
      }
    }
  })
</script>

<style lang="less" scoped>
	@import url('../../styles/main.less');

  .customization-menu-wrapper {

    display: flex;
    flex-direction: column;
    user-select: none;
    
    .hv-centering;

    .selection-container {
      display: flex;
      justify-content: space-between;
    }

    .play-button, .change-ship, .change-layout {
    .card;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      text-decoration: none;
      box-shadow: none;
      width: 100px;
      cursor: pointer;
      h3 {
        display: inline;
      }
    }

    .change-ship {
      margin: 0 5px;
    }

    .choose-customization-area {
      .card;
      margin-top: 5px;
    }

    .not-selected {
      background-image: url("../../assets/images/stripes.png")
    }

  }
</style>