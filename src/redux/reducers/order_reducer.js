import {
    FETCH_CUSTOMER_ORDERS,
    ORDER_ADD_FAILURE,
    ORDER_ADD_SUCCESS,
    ORDER_FETCHED_SUCCESS,
    ORDERING_PROCESS
} from "../../utils/constants/action_types";

const initialState = {
    orders: [],
    errors: {},
    loading: false,
    justAddedOrder: []
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case FETCH_CUSTOMER_ORDERS:
            return {...state, orders: payload};

        case ORDER_FETCHED_SUCCESS:
            return {...state, errors: {}, loading: false};

        case ORDER_ADD_SUCCESS:
            return {...state, loading: false, justAddedOrder: payload};

        case ORDER_ADD_FAILURE:
            return {...state, errors: payload};

        case ORDERING_PROCESS:
            return {...state, loading: true}

        default:
            return state;
    }
}

export default reducer;