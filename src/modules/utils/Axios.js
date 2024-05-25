'use client';
import axios from 'axios';
import API from '@/modules/constants/API';
import { StringUtils } from './StringUtils';

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 300000,
});

Axios.interceptors.request.use(
  function (config) {
    // 검증
    InterceptorsCheck({ act: 'request', url: config.url, loading: config.loading, method: config.method });

    //시작
    refreshTimer();

    const token = window.getCookieValue('auth') === null ? '' : window.getCookieValue('auth');
    // const token = window.tokenCheck() ? sessionStorage.getItem("SI") : ''

    config.headers['Authorization'] = `Bearer ${token}`;
    config.headers['Content-Type'] = config?.fileUpload ? 'multipart/form-data' : 'application/json; charset=utf-8';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    InterceptorsCheck({ act: 'response', url: response.config.url });
    return response;
  },
  (error) => {
    document.querySelector('#loadingstate').style.display = 'none';
    return Promise.reject(error);
  }
);

const InterceptorsCheck = ({ act, url, loading = false, method }) => {
  // api 호출 요청 시, 로딩 바 on, 토큰 검증 및 갱신
  if (act == 'request') {
    API.AxiosInterceptors.push(url);
    if (API.AxiosInterceptors.length > 0) {
      refreshToken();
      if (loading || method == 'post') {
        document.querySelector('#loadingstate').style.display = 'flex';
      }
    }
  }

  // api 데이터 받았을 때, 로딩바 off
  else if (act == 'response') {
    API.AxiosInterceptors = API.AxiosInterceptors.filter((data) => data != url);
    // console.log("response--->",API.AxiosInterceptors, "len--->",API.AxiosInterceptors.length);
    if (API.AxiosInterceptors.length == 0) {
      document.querySelector('#loadingstate').style.display = 'none';
      if (API.refreshCheck) {
        API.refreshCheck = false;
      }
    }
  }
};

//컴포넌트가 랜더링 될때마다, 타이머가 생성되는 문제로 인하여 API 파일에 object 및 변수를 담아서 사용
const refreshTimer = () => {
  //로그인 후 부터는 카운트 증가로 세션 연결시간을 체크 하기 위함
  API.TIMERCNT = 0;

  //로그인 후 발생하는 상황
  if (sessionStorage.getItem('SI')) {
    //타이머 시작
    if (API.TIMEROBJ == null) {
      API.TIMEROBJ = setInterval(() => {
        if (API.TIMERCNT == API.LIMITCNT) {
          sessionInit();
        }
        API.TIMERCNT++;
        // console.log("로그인 세션 종료까지 남은 시간 --->", API.TIMERCNT, "/", API.LIMITCNT, "=", (API.LIMITCNT / 60), "분");
      }, 1000);
    }
  }
};

//토큰 갱신
export const refreshToken = async () => {
  //로그인 후 발생하는 상황
  if (sessionStorage.getItem('SI')) {
    // 세션 변동 체크
    if (
      StringUtils.hasLength(sessionStorage.getItem('compareAuth')) &&
      window.getCookieValue('auth') !== sessionStorage.getItem('compareAuth')
    ) {
      refresh();
      API.refreshCheck = false;
    }

    const sessionData = window.parseJwt(sessionStorage.getItem('SI'));
    // 토큰 만료일이 지나지 않았을 경우
    if (sessionData.expire > window.getCurTimestamp()) {
      API.refreshCheck = true;
    }

    // 토큰 만료일은 지났으나, 리프래시 토큰 만료일이 지나지 않았을 경우
    else if (sessionData.refreshExpire > window.getCurTimestamp()) {
      await window.sessionRefresh();
      API.refreshCheck = true;
    }

    // 토큰 만료일도 지났고, 리프래시 토큰 만료일도 지났을 경우,
    else {
      sessionInit();
      API.refreshCheck = false;
    }
  }
};

//세션 초기화
const sessionInit = (message = '로그인 세션이 만료 혹은 갱신에 실패하였습니다.') => {
  console.log(message);
  window.commonLogout(message);
};

// 세션 리프래시
const refresh = (message = '세션변동이 감지되었습니다.\n메인화면으로 이동합니다.') => {
  console.log(message);
  window.commonRefresh(message);
};
export default Axios;
