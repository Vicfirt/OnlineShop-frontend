import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FORM_RESET,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGOUT
}
    from "../utils/constants/action_types";
import {BACKEND_BASE_URL} from "../utils/constants/backend_base_url";

export const login = (data) => async (dispatch) => {
    try {
        const response = await axios.post(BACKEND_BASE_URL + "/authentication/login", data);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userRole", response.data.role);
        localStorage.setItem("isLoggedIn", true);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })
        window.location.reload();
    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.response.data
        })
    }
};

export const formReset = () => async (dispatch) => {
    dispatch({
        type: FORM_RESET
    })
}

export const registration = (data) => async (dispatch) => {
    try {
        const response = await axios.post(BACKEND_BASE_URL + "/signup", data);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        })
    } catch (error) {

        dispatch({
            type: REGISTER_FAILURE,
            payload: error.response.data
        })
    }
};

export const logout = () => async (dispatch) => {
    localStorage.clear();
    dispatch({
        type: LOGOUT
    })
};