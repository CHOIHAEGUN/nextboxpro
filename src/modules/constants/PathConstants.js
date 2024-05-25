const PathConstants = {
  // depth 1
  MAIN: '/main',
  EVENT: '/event', // 이벤트
  EVENT_APPLY: '/event/apply', // 이벤트 신청
  FAQ: '/faq', // FAQ
  MY_PAGE: '/mypage', // 마이페이지
  BUYER_LETTER: '/buyerletter', //바이어레터
  SELLER_STORE: '/sellerstore', // 상품 > 판매자상점
  PAYMENT: '/payment', //결제
  LOGIN: '/login', //로그인
  LOGOUT: '/logout', //로그아웃
  ENTERPRISE: '/enterprise', // 기업 홍보관
  SERVICE: '/service', //서비스 안내
  COMPANY: '/company', //기업

  // depth 2
  MAIN_SEARCH_RESULT: '/main/searchresult', // 메인 > 검색 결과
  MAIN_SEARCH: '/main/search', // 메인 > 검색 팝업
  MAIN_SEARCH_LIST: '/main/searchList', // 메인 > 검색 팝업
  MAIN_NEW_PRODUCT_SELLER: '/main/newProductSellerResult', // 메인 > 신규 판매자 > 더보기
  MAIN_MY_BIZ_PARTNER: '/main/myBizPartnerResult', // 메인 > 나의 거래처 > 더보기
  MAIN_POPULAR_RESULT: '/main/popularResult', // 메인 > 인기상품 > 더보기
  MAIN_NEW_RESULT: '/main/newProductResult', // 메인 > 새상품 > 더보기
  MAIN_BUNDLE_RESULT: '/main/bundleResult', // 메인 > 묶음상품 > 더보기
  MAIN_CELEB_RESULT: '/main/celebResult', // 메인 > 셀럽초이스 > 더보기
  PRODUCT: '/product', // 상품 > 상품리스트
  PRODUCT_CATEGORY: '/product/category', // 상품 > 카테고리
  PRODUCT_DETAIL: '/product/detail', // 상품 > 상품상세
  PRODUCT_BIND_DETAIL: '/product/bindetail', // 상품 > 묶음상품리스트
  EVENT_DETAIL: '/event/detail', // 이벤트 > 이벤트뷰
  EVENT_LIST: '/event/list', // 이벤트 > 이벤트 목록
  MY_PAGE_MYINFO: '/mypage/myInfo', // 마이페이지 > 내정보

  MY_PAGE_LIKE: '/mypage/like', // 마이페이지 > 위시리스트
  MY_PAGE_EVENT: '/mypage/event', // 마이페이지 > 이벤트관리
  MY_PAGE_ALARM: '/mypage/alarm', //마이페이지 > 알람
  MY_PAGE_CART: '/mypage/cart', // 내정보 > 장바구니
  PAYMENT_RESULT: '/payment/result', //결제하기 > 결제상세
  PAYMENT_NOT_RESULT: '/payment/not/result', //결제하기 > 결제상세 > 결제취소 안내 화면
  ENTERPRISE_AGENCY_LIST: '/enterprise/mypage/agency', // 마이페이지 > 에이전시
  COMPANY_MAIN: '/company/main', //기업메인
  COMPANY_LIST: '/company/list', //기업목록
  COMPANY_CATEGORY: '/company/category', // 기업 > 카테고리
  COMPANY_DETAIL: '/company/detail', // 기업 > 기업상세
  ENTERPRISE_MAIN: '/enterprise/main', //
  ENTERPRISE_DETAIL: '/enterprise/detail', //기업홍보관 상세
  ENTERPRISE_INFO: '/enterprise/info', // 기업정보조회/수정
  SERVICE_NOTICE: '/service/notice', // 서비스 안내 > 공지

  // depth 3
  SERVICE_NOTICE_LIST: '/service/notice/list', //서비스 안내 > 공지 > 공지 목록
  SERVICE_NOTICE_VIEW: '/service/notice/view', //서비스 안내 > 공지 > 공지 상세
  SERVICE_FAQ_LIST: '/service/faq/list', //서비스 안내 > FAQ > FAQ 목록
  SERVICE_FAQ_VIEW: '/service/faq/view', //서비스 안내 > FAQ > FAQ 상세
  SERVICE_INQUIRY_LIST: '/service/inquiry/list', //서비스 안내 > 고객센터 목록
  SERVICE_INQUIRY_VIEW: '/service/inquiry/view', //서비스 안내 > 고객센터 상세
  SERVICE_INQUIRY_WRITE: '/service/inquiry/write', //서비스 안내 > 고객센터 작성

  ENTERPRISE_ORDERMANAGEMENT_SELL_LIST: '/enterprise/orderManagement/sell', // 기업 홍보관 > 판매관리 > 판매내역 목록
  ENTERPRISE_ORDERMANAGEMENT_BUY_LIST: '/enterprise/orderManagement/buy', // 기업 홍보관 > 판매관리 > 구매내역 목록
  ENTERPRISE_PRODUCT_LIST: '/enterprise/product/list', // 기업 홍보관 > 상품 > 개별 상품 리스트
  ENTERPRISE_PRODUCT_REGISTRATION: '/enterprise/product/registration', // 기업 홍보관 > 개별상품 > 등록
  ENTERPRISE_PRODUCT_EDIT: '/enterprise/product/edit', // 기업 홍보관 > 개별상품 > 수정
  ENTERPRISE_SAMPLE_MANAGEMENT: '/enterprise/sample/management', // 기업 홍보관 > 샘플 > 샘플관리
  ENTERPRISE_PRODUCT_SHARE: '/enterprise/product/share', // 상품공유 링크

  // depth 4
  ENTERPRISE_PRODUCT_BUNDLE_LIST: '/enterprise/product/bundle/list', // 기업 홍보관 > 상품 > 묶음 상품 리스트
  ENTERPRISE_PRODUCT_BUNDLE_DETAIL: '/enterprise/product/bundle/detail', // 기업 홍보관 > 상품 > 묶음 상품 리스트
  ENTERPRISE_PRODUCT_SHARE_LIST: '/enterprise/product/share/list', // 기업 홍보관 > 상품 > 공유 상품 리스트
  ENTERPRISE_PRODUCD_PURCHASE_LIST: '/enterprise/sale/purchase/list', // 기업 홍보관 > 판매관리 > 구매내역/ 구매내역목록
  ENTERPRISE_SALE_INQUIRY_LIST: '/enterprise/inquiry/sale/list', // 기업 홍보관 > 문의답변 > 1:1 문의 답변(자기기업홍보관)
  ENTERPRISE_SALE_INQUIRY_DETAIL: '/enterprise/inquiry/sale/detail', // 기업 홍보관 > 문의답변 > 1:1 문의 답변 상세
  ENTERPRISE_PURCHASE_INQUIRY_WRITE: '/enterprise/inquiry/purchase/write', // 기업 홍보관 > 문의답변 > 1:1 문의 작성 하기
  ENTERPRISE_PURCHASE_INQUIRY_LIST: '/enterprise/inquiry/purchase/list' // 기업 홍보관 > 문의답변 > 1:1 문의 답변(타기업홍보관)
}
export default PathConstants
