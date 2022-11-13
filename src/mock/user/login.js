/*
 * @Author: Do not edit
 * @Date: 2022-10-16 18:27:36
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-11-13 22:16:26
 * @FilePath: /react-admin/src/mock/user/login.js
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

// 侧边栏表
const menus = [
  {
    id: 1,
    label: '首页',
    key: '/main',
    icon: 'HomeOutlined',
    children: []
  },
  {
    id: 2,
    label: '数据大屏',
    icon: 'DesktopOutlined',
    key: '/dashboard',
    children: []
  },
  {
    id: 3,
    label: '关于',
    key: '/about',
    icon: 'PhoneOutlined',
    grade: 1,
    children: [
      {
        id: 4,
        label: 'aboutEmail',
        key: '/about/aboutEmail',
        grade: 2
      },
      {
        id: 5,
        label: 'aboutPhone',
        key: '/about/aboutPhone',
        grade: 2
      }
    ]
  }
];

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
  },
  getMenu: (config) => {
    // console.log(config);
    // const { token } = JSON.parse(config.body);
    // if (!token) {
    //   return {
    //     code: 401,
    //     msg: '用户权限不存在',
    //     data: null
    //   };
    // }
    return {
      code: 200,
      msg: '成功',
      data: {
        menus
      }
    };
  }
};

export default Mock_User;
