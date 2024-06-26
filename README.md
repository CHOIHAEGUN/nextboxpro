# 실행

- npm install : package.json 설치
- npm run start : 개발버전 실행
- npm run build : 개발버전 빌드
- npm run build-prod : 배포버전 빌드

# 폴더 설명

- pages : 화면 목록
- assets : 이미지, css 등
- layouts : 화면 레이아웃
- modules : routers, context 등 중요 모듈

# 주요 npm

- helmet : SEO시 사용
- react-router-dom : router 사용
- http-proxy-middleware : cors와 같이 사용
- cors : cors사용
- env-cmd : .env 파일 포함 빌드를 위해 사용
- useHistory : history.push를 위해 사용
- react-device-detect : IE체크
- moment : 날짜 포멧
- react-app-polyfill : ES6 IE호환 설정
- core-js : ES6 IE호환 설정
- regenerator-runtime : ES6 IE호환 설정
- axios : 비동기 작업 처리

# 주요 공통 설정

- IE체크
- 상대경로 설정 : jscofing.json
- url 공통파일 관리
- 기본 로딩바
- notFound 페이지 설정
- ES6문법 IE호환 적용

# 주요 예제

- contextapi 예제
- 외부 스크립트 사용 예제
- img src 설정 예제
- checkbox 전체체크 예제
- 여러개 컴포넌트 동시 사용하기

# .env 설명

- REACT_APP_API_URL : backend 호출 url
- PORT : front 실행 PORT 설정

# 실행 오류시

1. npm start가 동작이 안하는 경우 node_modules의 캐시폴더 삭제 후 실행
2. npm install 다시 실행

# HTTPS 설정

## (chrome 브라우저 업데이트 후 https 로 실행되어야 함)

1. 참고 URL : https://github-wiki-see.page/m/dltmdrbtjd/HANG/wiki/local-https-%ED%99%98%EA%B2%BD%EC%84%A4%EC%A0%95
2. chocolatey 설치
3. choco install mkcert 명령어 실행
4. 관리자 모드 PowerShell 프로그램 실행해서 SSL 인증서 생성하기
5. 아래 명령어 실행

- mkcert -install
- mkcert \*.ibkbox.net 127.0.0.1 ::1

6. env 파일에 아래 내용 추가

- HTTPS=true
- SSL_CRT_FILE=\_wildcard.ibkbox.net+2.pem
- SSL_KEY_FILE=\_wildcard.ibkbox.net+2-key.pem

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
# or             port         hostname               로컬 https 셋팅
"dev": "next dev -p3000 -H devinvest.ibkbox.net --experimental-https",
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
