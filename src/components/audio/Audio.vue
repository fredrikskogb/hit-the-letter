<template>
  <div class="audio-container" @click="toggleAudio">
    <i class="fas fa-volume-mute" v-if="!audio"></i>
    <i class="fas fa-volume-up" v-if="audio"></i>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapGetters, mapActions } from 'vuex';


  export default Vue.extend({
    name: "audioComponent",
    data() {
      return {
        audio: false,
        audioInterval: 0,
        toggled: false
      }
    },
    methods: {
      ...mapActions(["pauseAudio", "playAudio", "playSong"]),
      toggleAudio() {
        if(this.toggled === false) {
          this.toggled = true;
          this.audio = true;
          this.initSong();
          return;
        }
        if(this.audio === false) {
          this.pauseAudio()
        }else {
          this.playAudio();
        }

        this.audio = !this.audio;

      },
      initSong() {
        this.pauseAudio();
        setTimeout(()  => {
          this.playSong();
          this.audioInterval = setInterval(() => { this.playSong(); }, 145000);
        }, 1000);
      }
    },
    computed: mapGetters(['mainSong'])
    
  })
</script>

<style lang="less" scoped>
  .audio-container {
    position: absolute;
    right: 15px;
    bottom: 15px;
    cursor: pointer;
    i {
      font-size: 2em;
    }
  }
</style>