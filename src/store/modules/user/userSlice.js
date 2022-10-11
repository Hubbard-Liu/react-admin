/*
 * @Author: Do not edit
 * @Date: 2022-10-10 16:19:00
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-11 11:10:29
 * @FilePath: \react-admin\src\store\modules\user\userSlice.js
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
      state.userInfo = action.payload;
    }
  }
});

// 导出 action
export const { setTheme, setUserInfo } = userSlice.actions;

// 导出 reducer
export default userSlice.reducer;
