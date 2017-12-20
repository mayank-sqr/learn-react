import {
	MENUS_REQUEST_START,
	MENUS_REQUEST_SUCCESS
} from './actionTypes'

export function doFetchMenus(atts){
	return {
		type: MENUS_REQUEST_START,
		atts
	};
}

export function doFetchMenusFulfilled(payload){
	return {
		type: MENUS_REQUEST_SUCCESS,
		response: payload.response 
	};
}