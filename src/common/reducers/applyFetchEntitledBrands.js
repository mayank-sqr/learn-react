import {
	GET_SHOWCASE_ENTITLED_BRANDS_START,
  GET_SHOWCASE_ENTITLED_BRANDS_SUCCESS,
  GET_SHOWCASE_ENTITLED_BRANDS_FAILURE
} from '../actions/actionTypes'

let initialState = {
  brandIds: [],
  isLoading: true
}

function applyFetchBrands(state = initialState, action) {
  switch (action.type) {
    case GET_SHOWCASE_ENTITLED_BRANDS_START:

      return Object.assign({}, state, {
        brandIds: [],
        isLoading: true
      })
    case GET_SHOWCASE_ENTITLED_BRANDS_FAILURE:

      return Object.assign({}, state, {
        brandIds: [],
        isLoading: false
      })
    case GET_SHOWCASE_ENTITLED_BRANDS_SUCCESS:

      return Object.assign({}, state, {
        brandIds: action.response.hashMap.allowdIds,
        isLoading: false
      })
    default:
      return state;
  }

}

export default applyFetchBrands;