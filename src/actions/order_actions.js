import axios from 'axios';

import{
    FETCH_CUSTOMER_ORDERS,
    ORDER_ADD_FAILURE,
    ORDER_ADD_SUCCESS,
    ORDER_FETCHED_SUCCESS
} from '../utils/constants/action_types';

import {BACKEND_BASE_URL} from '../utils/constants/backend_base_url'

export const addOrder = (order) => async (dispatch) => {
    try {
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

