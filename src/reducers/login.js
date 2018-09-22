const defaultLoginState = {
    isLogin: false,
    userName: '',
    userId: '',
    token: ''
};
const login = (state = defaultLoginState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                isLogin: true,
                userName: action.userName,
                userId: action.userId,
                token: action.token
            }
    }
    return state;
};
export default login;