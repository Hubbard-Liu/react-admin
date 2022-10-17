/*
 * @Author: Do not edit
 * @Date: 2022-10-17 17:45:35
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-17 21:43:41
 * @FilePath: /react-admin/src/layout/Navbar/Navbar.jsx
 */
import React, { memo } from 'react';
import { Layout } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
const { Header } = Layout;

const Navbar = (props) => {
  const { collapsed, handleCollapsed } = props;

  const TargetCollapsed = () => {
    return collapsed ? <MenuUnfoldOutlined onClick={ () => handleCollapsed(!collapsed)}/>
      : <MenuFoldOutlined onClick={ () => handleCollapsed(!collapsed)}/>;
  };

  return (
    <>
      <Header className='wrapper-center-header'>
        <TargetCollapsed/>
      Header
      </Header>
    </>
  );
};

export default memo(Navbar);
