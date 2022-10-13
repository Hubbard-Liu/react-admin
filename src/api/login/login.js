/*
 * @Author: Do not edit
 * @Date: 2022-10-13 23:31:54
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-13 23:33:53
 * @FilePath: /react-admin/src/api/login/login.js
 */
import http from '@/utils/request';

export function API_Login(data) {
  return http.request({
    url: '/user/login',
    method: 'POST',
    data
  });
}
