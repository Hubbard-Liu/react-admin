/*
 * @Author: Do not edit
 * @Date: 2022-10-13 23:02:51
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-16 21:18:49
 * @FilePath: /react-admin/src/utils/request/index.js
 */
import Axios from './axios';
import { BASE_URL, TIME_OUT } from './config';

const http = new Axios({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // withCredentials: true,// 是否跨域携带cookie
  interceptors: {
    requestInterceptors: (res) => {
      console.log('实列请求拦截器');
      // token配置
      // if (store.getters.token) {
      //   res.headers!.Authorization = `Bearer ${token}`;
      // }
      return res;
    },
    requestInterceptorsCatch: (err) => err,
    responseInterceptors: (res) => {
      console.log('实列相应拦截器');
      return res;
    },
    responseInterceptorsCatch: (err) => err
  }
});

export default http;
