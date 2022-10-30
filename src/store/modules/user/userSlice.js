/*
 * @Author: Do not edit
 * @Date: 2022-10-10 16:19:00
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-30 17:25:21
 * @FilePath: /react-admin/src/store/modules/user/userSlice.js
 */
import { createSlice } from '@reduxjs/toolkit';
import { API_Login, API_getMenu } from '@/api/user/login';
import { formatRouter } from '@/utils/formatRouter';

// 初始化参数
const initialState = {
  theme: '#4591f9',
  userInfo: {},
  userRoutes: [],
  userMenu: [],
  token: '',
  historyBack: ''
};

// 创建子切片
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setUserInfo: (state, action) => {
      console.log(action.payload);
      state.userInfo = action.payload;
    },
    setUserRoutes: (state, action) => {
      state.userRoutes = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setHistoryBack: (state, action) => {
      state.historyBack = action.payload;
    },
    setUserMenu: (state, action) => {
      state.userMenu = action.payload;
    }
  }
});

// 导出 action
export const {
  setTheme,
  setUserInfo,
  setUserRoutes,
  setToken,
  setHistoryBack,
  setUserMenu
} = userSlice.actions;

// async thunk
// 请求动态路由
export const asyncRouter = () => {};

// 登录
export const login = (userInfo) => (dispatch) => {
  return new Promise((resolve, reject) => {
    API_Login(userInfo)
      .then((res) => {
        const { userInfo, token } = res.data;
        if (res.code === 200) {
          dispatch(setUserInfo(userInfo));
          dispatch(setToken(token));
          resolve(true);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// 获取用户菜单
export const getMenu = () => (dispatch) => {
  return new Promise(async(resolve, reject) => {
    try {
      const res = await API_getMenu();
      console.log('API_getMenu', res);
      if (res.code === 200) {
        const routers = await formatRouter(res.data.menus);
        dispatch(setUserMenu(res.data.menus));
        console.log(routers);
        dispatch(setUserRoutes(routers));
        resolve(true);
      }
    } catch (error) {
      reject(error);
    }
  });
};
// 导出 reducer
export default userSlice.reducer;
