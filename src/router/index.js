/*
 * @Author: Do not edit
 * @Date: 2022-10-10 14:16:25
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-10 15:01:52
 * @FilePath: \react-admin\src\router\index.js
 */
import { Navigate } from 'react-router-dom';
import Home from '@/views/home/Home';
import Login from '@/views/login/Login';

// 路由表
const routers = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
    // children: [],
  },
  // 重定向
  {
    path: '/',
    element: <Navigate to='/login'/>
  }
];

export default routers;
