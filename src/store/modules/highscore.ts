import axios from 'axios';
import CONFIG_URL from "../../../config-url";

const state = {
    userHighscore: {}
};

const getters = {
    singleHighscore: (state: { userHighscore: any; }) => state.userHighscore
};

const actions = {
    async fetchHighscore({commit} : {commit: any}) {
        const response = await axios.get(`${CONFIG_URL}/highscore`);
        commit('setHighscore', response.data);
    },
    async updateHighscore({commit} : {commit: any}, userHighscore: any){
        const response = await axios.post(`${CONFIG_URL}/highscore/updateHighscore.php/`, userHighscore);
        commit('setHighscore', response.data);
    },
    async addHighscore({commit} : {commit: any}, userHighscore: any){
      const response = await axios.post(`${CONFIG_URL}/highscore/setHighscore.php/`, userHighscore);
      commit('setHighscore', response.data);
  },
};

const mutations = {
    setHighscore: (state: { highscore: any; }, highscore: any) => (state.highscore = highscore),
};

export default  {
    state,
    getters,
    actions,
    mutations
}