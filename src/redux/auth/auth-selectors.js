const getAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.email;

const getAuthLoading = state => state.auth.loading;

export default {
    getAuthenticated,
    getUsername,
    getAuthLoading
};