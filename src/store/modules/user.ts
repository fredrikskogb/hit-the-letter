import { IUser, IUserSecure } from '@/types/index';
import axios from 'axios';

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
        const response = await axios.get(`${process.env.CONFIG_URL}/user/login.php?username=${user.username}&password=${user.password}`);
        commit('setUser', response.data);
        return response.data;
    },
    
    async registerUser({commit} : {commit: any}, user: any){
      const response = await axios.post(`${process.env.CONFIG_URL}/user/register.php/`, user);
      commit('setUser', response.data);
      return response.data;
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