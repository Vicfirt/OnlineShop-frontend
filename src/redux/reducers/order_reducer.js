import {
    FETCH_CUSTOMER_ORDERS,
    ORDER_ADD_FAILURE,
    ORDER_ADD_SUCCESS,
    ORDER_FETCHED_SUCCESS,
    ORDERING_PROCESS,
    FETCH_CUSTOMER_ORDER
} from "../../utils/constants/action_types";

const initialState = {
    orders: [],
    errors: {},
    loading: false,
    justAddedOrder: [],
    order: []
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {

        case FETCH_CUSTOMER_ORDERS:
            return {...state, orders: payload, order: []};

        case ORDER_FETCHED_SUCCESS:
            return {...state, errors: {}, loading: false, justAddedOrder: []};

        case ORDER_ADD_SUCCESS:
            return {...state, loading: false, justAddedOrder: payload};

        case ORDER_ADD_FAILURE:
            return {...state, errors: payload, loading: false};

        case ORDERING_PROCESS:
            return {...state, loading: true}

        case FETCH_CUSTOMER_ORDER:
            return {...state, order: payload}

        default:
            return state;
    }
}

export default reducer;