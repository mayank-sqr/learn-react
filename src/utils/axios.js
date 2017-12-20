import axios from 'axios';
import * as constants from '../constants'
import NProgress from 'nprogress'
import { toastr } from 'react-redux-toastr';

let AUTH_TOKEN = 'b144b3c4f0028ee47a93d9ebc28695092c0f38c111cdca801682f71f5dfddbf8f8602e03032022cd2c50791bc39d7310'

// Set config defaults when creating the instance
export const showcase_axios_instance = axios.create({
  baseURL: constants.SHOWCASE_API
});

// Alter defaults after instance has been created
showcase_axios_instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;


// Set config defaults when creating the instance
export const opt_axios_instance = axios.create({
  baseURL: constants.OPT_API,
  headers: {'Content-Type': 'application/json'}
});

/************************************************
* interceptors
************************************************/

// Add a request interceptor
opt_axios_instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  NProgress.start();
  return config;
}, function (error) {
  // Do something with request error
  NProgress.done();
  return Promise.reject(error);
});

// Add a response interceptor
opt_axios_instance.interceptors.response.use(function (response) {
  // Do something with response data
  NProgress.done();
  return response;
}, function (error) {
  // Do something with response error
  NProgress.done();
  let message = error.message
  let errors = error.response.data.errors
  if (errors) {
  	message = errors.join()
  }
  toastr.error(
    'ERROR',
    message
  )
  return Promise.reject(error);
});

