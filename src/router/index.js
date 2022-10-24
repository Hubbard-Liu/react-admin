/*
 * @Author: Do not edit
 * @Date: 2022-10-10 14:16:25
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-24 17:44:00
 * @FilePath: \react-admin\src\router\index.js
 */
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

// 路由鉴权组件
const Appraisal = ({ children }) => {
  const reduxToken = useSelector((state) => state.user.token);
  const token = localStorage.getItem('token') ?? reduxToken;
  return token ? children : <Navigate to='/login' />;
};

const routers = [
  {
    index: true,
    path: 'main',
    name: '主页',
    element: lazyLoad('main/Main')
  },
  {
    index: true,
    path: 'dashboard',
    name: '数据大屏',
    element: lazyLoad('dashboard/Dashboard')
  },
  {
    index: true,
    path: 'about/aboutEmail',
    name: 'aboutEmail',
    element: lazyLoad('about/aboutEmail/AboutEmail')
  },
  {
    index: true,
    path: 'about/aboutPhone',
    name: 'aboutPhone',
    element: lazyLoad('about/aboutPhone/AboutPhone')
  },
  {
    path: '*',
    name: 'No Match',
    hidden: true,
    element: lazyLoad('error/Error')
  }
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
    element: <Appraisal>{ lazyLoad('Wrapper/Wrapper') }</Appraisal>,
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

const menus = [
  {
    'id': 1,
    'label': '首页',
    'key': '/main',
    'pagepermisson': 1,
    'grade': 1
    // 'children': []
  },
  {
    'id': 2,
    'label': '数据大屏',
    'key': '/dashboard',
    'pagepermisson': 1,
    'grade': 1
    // 'children': []
  },
  {
    'id': 3,
    'label': '关于',
    'key': '/about',
    'pagepermisson': 1,
    'grade': 1,
    'children': [
      {
        'id': 4,
        'label': 'aboutEmail',
        'key': '/about/aboutEmail',
        'pagepermisson': 1,
        'grade': 2
      },
      {
        'id': 5,
        'label': 'aboutPhone',
        'key': '/about/aboutPhone',
        'pagepermisson': 1,
        'grade': 2
      }
    ]
  }
];

export { routers, rootRouters, menus };
