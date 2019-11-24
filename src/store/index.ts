import Vuex from 'vuex';
import Vue from 'vue';
import user from './modules/user';

//Load Vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
    modules: {
        user
    }
});