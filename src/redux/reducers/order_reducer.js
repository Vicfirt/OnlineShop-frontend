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
            console.log("fetch cust ordd")
            return {...state, orders: payload, order: []};

        case ORDER_FETCHED_SUCCESS:
            console.log("fetch success")
            return {...state, errors: {}, loading: false, justAddedOrder: []};

        case ORDER_ADD_SUCCESS:
            console.log("success")
            return {...state, loading: false, justAddedOrder: payload};

        case ORDER_ADD_FAILURE:
            console.log("failure")
            return {...state, errors: payload, loading: false};

        case ORDERING_PROCESS:
            console.log("ordering....")
            return {...state, loading: true}

        case FETCH_CUSTOMER_ORDER:
            return {...state, order: payload}

        default:
            return state;
    }
}

export default reducer;