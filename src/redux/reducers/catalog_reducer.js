import {FETCH_PRODUCTS,
        FETCH_PRODUCTS_BY_BRAND,
        FETCH_PRODUCTS_BY_CATEGORY} from "../../utils/constants/action_types";

const initialState = {
    products: [],
};

const reducer = (state = initialState, action) => {

    const {type, payload} = action;

    switch (type) {
        case FETCH_PRODUCTS:
            return {...state, products: payload};

        case FETCH_PRODUCTS_BY_BRAND:

            return {...state, products: payload};

        case FETCH_PRODUCTS_BY_CATEGORY:
            return {...state, products: payload};

        default:
            return state;
    }
};

export default reducer;