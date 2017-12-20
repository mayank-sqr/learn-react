import {
	MENUS_REQUEST_START,
	MENUS_REQUEST_SUCCESS,
	MENUS_REQUEST_FAILURE,
} from '../actions/actionTypes'

let initailState = {
	menus: [],
	isLoading: false
}

function applyFetchMenus(state = initailState, action) {

	switch(action.type) {
		case MENUS_REQUEST_START:
			return Object.assign({}, state, {
				isLoading: true
			})
		case MENUS_REQUEST_FAILURE:
			return Object.assign({}, state, {
				menus: [],
				isLoading: false
			})
		case MENUS_REQUEST_SUCCESS:
			return Object.assign({}, state, {
				menus: action.response[0].showcasemenus,
				isLoading: false
			})
		default:
			return state;
	}
}

export default applyFetchMenus;