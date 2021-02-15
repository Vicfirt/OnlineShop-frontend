import axios from 'axios';
import {BACKEND_BASE_URL} from "../utils/constants/backend_base_url";
import {
    FETCH_CATEGORIES,
    FETCH_PRODUCT, FETCH_PRODUCTS,
    ADD_CATEGORY_FAILURE,
    FETCH_BRANDS
} from "../utils/constants/action_types";

export const fetchAvailableProducts = () => async (dispatch) => {

    const response = await axios.get(BACKEND_BASE_URL + "/product/active");
    dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data
    })
};

export const fetchProducts = () => async (dispatch) => {
    const response = await axios({
        method: "GET",
        url: BACKEND_BASE_URL + "/product/all",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
    dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data
    })
}

export const fetchProduct = (productId) => async (dispatch) => {
    const response = await axios.get(BACKEND_BASE_URL + "/product/" + productId);
    dispatch({
        type: FETCH_PRODUCT,
        payload: response.data
    })
};

export const deleteProduct = (productId) => async (dispatch) => {
    const response = await axios({
        method: "DELETE",
        url: BACKEND_BASE_URL + "/product/" + productId,
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
    dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data
    })
}

export const fetchCategories = () => async (dispatch) => {
    const response = await axios.get(BACKEND_BASE_URL + "/product/categories");
    dispatch({
        type: FETCH_CATEGORIES,
        payload: response.data
    })
}

export const addCategory = (data) => async (dispatch) => {
    try {
        const response = await axios({
            method: "POST",
            url: BACKEND_BASE_URL + "/product/category",
            data: data,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        dispatch({
            type: FETCH_CATEGORIES,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: ADD_CATEGORY_FAILURE,
            payload: error.response.data
        })
    }
}

export const fetchBrands = () => async (dispatch) => {
    const response = await axios.get(BACKEND_BASE_URL + "/product/brands");
    dispatch({
        type: FETCH_BRANDS,
        payload: response.data
    })
}

export const filterByParameters = (data) => async (dispatch) => {
    const response = await axios.post(BACKEND_BASE_URL + "/product/filter", data);
    dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data
    })
}

