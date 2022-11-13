/*
 * @Author: Do not edit
 * @Date: 2022-10-10 16:19:00
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-11-13 21:47:50
 * @FilePath: /react-admin/src/store/modules/user/userSlice.js
 */
import { createSlice } from '@reduxjs/toolkit';
import { API_Login, API_getMenu } from '@/api/user/login';
import { formatRouter } from '@/utils/formatRouter';
import storage from '@/utils/storage';

// 初始化参数
const initialState = {
  theme: '#4591f9',
  userInfo: {},
  userRoutes: [],
  userMenu: [],
  token: storage.get('token') || '',
  historyBack: '',
  currentPath: ''
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
    },
    setCurrentPath: (state, action) => {
      state.currentPath = action.payload;
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
  setUserMenu,
  setCurrentPath
} = userSlice.actions;

// async thunk
// 登录
export const login = (userInfo) => (dispatch) => {
  return new Promise((resolve, reject) => {
    API_Login(userInfo)
      .then((res) => {
        const { userInfo, token } = res.data;
        if (res.code === 200) {
          storage.set('token', token);
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
      if (res.code === 200) {
        const routers = await formatRouter(res.data.menus);
        await dispatch(setUserMenu(res.data.menus));
        await dispatch(setUserRoutes(routers));
        resolve(true);
      }
    } catch (error) {
      reject(error);
    }
  });
};
// 导出 reducer
export default userSlice.reducer;
