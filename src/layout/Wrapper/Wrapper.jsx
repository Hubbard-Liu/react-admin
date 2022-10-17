/*
 * @Author: Do not edit
 * @Date: 2022-10-17 21:38:32
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-17 21:42:52
 * @FilePath: /react-admin/src/layout/Wrapper.jsx
 */
import React, { memo, useState } from 'react';
import { Layout } from 'antd';
import wrapperStyled from './wrapper.modules.scss';
import { AppMain, Navbar, Sidebar } from '@/layout';

const Wrapper = () => {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapsed = (flag) => {
    setCollapsed(flag);
  };

  return (
    <div style={wrapperStyled} className='wrapper'>
      <Layout className='wrapper-layout'>
        <Sidebar collapsed={collapsed}/>
        <Layout className='wrapper-center'>
          <Navbar collapsed={collapsed} handleCollapsed={handleCollapsed}/>
          <AppMain/>
        </Layout>
      </Layout>
    </div>
  );
};

export default memo(Wrapper);
