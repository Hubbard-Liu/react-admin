/*
 * @Author: Do not edit
 * @Date: 2022-10-10 15:29:49
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-10 16:08:18
 * @FilePath: \react-admin\src\hooks\useNprogress.js
 */

import { useEffect } from 'react';
import nprogress from 'nprogress';

/**
 * 进度条
 */
const useNprogress = () => {
  useEffect(() => {
    nprogress.done();
    return () => nprogress.start();
  }, []);
};

export default useNprogress;
