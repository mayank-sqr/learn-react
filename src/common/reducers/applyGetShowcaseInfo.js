import {
	GET_SHOWCASE_INFO_START,
  GET_SHOWCASE_INFO_FAILURE,
  GET_SHOWCASE_INFO_SUCCESS
} from '../actions/actionTypes'

let initialState = {}

function applyGetShowcaseInfo(state = initialState, action) {


  switch (action.type) {
    case GET_SHOWCASE_INFO_START:
    case GET_SHOWCASE_INFO_FAILURE:
      return Object.assign({}, state)

    case GET_SHOWCASE_INFO_SUCCESS:
      return Object.assign({}, state, action.response)

    default:
      return state;
  }

}

export default applyGetShowcaseInfo;