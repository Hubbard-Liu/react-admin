/*
 * @Author: Do not edit
 * @Date: 2022-10-17 16:30:56
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-17 16:37:05
 * @FilePath: \react-admin\src\views\error\Error.jsx
 */
import React from 'react';
import errorStyle from './error.modules.scss';

export default function Error() {
  return (
    <div style={errorStyle}>
      <div className='wscn-http404-container'>
        <div className='wscn-http404'>
          <div className='bullshit'>
            <div className='bullshit__oops'>404!</div>
            <div className='bullshit__info'>All rights reserved</div>
            <div className='bullshit__headline'>The webmaster said that you can not enter this page..</div>
            <div className='bullshit__info'>
          Please check that the URL you entered is correct, or click the button
          below to return to the homepage.
            </div>
            <a href='/login' className='bullshit__return-home'>Back to home</a>
          </div>
        </div>
      </div>
    </div>
  );
}
