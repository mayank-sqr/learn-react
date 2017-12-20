import * as ajax from '../../utils/ajax';
import 'rxjs/add/operator/catch';
import * as constants from '../../constants'
import { Observable } from 'rxjs/Observable';
import queryString from 'query-string';

import {
	CALLOUTS_REQUEST_START,
	CALLOUTS_REQUEST_FAILURE
}  from '../actions/actionTypes';

import {
	doFetchCalloutsFulfilled
} from '../actions/doFetchCallouts';

function epicFetchCallouts(action$, store) {
	let q = {
		retailerId: constants.RETAILER_ID,
		showcase: constants.SHOWCASE,
	}
	q = queryString.stringify(q)
	console.log('q inside epicFetchCallouts =>', q)

	return action$.ofType(CALLOUTS_REQUEST_START)
	.mergeMap(action =>
		ajax.get(`/callouts?${q}`)
		.map(response => doFetchCalloutsFulfilled(response))
		.catch(error => Observable.of({
			type: CALLOUTS_REQUEST_FAILURE,
			payload: error.xhr.response,
			error: true
		}))
		);
}

export default epicFetchCallouts;