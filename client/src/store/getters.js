export default {
    isAuthenticated(state) {
        return state.isAuthenticated;
    },
    user(state) {
        return state.user;
    },
    profile(state) {
        return state.profile;
    },
    loading(state) {
        return state.loading;
    },
    profiles(state) {
        return state.profiles;
    }
}
