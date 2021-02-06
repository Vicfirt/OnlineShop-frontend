import axios from 'axios';


import {
    CART_LOADING,
    FETCH_CART,
    CALCULATE_CART_PRICE,
    CLEAR_CART,
    STOP_CART_LOADING
} from "../utils/constants/action_types";
import {BACKEND_BASE_URL} from '../utils/constants/backend_base_url'

export const fetchCart = (data) => async (dispatch) => {
    dispatch({
        type: CART_LOADING
    })
    const response = await axios.post(BACKEND_BASE_URL + "/cart", data);

    const products = new Map(JSON.parse(localStorage.getItem("products")));
    let total = 0;
    products.forEach((value, key) => {
        const product = response.data.find(product => product.productId === key);
        total = total + (product.productPrice * value)
    })
    dispatch({
        type: FETCH_CART,
        payload: response.data
    })
    dispatch({
        type: CALCULATE_CART_PRICE,
        payload: total
    })
}

export const stopCartLoading = () => (dispatch) => {
    dispatch({
        type: STOP_CART_LOADING
    })
}

export const clearCart = () => (dispatch) => {
    dispatch({
        type: CLEAR_CART
    })
};

export const calculateCartPrice = (products) => (dispatch) => {
    const productsFromStorage = new Map(JSON.parse(localStorage.getItem("products")));
    let total = 0;
    productsFromStorage.forEach((value, key) => {
        const product = products.find(product => product.productId === key);
        total += product.productPrice * value;
    });
    dispatch({
        type: CALCULATE_CART_PRICE,
        payload: total
    })
};




