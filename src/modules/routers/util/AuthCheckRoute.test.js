const { UserAuthKey } = require('modules/contexts/common/LoginContext')
const { checkAuth } = require('./AuthCheckRoute')

const AuthCheck = [
  [UserAuthKey.정회원, UserAuthKey.총괄관리자],
  [UserAuthKey.정회원, UserAuthKey.관리자]
]

const AuthCEO = {
  [UserAuthKey.정회원]: true,
  [UserAuthKey.관리자]: true
}

const AuthManager = {
  [UserAuthKey.정회원]: true,
  [UserAuthKey.관리자]: true
}

const AuthUser = {
  [UserAuthKey.정회원]: true,
  [UserAuthKey.직원]: true
}

it('권한 확인 함수 테스트', () => {
  expect(checkAuth(AuthCheck, AuthCEO)).toBeTruthy()
  expect(checkAuth(AuthCheck, AuthManager)).toBeTruthy()
  expect(checkAuth(AuthCheck, AuthUser)).toBeFalsy()
})
