/*
 * @Author: Do not edit
 * @Date: 2022-10-17 17:45:08
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-24 17:58:28
 * @FilePath: \react-admin\src\layout\AppMain\AppMain.jsx
 */
import React, { memo, Suspense } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import LoadingAnimation from '@/components/LoadingAnimation';
const { Content, Footer } = Layout;

const AppMain = () => {
  return (
    <>
      <Content className='wrapper-center-content'>
        {/* Suspense 配合 lazy 懒加载使用 */}
        <Suspense fallback={<LoadingAnimation />}>
          {/* 生成路由 */}
          <Outlet/>
        </Suspense>
      </Content>
      <Footer className='wrapper-center-footer'>Footer</Footer>
    </>
  );
};

export default memo(AppMain);
