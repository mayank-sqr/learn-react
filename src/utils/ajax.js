import { ajax } from 'rxjs/observable/dom/ajax';
import * as constants from '../constants'

// RxJs How to set default request headers?
// Reference - https://stackoverflow.com/questions/45778994/rxjs-how-to-set-default-request-headers/45788557#45788557

const defaultHeaders = {
  Authorization: 'b144b3c4f0028ee47a93d9ebc28695092c0f38c111cdca801682f71f5dfddbf8f8602e03032022cd2c50791bc39d7310'
};

export const get = (url, headers) => {
  headers = Object.assign({}, defaultHeaders, headers)
  let URL = url
  if (!URL.startsWith('http')) {
    URL = constants.SHOWCASE_API + url;
  }
  return ajax.get(URL, headers);
}


export const post = (url, body, headers) => {
  headers = Object.assign({}, defaultHeaders, headers)
  let URL = url
  if (!url.startsWith('http')) {
    URL = constants.SHOWCASE_API + url;
  }
  return ajax.post(URL, body, headers);
}
