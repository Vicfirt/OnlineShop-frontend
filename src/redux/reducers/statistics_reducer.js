import {GET_STAT_BY_CATEGORY} from "../../utils/constants/action_types";

const initialState = {

    salesByCategories: []
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_STAT_BY_CATEGORY:
            return {...state, salesByCategories: payload}

        default:
            return state;
    }
}

export default reducer;