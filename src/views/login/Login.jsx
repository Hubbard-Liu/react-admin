/*
 * @Author: Do not edit
 * @Date: 2022-10-10 14:31:18
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-20 18:09:13
 * @FilePath: \react-admin\src\views\login\Login.jsx
 */
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { Button, Tabs, Checkbox, Form, Input } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
// import to from 'await-to-js';
import { setTheme, login } from '@/store/modules/user/userSlice';
import { useThrottle } from '@hooks/useThrottle';
import loginStyle from './login.modules.scss';

const Login = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [form] = Form.useForm();

  // 主题设置
  const themeList = [
    {
      color: '#ff4d4f',
      name: 'red'
    },
    {
      color: '#fa8c16',
      name: 'orange'
    },
    {
      color: '#fadb14',
      name: 'yellow'
    },
    {
      color: '#52c41a',
      name: 'green'
    },
    {
      color: '#1890ff',
      name: 'blue'
    },
    {
      color: '#722ed1',
      name: 'purple'
    }
  ];
  const handleTheme = useThrottle((color) => {
    dispatch(setTheme(color));
  });
  const ThemeBtn = themeList.map((item) => {
    return (
      <Button
        shape='circle'
        size='small'
        color={item.color}
        key={item.name}
        style={{ backgroundColor: item.color, marginRight: '5px' }}
        onClick={() => handleTheme(item.color)}
      >
        {' '}
      </Button>
    );
  });

  // tab内容
  const tabList = [
    {
      label: (
        <span>
          <UserOutlined />
          Login
        </span>
      ),
      key: 'login',
      children: <UserLogin form={form}/>
    },
    {
      label: (
        <span>
          <MailOutlined />
          Phone
        </span>
      ),
      key: '2',
      children: <UserPhone form={form}/>
    }
  ];

  const handleClick = useThrottle(async() => {
    const result = await form.validateFields().catch(err => err);
    if (result?.errorFields?.length) return;
    const res = await login(result);
    console.log(res);
    // if (err) return;
    // navigate('/main', {
    //   state: res.data
    // });
  });

  return (
    <div className='login' style={loginStyle}>
      <div className='login-theme'>{ThemeBtn}</div>
      <div className='login-content'>
        <div className='login-tab'>
          <Tabs
            defaultActiveKey='login'
            type='card'
            centered
            tabBarGutter={0}
            items={tabList}
          />
        </div>
        <Button
          className='login-submit'
          size='large'
          type='primary'
          onClick={() => handleClick()}
        >
          登录
        </Button>
      </div>
    </div>
  );
};

const UserLogin = (props) => {
  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 21 }
  };

  // const passwordRule = (_, value) => {
  //   const reg = new RegExp(
  //     /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
  //   );
  //   return reg.test(value)
  //     ? Promise.resolve()
  //     : Promise.reject(
  //       new Error(
  //         '最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'
  //       )
  //     );
  // };

  return (
    <div className='userLogin'>
      <Form {...layout} form={props.form} name='userLogin'>
        <Form.Item
          label='账号'
          name='username'
          required={false}
          type='string'
          rules={[
            {
              required: true,
              message: '请输入账号',
              whitespace: true,
              type: 'string'
            },
            {
              max: 20,
              message: '账号不得大于20个位',
              type: 'string'
            },
            {
              min: 3,
              message: '账号不得小于3个位',
              type: 'string'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='密码'
          name='password'
          required={false}
          rules={[
            { required: true, message: '请输入密码' }
            // {
            //   // 自定义校验
            //   validator: passwordRule
            // }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name='remember'
          valuePropName='checked'
        >
          <Checkbox className='userLogin-text'>记住密码</Checkbox>
        </Form.Item>
      </Form>
    </div>
  );
};

const UserPhone = () => {
  return <div className='userPhone'>UserPhone</div>;
};

export default memo(Login);
