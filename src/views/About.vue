<template>

  <div class="about">

    <Nav>
    </Nav>
    <LoggedIn/>

    <article>
      <div class="about-text">
        <h1>Hit the letter<br></h1>
        <p>Is a game developed for people to have a fun experience to get better 
          at typing on a computer keyboard. You will have 60 seconds each level
          to hit the letters and the pace will increase with each level. You will start out with special
          abilities such as extra lives and bombs. These will also be obtainable while playing.<br></p>
        <p class="contact"><span>Contact: </span><a href = "mailto: hit-the-letter@gmail.com">hit-the-letter@gmail.com</a></p>
      </div>
      <div class="credits">
        <h2>CREDITS</h2>
        <h3>Development:</h3>
        <p>Lukas Lennstring</p>
        <p>Fredrik Skogberg</p>
        <h3>Graphics:</h3>
        <p>Lukas Lennstring</p>
        <p>Tindra Collett</p>
        <h3>Music:</h3>
        <p>Carl Jagrenius</p>
        <h3>Sound effects:</h3>
        <p>Fredrik Skogberg</p>
      </div>
    </article>
    
  </div>

</template>

<script lang="ts">

import Vue from 'vue'
import LoginRegister from '@/components/loginRegister/LoginRegister.vue';
import Nav from '@/components/layout/Nav.vue';
import { IUser } from '@/types/index.ts';
import LoggedIn from '@/components/loggedIn/LoggedIn.vue';

export default Vue.extend ({

  components: {
    Nav,
    LoggedIn
  },
  
})

</script>

<style lang="less">

  @import url('../styles/main.less');
  article {

    display: flex;
    .hv-centering;

    .about-text {
      max-width: 400px;
      box-shadow: @text-box-shadow;
      text-align: center;
      padding: 10px;
      margin: 10px;
      h1, p {
        .text-styling;
        box-shadow: @text-box-shadow;
        display: inline;
        line-height: 1.8;
      }
      a {
        box-shadow: none;
      }
      .contact {
        display: inline-block;
        margin-top: 10px;
        span {
          margin-right: 5px;
        }
      }
    }
    
  }
  .credits {
    max-width: 400px;
    box-shadow: @text-box-shadow;
    text-align: center;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    line-height: 1.8;
    p {
        .text-styling;
        box-shadow: @text-box-shadow;

    }
  }
  @media screen and (max-width: 998px) {
    article {
      .hv-centering;
      width: 100vw;
    }
  }

</style>