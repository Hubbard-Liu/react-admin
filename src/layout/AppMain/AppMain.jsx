/*
 * @Author: Do not edit
 * @Date: 2022-10-17 17:45:08
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-17 22:00:44
 * @FilePath: /react-admin/src/layout/AppMain/AppMain.jsx
 */
import React, { memo } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
const { Content, Footer } = Layout;

const AppMain = () => {
  return (
    <>
      <Content className='wrapper-center-content'><Outlet/></Content>
      <Footer className='wrapper-center-footer'>Footer</Footer>
    </>
  );
};

export default memo(AppMain);
