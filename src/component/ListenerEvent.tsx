'use client'
import { deleteCookie, tokenStringCheck } from '@/api/layoutAction'
import { useLayoutEffect } from 'react'

const ListenerEvent = (props: any) => {
  useLayoutEffect(() => {
    if (globalThis) {
      /**
       * SSO 연동용 EventListener
       * 1. 메인박스 iframe에서 연동이 완료된 뒤에 globalThis.window.sessionStorage clear 이후 SI 값을 넣어줌
       * 2. 성공했을 경우 위 1번 처리 이후 redirection 처리되어 내부 로직이 거의 적용되기 힘듦 (스토리지 등에 무언가를 저장하는 것 포함)
       *
       * -> mnb iframe에서 스토리지 처리를 못해줬을 경우 및
       * 에러없이 통신은 이뤄졌으나 제대로 된 토큰이 오지 않은 경우 로그아웃 처리를 위함
       *
       * -> 정상적으로 처리되는 경우 mnb iframe에서 globalThis.window.sessionStorage clear 처리 후 redirection 되므로
       * 관련 추가 저장 처리가 필요한 경우 다른 곳에서 처리가 필요함
       */
      globalThis.window.addEventListener('message', function (e: any) {
        // if (e.origin !== process.env.NEXT_PUBLIC_BOX_URL) return
        console.log('typeof e.data', e)
        console.log('typeof e.data', typeof e.data)
        // 로그인 이벤트에서 온 message 만 수신

        // 세션 만료 등으로 SSO 연동용 SI 토큰이 존재하지 않을 경우,
        if (typeof e.data !== 'object') return

        // SI 토큰이 존재하는 경우, SI 토큰 셋팅
        if (tokenStringCheck(e.data.tokenInfo)) {
          // SI 토큰 셋팅
          globalThis.sessionStorage.clear() // mnb와 맞춤 -> 이후 CommonContext useEffect와 연계
          globalThis.sessionStorage.setItem('SI', e.data.tokenInfo)
        }
        // SI 토큰이 존재하지 않는 경우, 로그아웃
        else {
          deleteCookie('idSave')
          deleteCookie('auth')
          deleteCookie('cookieExpires')
          globalThis.sessionStorage.clear()
          //   window.location.href = '/'
        }
      })
    }
    // return globalThis.window.removeEventListener('message', e)
  }, [])
  return <></>
}

export default ListenerEvent
