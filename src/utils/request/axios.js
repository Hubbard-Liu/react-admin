/*
 * @Author: Do not edit
 * @Date: 2022-10-13 23:03:42
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-16 19:07:41
 * @FilePath: /react-admin/src/utils/request/axios.js
 */
import axios from 'axios';
import useLoadingSpin from '@hooks/useLoadingSpin';
import { checkStatus } from './checkStatus';

class Axios {
  static instance;
  static interceptors;
  static showLoading;
  static loading;

  constructor(config) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;// 多个拦截器存储为数组
    this.showLoading = config.showLoading ?? true;

    // 实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    );

    // 全局拦截器
    this.instance.interceptors.request.use(
      (res) => {
        console.log('全局请求拦截器');
        if (this.showLoading && !this.loading) {
          this.loading = useLoadingSpin();
        }
        // login
        return res;
      },
      (err) => err
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局相应拦截器');
        this.loading?.close();
        this.loading = null;
        const { code } = res.data;
        if (code && code !== 200) {
          checkStatus(code);
          return Promise.reject(new Error(res.msg));
        }
        return res.data;
      },
      (err) => {
        // this.loading?.close();
        return err;
      }
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      // api里的单一请求拦截
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config);
      }

      this.instance
        .request(config)
        .then((res) => {
          // api里的单一响应拦截
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: 'GET' });
  }

  post(config) {
    return this.request({ ...config, method: 'POST' });
  }
}

export default Axios;

