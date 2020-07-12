import * as types from '../actionTypes';

const initialState = {
    loading: false,
    token: '',
    error: false
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case (types.REGISTER_START):
            return { ...state, loading: true };
        case (types.LOGIN_START):
            return { ...state, loading: true };

        case (types.REGISTER_SUCCESS):
            return { ...state, token: action.payload, loading: false }
        case (types.LOGIN_SUCCESS):
            return { ...state, token: action.payload, loading: false };

        case (types.REGISTER_FAILURE):
            return { ...state, error: true, loading: false }
        case (types.LOGIN_FAILURE):
            return { ...state, error: true, loading: false };

        case (types.LOGOUT):
            return { ...state, token: '' }

        default:
            return state;
    }
}

export default authReducer;