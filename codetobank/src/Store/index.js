import { combineReducers } from "redux";
import authReducer from './Reducers/authReducer';
import transactionReducer from './Reducers/transactionReducer';


const appReducer = combineReducers({
    authReducer,
    transactionReducer
})

export default appReducer