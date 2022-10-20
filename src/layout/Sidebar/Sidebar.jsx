/*
 * @Author: Do not edit
 * @Date: 2022-10-17 17:45:41
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-20 23:09:56
 * @FilePath: /react-admin/src/layout/Sidebar/Sidebar.jsx
 */
import React, { memo } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import { routers } from '@/router';
const { Sider } = Layout; ;

const Sidebar = (props) => {
  const navigate = useNavigate();

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
      const menu = {
        disabled: false,
        icon: '',
        key: item.path,
        label: item.name,
        title: item.name
      };
      if (item?.children) {
        menu.children = [];
        item.children.forEach(child => {
          if (!child.hidden) {
            const menuChild = {
              disabled: false,
              icon: '',
              key: child.path,
              label: child.name,
              title: child.name
            };
            menu.children.push(menuChild);
          }
        });
      }
      menuList.push(menu);
    }
  });
  console.log(menuList);

  const onClick = (e) => {
    console.log('click ', e);
    navigate(e.key);
  };

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
          onClick={onClick}
          defaultSelectedKeys={['1']}
          items={ menuList }
        />
      </Sider>
    </>
  );
};

export default memo(Sidebar);
