import * as ajax from '../../utils/ajax';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';
import queryString from 'query-string'
import { RETAILER_ID, LOGIN, OPT_API } from '../../constants'

import {
	GET_SHOWCASE_ENTITLED_BRANDS_START,
	GET_SHOWCASE_ENTITLED_BRANDS_FAILURE
}  from '../actions/actionTypes';

import {
	doFetchEntitledBrandsFulfilled
} from '../actions/doFetchEntitledBrands';


export default function epicFetchBrands(action$, store) {

	let q = {
    login: LOGIN,
    company_id: RETAILER_ID
  }

	q = queryString.stringify(q)
  let baseURL = `${OPT_API}/optportal/services/getAllowedIdsByCompanyId.json`;
	return action$.ofType(GET_SHOWCASE_ENTITLED_BRANDS_START)
		.mergeMap(action =>
			ajax.get(`${baseURL}?${q}`)
		  .map(response => doFetchEntitledBrandsFulfilled(response))
		  .catch(error => Observable.of({
	    	type: GET_SHOWCASE_ENTITLED_BRANDS_FAILURE,
	    	payload: error.xhr.response,
	    	error: true
	    }))
		);
}
