/*
 * @Author: Do not edit
 * @Date: 2022-10-13 23:02:51
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-11-06 21:24:00
 * @FilePath: /react-admin/src/utils/request/index.js
 */
import Axios from './axios';
import { BASE_URL, TIME_OUT } from './config';
import storage from '@/utils/storage';

const http = new Axios({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // withCredentials: true,// 是否跨域携带cookie
  interceptors: {
    requestInterceptors: (res) => {
      const token = storage.get('token'); // historyBack
      // token配置
      if (token) {
        res.headers.Authorization = `Bearer ${token}`;
      }
      return res;
    },
    requestInterceptorsCatch: (err) => err,
    responseInterceptors: (res) => {
      // console.log('实列相应拦截器');
      return res;
    },
    responseInterceptorsCatch: (err) => err
  }
});

export default http;
