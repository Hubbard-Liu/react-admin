/*
 * @Author: Do not edit
 * @Date: 2022-10-20 20:52:36
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-11-13 22:03:01
 * @FilePath: /react-admin/src/router/useBeforeEach.js
 */
import { useSelector, shallowEqual } from 'react-redux';
import store from '@/store';
import { getMenu } from '@/store/modules/user/userSlice';

const whiteList = ['/login', '/error'];

// 路由守卫 beforeEach 参数vue
const useBeforeEach = async(to, next) => {
  const { token } = useSelector((state) => state.user); // historyBack
  const userRoutes = useSelector((state) => state.user.userRoutes, shallowEqual);
  console.log('useBeforeEach', to);

  if (token) {
    if (to === '/login') {
      next('/main');
    } else {
      // 判断菜单权限是否存在
      if (userRoutes && userRoutes.length > 0) {
        next();
      } else {
        // 鉴权
        await store.dispatch(getMenu());
        next();
      }
    }
  } else {
    // 判断是否为白名单
    if (whiteList.includes(to)) {
      next();
    } else {
      // navigate(`/login?redirect=${pathname}`);
      next('/login');
    }
  }
};

export default useBeforeEach;
