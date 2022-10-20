/*
 * @Author: Do not edit
 * @Date: 2022-10-10 14:13:59
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-20 17:12:19
 * @FilePath: \react-admin\src\App.jsx
 */
import React, { memo, Suspense, useEffect } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useSelector } from 'react-redux';
import 'antd/dist/antd.variable.min.css'; // 动态主题
import './styles/index.scss'; // 全局样式
import 'nprogress/nprogress.css'; // 加载条
import routers from './router';
import useNprogress from '@hooks/useNprogress';
import LoadingAnimation from '@/components/LoadingAnimation';

function App() {
  const theme = useSelector((state) => state.user.theme);
  console.log('App组件触发');
  useEffect(() => {
    // 动态主题
    ConfigProvider.config({
      theme: {
        primaryColor: theme
      }
    });
  }, [theme]);

  const router = useLocation();
  const { pathname } = router;
  console.log(pathname);

  useNprogress();

  return (
    <Suspense fallback={<LoadingAnimation />}>
      {/* Suspense 配合 lazy 懒加载使用 */}
      {/* 生成路由 */}
      { useRoutes(routers) }
    </Suspense>
  );
}

export default memo(App);
