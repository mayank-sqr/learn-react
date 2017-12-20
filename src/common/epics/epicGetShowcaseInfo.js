import * as ajax from '../../utils/ajax';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';
import { SHOWCASE } from '../../constants'

import {
	GET_SHOWCASE_INFO_START,
  GET_SHOWCASE_INFO_FAILURE
}  from '../actions/actionTypes';

import {
	doGetShowcaseInfoFulfilled
} from '../actions/doGetShowcaseInfo';


export default function epicGetShowcaseInfo(action$, store) {

	return action$.ofType(GET_SHOWCASE_INFO_START)
		.mergeMap(action =>
			ajax.get(`/showcases/${SHOWCASE}`)
		  .map(response => doGetShowcaseInfoFulfilled(response))
		  .catch(error => Observable.of({
	    	type: GET_SHOWCASE_INFO_FAILURE,
	    	payload: error.xhr.response,
	    	error: true
	    }))
		);
}
