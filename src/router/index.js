/*
 * @Author: Do not edit
 * @Date: 2022-10-10 14:16:25
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-20 23:04:15
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

const routers = [
  {
    index: true,
    path: 'main',
    name: '主页',
    element: lazyLoad('main/Main')
    // path: '/',
    // name: '主页',
    // element: lazyLoad('Wrapper/Wrapper'),
    // children: [
    //   {
    //     index: true,
    //     path: 'main',
    //     name: '主页',
    //     element: lazyLoad('main/Main')
    //   }
    //   // {
    //   //   index: true,
    //   //   path: 'dashboard',
    //   //   name: '数据大屏',
    //   //   element: lazyLoad('dashboard/Dashboard')
    //   // }
    // ]
  },
  {
    index: true,
    path: 'dashboard',
    name: '数据大屏',
    element: lazyLoad('dashboard/Dashboard')
  }
  // {
  //   path: '/dashboard',
  //   name: '数据大屏',
  //   element: lazyLoad('Wrapper/Wrapper'),
  //   children: [
  //     {
  //       index: true,
  //       path: 'dashboard',
  //       name: '数据大屏',
  //       element: lazyLoad('dashboard/Dashboard')
  //     }
  //   ]
  // }
];

// 根路由表
const rootRouters = [
  {
    path: '/login',
    name: '登录',
    icon: '',
    hidden: true,
    element: lazyLoad('login/Login')
  },
  {
    path: '/',
    name: '主页',
    element: lazyLoad('Wrapper/Wrapper'),
    children: routers
  },
  // 404
  {
    path: '/error',
    name: '错误',
    hidden: true,
    element: lazyLoad('error/Error')
  },
  {
    path: '*',
    name: 'No Match',
    hidden: true,
    element: <Navigate to='/error' />
  }
];

export { routers, rootRouters };
