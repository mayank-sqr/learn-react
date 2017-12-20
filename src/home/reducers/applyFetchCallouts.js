import {
	CALLOUTS_REQUEST_START,
	CALLOUTS_REQUEST_SUCCESS,
	CALLOUTS_REQUEST_FAILURE
} from '../actions/actionTypes'

let initialState = {
	callouts: [],
	isLoading: false
}

function applyFetchCallouts(state = initialState, action) {
	switch(action.type) {
		case CALLOUTS_REQUEST_START:
			return Object.assign({}, state, {
				isLoading: true
			})

		case CALLOUTS_REQUEST_FAILURE:
			return Object.assign({}, state, {
				isLoading: false
			})
			console.log('@action form reducers =>', action)
		case CALLOUTS_REQUEST_SUCCESS:
			return Object.assign({}, state, {
				callouts: action.response[0].callouts,
				isLoading: false
			})

		default:
			return state
	}

}

export default applyFetchCallouts
