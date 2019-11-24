import { IUser } from '@/types/index'

// Used for sending values to distant components without having to use props and emits

const state = {
    users: [],
    user: {} as IUser,
    loggedInStatus: false
};

const getters = {
    user: (state: { user: IUser; }) => state.user,
    getLoggedInStatus: (state: { loggedInStatus: boolean; }) => state.loggedInStatus
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