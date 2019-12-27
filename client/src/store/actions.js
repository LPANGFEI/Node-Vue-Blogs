import * as types from './mutation-types'

export default {
    setIsAuthenticated({
        commit
    }, status) {
        commit(types.SET_IS_AUTHENTICATED, status);
    },
    setUser({
        commit
    }, data) {
        commit(types.SET_USER, data);
    },
    setProfile({
        commit
    }, data) {
        commit(types.SET_PROFILE, data);
    },
    clearCurrentState({
        commit
    }) {
        commit(types.CLEAR_CURRENT_STATE);
    },
    setLoading({
        commit
    }, status) {
        commit(types.SET_LOADING, status);
    },
    setProfiles({
        commit
    }, data) {
        commit(types.SET_PROFILES, data);
    }
}
