<template>
  <div class="change-ship-container">
    <div class="fas-container" @click="swipe">
      <i class="fas fa-chevron-left" ref="left"></i>
    </div>
    <div class="ship-container">
      <img class="ship" :src="url">
      <div class="button-container">
        <p class="button" @click="setShip" v-if="!checkSelectedShip()">{{selected}}</p>
        <p class="button" v-if="checkSelectedShip()">Selected</p>
      </div>
    </div>
    <div class="fas-container" @click="swipe">
      <i class="fas fa-chevron-right" ref="right"></i>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
import { mapActions } from 'vuex';

  export default Vue.extend({

    data() {
      return {
        ships: [
          "ufo.png",
          "ufo2.png",
          "ufo3.png"
        ],
        setShipIndex: 0,
        url: require("../../assets/images/ufo.png"),
        selectedShip: "",
        selected: "Select"
      }
    },
    methods: {

      ...mapActions(["playPickShip"]),

      swipe(event: any) {

        this.selected = "Select";
        const left = this.$refs["left"] as HTMLDivElement;
        const right = this.$refs["right"] as HTMLDivElement;

        if(event.target === left){

          if(this.setShipIndex === 0){
            this.setShipIndex = this.ships.length - 1;
            this.url = require(`../../assets/images/${this.ships[this.setShipIndex]}`);
            this.selectedShip = this.ships[this.setShipIndex];
          } else {
            this.setShipIndex--;
            this.url = require(`../../assets/images/${this.ships[this.setShipIndex]}`);
            this.selectedShip = this.ships[this.setShipIndex];
          }
          
        } else if(event.target === right) {

            if(this.setShipIndex === this.ships.length - 1) {
              this.setShipIndex = 0;
              this.url = require(`../../assets/images/${this.ships[this.setShipIndex]}`);
              this.selectedShip = this.ships[this.setShipIndex];
            } else {
              this.setShipIndex++;
              this.url = require(`../../assets/images/${this.ships[this.setShipIndex]}`);
              this.selectedShip = this.ships[this.setShipIndex];
            }

        }

      },

      setShip(event: any) {
        this.selected = "selected";
        localStorage.setItem("ship", this.ships[this.setShipIndex]);
        this.playPickShip();
      },

      checkSelectedShip() {
        if(localStorage.getItem("ship") === this.selectedShip){
          return true
        } else {
          return false;
        }
      },


    },
    created() {
        this.selectedShip = localStorage.getItem("ship") as string;
        this.url = require(`../../assets/images/${this.selectedShip}`)
        this.setShipIndex = this.ships.findIndex(ship => ship === this.selectedShip)
    }
    
  })
</script>

<style lang="less" scoped>
@import url("../../styles/main.less");
  .change-ship-container {

    display: flex;
    justify-content: space-around;
    align-items: center;

    .fas-container {

      padding: 10px;
      

      &:hover {
        transform: scale(1.2);
        overflow: hidden;
        transition-duration: 200ms;
      }

      i {
        cursor: pointer;
      }

    }
    .ship-container {
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      
      .ship {
        width: 100px;
        animation: rotation 0.2s linear infinite alternate;
      }
      .button-container {
        .card;
        padding: 5px;
        cursor: pointer;
        
      }
      .selected {
          background-color: rgba(54, 141, 54, 0.623);
        }
    }
  
  }

  @keyframes rotation { 
    50% { -webkit-transform: rotate(1deg); transform:rotate(1deg); } 
    100% { -webkit-transform: rotate(-1deg); transform:rotate(-1deg); } 
  }
  
</style>