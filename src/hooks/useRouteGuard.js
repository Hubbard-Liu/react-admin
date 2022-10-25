/*
 * @Author: Do not edit
 * @Date: 2022-10-20 20:52:36
 * @LastEditors: LiuYu
 * @LastEditTime: 2022-10-25 10:21:44
 * @FilePath: \react-admin\src\hooks\useRouteGuard.js
 */
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { setHistoryBack } from '@/store/modules/user/userSlice';
import { Navigate } from 'react-router-dom';

const whiteList = ['/login', '/error'];

// 路由守卫
const useRouteGuard = (children) => {
  const router = useLocation();
  const { pathname } = router;
  const { token, userRoutes } = useSelector((state) => state.user); // historyBack
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // let Guard = null;
  const next = (path, option = {}) => {
    return path ? <Navigate to={path} {...option}/> : children;
  };

  if (token) {
    if (pathname === '/login') {
      return next('/main');
    } else {
      // 判断菜单权限是否存在
      if (userRoutes && userRoutes.length > 0) {
        return next();
      } else {
        return next();
      }
    }
  } else {
    // 判断是否为白名单
    if (whiteList.includes(pathname)) {
      return next();
    } else {
      // navigate(`/login?redirect=${pathname}`);
      return next('/login');
    }
  }
};

export default useRouteGuard;
