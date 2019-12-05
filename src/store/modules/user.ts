import { IUser } from '@/types/index';
import { user } from '@/mocks/user.ts';

// Used for sending values to distant components without having to use props and emits
const state = {

    allUsers: [] as IUser[],
    user: {} as IUser,
    loggedInStatus: false,

    highscore: {},
    allHighscores: []

};

const getters = {

    user: (state: { user: IUser; }) => state.user,
    allUsers: (state: { allUsers: IUser[]; }) => state.allUsers,
    loggedInStatus: (state: { loggedInStatus: boolean; }) => state.loggedInStatus,

    highscore: (state: { highscore: {}; }) => state.highscore,
    allHighscores: (state: { allHighscores: []; }) => state.allHighscores,

};

const actions = {
    setLoggedInStatus: (status: boolean) => {
        state.loggedInStatus = status;
    },
    setLoggedInUser: (user: IUser) => {

    }
};

const mutations = {
    
};

export default  {
    state,
    getters,
    actions,
    mutations
}