import * as types from '../actionTypes';

const initialState = {
    walletDetails:{},
    transactions:[]
}

function transactionReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_WALLET_DETAILS_SUCCESS:
            return{
                ...state,
                walletDetails:{...action.payload}
            }
            case types.GET_TRANSACTION_SUCCESS:
                return{
                    ...state,
                    transactions:[...action.payload]
                }
        default:
            return state;
    }
}

export default transactionReducer;