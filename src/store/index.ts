import Vuex from 'vuex';
import Vue from 'vue';
import user from './modules/user';
import highscore from './modules/highscore';
import audio from './modules/audio';

//Load Vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
    modules: {
        user,
        highscore,
        audio
    }
});