import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    LOGOUT,
    FORM_RESET

} from "../../utils/constants/action_types";

const initialState = {
    isLoggedIn: false,
    isRegistered: false,
    success: "",
    error: "",
    errors: {}
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    console.log(payload)

    switch (type) {
        case LOGIN_SUCCESS:
            console.log("log success")
            return {...state, isLoggedIn: true};

        case LOGIN_FAILURE:
            console.log("log failure")
            return {...state, error: payload};

        case REGISTER_FAILURE:
            console.log("reg failure")
            return {...state, errors: payload};

        case REGISTER_SUCCESS:
            console.log("reg success")
            return {...state, isRegistered: true};

        case FORM_RESET:
            console.log("reset")
            return {...state, error: "", errors: {}, success: "", isRegistered: false};

        case LOGOUT:
            console.log("logout")
            return {...state, isLoggedIn: false};

        default:
            return state;
    }
};

export default reducer;

