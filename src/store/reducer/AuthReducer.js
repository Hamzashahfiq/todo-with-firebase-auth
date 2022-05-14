const initialState = {
    isLoginUser: false,
    user: null
}

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGOUT": {
            return {
                ...state,
                isLoginUser: false,
                user: null
            }
        }

        case "LOGIN": {
            return {
                ...state,
                isLoginUser: true,
                user: action.payload
            }
        }
      

        default:
            return state;
    }
}
