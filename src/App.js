/*
 * @Author: Do not edit
 * @Date: 2022-10-10 14:13:59
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-10 16:14:02
 * @FilePath: \react-admin\src\App.js
 */
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routers from './router';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.variable.min.css'; // 动态主题
import './styles/index.scss'; // 全局样式
import 'nprogress/nprogress.css'; // 加载条
import useNprogress from '@hooks/useNprogress';

// 动态主题
ConfigProvider.config({
  theme: {
    primaryColor: '#25b864'
  }
});

export default function App() {
  useNprogress();

  return (
    <>
      {/* 生成路由 */}
      { useRoutes(routers) }
    </>
  );
}
