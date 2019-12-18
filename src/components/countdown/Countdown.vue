<template>
  <span>
    {{timeRemaining}}
  </span>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({

    name: 'countdown' as string,
    
    data() {
      return {
        timeRemaining: 0,
        countdown: 0
      }
    },

    props: ['startingTime'],

    methods: {
      countdownFunction() {
        this.timeRemaining = this.startingTime;
        this.countdown = setInterval(() => {
          this.timeRemaining--;
          if (this.timeRemaining <= 0) {
            clearInterval(this.countdown);
            this.$emit('time-is-out', true);
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