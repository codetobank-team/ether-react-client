import * as types from './actionTypes';
import axios from 'axios';
import { history } from '../App';
// import {axiosWithAuth}  from '../axiosWithAuth';

export const apiURL = 'http://oneblock.ddns.net/api';

export const register = userData => dispatch => {
    dispatch({ type: types.REGISTER_START })
    return axios.post(`${apiURL}/auth/register`, userData)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            dispatch({ type: types.REGISTER_SUCCESS, payload: res.data })
            history.push("/app/dashboard")
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: types.REGISTER_FAILURE });
        });
}


export const login = userData => dispatch => {
    dispatch({ type: types.LOGIN_START })
    return axios.post(`${apiURL}/auth/login`, userData)
        .then(res => {
            // console.log(res);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
            history.push("/app/dashboard")
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: types.LOGIN_FAILURE });
        });
}

export function postTransactions(request) {
    return function (dispatch) {
        axios.post(`${apiURL}/transactions/send`, request)
            .then(res =>
                dispatch({
                    type: types.TRANSACTION_SUCCESS,
                    payload: res.data
                })
            )
            .catch(error =>
                dispatch({
                    type: types.TRANSACTION_FAILURE,
                    payload: error
                })
            );
    };
}

export const logout = () => {
    return { type: types.LOGOUT }
}