<template>
  <p>
    {{timeLeft}}
  </p>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({

    name: 'countdown' as string,
    
    data() {
      return {
        timeLeft: 0,
        countdown: 0
      }
    },

    props: ['startingTime'],

    methods: {
      countdownFunction() {
        this.timeLeft = this.startingTime;
        this.countdown = setInterval(() => {
          this.timeLeft--;
          if (this.timeLeft <= 0) {
            clearInterval(this.countdown);
            this.$emit('time-is-out');
            return;
          }
        }, 1000);
      }
    },

    created(): void {
      this.countdownFunction();
    }

  })
</script>