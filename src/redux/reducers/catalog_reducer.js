import {
    FETCH_PRODUCTS,
    FETCH_PRODUCT,
    FETCH_CATEGORIES, ADD_CATEGORY_FAILURE,
    FETCH_BRANDS
} from "../../utils/constants/action_types";

const initialState = {
    products: [],
    product: [],
    brands: [],
    categories: [],
    errors: {}

};

const reducer = (state = initialState, action) => {

    const {type, payload} = action;

    switch (type) {
        case FETCH_PRODUCTS:
            return {...state, products: payload, product: []};

        case FETCH_PRODUCT:
            return {...state, product: payload};

        case FETCH_CATEGORIES:
            return {...state, categories: payload, errors: {}}

        case ADD_CATEGORY_FAILURE:
            return {...state, errors: payload}

        case FETCH_BRANDS:
            return {...state, brands: payload}

        default:
            return state;
    }
};

export default reducer;