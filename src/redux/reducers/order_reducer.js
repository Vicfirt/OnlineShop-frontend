import {
    FETCH_CUSTOMER_ORDERS,
    ORDER_ADD_FAILURE,
    ORDER_ADD_SUCCESS,
    ORDER_FETCHED_SUCCESS

} from "../../utils/constants/action_types";

const initialState = {
    orders: [],
    errors: {}
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case FETCH_CUSTOMER_ORDERS:
            return {...state, orders: payload};

        case ORDER_FETCHED_SUCCESS:
            return {...state, errors: {}};

        case ORDER_ADD_SUCCESS:
            return {...state};

        case ORDER_ADD_FAILURE:
            return {...state, errors: payload};

        default:
            return state;
    }
}

export default reducer;