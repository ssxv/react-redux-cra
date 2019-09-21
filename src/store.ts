import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { api } from './middlewares/api';
import { NotificationReducer, NotificationStateInterface } from './reducers/notificationReducer';
import { GetCakesReducer } from './reducers/cakeReducers';

export interface ApiCallInterface {
    loading: boolean;
    data: any;
    error: any;
}

export interface StoreInterface {
    notification: NotificationStateInterface,
    getCakes: ApiCallInterface,
}

const initialState: StoreInterface = {
    notification: { success: false, message: '' },
    getCakes: { loading: false, data: null, error: null }
}

const rootReducer = combineReducers<StoreInterface>({
    notification: NotificationReducer,
    getCakes: GetCakesReducer,
});

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(api, thunk)
);

export default store;
