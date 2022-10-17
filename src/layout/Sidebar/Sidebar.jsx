/*
 * @Author: Do not edit
 * @Date: 2022-10-17 17:45:41
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-17 21:43:33
 * @FilePath: /react-admin/src/layout/Sidebar/Sidebar.jsx
 */
import React, { memo } from 'react';
import { Layout } from 'antd';
const { Sider } = Layout;

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

  return (
    <>
      <Sider
        className='wrapper-sider'
        breakpoint={breakpoint}
        trigger={null}
        collapsible
        collapsed={props.collapsed}
      >
          Sider
      </Sider>
    </>
  );
};

export default memo(Sidebar);
