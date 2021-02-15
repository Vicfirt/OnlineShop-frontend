import axios from 'axios';

import {
    FETCH_CUSTOMER_ORDERS,
    ORDER_ADD_FAILURE,
    ORDER_ADD_SUCCESS,
    ORDER_FETCHED_SUCCESS,
    ORDERING_PROCESS,
    FETCH_CUSTOMER_ORDER,
    FETCH_ALL_ORDERS

} from '../utils/constants/action_types';

import {BACKEND_BASE_URL} from '../utils/constants/backend_base_url'

export const addOrder = (order) => async (dispatch) => {
    try {
        const response = await axios.post(BACKEND_BASE_URL + "/order", order);
        localStorage.removeItem("products");
        console.log("successs")
        dispatch({
            type: ORDER_ADD_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: ORDER_ADD_FAILURE,
            payload: error.response.data
        });
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
        url: BACKEND_BASE_URL + "/orders",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
    dispatch({
        type: FETCH_CUSTOMER_ORDERS,
        payload: response.data
    })
}

export const fetchOrderById = (orderId) => async (dispatch) => {
    const response = await axios({
        method: "GET",
        url: BACKEND_BASE_URL + "/order/" + orderId,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
    dispatch({
        type: FETCH_CUSTOMER_ORDER,
        payload: response.data
    })
}

export const fetchAllOrders = () => async (dispatch) => {
    const response = await axios({
        method: "GET",
        url: BACKEND_BASE_URL + "/orders/all",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
    dispatch({
        type: FETCH_CUSTOMER_ORDERS,
        payload: response.data
    })
}

export const updateOrder = (data, id) => async (dispatch) => {
    const response = await axios({
        method: "PATCH",
        url: BACKEND_BASE_URL + "/order/" + id,
        data: data,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
    dispatch({
        type: FETCH_CUSTOMER_ORDERS,
        payload: response.data
    })
}




