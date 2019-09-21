import { Middleware } from "redux"
import axios from 'axios';
import { apiConfig } from '../config/apiConfig';

export const host = apiConfig.host;

export enum ApiMethod {
    POST = 'POST',
    GET = 'GET'
}

export interface ApiCallDataInterface {
    types: string[],
    url: string,
    method: ApiMethod,
    data: any,
    headers: any,
}

export const API_CALL = 'API_CALL';

const setHeaders = (apiCallData: ApiCallDataInterface) => {
    apiCallData.headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
}

export const api: Middleware = (store) => (next: any) => (action: any) => {
    const apiCall: ApiCallDataInterface = action[API_CALL];
    if (!apiCall) {
        return next(action);
    }
    setHeaders(apiCall);
    const [requestType, successType, failureType] = apiCall.types;

    next({ type: requestType });

    return axios(apiCall).then((response) => {
        next({ type: successType, data: response.data });
    }).catch((error) => {
        console.log(error);
        next({ type: failureType });
    });
}