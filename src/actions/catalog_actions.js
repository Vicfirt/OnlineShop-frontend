import axios from 'axios';
import {BACKEND_BASE_URL} from "../utils/constants/backend_base_url";
import {FETCH_PRODUCTS,
        FETCH_PRODUCTS_BY_BRAND,
        FETCH_PRODUCTS_BY_CATEGORY,
        FETCH_PRODUCTS_BY_NAME} from "../utils/constants/action_types";

export const fetchProducts = () => async (dispatch) => {

    const response = await axios.get(BACKEND_BASE_URL + "/catalog");
    dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data
    })
};

export const fetchProductsByBrand = (brandName) => async (dispatch) => {
    const response = await axios.get(BACKEND_BASE_URL + "/catalog/brand/" + brandName)
    dispatch({
        type: FETCH_PRODUCTS_BY_BRAND,
        payload: response.data
    })
}

export const fetchProductsByCategory = (categoryId) => async (dispatch) => {
    const response = await axios.get(BACKEND_BASE_URL + "/catalog/category/" + categoryId)
    dispatch({
        type: FETCH_PRODUCTS_BY_CATEGORY,
        payload: response.data
    })
}

export const fetchProductsByName = (productName) => async (dispatch) => {
    const response = await axios.get(BACKEND_BASE_URL + "/catalog/name/" + productName);
    dispatch({
        type: FETCH_PRODUCTS_BY_NAME,
        payload: response.data
    })
}