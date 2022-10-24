/*
 * @Author: Do not edit
 * @Date: 2022-10-17 17:45:41
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-24 17:50:15
 * @FilePath: \react-admin\src\layout\Sidebar\Sidebar.jsx
 */
import React, { useState, memo, useMemo, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import { menus } from '@/router';
const { Sider } = Layout; ;

const Sidebar = (props) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(props.collapsed);
  const [currentMenus, setCurrentMenus] = useState(menus);
  console.log('Sidebar');
  if (!menus) {
    setCurrentMenus(menus);
  }

  // 响应式布局
  const breakpoint = {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px'
  };

  const menuList = useMemo(() => currentMenus, [currentMenus]);

  // 用于监听 props.collapsed 改变 收缩前先关闭所有展开项 打开前先展开当前选中项
  useEffect(() => {
    if (!props.collapsed) {
      setCollapsed(props.collapsed);
    } else {
      setCollapsed(props.collapsed);
    }
  }, [props.collapsed]);

  const handleSelectMenu = (e) => {
    navigate(e.key);
  };

  return (
    <>
      <Sider
        className='wrapper-sider'
        breakpoint={breakpoint}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Menu
          theme='dark'
          mode='inline'
          onSelect={handleSelectMenu}
          defaultSelectedKeys={['/main']}
          items={ menuList }
        />
      </Sider>
    </>
  );
};

export default memo(Sidebar);
