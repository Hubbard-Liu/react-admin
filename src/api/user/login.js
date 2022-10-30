/*
 * @Author: Do not edit
 * @Date: 2022-10-13 23:31:54
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-27 22:02:25
 * @FilePath: /react-admin/src/api/user/login.js
 */
import http from '@/utils/request';

export function API_Login(data) {
  return http.request({
    url: '/user/login',
    method: 'POST',
    data
  });
}

export function API_getMenu() {
  return http.request({
    url: '/user/getMenu',
    method: 'POST'
  });
}
