/*
 * @Author: Do not edit
 * @Date: 2022-10-10 16:18:44
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-10 16:28:20
 * @FilePath: \react-admin\src\store\modules\index.js
 */
import userSliceReducer from './user/userSlice';

// 导出全部 reducers
const reducer = {
  user: userSliceReducer
};

export default reducer;
