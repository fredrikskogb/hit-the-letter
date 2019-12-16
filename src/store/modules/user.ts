import { IUser, IUserSecure } from '@/types/index';
import axios from 'axios';
import CONFIG_URL from '../../../config-url';

// Used for sending values to distant components without having to use props and emits
const state = {

    allUsers: [] as IUser[],
    user: {} as any,
    loggedInStatus: false,

    highscore: {},
    allHighscores: []

};

const getters = {

    user: (state: { user: any; }) => state.user,
    allUsers: (state: { allUsers: IUser[]; }) => state.allUsers,
    loggedInStatus: (state: { loggedInStatus: boolean; }) => state.loggedInStatus,

    highscore: (state: { highscore: {}; }) => state.highscore,
    allHighscores: (state: { allHighscores: []; }) => state.allHighscores,

};

const actions = {
    async loginUser({commit} : {commit: any}, user: any) {
        const response = await axios.get(`${CONFIG_URL}/user/login.php?email=${user.email}&password=${user.password}`);
        console.log(response.data);
        commit('setUser', response.data);
    },
    
    async registerUser({commit} : {commit: any}, user: any){
      const response = await axios.post(`${CONFIG_URL}/user/register.php/`, user);
      console.log(response.data);
      commit('setUser', response.data);
  },

  resetUserState ({commit} : {commit: any}) {
    commit('resetUser');
  },
  localStorageLogin({commit}: {commit: any}, user: IUserSecure) {
    commit('setUser', user);
  }
};

const mutations = {
    setUser: (state: { user: any; }, user: any) => {
        state.user = user,
        localStorage.setItem("user", window.btoa(JSON.stringify(user)))
    },
    resetUser: (state: { user: any; }) => {
        state.user = {},
        localStorage.removeItem("user");
    },
};

export default  {
    state,
    getters,
    actions,
    mutations
}