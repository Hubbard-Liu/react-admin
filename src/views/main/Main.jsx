/*
 * @Author: Do not edit
 * @Date: 2022-10-10 14:31:39
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-17 22:27:51
 * @FilePath: /react-admin/src/views/main/Main.jsx
 */
import React, { memo } from 'react';
import mainStyled from './main.modules.scss';

const Main = () => {
  return (
    <div style={mainStyled} className='main' >Main</div>
  );
};

export default memo(Main);
