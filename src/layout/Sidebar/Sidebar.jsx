/*
 * @Author: Do not edit
 * @Date: 2022-10-17 17:45:41
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-11-01 22:08:52
 * @FilePath: /react-admin/src/layout/Sidebar/Sidebar.jsx
 */
import React, { useState, memo, useMemo, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { cloneDeep } from '@/utils/lodashChunk';
import * as Icon from '@ant-design/icons';

// import { menus } from '@/router';
const { Sider } = Layout; ;

// 动态加载图标
const createAntdIcon = (iconName) => {
  return React.createElement(Icon[iconName]);
};

const Sidebar = (props) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(props.collapsed);
  const [currentMenus, setCurrentMenus] = useState([]);
  const userMenu = useSelector((state) => state.user.userMenu, shallowEqual);

  console.log('Sidebar');
  useEffect(() => {
    if (userMenu) {
      const menus = userMenu.map(item => {
        const children = Array.from(item?.children).length ? item?.children : null;
        return {
          key: item.key,
          label: item.label,
          icon: createAntdIcon(item.icon),
          children
        };
      });
      setCurrentMenus(menus);
    }
  }, [userMenu]);

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
