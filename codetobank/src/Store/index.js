import { combineReducers } from "redux";
import authReducer from './Reducers/authReducer';


const appReducer = combineReducers({
    authReducer,
})

export default appReducer