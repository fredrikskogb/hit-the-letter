import { IUser } from '@/types/index';
import { user } from '@/mocks/user.ts';

// Used for sending values to distant components without having to use props and emits
const state = {

    allUsers: [] as IUser[],
    user: {
        id: 2,
        points: 0,
        level: 0,
    } as any,
    loggedInStatus: false,

    highscore: {},
    allHighscores: []

};

const getters = {

    user: (state: { user: any; }) => state.user,
    allUsers: (state: { allUsers: IUser[]; }) => state.allUsers,
    getLoggedInStatus: (state: { loggedInStatus: boolean; }) => state.loggedInStatus,

    highscore: (state: { highscore: {}; }) => state.highscore,
    allHighscores: (state: { allHighscores: []; }) => state.allHighscores,

};

const actions = {
    
};

const mutations = {
    
};

export default  {
    state,
    getters,
    actions,
    mutations
}