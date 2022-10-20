/*
 * @Author: Do not edit
 * @Date: 2022-10-17 17:45:41
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-19 14:04:28
 * @FilePath: \react-admin\src\layout\Sidebar\Sidebar.jsx
 */
import React, { memo } from 'react';
import { Layout, Menu } from 'antd';
import routers from '@/router';
const { Sider } = Layout; ;

const Sidebar = (props) => {
  // 响应式布局
  const breakpoint = {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px'
  };

  const menuList = [];
  routers.forEach(item => {
    if (!item.hidden) {
      menuList.push({
        disabled: false,
        icon: '',
        key: item.path,
        label: item.name,
        title: item.name
      });
    }
  });

  return (
    <>
      <Sider
        className='wrapper-sider'
        breakpoint={breakpoint}
        trigger={null}
        collapsible
        collapsed={props.collapsed}
      >
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={ menuList }
        />
      </Sider>
    </>
  );
};

export default memo(Sidebar);
