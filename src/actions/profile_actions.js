import axios from 'axios';

import {
    EDIT_PROFILE_FORM_RESET,
    FETCH_CUSTOMER_INFO,
    UPDATE_CUSTOMER_FAILURE,
    UPDATE_CUSTOMER_SUCCESS
} from '../utils/constants/action_types'
import {BACKEND_BASE_URL} from '../utils/constants/backend_base_url'

export const fetchCustomerInfo = () => async (dispatch) => {

        const response = await axios({
            method: "GET",
            url: BACKEND_BASE_URL + "/customer",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })

        dispatch({
            type: FETCH_CUSTOMER_INFO,
            payload: response.data
        })
}

export const updateCustomer = (data) => async (dispatch) => {

    try {
       const response = await axios({
            method: "PUT",
            url: BACKEND_BASE_URL + "/customer",
            data: data,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        dispatch({
            type: UPDATE_CUSTOMER_SUCCESS
        })
    }catch (error){
        console.log(error)
        dispatch({
            type: UPDATE_CUSTOMER_FAILURE,
            payload: error.response.data
        })
    }
}

export const resetEditForm = () => async (dispatch) => {
    dispatch({
        type: EDIT_PROFILE_FORM_RESET
    })
}
