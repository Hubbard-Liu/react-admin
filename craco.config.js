/*
 * @Author: Do not edit
 * @Date: 2022-10-09 16:29:00
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-17 15:30:08
 * @FilePath: \react-admin\craco.config.js
 */
const path = require('path');

module.exports = {
  style: {
    sass: {
      loaderOptions: (sassLoaderOptions, { env, paths }) => { return sassLoaderOptions; }
    }
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@hooks': path.resolve(__dirname, 'src/hooks')
    }
  },
  devServer: {
    open: false
  }
  // plugins: [
  //   //  anth 主题
  //   {
  //     plugin: CracoLessPlugin,
  //     options: {
  //       lessLoaderOptions: {
  //         lessOptions: {
  //           modifyVars: { '@primary-color': '#1DA57A' },
  //           javascriptEnabled: true
  //         }
  //       }
  //     }
  //   }
  // ]
  // devServer: {
  //   port: 8080
  // }
};
