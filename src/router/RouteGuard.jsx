/*
 * @Author: Do not edit
 * @Date: 2022-10-30 20:13:09
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-30 21:23:21
 * @FilePath: /react-admin/src/router/RouteGuard.jsx
 */
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

/**
 * 路由守卫组件 放在要渲染的路由外面
 * @routes 需要挂载的路由
 * @beforeEach 进入路由的钩子
 */
const RouteGuard = ({ routes, beforeEach }) => {
  const router = useLocation();
  const { pathname } = router;

  // 守卫标识
  let to = true;
  // 需要重定向的地址
  let redirectPath = '';

  // 放行钩子
  const next = (path) => {
    to = true;
    if (path) {
      redirectPath = path;
    }
  };
  // 进入前的hook
  beforeEach(pathname, next);

  if (to) {
    if (redirectPath) {
      return <Navigate to={redirectPath}></Navigate>;
    } else {
      return (
        <>
          {
            routes
          }
        </>
      );
    }
  }
};

export default RouteGuard;
