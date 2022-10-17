/*
 * @Author: Do not edit
 * @Date: 2022-10-17 17:45:08
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-17 17:59:49
 * @FilePath: \react-admin\src\layout\AppMain\AppMain.jsx
 */
import React, { memo } from 'react';
import { Layout } from 'antd';
const { Content, Footer } = Layout;

const AppMain = () => {
  return (
    <>
      <Content className='main-center-content'>Content</Content>
      <Footer className='main-center-footer'>Footer</Footer>
    </>
  );
};

export default memo(AppMain);
