import {
    CART_LOADING,
    FETCH_CART,
    CALCULATE_CART_PRICE,
    CLEAR_CART
} from "../../utils/constants/action_types";

const initialState = {
    products: [],
    isLoading: false,
    totalPrice: 0

};

const reducer = (state = initialState, action) =>{
    const{type, payload} = action;

    switch (type){
        case CART_LOADING:
            return {...state, isLoading: true};

        case CALCULATE_CART_PRICE:
            return {...state, totalPrice: payload, isLoading: false};
            
        case FETCH_CART:
            return {...state, products: payload, isLoading: false}

        case CLEAR_CART:
            return {...state, products: []};

        default:
            return state;
    }
}

export default reducer;