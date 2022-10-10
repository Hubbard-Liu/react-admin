/*
 * @Author: Do not edit
 * @Date: 2022-10-10 15:10:04
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-10 17:00:18
 * @FilePath: \react-admin\src\store\index.js
 */
import { configureStore } from '@reduxjs/toolkit';
import reducer from './modules';

export default configureStore({
  reducer
});
