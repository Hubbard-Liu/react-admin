/*
 * @Author: Do not edit
 * @Date: 2022-10-10 14:13:59
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-25 09:28:37
 * @FilePath: \react-admin\src\App.jsx
 */
import React, { memo, useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useSelector } from 'react-redux';
import 'antd/dist/antd.variable.min.css'; // 动态主题
import './styles/index.scss'; // 全局样式
import 'nprogress/nprogress.css'; // 加载条
import { rootRouters } from '@/router';
import useNprogress from '@hooks/useNprogress';
// import useRouteGuard from '@hooks/useRouteGuard';

function App() {
  // 动态路由
  const [currentRoute, setCurrentRoute] = useState(rootRouters);

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
  useNprogress();

  // 监听路由变化
  useEffect(() => {
    if (currentRoute) {
      // const resultRoute = handelEnd(handelFilterElement(deepCopy(routs)));
      const resultRoute = currentRoute;
      setCurrentRoute(resultRoute);
    }
  }, [currentRoute]);

  // useRouteGuard();
  const elements = useRoutes(currentRoute);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {elements}
    </div>
  );
}

export default memo(App);
