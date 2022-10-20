/*
 * @Author: Do not edit
 * @Date: 2022-10-20 20:52:36
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-20 23:07:35
 * @FilePath: /react-admin/src/hooks/useRouteGuard.js
 */
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setHistoryBack } from '@/store/modules/user/userSlice';

const whiteList = ['/login', '/error'];

// 路由守卫
const useRouteGuard = () => {
  const router = useLocation();
  const { pathname } = router;
  const { token, userRoutes, historyBack } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(123);
    if (token) {
      if (pathname === '/login') {
      } else {
        // 判断菜单权限是否存在
        if (userRoutes && userRoutes.length > 0) {
          navigate(pathname);
        } else {
          navigate(pathname);
          // try {
          //   await store.dispatch('user/getMenu');
          //   /**
          //    * // 解决 vue3 addRoute 页面刷新后 路由失效。 **异步添加的动态路由无法立即匹配到
          //    * 如果参数to不能找到对应的路由的话，就再执行一次beforeEach((to, from, next))直到其中的next({ ...to})能找到对应的路由为止。
          //    * replace 禁止用户手动返回
          //    */
          //   next({ ...to, replace: true });
          // } catch (err) {
          //   const error = err as string;
          //   ElMessage.error(error.toString());
          //   store.commit('user/RESET_STATE');
          //   next({ path: '/login' });
          // }
        }
      }
    } else {
      // 判断是否为白名单
      if (whiteList.includes(pathname)) {
        navigate(pathname);
      } else {
        // navigate(`/login?redirect=${pathname}`);
        navigate('/login', {
          state: {
            redirect: historyBack
          }
        });
      }
    }
    // 设置上一次的路由地址
    dispatch(setHistoryBack(pathname));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
};

export default useRouteGuard;
