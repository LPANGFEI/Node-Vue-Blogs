import * as types from './mutation-types'

export default {
    [types.SET_IS_AUTHENTICATED](state, status) {
        state.isAuthenticated = status;
    },
    [types.SET_USER](state, data) {
        state.user = data;
    },
    [types.SET_PROFILE](state, data) {
        state.profile = data;
    },
    [types.CLEAR_CURRENT_STATE](state) {
        state.isAuthenticated = false;
        state.user = {};
        state.profile = {};
    },
    [types.SET_LOADING](state, status) {
        state.loading = status;
    },
    [types.SET_PROFILES](state, data) {
        state.profiles = data;
    }
}
