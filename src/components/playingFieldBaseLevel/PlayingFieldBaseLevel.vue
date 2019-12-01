<template>
    <div class="letters-container">

      <div class="letter-container" 
        v-for="letter in letterData" 
        :key="Object.keys(letter)[0]" 
        :class="{active: isActive(letter)}"
        >

        <PlayingFieldLetter :letter="Object.keys(letter)[0]">
        </PlayingFieldLetter>
      </div>
      <Countdown :startingTime="60"/>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import PlayingFieldLetter from "@/components/playingFieldLetter/PlayingFieldLetter.vue";
  import Countdown from '@/components/countdown/Countdown.vue';

  export default Vue.extend({

    name: "playingFieldBaseLevel" as string,

    data() {

      return {
        interval: 0,
        level: 1,
        letterData: []
      }

    },

    components: {
      PlayingFieldLetter,
      Countdown
    },

    props: ["letters"],

    methods: {

      makeFalsy(): void {

        // Make letters to object to get access to boolean for Vue DOM manipulation
        this.letterData = this.letters.map((letter: string) => {
        
          return {
            [letter]: false
          }

        })
      },

      makeActive(): void {
        // reset values
        this.makeFalsy();
        // Takes a random letter.
        let letter: any = this.letterData[Math.floor(Math.random() * this.letterData.length)];
        // Make letter active
        let key = Object.keys(letter)[0];
        letter[key] = true;
      
      },

      isActive(letter: any): boolean {
        // Check if false/true to give "active" as class
        if(letter[Object.keys(letter)[0]] === true){
          return true;
        } else {
          return false;
        }

      }

    },

    created(): any {
      // Make letters to object to get access to boolean for Vue DOM manipulation
      this.makeFalsy();

    },

    // Mounted lifecycle hook because we need to wait for DOM render
    mounted(): void {
      // Increase pace by 110ms on making letter active based on level
      this.interval = setInterval(() => { this.makeActive(); }, 2000 - (this.level * 110));

    }
    
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
    background-color: rgba(115, 83, 136, 0.65);
    border-radius: @card-border-radius;
    flex-basis: 15%;
    height: 50px;
    margin: 12px;
    box-shadow: 0px 0px 2px 0px rgb(163, 170, 255);
    border: 1px solid rgb(231, 60, 60);

    color: rgb(228, 226, 226);
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -2px black;
    font-size: 1.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .active {
    background-color: green;
  }
}
</style>