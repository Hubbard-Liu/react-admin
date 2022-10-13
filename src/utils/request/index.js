/*
 * @Author: Do not edit
 * @Date: 2022-10-13 23:02:51
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-13 23:37:39
 * @FilePath: /react-admin/src/utils/request/index.js
 */
import Axios from './axios';

const http = new Axios({
  baseURL: 'https://mock.apifox.cn/m1/1752195-0-default',
  timeout: 30000,
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
