/*
 * @Author: Do not edit
 * @Date: 2022-10-14 13:52:44
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-14 17:21:08
 * @FilePath: \react-admin\src\hooks\useLoadingSpin.js
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

/**
 *
 * @param {className, tip, delay, icon} config
 * @returns
 */
const createLoadingSpin = (config) => {
  const { className = 'LoadingSpin', tip, delay, icon, style } = config ?? {};

  const defaultStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: '100%',
    // height: '100%',
    transform: 'translate(-50%, -50%)',
    // background: 'rgba(255, 255, 255, 0.7)',
    zIndex: '99'
  };
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24
      }}
      spin
    />
  );
  const Loading = (<Spin
    style={style ?? defaultStyle}
    tip={tip ?? 'Loading...'}
    spinning={true}
    delay={delay ?? 500}
    indicator={icon ?? antIcon}
  />);

  let dom = document.createElement('div');
  dom.setAttribute('id', className);
  document.body.appendChild(dom);
  const root = ReactDOM.createRoot(dom);
  root.render(React.cloneElement(Loading));
  return {
  // 隐藏loading
    close() {
      document.body.removeChild(dom);
      dom = null;
    }
  };
};

export default createLoadingSpin;
