<template>
  <div>

    <div v-if="!nextLevel" class="letters-container">

      <div class="letter-container" 
        v-for="letter in letterData" 
        id="letter"
        :key="Object.keys(letter)[0]" 
        :class="{
          active: isActive(letter),
          correct: isCorrect(letter)
        }"
        :ref=letter
        >

        <PlayingFieldLetter :letter="Object.keys(letter)[0]" />
      </div>
      <div class="information-container">
        <p class="timer">Time left: 
          <Countdown :startingTime="60" v-on:time-is-out="gameEnd(true)"/>
        </p>
        <p>Points: {{points}}</p>
        <p>Level: {{level}}</p>
      </div>
      <div class="ship-shot-container" :style="laserStyles" v-if="correctHit">
        <div :class="{laser : correctHitAnimation}"></div>
      </div>
      <transition name="slide-fade" mode="out-in">
        <PlayerShip class="ship-container"
          :style="{left: pos + 'px'}"
          :key="pos"
          ref="ship"/>
      </transition>
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
  import { mapGetters, mapActions } from 'vuex';

  export default Vue.extend({

    name: "playingFieldBaseLevel" as string,

    data() {
      return {
        interval: 0,
        level: 1,
        points: 0,
        letterData: [],
        nextLevel: false,
        gameFailed: false,
        correctHit: false,
        correctHitAnimation: false,
        pos: "",
        laserStyles: {}
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

      makeActive() {
        // reset values
        this.makeFalsy();
        this.correctHit = false;
        // Takes a random letter.
        const index = Math.floor(Math.random() * this.letterData.length);
        let activeLetter: any = this.letterData[index];
        // Make letter active
        let key = Object.keys(activeLetter)[0];
        activeLetter[key] = true;

        const letterElement = this.$refs[activeLetter] as HTMLElement;
        const ship = this.$refs["ship"] as Vue.Component;

        this.setPos(letterElement, index, ship);
        this.getDistanceToLetter(letterElement, index, ship);

      },

      setPos(element: HTMLElement, index: number, ship: Vue): void {  
        const leftOffset = (element[index].getBoundingClientRect().width / 2)
          - (ship.$el.getBoundingClientRect().width / 2);
        this.pos = element[index].getBoundingClientRect().left + leftOffset;
      },


      getDistanceToLetter(elementPointer: HTMLElement, index: number, shipPointer: Vue) {
        const ship = {
          x: shipPointer.$el.getBoundingClientRect().left,
          y: shipPointer.$el.getBoundingClientRect().top,
          height: shipPointer.$el.getBoundingClientRect().height
        };
        const element = {
          x: elementPointer[index].getBoundingClientRect().x,
          y: elementPointer[index].getBoundingClientRect().y,
          height: elementPointer[index].getBoundingClientRect().height
        };

        const horizontal = (ship.x - ship.height) - (ship.x - element.height);
        const vertical = ship.y - element.y;

        const distanceBetween = Math.sqrt(horizontal*horizontal + vertical*vertical);

        this.laserStyles = {
          left: this.pos + 'px',
          height: distanceBetween - 50 + 'px'
        }
      },

      isActive(letter: any): boolean {
        // Check if false/true to give "active" as class
        return letter[Object.keys(letter)[0]];
      },

      isCorrect(letter: any): boolean {
        if (this.correctHit) {
          return true;
        }
        return false;
      },
      correctHitCheck() {

        if(this.correctHitAnimation === true) {

          setTimeout(() => {
            this.correctHitAnimation = false;
            return false;
          }, 250)

        }

        this.correctHitAnimation = true;
        this.correctHitCheck();
        return true;

      },

      handleKeypress(event: KeyboardEvent) {
        //get pressed letter
        const target = event.key.toUpperCase();
        //find the active letter by searching object letterData values for true
        const activeLetterHit = this.letterData.find(obj => obj[target] === true);

        if (activeLetterHit && !this.correctHit) {
          this.correctHit = true;
          this.points += this.level;
          this.correctHitCheck();
        } else {
          this.gameFailed = true;
          const timeIsOut = false;
          this.gameEnd(timeIsOut);
        }
      },

      async setUserHighscore(): Promise<any> {
        /* Check highscore values from highscore vuex state and compare to this session.
           Add user id from users vuex state. */
        console.log(this.singleHighscore);

        if (this.singleHighscore.points < this.points) {
          this.updateHighscore({userId: this.user.id, points: this.points, level: this.level});
          console.log("Updating highscore");
        } else {
          console.log("Not a new highscore");
          return;
        }
      },

      setLocalStorageHighscore(): void {
        console.log("Not logged in. Comparing highscore...");
        let localStorageLevel = localStorage.getItem("level");
        let localStoragePoints = localStorage.getItem("points");

        if (localStorageLevel === null) {
          localStorageLevel = "0";
        }

        if (localStoragePoints === null) {
          localStoragePoints = "0";
        }

        if (parseInt(localStoragePoints) < this.points) {
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

        if (!this.user.hasOwnProperty('id')) {
          this.setLocalStorageHighscore();
        } else {
          this.setUserHighscore();
        }
        if (timeIsOut) this.gameFailed = true;
        this.nextLevel = true;
        clearInterval(this.interval);
      },

      // Function run from NextLevel.vue
      setNextLevel(latestPoints: any) {
        this.nextLevel = false;
        this.level++;
        this.points = latestPoints;
      }
    },

    computed: mapGetters(['user', 'singleHighscore']),

    created(): void {
      // Make letters to object to get access to boolean for Vue DOM manipulation
      this.makeFalsy();
      this.fetchHighscore(this.user.id);
      window.addEventListener("keydown", this.handleKeypress);
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
    background-color: @letter-background-color;
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
    &.correct {
      background-color: rgb(18, 223, 18);
    }
  }

  .incorrect {
    background-color: rgba(200, 50, 50, 0.8);
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

  /*.teleport {
    animation: 0.2s linear;
		animation-name: teleport; 
  }*/

  /*@keyframes teleport {
     0% {
            transform: scale(1.0);
        }
        50% {
            transform: scale(0);
        }
        100% {
            transform: scale(1.0);
        }
     }*/

  .slide-fade-enter-active {
    transition: all 0.1s ease;
    transform: rotate(10deg);
  }
  .slide-fade-leave-active {
    transition: all 1ms cubic-bezier(1.0, 0.5, 0.8, 1.0);
    display: block;
    transform: scale(0.8, 0.8);
  }
  .ship-container {
    width: 100px;
  }

  .ship-shot-container {
    width: 100px;
    position: absolute;
    margin: 0 auto;
    bottom: 160px;
  }

  .laser {
    background-image: url("../../assets/images/laser.png");
    background-position: center;
    background-size: 20px 5px;
    opacity: 1;
    margin: 0 auto;
    width: 27px;
    height: inherit;
    animation-name: laserAnimation;
    animation-duration: 0.15s; 
  }

  @keyframes laserAnimation { 
    0% {
      width: 0px;
    }
    5% {
      background-color: rgba(86, 205, 214, 0.507);
      width: 7px;
    }
    10% {
      background-color: rgb(90, 214, 86);
      width: 12px;
    }
    15% {
      background-color: rgba(112, 214, 86, 0.9);
      width: 25px;
    }
    20% {
      background-color: rgb(210, 86, 214, 0.8);
      width: 10px;
    }
    25% {
      background-color: rgb(210, 86, 214, 1);
      width: 29px;
    }
    35% {
      background-color: rgba(107, 214, 86, 0.95);
      width: 22px;
    }
    50% {
      background-color: rgba(86, 214, 86, 0.85);
      width: 19px;
    }
    60% {
      background-color: rgb(210, 86, 214, 0.75);
      width: 17px;
    }
    70% {
      background-color: rgb(210, 86, 214, 0.60);
      width: 15px;
    }
    80% {
      background-color: rgb(210, 86, 214, 0.20);
      width: 12px;
    }
    90% {
      background-color: rgb(210, 86, 214, 0.1);
      width: 7px;
    }
    
    100% {
      background-color: none;
    } 
  }

}

</style>