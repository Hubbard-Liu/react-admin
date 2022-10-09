/*
 * @Author: Do not edit
 * @Date: 2022-10-09 16:29:00
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-09 17:45:43
 * @FilePath: \react-admin\craco.config.js
 */
const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
  style: {
    sass: {
      loaderOptions: (sassLoaderOptions, { env, paths }) => { return sassLoaderOptions; }
    }
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    //  anth 主题
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  devServer: {
    port: 8080
  }
};
