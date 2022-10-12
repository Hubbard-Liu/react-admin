/*
 * @Author: Do not edit
 * @Date: 2022-10-10 14:31:18
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-12 17:59:53
 * @FilePath: \react-admin\src\views\login\Login.jsx
 */
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Tabs } from 'antd';
import { setTheme, requestData } from '@/store/modules/user/userSlice';
import { useThrottle } from '@hooks/useThrottle';
import loginStyle from './login.modules.scss';

const Login = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const tabList = [
    {
      label: `Login`,
      key: 'login',
      children: <UserLogin/>
    },
    {
      label: `Phone`,
      key: '2',
      children: <UserPhone/>
    }
  ];

  return (
    <>
      <Card className='login' style={loginStyle} hoverable>
        <Tabs
          defaultActiveKey='1'
          onChange={onChange}
          items={tabList}
        />
      </Card>
    </>
  );
};

const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = useThrottle(() => {
    dispatch(requestData(18));
  });

  return (
    <>
      <div>登录</div>
      <Button type='primary' onClick={() => dispatch(setTheme('pink'))}>add</Button>
      <Button type='primary' onClick={() => navigate('/home')}>home</Button>
      <Button type='primary' onClick={() => handleClick()}>request</Button>
    </>
  );
};

const UserPhone = () => {
  return (
    <div>UserPhone</div>
  );
};

export default memo(Login);
