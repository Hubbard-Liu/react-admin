/*
 * @Author: Do not edit
 * @Date: 2022-10-10 16:19:00
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-11 22:36:10
 * @FilePath: /react-admin/src/store/modules/user/userSlice.js
 */
import { createSlice } from '@reduxjs/toolkit';

// 初始化参数
const initialState = {
  theme: '#4591f9',
  userInfo: {}
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
    }
  }
});

// 导出 action
export const { setTheme, setUserInfo } = userSlice.actions;

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

// 导出 reducer
export default userSlice.reducer;
