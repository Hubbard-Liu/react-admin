/*
 * @Author: Do not edit
 * @Date: 2022-10-13 23:31:54
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-16 18:27:57
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
