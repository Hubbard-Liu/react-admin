/*
 * @Author: Do not edit
 * @Date: 2022-10-10 14:31:39
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-17 18:01:23
 * @FilePath: \react-admin\src\views\main\Main.jsx
 */
import React, { memo, useState } from 'react';
import { Layout } from 'antd';
import mainStyled from './main.modules.scss';
import { AppMain, Navbar, Sidebar } from '@/layout';

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapsed = (flag) => {
    setCollapsed(flag);
  };

  return (
    <div style={mainStyled} className='main'>
      <Layout className='main-layout'>
        <Sidebar collapsed={collapsed}/>
        <Layout className='main-center'>
          <Navbar collapsed={collapsed} handleCollapsed={handleCollapsed}/>
          <AppMain/>
        </Layout>
      </Layout>
    </div>
  );
};

export default memo(Main);
