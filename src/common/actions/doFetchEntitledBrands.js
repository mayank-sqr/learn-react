import {
  GET_SHOWCASE_ENTITLED_BRANDS_START,
  GET_SHOWCASE_ENTITLED_BRANDS_SUCCESS
} from './actionTypes'

export function doFetchEntitledBrands(atts) {
  return {
    type: GET_SHOWCASE_ENTITLED_BRANDS_START,
    atts
  };
}

export function doFetchEntitledBrandsFulfilled(payload) {
  return {
    type: GET_SHOWCASE_ENTITLED_BRANDS_SUCCESS,
    response: payload.response
  };
}