/*
 * @Author: Do not edit
 * @Date: 2022-10-10 16:19:00
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-20 21:59:56
 * @FilePath: /react-admin/src/store/modules/user/userSlice.js
 */
import { createSlice } from '@reduxjs/toolkit';
import { API_Login } from '@/api/user/login';

// 初始化参数
const initialState = {
  theme: '#4591f9',
  userInfo: {},
  userRoutes: [],
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
    }
  }
});

// 导出 action
export const { setTheme, setUserInfo, setUserRoutes, setToken, setHistoryBack } = userSlice.actions;

// async thunk
export const requestData = (num) => {
  return (dispatch, getState) => {
    const state = getState();
    // 返回仓库的state {
    //     "user": {
    //         "theme": "#4591f9",
    //         "userInfo": {}
    //     }
    // }
    console.log(state);
    setTimeout(() => {
      dispatch(setUserInfo({
        name: 'xbw',
        age: num
      }));
    }, 2000);
  };
};

// 请求动态路由
export const asyncRouter = () => {

};

export const fetchTodos = () => async(dispatch) => {

};

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
// 导出 reducer
export default userSlice.reducer;
