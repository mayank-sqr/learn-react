import * as ajax from '../../utils/ajax';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';
import queryString from 'query-string'
import { RETAILER_ID, SHOWCASE } from '../../constants'


import {
	MENUS_REQUEST_START,
	MENUS_REQUEST_FAILURE
}  from '../actions/actionTypes';

import {
	doFetchMenusFulfilled
} from '../actions/doFetchMenus';


export default function epicFetchMenus(action$, store) {

	let q = {
		retailerId: RETAILER_ID,
		showcase: SHOWCASE,
	}
	q = queryString.stringify(q)

	return action$.ofType(MENUS_REQUEST_START)
		.mergeMap(action =>
			ajax.get(`/menuLists?${q}`)
		  .map(response => doFetchMenusFulfilled(response))
		  .catch(error => Observable.of({
	    	type: MENUS_REQUEST_FAILURE,
	    	payload: error.xhr.response,
	    	error: true
	    }))
		);
}