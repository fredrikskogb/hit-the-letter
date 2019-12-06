<template>
  <div>

    <div v-if="!nextLevel" class="letters-container">

      <div class="letter-container" 
        v-for="letter in letterData" 
        :key="Object.keys(letter)[0]" 
        :class="{active: isActive(letter)}">

        <PlayingFieldLetter :letter="Object.keys(letter)[0]">
        </PlayingFieldLetter>
      </div>
      <div class="information-container">
        <p class="timer">Time left: <Countdown :startingTime="60" v-on:time-is-out="gameEnd"/></p>
        <p>Points: {{points}}</p>
        <p>Level: {{level}}</p>
      </div>
      <PlayerShip/>
    </div>

    <NextLevel v-if="nextLevel"
      :gameFailed="gameFailed"
      :points="points"
      v-on:next-level="setNextLevel"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import PlayingFieldLetter from "@/components/playingFieldLetter/PlayingFieldLetter.vue";
  import Countdown from '@/components/countdown/Countdown.vue';
  import PlayerShip from '@/components/playerShip/PlayerShip.vue';
  import NextLevel from "@/components/nextLevel/NextLevel.vue";
  import {mapGetters, mapActions} from 'vuex';

  export default Vue.extend({

    name: "playingFieldBaseLevel" as string,

    data() {

      return {
        interval: 0,
        level: 1,
        points: 1,
        letterData: [],
        nextLevel: false,
        gameFailed: false
      }

    },

    components: {
      PlayingFieldLetter,
      Countdown,
      PlayerShip,
      NextLevel
    },

    props: ["letters"],

    methods: {

      ...mapActions(["updateHighscore", "fetchHighscore"]),

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
        return letter[Object.keys(letter)[0]];
      },

      async setUserHighscore() {
        /* Check highscore values from highscore vuex state and compare to this session.
           Add user id from users vuex state. */
        if(this.singleHighscore.points < this.points && this.singleHighscore.level < this.level) {
          this.updateHighscore({userId: this.user.id, points: this.points, level: this.level});
          console.log("Updating highscore");
        } else {
          console.log("Not a new highscore");
          return;
        }

      },

      setLocalStorageHighscore() {

        console.log("Not logged in. Comparing highscore...");
        let localStorageLevel = localStorage.getItem("level");
        let localStoragePoints = localStorage.getItem("points");

        if(localStorageLevel === null){
          localStorageLevel = "0";
        }

        if(localStoragePoints === null){
          localStoragePoints = "0";
        }

        if(parseInt(localStorageLevel) < this.level && parseInt(localStoragePoints) < this.points){
          console.log("Setting new highscore...")
          localStorage.setItem("level", this.level.toString());
          localStorage.setItem("points", this.points.toString());
        } else {
          console.log("No new highscore.")
        }

      },

      // Set highscore and show NextLevel.vue
      gameEnd(timeIsOut: boolean): void {

        console.log("Session ended.");

        if(!this.user.hasOwnProperty('id')) {
          this.setLocalStorageHighscore();
        } else {
          this.setUserHighscore();
        }
        if(timeIsOut) this.gameFailed = true;
        this.nextLevel = true;

      },

      // Function run from NextLevel.vue
      setNextLevel(latestPoints: any) {
        this.nextLevel = false;
        this.level++
        this.points = latestPoints;
      }

    },

    computed: mapGetters(['user', 'singleHighscore']),

    created(): any {
      // Make letters to object to get access to boolean for Vue DOM manipulation
      this.makeFalsy();
      this.fetchHighscore(this.user.id);
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
    background-color: rgba(83, 84, 136, 0.65);
    border-radius: @card-border-radius;
    flex-basis: 15%;
    height: 50px;
    margin: 12px;
    box-shadow: 0px 0px 2px 0px rgb(163, 170, 255);
    border: 1px solid rgb(60, 197, 231);

    color: rgb(228, 226, 226);
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -2px black;
    font-size: 1.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .active {
    background-color: rgba(66, 175, 66, 0.767);
  }

  .information-container {
    position: absolute;
    top: 10px;
    display: flex;
    width: 400px;
    justify-content: space-between;
    font-weight: bold;
    font-size: 1.1em;
  }
}

</style>