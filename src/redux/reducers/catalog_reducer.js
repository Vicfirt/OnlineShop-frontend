import {
    FETCH_PRODUCTS,
    FETCH_PRODUCT,
    FETCH_CATEGORIES, ADD_CATEGORY_FAILURE,
    FETCH_BRANDS,
    DELETE_PRODUCT_FAILURE,
    RESET_DELETION_FAILURE
} from "../../utils/constants/action_types";

const initialState = {
    products: [],
    product: [],
    brands: [],
    categories: [],
    errors: {},
    deletionError: {}

};

const reducer = (state = initialState, action) => {

    const {type, payload} = action;

    switch (type) {
        case FETCH_PRODUCTS:
            return {...state, products: payload, product: [], deletionError: {}};

        case FETCH_PRODUCT:
            return {...state, product: payload};

        case FETCH_CATEGORIES:
            return {...state, categories: payload, errors: {}, deletionError: {}}

        case ADD_CATEGORY_FAILURE:
            return {...state, errors: payload}

        case FETCH_BRANDS:
            return {...state, brands: payload}

        case DELETE_PRODUCT_FAILURE:
            return {...state, deletionError: payload}

        case RESET_DELETION_FAILURE:
            return {...state, deletionError: {}}

        default:
            return state;
    }
};

export default reducer;