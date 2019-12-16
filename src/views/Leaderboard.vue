<template>
  <div class="leaderboard-container">
    <Nav/>
    <LoggedIn/>
    <div class="highscore-container">
      <div class="position">
        <p @click="setUserPosition">See position</p>
      </div>
      <div class="headers">
        <p class="position">Position</p>
        <p class="username">Username</p>
        <p class="points">Points</p>
        <p class="levels">Level</p>
      </div>
      <div class="scroll">
        
        <div class="result" v-for="(highscore, index) in highscores" :key="index">
          <div class="highscore-row user" v-if="index == 0 && userPosition > 0">
            <p>{{userPosition + 1}}.</p>
            <p>{{user.username}}</p>
            <p>{{userHighscore.points}}</p>
            <p>{{userHighscore.level}}</p>
          </div>
          <div class="highscore-row">
            <p>{{index + 1}}.</p>
            <p>{{highscore.username}}</p>
            <p>{{highscore.points}}</p>
            <p>{{highscore.level}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Nav from '@/components/layout/Nav.vue';
  import LoggedIn from '@/components/loggedIn/LoggedIn.vue';
  import { RepositoryFactory } from '../shared/repositoryFactory';
  import { mapGetters } from 'vuex';

  export default Vue.extend({
    name: "leaderboard",
    
    data() {
      return {
        highscores: [{username: ''}],
        userHighscore: {id: 0},
        userPosition: 0,
        HighscoreRepository: RepositoryFactory.get('highscore')
      }
    },
    components: {
      Nav,
      LoggedIn
    },
    computed: mapGetters(['user']),
    methods: {

      async fetchHighscores() {
        const { data } = await this.HighscoreRepository.getAllHighscores();
        this.highscores = data;
      },
      async fetchUserHighscore() {
        const { data } = await this.HighscoreRepository.getUserHighscore(this.user.id);
        this.userHighscore = data;
      },
      setUserPosition() {
        const position = this.highscores.findIndex(element => element.username == this.user.username);
        this.userPosition = position;
      }
    }, 
    created() {
        this.fetchHighscores();
        this.fetchUserHighscore();
        
    }
  })
</script>

<style lang="less" scoped>
@import url("../styles/main.less");
.leaderboard-container {
  color: white;
}
.highscore-container {
  .card;
  .hv-centering;
  background-color: @letter-background-color;
  width: 40%;
  max-height: 60%;
  .position {
    display: flex;
    justify-content: center;
    p {
      cursor: pointer;
      color: orange;
      user-select: none;
      &:hover {
        font-weight: bold;
      }
    }
  }
}

.scroll {
  overflow-y: auto;
  max-height: 300px;
  
}
.headers {
  .result.highscore-row;
  text-decoration: underline;
}
.result {

  .user {
    background-color: rgba(54, 141, 54, 0.623);
  }
  
  .highscore-row {
    text-align: center;
    display: flex;
    flex-direction: row;
    padding: 15px 0;
    border-bottom: 1px solid grey;

    p {
      flex: 1;
    }
  }
}
</style>