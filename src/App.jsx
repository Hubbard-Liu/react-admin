/*
 * @Author: Do not edit
 * @Date: 2022-10-10 14:13:59
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-30 21:28:14
 * @FilePath: /react-admin/src/App.jsx
 */
import React, { memo, useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useSelector, shallowEqual } from 'react-redux';
import 'antd/dist/antd.variable.min.css'; // 动态主题
import './styles/index.scss'; // 全局样式
import 'nprogress/nprogress.css'; // 加载条
import { cloneDeep } from '@/utils/lodashChunk';
import { rootRouters } from '@/router';
import useNprogress from '@hooks/useNprogress';
import { asyncRoute, updateRoute } from '@/utils/formatRouter';
import RouteGuard from '@/router/RouteGuard';
import useBeforeEach from '@/router/useBeforeEach';

function App() {
  // 动态路由
  const [currentRoute, setCurrentRoute] = useState(rootRouters);

  const userRoutes = useSelector((state) => state.user.userRoutes, shallowEqual);
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
    if (userRoutes) {
      // 根据store的userRoutes,异步加载组件,生成完整路由
      const resultRoute = updateRoute(asyncRoute(cloneDeep(userRoutes)));
      setCurrentRoute(resultRoute);
    }
  }, [userRoutes]);

  // useRouteGuard();
  const elements = useRoutes(currentRoute);

  // 进入路由前的操作
  const onBeforeEach = useBeforeEach;

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {
        <RouteGuard
          routes={elements}
          beforeEach={onBeforeEach}
        ></RouteGuard>
      }
    </div>
  );
}

export default memo(App);
