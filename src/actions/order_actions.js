import axios from 'axios';

import{
    FETCH_CUSTOMER_ORDERS,
    ORDER_ADD_FAILURE,
    ORDER_ADD_SUCCESS,
    ORDER_FETCHED_SUCCESS,
    ORDERING_PROCESS

} from '../utils/constants/action_types';

import {BACKEND_BASE_URL} from '../utils/constants/backend_base_url'

export const addOrder = (order) => async (dispatch) => {
    try {

        dispatch({
            type: ORDERING_PROCESS
        })
        const response = await axios.post(BACKEND_BASE_URL + "/order", order);
        localStorage.removeItem("products");
        dispatch({
            type: ORDER_ADD_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: ORDER_ADD_FAILURE,
            payload: error.response.data
        })
    }
}

export const fetchOrder = () => async (dispatch) => {
    dispatch({
        type: ORDER_FETCHED_SUCCESS
    })
}

export const fetchCustomerOrders = () => async (dispatch) => {
    const response = await axios({
        method: "GET",
        url: BACKEND_BASE_URL + "orders",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        }
    })
    dispatch({
        type:FETCH_CUSTOMER_ORDERS,
        payload: response.data
    })
}


