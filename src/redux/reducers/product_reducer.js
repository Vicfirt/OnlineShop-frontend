import {ADD_PRODUCT_FORM_RESET,
        ADD_PRODUCT_SUCCESS,
        ADD_PRODUCT_FAILURE,
        UPDATE_PRODUCT_SUCCESS,
        UPDATE_PRODUCT_FAILURE} from '../../utils/constants/action_types'

const initialState = {
    success: false,
    errors: {}
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case ADD_PRODUCT_SUCCESS:
            return {...state, success:true, errors: {}};

        case ADD_PRODUCT_FAILURE:
            return {...state, success: false, errors: payload}

        case ADD_PRODUCT_FORM_RESET:
            return {...state, errors: {}, success: false};

        case UPDATE_PRODUCT_SUCCESS:
            return {...state, success:true, errors: {}, message: payload};

        case UPDATE_PRODUCT_FAILURE:
            return {...state, success: false, errors: payload}

        default:
            return state;
    }
};

export default reducer;