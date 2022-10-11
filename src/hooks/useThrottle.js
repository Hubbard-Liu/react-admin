/*
 * @Author: Do not edit
 * @Date: 2022-10-11 23:17:59
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-11 23:28:10
 * @FilePath: /react-admin/src/hooks/useThrottle.js
 */
import { throttle } from '@/utils/lodashChunk';

/**
 *
 * @param {} fn
 * @param {} delay
 * @returns
 */
export const useThrottle = (fn, delay = 800) => {
  return throttle(() => {
    fn();
  },
  delay,
  { 'trailing': false });
};
