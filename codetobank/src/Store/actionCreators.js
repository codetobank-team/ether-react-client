import * as types from './actionTypes';
import axios from 'axios';
import { history } from '../App';
import { axiosWithAuth } from '../axiosWithAuth';
 

// import {axiosWithAuth}  from '../axiosWithAuth';

export const apiURL = 'http://oneblockdev.ddns.net/api';

export const register = userData => dispatch => {
    dispatch({ type: types.REGISTER_START })
    return axios.post(`${apiURL}/auth/register`, userData)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data));
            dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
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
            localStorage.setItem('user', JSON.stringify(res.data));
            dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
            history.push("/app/dashboard")
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: types.LOGIN_FAILURE });
        });
}

export function postTransactions(request, successCallback) {
    return function (dispatch) {
        axiosWithAuth().post(`${apiURL}/transactions/send`, request)
            .then(res => {
                alert('Successful transaction')
                successCallback();
                dispatch(getTransactions());
                dispatch(getWalletDetails());
                dispatch({
                    type: types.TRANSACTION_SUCCESS,
                    payload: res.data
                })
            }
            )
            .catch(error => {
                // console.log(error.response)
                if (error.response && (error.response.status === 401 || error.response.status === 500)) {
                    localStorage.removeItem('user')
                    localStorage.removeItem('token')
                    history.push("/")
                }
                dispatch({
                    type: types.TRANSACTION_FAILURE,
                    payload: error
                })
            }
            );
    };
}


export function getTransactions() {
    let userData = JSON.parse(localStorage.getItem('user'))
    return function (dispatch) {
        axiosWithAuth().get(`${apiURL}/transactions`)
            .then(res => {
                console.log(res)
                dispatch({
                    type: types.GET_TRANSACTION_SUCCESS,
                    payload: res.data.data || []
                })
            } 
            )
            .catch(error => {
                if (error.response && (error.response.status === 401 || error.response.status === 500)) {
                    localStorage.removeItem('user')
                    localStorage.removeItem('token')
                    history.push("/login")
                }
                console.log(error.response)
                dispatch({
                    type: types.GET_TRANSACTION_FAILURE,
                    payload: error
                })
            }
            );
    };
}

export function getWalletDetails() {
    // let userData = JSON.parse(localStorage.getItem('user'))
    return function (dispatch) {
        axiosWithAuth().get(`${apiURL}/user/wallet/`)
            .then(res => {
                console.log(res)
                dispatch({
                    type: types.GET_WALLET_DETAILS_SUCCESS,
                    payload: res.data.data
                })
            }
            )
            .catch(error => {
                if (error.response && (error.response.status === 401 || error.response.status === 500)) {
                    localStorage.removeItem('user')
                    localStorage.removeItem('token')
                    history.push("/login")
                }
                console.log(error.response)
                dispatch({
                    type: types.GET_WALLET_DETAILS_FAILURE,
                    payload: error
                })
            }
            );
    };
}


export const logout = () => {
    return { type: types.LOGOUT }
}