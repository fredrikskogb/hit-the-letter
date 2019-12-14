<template>

  <div class="about">

    <Nav>
    </Nav>

    <article>

      <h1>Hit the letter<br></h1>
      <p>Is a game devloped for people to have a fun experience to get better 
        at typing on a computer keyboard. You will have 60 seconds each level
         to hit the letters and the pace will increase with each level. You will start out with special
         abilities such as extra lives and bombs. These will also be obtainable while playing.<br></p>
      <p class="contact"><span>Contact: </span><a href = "mailto: hit-the-letter@gmail.com">hit-the-letter@gmail.com</a></p>

    </article>
    
  </div>

</template>

<script lang="ts">

import Vue from 'vue'
import LoginRegister from '@/components/loginRegister/LoginRegister.vue';
import Nav from '@/components/layout/Nav.vue';
import { IUser } from '@/types/index.ts';

export default Vue.extend ({

  components: {
    Nav
  },
  
})

</script>

<style lang="less">

  @import url('../styles/main.less');
  article {
    max-width: 400px;
    position: absolute;
    margin: 20px 10px;
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
  @media screen and (max-width: 998px) {
    article {
      .hv-centering;
      width: 100vw;
    }
  }

</style>