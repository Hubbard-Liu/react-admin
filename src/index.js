/*
 * @Author: Do not edit
 * @Date: 2022-10-09 16:01:26
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-16 18:53:24
 * @FilePath: /react-admin/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import store from './store';
import 'normalize.css';
import App from './App';
import './mock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider locale={zhCN}>
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
