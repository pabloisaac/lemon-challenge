import axios from 'axios';
import * as StatusConstants from '../constants/status'
import * as MessageConstants from '../constants/messages'

const urlBase = 'https://api.covid19api.com'

export const getCountries = async () => {
    try {
        const options = {
            method: 'GET',
            headers: { 'content-type': 'application/json'},
            url: `${urlBase}/countries`
        };
        let response = await axios(options)
        return {status: StatusConstants.STATUS_OK , data: response.data}
      } catch (error) {
        if (error.response) {
            return response_message(error.response.status)
        } else if (error.request) {
            return response_message(error.request.status)
        } else {
            console.log(error);
        }
      }
}

export const getConfirmedCases = async (slug) => {
    try {
        const options = {
            method: 'GET',
            headers: { 'content-type': 'application/json'},
            url: `${urlBase}/total/dayone/country/${slug}/status/confirmed`
        };
        let response = await axios(options)
        return {status: StatusConstants.STATUS_OK , data: response.data}
      } catch (error) {
        if (error.response) {
            return response_message(error.response.status)
        } else if (error.request) {
            return response_message(error.request.status)
        } else {
            console.log(error);
        }
      }
}

const response_message = status => {
    if (status != null || status != undefined) {
        switch(status){
            case 500: return {status: StatusConstants.STATUS_INTERNAL_SERVER_ERROR , message: MessageConstants.ERROR_STATUS_INTERNAL_SERVER_ERROR}
            case 401: return {status: StatusConstants.STATUS_UNAUTHORIZED , message: MessageConstants.ERROR_STATUS_UNAUTHORIZED}
            case 404: return {status: StatusConstants.STATUS_BAD_REQUEST , message: MessageConstants.ERROR_STATUS_BAD_REQUEST}
            case 400: return {status: StatusConstants.STATUS_NOT_FOUND , message: MessageConstants.ERROR_STATUS_NOT_FOUND}
            default: return {status: StatusConstants.STATUS_INTERNAL_SERVER_ERROR , message: MessageConstants.ERROR_STATUS_INTERNAL_SERVER_ERROR}
        }
    } else {
        return {status: StatusConstants.STATUS_INTERNAL_SERVER_ERROR , message: MessageConstants.ERROR_STATUS_INTERNAL_SERVER_ERROR}
    }
}