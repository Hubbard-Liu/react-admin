/*
 * @Author: Do not edit
 * @Date: 2022-10-17 17:45:35
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-27 21:46:20
 * @FilePath: /react-admin/src/layout/Navbar/Navbar.jsx
 */
import React, { createElement, memo } from 'react';
import { Layout, Button } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { Header } = Layout;

const Navbar = (props) => {
  const navigate = useNavigate();
  const { collapsed, handleCollapsed } = props;

  const TargetCollapsed = () => {
    return createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
      {
        className: 'nav-target',
        onClick: () => handleCollapsed(!collapsed)
      });
  };

  const outLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <Header className='wrapper-center-header'>
        <TargetCollapsed className='nav-target'/>
        <div className='nav-content'>
          <div className='nav-left'></div>
          <div className='nav-right'>
            <Button size='small' type='primary' onClick={() => outLogin()}>退出</Button>
          </div>
        </div>
      </Header>
    </>
  );
};

export default memo(Navbar);
