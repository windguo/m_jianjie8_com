import axios from 'axios';
import Vue from 'vue';
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = "http://www.jianjie8.com/e/api/";
}
if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = "http://www.jianjie8.com/e/api/";
}
Vue.prototype.axios = axios;
