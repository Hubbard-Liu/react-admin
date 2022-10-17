/*
 * @Author: Do not edit
 * @Date: 2022-10-10 14:16:25
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-17 22:26:53
 * @FilePath: /react-admin/src/router/index.js
 */
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// 懒加载
const lazyLoad = (componentName) => {
  if (componentName === 'Wrapper/Wrapper') {
    const WrapperModule = lazy(() => import(/* webpackChunkName: "[request]" */ `@/layout/${componentName}`));
    return <WrapperModule />;
  }
  // 占位符 [index] 和 [request] 分别支持递增的数字或实际的解析文件名
  const Module = lazy(() => import(/* webpackChunkName: "[request]" */ `@/views/${componentName}`));
  return <Module />;
};
// const Wrapper = lazy(() => import(/* webpackChunkName: "Wrapper" */ '@/layout/Wrapper/Wrapper'));
// const Login = lazy(() => import(/* webpackChunkName: "login" */ '@/views/login/Login'));
// const Home = lazy(() => import(/* webpackChunkName: "home" */ '@/views/home/Home'));

// 路由表
const routers = [
  // 重定向
  {
    path: '/',
    element: <Navigate to='/main' />
  },
  {
    path: '/login',
    name: '登录',
    key: '/login',
    element: lazyLoad('login/Login')
  },
  {
    path: '/',
    name: '主页',
    key: '/',
    element: lazyLoad('Wrapper/Wrapper'),
    children: [
      {
        index: true,
        path: 'main',
        name: '主页',
        key: '/',
        element: lazyLoad('main/Main')
      }
    ]
  },
  // 404
  {
    path: '/error',
    name: '错误',
    key: '/error',
    element: lazyLoad('error/Error')
  },
  {
    path: '*',
    name: 'No Match',
    key: '*',
    element: <Navigate to='/error' />
  }
];

export default routers;
