import {FETCH_CUSTOMER_INFO,
UPDATE_CUSTOMER_FAILURE,
UPDATE_CUSTOMER_SUCCESS,
    EDIT_PROFILE_FORM_RESET} from '../../utils/constants/action_types'

const initialState = {
    customer: {},
    errors: {},
    isUpdated: true
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case FETCH_CUSTOMER_INFO:
            return {...state, customer: payload}

        case UPDATE_CUSTOMER_FAILURE:
            return {...state, errors: payload}

        case UPDATE_CUSTOMER_SUCCESS:
            return {...state, isUpdated: true }

        case EDIT_PROFILE_FORM_RESET:
            return {...state, customer: {}, errors: {}, isUpdated: false}

        default:
            return state;
    }
}

export default reducer;

