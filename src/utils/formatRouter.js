/*
 * @Author: Do not edit
 * @Date: 2022-10-20 16:57:56
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-20 22:50:14
 * @FilePath: /react-admin/src/utils/formatRouter.js
 */
import _ from 'lodash';
import { rootRouters } from '@/router';
// export type RouteProps = {
//   name: string;
//   icon?: React.ReactNode;
//   path: string;
//   access?: string[];
//   hidden?: boolean;
//   child?: RouteProps;
// }[];

// 扁平化路由
const flatRoute = (routeMap) =>
  _.flatMapDeep(routeMap, (item) => [item, ...(item.children || [])]);

// 请求回来的路由表
export const formatRouter = (asyncRouters) => {
  const allRoutes = flatRoute(rootRouters);

  const formatMenu = (routers, arr = []) => {
    routers.forEach(currentRoute => {
      if (currentRoute?.children) {
        formatMenu(currentRoute.children, arr.children);
      }
      const route = allRoutes.find((item) => item.path === currentRoute.path);
      if (route) arr.push(route);
    });

    return arr;
  };

  return formatMenu(asyncRouters);
};
