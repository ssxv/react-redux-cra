import { API_CALL, ApiMethod, host } from "../middlewares/api";

export const GET_CAKES_REQUEST = 'GET_CAKES_REQUEST';
export const GET_CAKES_SUCCESS = 'GET_CAKES_SUCCESS';
export const GET_CAKES_FAILURE = 'GET_CAKES_FAILURE';

export interface CakeActionsInterface {
    getCakesAction?: Function;
}

export const getCakesAction = (): Function => {
    return (dispatch: any) => {
        return dispatch({
            [API_CALL]: {
                types: [
                    GET_CAKES_REQUEST, GET_CAKES_SUCCESS, GET_CAKES_FAILURE
                ],
                url: host + '/cake',
                method: ApiMethod.GET,
                data: null
            }
        });
    }
}
