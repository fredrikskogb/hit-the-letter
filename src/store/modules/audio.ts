const state = {
  mainSong: new Audio(require("../../assets/audio/main_song.mp3")),
  laser: new Audio(require("../../assets/audio/laser.mp3")),
  pickShip: new Audio(require("../../assets/audio/pick_ship.mp3")),
  bomb: new Audio(require("../../assets/audio/bomb.mp3")),
  miss: new Audio(require("../../assets/audio/miss.mp3"))
};

const getters = {
  mainSong: (state: { mainSong: any; }) => state.mainSong,
};

const actions = {
  pauseAudio ({commit} : {commit: any}) {
    commit('muteAudio');
  },
  playAudio ({commit} : {commit: any}) {
    commit('enableAudio');
  },
  playSong ({commit} : {commit: any}) {
    commit('startSong');
  },
  playLaser ({commit} : {commit: any}) {
    commit("startLaser");
  },
  playPickShip ({commit} : {commit: any}) {
    commit("startPickShip");
  },
  playBomb ({commit} : {commit: any}) {
    commit("startBomb");
  },
  playMiss ({commit} : {commit: any}) {
    commit("startMiss");
  }
};

const mutations = {
  
  muteAudio: (state: { mainSong: any; laser: any; pickShip: any; bomb: any; miss: any;}) => {
    state.mainSong.muted = false,
    state.laser.muted = false,
    state.pickShip.muted = false,
    state.bomb.muted = false,
    state.miss.muted = false
  },
  enableAudio: (state: { mainSong: any; laser: any; pickShip: any; bomb: any; miss: any;}) => {
    state.mainSong.muted = true,
    state.laser.muted = true,
    state.pickShip.muted = true,
    state.bomb.muted = true,
    state.miss.muted = true
  },
  startSong: (state: { mainSong: any; }) => {
    state.mainSong.play();
  },
  startLaser: (state: { laser: any; }) => {
    state.laser.play();
  },
  startPickShip: (state: { pickShip: any; }) => {
    state.pickShip.play();
  },
  startBomb: (state: { bomb: any; }) => {
    state.bomb.play();
  },
  startMiss: (state: { miss: any; }) => {
    state.miss.play();
  }
};

export default  {
  state,
  getters,
  actions,
  mutations
}