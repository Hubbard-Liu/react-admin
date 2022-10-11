/*
 * @Author: Do not edit
 * @Date: 2022-10-10 14:31:18
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-11 11:26:00
 * @FilePath: \react-admin\src\views\login\Login.js
 */
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { setTheme } from '@/store/modules/user/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div>Login</div>
      <Button type='primary' onClick={() => dispatch(setTheme('pink'))}>add</Button>
      <Button type='primary' onClick={() => navigate('/home')}>home</Button>
    </>
  );
};

export default memo(Login);
