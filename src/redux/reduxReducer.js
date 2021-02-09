import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import authReducer from './reducers/auth_reducer';
import catalogReducer from '../redux/reducers/catalog_reducer';
import cartReducer from '../redux/reducers/cart_reducer';
import orderReducer from '../redux/reducers/order_reducer';
import profileReducer from '../redux/reducers/profile_reducer';

let reducers = combineReducers({
    auth: authReducer,
    catalog: catalogReducer,
    cart: cartReducer,
    order: orderReducer,
    profile: profileReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;