const defaultLoginState = {
    isLogin: false,
    username: '',
    token: ''
};
const login = (state = defaultLoginState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                ...action
            }
    }
    return state;
};
export default login;