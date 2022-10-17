/*
 * @Author: Do not edit
 * @Date: 2022-10-10 14:16:25
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-17 16:38:34
 * @FilePath: \react-admin\src\router\index.js
 */
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// 懒加载
const lazyLoad = (componentName) => {
  // 占位符 [index] 和 [request] 分别支持递增的数字或实际的解析文件名
  const Module = lazy(() => import(/* webpackChunkName: "[request]" */ `@/views/${componentName}`));
  return <Module />;
};
// const Login = lazy(() => import(/* webpackChunkName: "login" */ '@/views/login/Login'));
// const Home = lazy(() => import(/* webpackChunkName: "home" */ '@/views/home/Home'));

// 路由表
const routers = [
  {
    path: '/login',
    element: lazyLoad('login/Login')
  },
  {
    path: '/main',
    element: lazyLoad('main/Main')
    // children: [],
  },
  // 重定向
  {
    path: '/',
    element: <Navigate to='/main' />
  },
  // 404
  {
    path: '/error',
    element: lazyLoad('error/Error')
  },
  {
    path: '*',
    element: <Navigate to='/error' />
  }
];

export default routers;
