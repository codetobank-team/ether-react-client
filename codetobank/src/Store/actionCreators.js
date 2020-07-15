import * as types from './actionTypes';
import axios from 'axios';
import{history} from '../App';
import { axiosWithAuth } from '../axiosWithAuth';

export const apiURL = 'http://oneblock.ddns.net/api/auth';

export const register = userData => dispatch => {
    dispatch({ type: types.REGISTER_START })
    return axios.post(`${apiURL}/register`, userData)
        .then(res => {
            localStorage.setItem('token', res.data.key)
            dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.key })
            history.push("/app/dashboard")   
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: types.REGISTER_FAILURE });
        });
}


export const login = userData => dispatch => {
    dispatch({ type: types.LOGIN_START })
    return axios.post(`${apiURL}/login`, userData)
        .then(res => {
            // console.log(res);
            localStorage.setItem('token', res.data.key);
            dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.key });
            history.push("/app/dashboard") 
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: types.LOGIN_FAILURE });
        });
}

export const logout = () => {
    return { type: types.LOGOUT }
}