import {
  GET_SHOWCASE_INFO_START,
  GET_SHOWCASE_INFO_SUCCESS
} from './actionTypes'

export function doGetShowcaseInfo(atts) {
  return {
    type: GET_SHOWCASE_INFO_START,
    atts
  };
}

export function doGetShowcaseInfoFulfilled(payload) {
  return {
    type: GET_SHOWCASE_INFO_SUCCESS,
    response: payload.response
  };
}