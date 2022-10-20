/*
 * @Author: Do not edit
 * @Date: 2022-10-16 18:27:36
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-20 17:51:36
 * @FilePath: \react-admin\src\mock\user\login.js
 */
const tokens = {
  admin: 'admin',
  guest: 'guest',
  editor: 'editor'
};

const users = {
  'admin': {
    id: 'admin',
    role: 'admin',
    name: '难凉热血',
    avatar: 'https://s1.ax1x.com/2020/04/28/J5hUaT.jpg',
    description: '拥有系统内所有菜单和路由权限'
  },
  'editor': {
    id: 'editor',
    role: 'editor',
    name: '编辑员',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: '可以看到除户管理页面之外的所有页面'
  },
  'guest': {
    id: 'guest',
    role: 'guest',
    name: '游客',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: '仅能看到Dashboard、作者博客、权限测试和关于作者四个页面'
  }
};

const Mock_User = {
  login: (config) => {
    const { username } = JSON.parse(config.body);
    const token = tokens[username];
    if (!token) {
      return {
        code: 401,
        msg: '用户名或密码错误',
        data: null
      };
    }
    return {
      code: 200,
      msg: '成功',
      data: {
        token,
        userInfo: users[username]
      }
    };
  }
};

export default Mock_User;
