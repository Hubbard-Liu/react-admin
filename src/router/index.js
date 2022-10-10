/*
 * @Author: Do not edit
 * @Date: 2022-10-10 14:16:25
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-10 22:02:28
 * @FilePath: /react-admin/src/router/index.js
 */
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// 懒加载
const Login = lazy(() => import(/* webpackChunkName: "login" */ '@/views/login/Login'));
const Home = lazy(() => import(/* webpackChunkName: "home" */ '@/views/home/Home'));

// 路由表
const routers = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
    // children: [],
  },
  // 重定向
  {
    path: '/',
    element: <Navigate to='/login' />
  }
];

export default routers;
