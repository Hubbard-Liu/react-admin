/*
 * @Author: Do not edit
 * @Date: 2022-10-09 16:01:26
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-10 16:57:11
 * @FilePath: \react-admin\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'normalize.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
