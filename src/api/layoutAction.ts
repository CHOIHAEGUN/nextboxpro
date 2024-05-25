import API from '@/modules/constants/API'
/**
 * 투자 박스 서버에 사용자 정보 조회
 * @returns []
 */
export const getUserInfo = async (): Promise<any> => {
  let res = await fetch(API.HEADER.USER_INFO, {
    method: 'GET',
    next: {
      tags: ['USER_INFO']
    }
  })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

/**
 * 토큰 리프래시를 위한 세션 확인
 * @returns []
 */
export const sessionRefresh = async (): Promise<any> => {
  const sessionData = parseJwt(sessionStorage.getItem('SI'))
  const refreshToken = sessionData.refreshToken
  let sendData = {
    appKey: '%REACT_APP_PLATFORM_APPKEY%',
    refreshToken: refreshToken,
    grantType: 'refresh_token'
  }

  let res = await fetch(`${process.env.NEXT_PUBLIC_PLATFORM_URL}+'/app/cm/v1/cmm300/tokenRefresh'`, {
    method: 'POST',
    headers: {
      ContentType: 'application/json',
      appKey: `${process.env.NEXT_PUBLIC_PLATFORM_APPKEY}`
    },
    body: JSON.stringify(sendData),
    next: {
      tags: ['SESSION_REFRESH']
    }
  })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  updateSession(res)

  return res.json()
}

/**
 * 신규 토큰 발급 갱신
 * @returns []
 */
export const updateSession = async (data: any): Promise<any> => {
  let token = await fetch(`${process.env.NEXT_PUBLIC_BOX_URL}+'/COM001/getRefreshToken.do'`, {
    method: 'POST',
    headers: {
      ContentType: 'application/json'
    },
    body: JSON.stringify(data),
    next: {
      tags: ['UPDATE_SESSION']
    }
  })

  if (!token.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.error('토큰 발급 에러')
    // window.commonLogout('로그인 세션이 만료 혹은 갱신에 실패하셨습니다.')
    throw new Error('Failed to fetch data')
  }

  // sessionStorage.setItem('SI', token.si)

  return token.json()
}

/*토큰에 있는 정보 가져오기*/
const parseJwt = (token: string | null) => {
  if (!token) return {}
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )
  return JSON.parse(jsonPayload)
}

/**
 * get new datetime
 * @returns new datetime
 */
const getCurTimestamp = () => {
  return Math.floor(new Date().getTime() / 1000)
}
// cookie setting function
const setCookie = (cookieName: string, value: string, exdays: number) => {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + exdays)
  //	exdate.setMinutes(exdate.getMinutes() + exdays);
  var cookieValue = escape(value) + (exdays == null ? '' : ';path=/; domain=ibkbox.net; expires=' + exdate.toString()) // exdate.toGMTString()
  document.cookie = cookieName + '=' + cookieValue
}

/**
 * get cookie value function
 * @returns cookieValue
 */
export const getCookieValue = (cookieName: string) => {
  let cookieValue = null
  if (document.cookie) {
    var array = document.cookie.split(escape(cookieName) + '=')
    if (array.length >= 2) {
      var arraySub = array[1].split(';')
      cookieValue = unescape(arraySub[0])
    }
  }
  return cookieValue
}

/**
 * cookie delete function
 * @returns document.cookie
 */
export const deleteCookie = (cookieName: string) => {
  var expireDate = new Date()
  expireDate.setDate(expireDate.getDate() - 1)
  document.cookie = cookieName + '= ;path=/; domain=ibkbox.net; expires=' + expireDate.toString() // expireDate.toGMTString()
}

/**
 * get box name
 * @returns boxName
 */
const getBoxName = () => {
  const host = location.host
  let boxName = host.substring(0, host.indexOf('.'))
  if (boxName.indexOf('local') > -1) {
    boxName = boxName.replace('local', '')
  } else if (boxName.indexOf('dev') > -1) {
    boxName = boxName.replace('dev', '')
  } else {
    boxName = ''
  }
  return boxName
}

/**
 * 토큰 벨리데이션 체크
 * @returns boolean
 */
export const tokenStringCheck = (token: string | null) => {
  console.log('tokentokentokentokentokentoken', token)
  if (token !== null && token !== undefined && !(token == 'null' || token == 'undefined' || token.trim() == ''))
    return true
  else return false
}

/**
 * 토큰 존재여부 체크
 * @returns boolean
 */
export const tokenCheck = () => {
  const auth: string | null = getCookieValue('auth')
  const isAuth: boolean = tokenStringCheck(auth)

  const token = sessionStorage.getItem('SI')
  const isToken = tokenStringCheck(token)

  if (isAuth && isToken) return true

  if (isToken && !isAuth) {
    deleteCookie('idSave')
    deleteCookie('auth')
    deleteCookie('cookieExpires')
    sessionStorage.clear()

    return false
  }

  sessionStorage.removeItem('SI')
  return false
}
