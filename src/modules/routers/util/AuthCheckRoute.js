// 'use client';
// import { useContext, useEffect, useState } from 'react';
// import { Redirect, Route } from 'react-router-dom';

// import PathConstants from '@/modules/constants/PathConstants';
// import { LoginContext, UserAuthKey } from '@/modules/contexts/common/LoginContext';

// export const storeAuth = (userAuth) => {
//   localStorage.setItem('LOGIN_AUTH', JSON.stringify(userAuth));
// };
// export const getStoredAuth = () => {
//   return JSON.parse(localStorage.getItem('LOGIN_AUTH'));
// };

// /**
//  * 요구하는 권한들 중에 가지고 있는 권한이 만족하는지 확인한다
//  * @param {[[]]} authArrayToCheck 예시) [[UserAuthKey.정회원, UserAuthKey.총괄관리자], [UserAuthKey.정회원, UserAuthKey.관리자]]
//  * @param {Object} authHas
//  */
// export const checkAuth = (authArrayToCheck, authHas) => {
//   if (!authHas) return false;
//   return authArrayToCheck.some((authArray) => authArray.every((authKey) => authHas[authKey]));
// };

// /**
//  *  authArray 값을 넘겨주지 않으면, '정회원 + 총괄관리자/관리자 권한 가능 사용자'인지 확인한다
//  *  authArray 예시) [[UserAuthKey.정회원, UserAuthKey.총괄관리자], [UserAuthKey.정회원, UserAuthKey.관리자]]
//  */
// const AuthCheckRoute = ({
//   component: Component,
//   authArray = [
//     [UserAuthKey.정회원, UserAuthKey.총괄관리자],
//     [UserAuthKey.정회원, UserAuthKey.관리자],
//   ],
//   ...rest
// }) => {
//   const loginContext = useContext(LoginContext);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(true);

//   useEffect(() => {
//     if (!loginContext.state.user.isLoaded) {
//       const userAuth = getStoredAuth();
//       const isAuthenticated = checkAuth(authArray, userAuth);
//       loginContext.actions.setUnAuth(!isAuthenticated);
//       setIsAuthenticated(isAuthenticated);
//       return;
//     }
//     const isAuthenticated = checkAuth(authArray, loginContext.state.userAuth);

//     loginContext.actions.setUnAuth(!isAuthenticated);
//     setIsAuthenticated(isAuthenticated);
//     setIsLoading(false);

//     return () => {
//       loginContext.actions.setUnAuth(false);
//     };
//   }, [loginContext.state.user]);

//   if (!window.tokenCheck()) {
//     return <Redirect path={'/'} to={PathConstants.MAIN} />;
//   } else {
//     return <Route {...rest} render={(props) => <Component {...props} />} />;
//   }

//   // if (isAuthenticated) {
//   //   return <Route {...rest} render={(props) => <Component {...props} />} />
//   // } else {
//   //   return <Redirect path={'/'} to={PathConstants.MAIN} />
//   // }
// };

// export default AuthCheckRoute;
