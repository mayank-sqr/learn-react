import {
	CALLOUTS_REQUEST_START,
	CALLOUTS_REQUEST_SUCCESS
} from './actionTypes'

/* console.log('@atts ---->', atts)
console.log('@payload ---->', payload) */

export function doFetchCallouts(atts) {
	return {
		type: CALLOUTS_REQUEST_START,
		atts
	};
}

export function doFetchCalloutsFulfilled(payload) {
	return {
		type: CALLOUTS_REQUEST_SUCCESS,
		response: payload.response
	}
}