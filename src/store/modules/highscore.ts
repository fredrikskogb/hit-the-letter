import axios from 'axios';

const state = {
    userHighscore: {}
};

const getters = {
    singleHighscore: (state: { userHighscore: any; }) => state.userHighscore
};

const actions = {
    async fetchHighscore({commit} : {commit: any}, userId: any) {
        const response = await axios.get(`${process.env.CONFIG_URL}/highscore/getHighscore.php?userId=${userId}`);
        commit('setHighscore', response.data);
    },
    async updateHighscore({commit} : {commit: any}, userHighscore: any){
        const response = await axios.post(`${process.env.CONFIG_URL}/highscore/updateHighscore.php/`, userHighscore);
        commit('setHighscore', response.data);
    },
    async addHighscore({commit} : {commit: any}, userHighscore: any){
      const response = await axios.post(`${process.env.CONFIG_URL}/highscore/setHighscore.php/`, userHighscore);
      commit('setHighscore', response.data);
  },
};

const mutations = {
    setHighscore: (state: { userHighscore: any; }, userHighscore: any) => (state.userHighscore = userHighscore),
};

export default  {
    state,
    getters,
    actions,
    mutations
}