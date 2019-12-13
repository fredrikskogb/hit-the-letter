<template>
  <div class="leaderboard-container">
    <Nav/>
    <div class="highscore-container">
      <div class="headers">
        <p class="position">Position</p>
        <p class="username">Username</p>
        <p class="points">Points</p>
        <p class="levels">Level</p>
      </div>
      <div class="scroll">
        <div class="result" v-for="(highscore, index) in highscores" :key="index">
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
  import { RepositoryFactory } from '../shared/repositoryFactory';

  export default Vue.extend({
    name: "leaderboard",
    
    data() {
      return {
        highscores: [],
        HighscoreRepository: RepositoryFactory.get('highscore')
      }
    },
    components: {
      Nav
    },
    methods: {
      async fetchHighscores() {
        const { data } = await this.HighscoreRepository.getAllHighscores();
        this.highscores = data;
      }
    },
    created() {
        this.fetchHighscores();
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