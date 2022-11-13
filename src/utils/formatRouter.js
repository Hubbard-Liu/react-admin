/*
 * @Author: Do not edit
 * @Date: 2022-10-20 16:57:56
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-11-13 21:22:05
 * @FilePath: /react-admin/src/utils/formatRouter.js
 */
import { lazyLoad, rootRouters, authRouters } from '@/router';
// import _ from 'lodash';
// import { rootRouters } from '@/router';
// export type RouteProps = {
//   name: string;
//   icon?: React.ReactNode;
//   path: string;
//   access?: string[];
//   hidden?: boolean;
//   child?: RouteProps;
// }[];

// 扁平化路由
// const flatRoute = (routeMap) =>
//   _.flatMapDeep(routeMap, (item) => [item, ...(item.children || [])]);

// 请求回来的路由表
export const formatRouter = (menus) => {
  // 1.自动加载views下所有路由表
  const RouterKeys = require.context('@/views', true, /\.jsx$/);
  const allRouter = [];
  /**
   * "main/Main"
    "login/Login"
    "error/Error"
    "dashboard/Dashboard"
    "about/aboutPhone/AboutPhone"
    "about/aboutEmail/AboutEmail"
   */
  RouterKeys.keys().forEach((item) => {
    const path = item.match(/(?<=.\/)(\w|\/)*/);
    allRouter.unshift(path[0]);
  });

  // 2.根据菜单过滤需要加载的组件
  const formatMenu = (routers, arr = []) => {
    routers.forEach(currentRoute => {
      if (currentRoute?.children && currentRoute?.children.length) {
        formatMenu(currentRoute.children, arr);
      }
      const route = allRouter.find((path) => {
        return currentRoute.key.slice(1) === path.match(/(\w|\/)*(?=\/)/)[0];
      });
      if (route) {
        arr.push({
          ...currentRoute,
          element: route
        });
      }
    });
    return arr;
  };

  // 4.获取过滤后的扁平路由
  const routers = formatMenu(menus);

  return routers;
};

// 格式化异步路由
export const asyncRoute = (objRoutes) => {
  // 动态处理路由组件
  const mapRoute = (route) => {
    return {
      element: lazyLoad(route.element),
      name: route.label,
      path: route.key
    };
  };

  // 1.返回动态路由
  const currentRoutes = objRoutes.map((route) => {
    return mapRoute(route);
  });

  return currentRoutes;
};

// 更新到root路由表
export const updateRoute = (routes) => {
  rootRouters[1].children = [...routes, ...authRouters];
  return rootRouters;
};

// 页面初始化注册加载全部路由
export const allRouters = () => {
  const RouterKeys = require.context('@/views', true, /\.jsx$/);
  const allRouter = [];
  /**
   * "main/Main"
    "login/Login"
    "error/Error"
    "dashboard/Dashboard"
    "about/aboutPhone/AboutPhone"
    "about/aboutEmail/AboutEmail"
   */
  RouterKeys.keys().forEach((item) => {
    const path = item.match(/(?<=.\/)(\w|\/)*/);
    allRouter.unshift(path[0]);
  });

  const mapRoute = (path) => {
    const name = path.match(/(\w|\/)*(?=\/)/);
    return {
      element: lazyLoad(path),
      name: name[0],
      path: name[0]
    };
  };

  // 1.返回动态路由
  const currentRoutes = allRouter.map((path) => {
    return mapRoute(path);
  });

  return currentRoutes;
};
