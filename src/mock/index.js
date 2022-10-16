/*
 * @Author: Do not edit
 * @Date: 2022-10-16 18:17:23
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-16 19:02:42
 * @FilePath: /react-admin/src/mock/index.js
 */
import Mock from 'mockjs';
import Mock_User from './user/login';

Mock.mock(/\/user\/login/, 'post', Mock_User.login);
