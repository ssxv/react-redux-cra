import { GET_CAKES_REQUEST, GET_CAKES_SUCCESS, GET_CAKES_FAILURE } from '../actions/cakeActions';
import { ApiCallInterface } from '../store';

export const GetCakesReducer = (state = {} as ApiCallInterface, action: any) => {
    switch (action.type) {
        case GET_CAKES_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                error: null
            });
        case GET_CAKES_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.response.data,
                error: null
            });
        case GET_CAKES_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                data: null,
                error: action.error
            });
    }
    return state;
}
