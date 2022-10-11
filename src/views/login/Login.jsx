/*
 * @Author: Do not edit
 * @Date: 2022-10-10 14:31:18
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-11 23:26:39
 * @FilePath: /react-admin/src/views/login/Login.jsx
 */
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { setTheme, requestData } from '@/store/modules/user/userSlice';
import { useThrottle } from '@hooks/useThrottle';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = useThrottle(() => {
    dispatch(requestData(18));
  });

  return (
    <>
      <div>Login</div>
      <Button type='primary' onClick={() => dispatch(setTheme('pink'))}>add</Button>
      <Button type='primary' onClick={() => navigate('/home')}>home</Button>
      <Button type='primary' onClick={() => handleClick()}>request</Button>
    </>
  );
};

export default memo(Login);
