import axios from 'axios';

import {
    GET_STAT_BY_CATEGORY
} from '../utils/constants/action_types'
import {BACKEND_BASE_URL} from '../utils/constants/backend_base_url'

export const getSalesByCategories = () => async (dispatch) => {

    const response = await axios({
        method: "GET",
        url: BACKEND_BASE_URL + "/statistics",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
    dispatch({
        type: GET_STAT_BY_CATEGORY,
        payload: response.data
    })
}