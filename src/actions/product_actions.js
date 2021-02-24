import axios from "axios";

import {
    ADD_PRODUCT_FORM_RESET,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE
} from '../utils/constants/action_types'
import {BACKEND_BASE_URL} from '../utils/constants/backend_base_url'

export const addProduct = (data) => async (dispatch) => {

    try {
        const response = await axios({
            method: "POST",
            url: BACKEND_BASE_URL + "/product/new",
            data: data,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        });

        dispatch({
            type: ADD_PRODUCT_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: ADD_PRODUCT_FAILURE,
            payload: error.response.data
        })
    }
}

export const formReset = () => async (dispatch) => {
    dispatch({
        type: ADD_PRODUCT_FORM_RESET
    })
};

export const updateProduct = (data) => async (dispatch) => {
    try {
        const response = await axios({
            method: "PUT",
            url: BACKEND_BASE_URL + "/product/edition",
            data: data,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        });
        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAILURE,
            payload: error.response.data
        })
    }
};