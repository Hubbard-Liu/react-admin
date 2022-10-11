/*
 * @Author: Do not edit
 * @Date: 2022-10-10 22:18:45
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-11 11:31:03
 * @FilePath: \react-admin\src\components\LoadingAnimation.js
 */
import styled, { keyframes } from 'styled-components';

const animationBg = keyframes`
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
`;

export default styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 10%,
    #f6f7f8 20%,
    #f6f7f8 100%
  );
  background-size: 200% 100%;
  animation: ${animationBg} 1s linear infinite;
`;
