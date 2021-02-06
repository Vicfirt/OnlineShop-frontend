import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    LOGOUT,
    FORM_RESET

} from "../../utils/constants/action_types";

const initialState = {
    user: {},
    isLoggedIn: false,
    isRegistered: false,
    success: "",
    error: "",
    errors: {}
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {...state, isLoggedIn: true};

        case LOGIN_FAILURE:
            return {...state, error: payload};

        case REGISTER_FAILURE:
            return {...state, errors: payload};

        case REGISTER_SUCCESS:
            return {...state, isRegistered: true};

        case FORM_RESET:
            return {...state, error: "", errors: {}, success: "", isRegistered: false};

        case LOGOUT:
            return {...state, isLoggedIn: false, user: {}};

        default:
            return state;
    }
};

export default reducer;

