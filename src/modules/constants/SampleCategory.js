import PathConstants from './PathConstants'

export const SampleEnterpriseList = {
  depthTwo: [
    { ctgyNm: '기업(판매자)정보', ctgyCd: 'ENT01', path: PathConstants.ENTERPRISE_INFO },
    { ctgyNm: '상품관리', ctgyCd: 'ENT02', path: PathConstants.ENTERPRISE_PRODUCT_LIST },
    { ctgyNm: '판매관리', ctgyCd: 'ENT03', path: PathConstants.ENTERPRISE_ORDERMANAGEMENT_BUY_LIST },
    { ctgyNm: '문의답변', ctgyCd: 'ENT04', path: PathConstants.ENTERPRISE_SALE_INQUIRY_LIST }
  ],
  depthThr: [
    {
      ctgyNm: '기업 정보 조회/수정',
      ctgyCd: 'ENT0101',
      ctgyParentCd: 'ENT01',
      path: PathConstants.ENTERPRISE_INFO
    },
    { ctgyNm: '에이전시 관리', ctgyCd: 'ENT0102', ctgyParentCd: 'ENT01', path: PathConstants.ENTERPRISE_AGENCY_LIST },
    {
      ctgyNm: '개별 상품 등록',
      ctgyCd: 'ENT0211',
      ctgyParentCd: 'ENT02',
      path: PathConstants.ENTERPRISE_PRODUCT_REGISTRATION
    },
    { ctgyNm: '상품 조회/수정', ctgyCd: 'ENT0212', ctgyParentCd: 'ENT02', path: PathConstants.ENTERPRISE_PRODUCT_LIST },
    {
      ctgyNm: '구매내역',
      ctgyCd: 'ENT0321',
      ctgyParentCd: 'ENT03',
      path: PathConstants.ENTERPRISE_ORDERMANAGEMENT_BUY_LIST
    },
    {
      ctgyNm: '판매내역',
      ctgyCd: 'ENT0322',
      ctgyParentCd: 'ENT03',
      path: PathConstants.ENTERPRISE_ORDERMANAGEMENT_SELL_LIST
    },
    {
      ctgyNm: '1:1 문의 답변',
      ctgyCd: 'ENT0431',
      ctgyParentCd: 'ENT04',
      path: PathConstants.ENTERPRISE_SALE_INQUIRY_LIST
    }
  ]
}

export const SampleEnterprise = [
  { ctgyNm: '기업(판매자)정보', ctgyCd: 'ENT01', path: PathConstants.ENTERPRISE_INFO },
  { ctgyNm: '상품관리', ctgyCd: 'ENT02', path: PathConstants.ENTERPRISE_PRODUCT_LIST },
  { ctgyNm: '판매관리', ctgyCd: 'ENT03', path: PathConstants.ENTERPRISE_ORDERMANAGEMENT_BUY_LIST },
  { ctgyNm: '문의답변', ctgyCd: 'ENT04', path: PathConstants.ENTERPRISE_SALE_INQUIRY_LIST }
]
export const SampleEnterpriseSub = {
  ENT01: [
    {
      ctgyNm: '기업 정보 조회/수정',
      ctgyCd: 'ENT0101',
      ctgyParentCd: 'ENT01',
      path: PathConstants.ENTERPRISE_INFO
    },
    { ctgyNm: '에이전시 관리', ctgyCd: 'ENT0102', ctgyParentCd: 'ENT01', path: PathConstants.ENTERPRISE_AGENCY_LIST }
  ],
  ENT02: [
    {
      ctgyNm: '개별 상품 등록',
      ctgyCd: 'ENT0211',
      ctgyParentCd: 'ENT02',
      path: PathConstants.ENTERPRISE_PRODUCT_REGISTRATION
    },
    { ctgyNm: '상품 조회/수정', ctgyCd: 'ENT0212', ctgyParentCd: 'ENT02', path: PathConstants.ENTERPRISE_PRODUCT_LIST }
  ],
  ENT03: [
    {
      ctgyNm: '구매내역',
      ctgyCd: 'ENT0321',
      ctgyParentCd: 'ENT03',
      path: PathConstants.ENTERPRISE_ORDERMANAGEMENT_BUY_LIST
    },
    {
      ctgyNm: '판매내역',
      ctgyCd: 'ENT0322',
      ctgyParentCd: 'ENT03',
      path: PathConstants.ENTERPRISE_ORDERMANAGEMENT_SELL_LIST
    }
  ],
  ENT04: [
    {
      ctgyNm: '1:1 문의 답변',
      ctgyCd: 'ENT0431',
      ctgyParentCd: 'ENT04',
      path: PathConstants.ENTERPRISE_SALE_INQUIRY_LIST
    }
  ]
}

export const SampleCompanyList = {
  depthTwo: [
    { ctgyNm: '서비스업', ctgyCd: 'COMP1' },
    { ctgyNm: '금융/은행업', ctgyCd: 'COMP2' },
    { ctgyNm: 'IT/정보통신', ctgyCd: 'COMP3' },
    { ctgyNm: '판매/유통업', ctgyCd: 'COMP4' }
  ],
  depthThr: [
    { ctgyNm: '호텔/여행/항공', ctgyCd: 'COMP101', ctgyParentCd: 'COMP1' },
    { ctgyNm: '음식료/외식/프랜차이즈', ctgyCd: 'COMP102', ctgyParentCd: 'COMP1' },
    { ctgyNm: '스포츠/여가/레저', ctgyCd: 'COMP103', ctgyParentCd: 'COMP1' },
    { ctgyNm: '뷰티/미용', ctgyCd: 'COMP104', ctgyParentCd: 'COMP1' },
    { ctgyNm: '콜센터/아웃소싱/기타', ctgyCd: 'COMP105', ctgyParentCd: 'COMP1' },
    { ctgyNm: '정비/AS/카센터', ctgyCd: 'COMP106', ctgyParentCd: 'COMP1' },
    { ctgyNm: '렌탈/임대/리스', ctgyCd: 'COMP107', ctgyParentCd: 'COMP1' },
    { ctgyNm: '서치펌/헤드헌팅', ctgyCd: 'COMP108', ctgyParentCd: 'COMP1' },
    { ctgyNm: '시설관리/보안/경비', ctgyCd: 'COMP109', ctgyParentCd: 'COMP1' },
    { ctgyNm: '웨딩/상조/이벤트', ctgyCd: 'COMP110', ctgyParentCd: 'COMP1' },
    { ctgyNm: '은행/금융', ctgyCd: 'COMP211', ctgyParentCd: 'COMP2' },
    { ctgyNm: '캐피탈/대출', ctgyCd: 'COMP212', ctgyParentCd: 'COMP2' },
    { ctgyNm: '증권/보험/카드', ctgyCd: 'COMP213', ctgyParentCd: 'COMP2' },
    { ctgyNm: '솔루션/SI/CRM/ERP', ctgyCd: 'COMP321', ctgyParentCd: 'COMP3' },
    { ctgyNm: '웹에이전시', ctgyCd: 'COMP322', ctgyParentCd: 'COMP3' },
    { ctgyNm: '쇼핑몰/오픈마켓/소셜커머스', ctgyCd: 'COMP323', ctgyParentCd: 'COMP3' },
    { ctgyNm: '포털/컨텐츠/커뮤니티', ctgyCd: 'COMP324', ctgyParentCd: 'COMP3' },
    { ctgyNm: '백화점/유통/도소매', ctgyCd: 'COMP431', ctgyParentCd: 'COMP4' },
    { ctgyNm: '무역/상사', ctgyCd: 'COMP432', ctgyParentCd: 'COMP4' },
    { ctgyNm: '물류/운송/배송', ctgyCd: 'COMP433', ctgyParentCd: 'COMP4' }
  ]
}

export const SampleCompany = [
  { ctgyNm: '서비스업', ctgyCd: 'COMP1' },
  { ctgyNm: '금융/은행업', ctgyCd: 'COMP2' },
  { ctgyNm: 'IT/정보통신', ctgyCd: 'COMP3' },
  { ctgyNm: '판매/유통업', ctgyCd: 'COMP4' }
]
export const SampleCompanySub = {
  COMP1: [
    { ctgyNm: '호텔/여행/항공', ctgyCd: 'COMP101', ctgyParentCd: 'COMP1' },
    { ctgyNm: '음식료/외식/프랜차이즈', ctgyCd: 'COMP102', ctgyParentCd: 'COMP1' },
    { ctgyNm: '스포츠/여가/레저', ctgyCd: 'COMP103', ctgyParentCd: 'COMP1' },
    { ctgyNm: '뷰티/미용', ctgyCd: 'COMP104', ctgyParentCd: 'COMP1' },
    { ctgyNm: '콜센터/아웃소싱/기타', ctgyCd: 'COMP105', ctgyParentCd: 'COMP1' },
    { ctgyNm: '정비/AS/카센터', ctgyCd: 'COMP106', ctgyParentCd: 'COMP1' },
    { ctgyNm: '렌탈/임대/리스', ctgyCd: 'COMP107', ctgyParentCd: 'COMP1' },
    { ctgyNm: '서치펌/헤드헌팅', ctgyCd: 'COMP108', ctgyParentCd: 'COMP1' },
    { ctgyNm: '시설관리/보안/경비', ctgyCd: 'COMP109', ctgyParentCd: 'COMP1' },
    { ctgyNm: '웨딩/상조/이벤트', ctgyCd: 'COMP110', ctgyParentCd: 'COMP1' }
  ],
  COMP2: [
    { ctgyNm: '은행/금융', ctgyCd: 'COMP211', ctgyParentCd: 'COMP2' },
    { ctgyNm: '캐피탈/대출', ctgyCd: 'COMP212', ctgyParentCd: 'COMP2' },
    { ctgyNm: '증권/보험/카드', ctgyCd: 'COMP213', ctgyParentCd: 'COMP2' }
  ],
  COMP3: [
    { ctgyNm: '솔루션/SI/CRM/ERP', ctgyCd: 'COMP321', ctgyParentCd: 'COMP3' },
    { ctgyNm: '웹에이전시', ctgyCd: 'COMP322', ctgyParentCd: 'COMP3' },
    { ctgyNm: '쇼핑몰/오픈마켓/소셜커머스', ctgyCd: 'COMP323', ctgyParentCd: 'COMP3' },
    { ctgyNm: '포털/컨텐츠/커뮤니티', ctgyCd: 'COMP324', ctgyParentCd: 'COMP3' }
  ],
  COMP4: [
    { ctgyNm: '백화점/유통/도소매', ctgyCd: 'COMP431', ctgyParentCd: 'COMP4' },
    { ctgyNm: '무역/상사', ctgyCd: 'COMP432', ctgyParentCd: 'COMP4' },
    { ctgyNm: '물류/운송/배송', ctgyCd: 'COMP433', ctgyParentCd: 'COMP4' }
  ]
}

export const SampleProduct = {
  depthOne: [
    {
      ctgyNm: '출산/육아',
      ctgyParentCd: '01',
      ctgyCd: '0102',
      useYn: 'Y',
      value: '0102',
      label: '출산/육아'
    },
    {
      ctgyNm: '트렌드패션',
      ctgyParentCd: '01',
      ctgyCd: '0103',
      useYn: 'Y',
      value: '0103',
      label: '트렌드패션'
    },
    {
      ctgyNm: '도서/취미/펫',
      ctgyParentCd: '01',
      ctgyCd: '0108',
      useYn: 'Y',
      value: '0108',
      label: '도서/취미/펫'
    },
    {
      ctgyNm: '스포츠/레저/자동차',
      ctgyParentCd: '01',
      ctgyCd: '0101',
      useYn: 'N',
      value: '0101',
      label: '스포츠/레저/자동차'
    },
    {
      ctgyNm: '뷰티',
      ctgyParentCd: '01',
      ctgyCd: '0104',
      useYn: 'N',
      value: '0104',
      label: '뷰티'
    },
    {
      ctgyNm: '가구/인테리어',
      ctgyParentCd: '01',
      ctgyCd: '0105',
      useYn: 'N',
      value: '0105',
      label: '가구/인테리어'
    },
    {
      ctgyNm: '생활/건강',
      ctgyParentCd: '01',
      ctgyCd: '0106',
      useYn: 'N',
      value: '0106',
      label: '생활/건강'
    },
    {
      ctgyNm: '가전/디지털',
      ctgyParentCd: '01',
      ctgyCd: '0107',
      useYn: 'N',
      value: '0107',
      label: '가전/디지털'
    },
    {
      ctgyNm: '여행/티켓/e쿠폰',
      ctgyParentCd: '01',
      ctgyCd: '0109',
      useYn: 'N',
      value: '0109',
      label: '여행/티켓/e쿠폰'
    }
  ],
  depthTwo: {
    '0102': [
      {
        ctgyNm: '유아동패션',
        ctgyParentCd: '0102',
        ctgyCd: '010202',
        useYn: 'Y',
        value: '010202',
        label: '유아동패션'
      },
      {
        ctgyNm: '출산',
        ctgyParentCd: '0102',
        ctgyCd: '010201',
        useYn: 'N',
        value: '010201',
        label: '출산'
      }
    ],
    '0103': [
      {
        ctgyNm: '여성',
        ctgyParentCd: '0103',
        ctgyCd: '010301',
        useYn: 'Y',
        value: '010301',
        label: '여성'
      },
      {
        ctgyNm: '남성',
        ctgyParentCd: '0103',
        ctgyCd: '010302',
        useYn: 'Y',
        value: '010302',
        label: '남성'
      },
      {
        ctgyNm: '공용',
        ctgyParentCd: '0103',
        ctgyCd: '010303',
        useYn: 'Y',
        value: '010303',
        label: '공용'
      }
    ],
    '0108': [
      {
        ctgyNm: '악기/취미',
        ctgyParentCd: '0108',
        ctgyCd: '010802',
        useYn: 'Y',
        value: '010802',
        label: '악기/취미'
      },
      {
        ctgyNm: '도서/문구',
        ctgyParentCd: '0108',
        ctgyCd: '010801',
        useYn: 'N',
        value: '010801',
        label: '도서/문구'
      },
      {
        ctgyNm: '펫',
        ctgyParentCd: '0108',
        ctgyCd: '010803',
        useYn: 'N',
        value: '010803',
        label: '펫'
      }
    ],
    '0101': [
      {
        ctgyNm: '스포츠',
        ctgyParentCd: '0101',
        ctgyCd: '010101',
        useYn: 'N',
        value: '010101',
        label: '스포츠'
      },
      {
        ctgyNm: '레저',
        ctgyParentCd: '0101',
        ctgyCd: '010102',
        useYn: 'N',
        value: '010102',
        label: '레저'
      },
      {
        ctgyNm: '자동차/공구',
        ctgyParentCd: '0101',
        ctgyCd: '010103',
        useYn: 'N',
        value: '010103',
        label: '자동차/공구'
      }
    ],
    '0104': [
      {
        ctgyNm: '뷰티',
        ctgyParentCd: '0104',
        ctgyCd: '010401',
        useYn: 'N',
        value: '010401',
        label: '뷰티'
      }
    ],
    '0105': [
      {
        ctgyNm: '가구',
        ctgyParentCd: '0105',
        ctgyCd: '010501',
        useYn: 'N',
        value: '010501',
        label: '가구'
      },
      {
        ctgyNm: '인테리어',
        ctgyParentCd: '0105',
        ctgyCd: '010502',
        useYn: 'N',
        value: '010502',
        label: '인테리어'
      }
    ],
    '0106': [
      {
        ctgyNm: '생필품',
        ctgyParentCd: '0106',
        ctgyCd: '010601',
        useYn: 'N',
        value: '010601',
        label: '생필품'
      },
      {
        ctgyNm: '건강',
        ctgyParentCd: '0106',
        ctgyCd: '010602',
        useYn: 'N',
        value: '010602',
        label: '건강'
      }
    ],
    '0107': [
      {
        ctgyNm: '가전',
        ctgyParentCd: '0107',
        ctgyCd: '010701',
        useYn: 'N',
        value: '010701',
        label: '가전'
      },
      {
        ctgyNm: '컴퓨터',
        ctgyParentCd: '0107',
        ctgyCd: '010702',
        useYn: 'N',
        value: '010702',
        label: '컴퓨터'
      }
    ],
    '0109': [
      {
        ctgyNm: '여행/티켓/e쿠폰',
        ctgyParentCd: '0109',
        ctgyCd: '010901',
        useYn: 'N',
        value: '010901',
        label: '여행/티켓/e쿠폰'
      }
    ]
  },
  depthThree: {
    '010202': [
      {
        ctgyNm: '신생아의류',
        ctgyParentCd: '010202',
        ctgyCd: '01020216',
        useYn: 'Y',
        value: '01020216',
        label: '신생아의류'
      },
      {
        ctgyNm: '유아의류',
        ctgyParentCd: '010202',
        ctgyCd: '01020217',
        useYn: 'Y',
        value: '01020217',
        label: '유아의류'
      },
      {
        ctgyNm: '아동/주니어의류',
        ctgyParentCd: '010202',
        ctgyCd: '01020218',
        useYn: 'Y',
        value: '01020218',
        label: '아동/주니어의류'
      },
      {
        ctgyNm: '유아동신발',
        ctgyParentCd: '010202',
        ctgyCd: '01020219',
        useYn: 'Y',
        value: '01020219',
        label: '유아동신발'
      },
      {
        ctgyNm: '유아동잡화',
        ctgyParentCd: '010202',
        ctgyCd: '01020220',
        useYn: 'Y',
        value: '01020220',
        label: '유아동잡화'
      }
    ],
    '010301': [
      {
        ctgyNm: '여성의류',
        ctgyParentCd: '010301',
        ctgyCd: '01030101',
        useYn: 'Y',
        value: '01030101',
        label: '여성의류'
      },
      {
        ctgyNm: '여성신발',
        ctgyParentCd: '010301',
        ctgyCd: '01030102',
        useYn: 'Y',
        value: '01030102',
        label: '여성신발'
      },
      {
        ctgyNm: '여성가방',
        ctgyParentCd: '010301',
        ctgyCd: '01030103',
        useYn: 'Y',
        value: '01030103',
        label: '여성가방'
      },
      {
        ctgyNm: '임부복/소품',
        ctgyParentCd: '010301',
        ctgyCd: '01030104',
        useYn: 'Y',
        value: '01030104',
        label: '임부복/소품'
      }
    ],
    '010302': [
      {
        ctgyNm: '남성의류',
        ctgyParentCd: '010302',
        ctgyCd: '01030201',
        useYn: 'Y',
        value: '01030201',
        label: '남성의류'
      },
      {
        ctgyNm: '남성신발',
        ctgyParentCd: '010302',
        ctgyCd: '01030202',
        useYn: 'Y',
        value: '01030202',
        label: '남성신발'
      },
      {
        ctgyNm: '남성가방',
        ctgyParentCd: '010302',
        ctgyCd: '01030203',
        useYn: 'Y',
        value: '01030203',
        label: '남성가방'
      }
    ],
    '010303': [
      {
        ctgyNm: '언더웨어/잠옷',
        ctgyParentCd: '010303',
        ctgyCd: '01030301',
        useYn: 'Y',
        value: '01030301',
        label: '언더웨어/잠옷'
      },
      {
        ctgyNm: '여행가방/소품',
        ctgyParentCd: '010303',
        ctgyCd: '01030302',
        useYn: 'Y',
        value: '01030302',
        label: '여행가방/소품'
      },
      {
        ctgyNm: '지갑/벨트',
        ctgyParentCd: '010303',
        ctgyCd: '01030303',
        useYn: 'Y',
        value: '01030303',
        label: '지갑/벨트'
      },
      {
        ctgyNm: '쥬얼리',
        ctgyParentCd: '010303',
        ctgyCd: '01030304',
        useYn: 'Y',
        value: '01030304',
        label: '쥬얼리'
      },
      {
        ctgyNm: '시계',
        ctgyParentCd: '010303',
        ctgyCd: '01030305',
        useYn: 'Y',
        value: '01030305',
        label: '시계'
      },
      {
        ctgyNm: '패션잡화',
        ctgyParentCd: '010303',
        ctgyCd: '01030306',
        useYn: 'Y',
        value: '01030306',
        label: '패션잡화'
      }
    ],
    '010802': [
      {
        ctgyNm: '꽃/원예',
        ctgyParentCd: '010802',
        ctgyCd: '01080203',
        useYn: 'Y',
        value: '01080203',
        label: '꽃/원예'
      },
      {
        ctgyNm: '꽃배달',
        ctgyParentCd: '010802',
        ctgyCd: '01080204',
        useYn: 'Y',
        value: '01080204',
        label: '꽃배달'
      },
      {
        ctgyNm: '악기',
        ctgyParentCd: '010802',
        ctgyCd: '01080201',
        useYn: 'N',
        value: '01080201',
        label: '악기'
      },
      {
        ctgyNm: '취미',
        ctgyParentCd: '010802',
        ctgyCd: '01080202',
        useYn: 'N',
        value: '01080202',
        label: '취미'
      }
    ],
    '010101': [
      {
        ctgyNm: '스포츠 신발',
        ctgyParentCd: '010101',
        ctgyCd: '01010101',
        useYn: 'N',
        value: '01010101',
        label: '스포츠 신발'
      },
      {
        ctgyNm: '골프',
        ctgyParentCd: '010101',
        ctgyCd: '01010102',
        useYn: 'N',
        value: '01010102',
        label: '골프'
      },
      {
        ctgyNm: '수영/수상레저',
        ctgyParentCd: '010101',
        ctgyCd: '01010103',
        useYn: 'N',
        value: '01010103',
        label: '수영/수상레저'
      },
      {
        ctgyNm: '스키/보드',
        ctgyParentCd: '010101',
        ctgyCd: '01010104',
        useYn: 'N',
        value: '01010104',
        label: '스키/보드'
      },
      {
        ctgyNm: '구기/라켓/스포츠',
        ctgyParentCd: '010101',
        ctgyCd: '01010105',
        useYn: 'N',
        value: '01010105',
        label: '구기/라켓/스포츠'
      },
      {
        ctgyNm: '헬스',
        ctgyParentCd: '010101',
        ctgyCd: '01010106',
        useYn: 'N',
        value: '01010106',
        label: '헬스'
      },
      {
        ctgyNm: '요가/필라테스',
        ctgyParentCd: '010101',
        ctgyCd: '01010107',
        useYn: 'N',
        value: '01010107',
        label: '요가/필라테스'
      }
    ],
    '010102': [
      {
        ctgyNm: '전동/인라인/킥보드',
        ctgyParentCd: '010102',
        ctgyCd: '01010208',
        useYn: 'N',
        value: '01010208',
        label: '전동/인라인/킥보드'
      },
      {
        ctgyNm: '자전거',
        ctgyParentCd: '010102',
        ctgyCd: '01010209',
        useYn: 'N',
        value: '01010209',
        label: '자전거'
      },
      {
        ctgyNm: '캠핑',
        ctgyParentCd: '010102',
        ctgyCd: '01010210',
        useYn: 'N',
        value: '01010210',
        label: '캠핑'
      },
      {
        ctgyNm: '낚시',
        ctgyParentCd: '010102',
        ctgyCd: '01010211',
        useYn: 'N',
        value: '01010211',
        label: '낚시'
      },
      {
        ctgyNm: '오토바이/스쿠터',
        ctgyParentCd: '010102',
        ctgyCd: '01010212',
        useYn: 'N',
        value: '01010212',
        label: '오토바이/스쿠터'
      },
      {
        ctgyNm: '등산/아웃도어',
        ctgyParentCd: '010102',
        ctgyCd: '01010213',
        useYn: 'N',
        value: '01010213',
        label: '등산/아웃도어'
      }
    ],
    '010103': [
      {
        ctgyNm: '자동차용품',
        ctgyParentCd: '010103',
        ctgyCd: '01010314',
        useYn: 'N',
        value: '01010314',
        label: '자동차용품'
      },
      {
        ctgyNm: '자동차기기',
        ctgyParentCd: '010103',
        ctgyCd: '01010315',
        useYn: 'N',
        value: '01010315',
        label: '자동차기기'
      },
      {
        ctgyNm: '공구',
        ctgyParentCd: '010103',
        ctgyCd: '01010316',
        useYn: 'N',
        value: '01010316',
        label: '공구'
      },
      {
        ctgyNm: '전기/산업자재',
        ctgyParentCd: '010103',
        ctgyCd: '01010317',
        useYn: 'N',
        value: '01010317',
        label: '전기/산업자재'
      },
      {
        ctgyNm: '안전/보안용품',
        ctgyParentCd: '010103',
        ctgyCd: '01010318',
        useYn: 'N',
        value: '01010318',
        label: '안전/보안용품'
      }
    ],
    '010201': [
      {
        ctgyNm: '기저귀',
        ctgyParentCd: '010201',
        ctgyCd: '01020101',
        useYn: 'N',
        value: '01020101',
        label: '기저귀'
      },
      {
        ctgyNm: '분유',
        ctgyParentCd: '010201',
        ctgyCd: '01020102',
        useYn: 'N',
        value: '01020102',
        label: '분유'
      },
      {
        ctgyNm: '물티슈',
        ctgyParentCd: '010201',
        ctgyCd: '01020103',
        useYn: 'N',
        value: '01020103',
        label: '물티슈'
      },
      {
        ctgyNm: '장난감',
        ctgyParentCd: '010201',
        ctgyCd: '01020104',
        useYn: 'N',
        value: '01020104',
        label: '장난감'
      },
      {
        ctgyNm: '출산/돌기념품',
        ctgyParentCd: '010201',
        ctgyCd: '01020105',
        useYn: 'N',
        value: '01020105',
        label: '출산/돌기념품'
      },
      {
        ctgyNm: '순금/돌반지',
        ctgyParentCd: '010201',
        ctgyCd: '01020106',
        useYn: 'N',
        value: '01020106',
        label: '순금/돌반지'
      },
      {
        ctgyNm: '이유용품',
        ctgyParentCd: '010201',
        ctgyCd: '01020107',
        useYn: 'N',
        value: '01020107',
        label: '이유용품'
      },
      {
        ctgyNm: '수유용품',
        ctgyParentCd: '010201',
        ctgyCd: '01020108',
        useYn: 'N',
        value: '01020108',
        label: '수유용품'
      },
      {
        ctgyNm: '유아동식/영양제',
        ctgyParentCd: '010201',
        ctgyCd: '01020109',
        useYn: 'N',
        value: '01020109',
        label: '유아동식/영양제'
      },
      {
        ctgyNm: '유아목욕/스킨케어',
        ctgyParentCd: '010201',
        ctgyCd: '01020110',
        useYn: 'N',
        value: '01020110',
        label: '유아목욕/스킨케어'
      },
      {
        ctgyNm: '유아세제/위생용품',
        ctgyParentCd: '010201',
        ctgyCd: '01020111',
        useYn: 'N',
        value: '01020111',
        label: '유아세제/위생용품'
      },
      {
        ctgyNm: '유아안전/실내용품',
        ctgyParentCd: '010201',
        ctgyCd: '01020112',
        useYn: 'N',
        value: '01020112',
        label: '유아안전/실내용품'
      },
      {
        ctgyNm: '외출용품',
        ctgyParentCd: '010201',
        ctgyCd: '01020113',
        useYn: 'N',
        value: '01020113',
        label: '외출용품'
      },
      {
        ctgyNm: '유아가구/침구',
        ctgyParentCd: '010201',
        ctgyCd: '01020114',
        useYn: 'N',
        value: '01020114',
        label: '유아가구/침구'
      },
      {
        ctgyNm: '임부복/소품',
        ctgyParentCd: '010201',
        ctgyCd: '01020115',
        useYn: 'N',
        value: '01020115',
        label: '임부복/소품'
      }
    ],
    '010401': [
      {
        ctgyNm: '스킨케어',
        ctgyParentCd: '010401',
        ctgyCd: '01040101',
        useYn: 'N',
        value: '01040101',
        label: '스킨케어'
      },
      {
        ctgyNm: '메이크업',
        ctgyParentCd: '010401',
        ctgyCd: '01040102',
        useYn: 'N',
        value: '01040102',
        label: '메이크업'
      },
      {
        ctgyNm: '선케어',
        ctgyParentCd: '010401',
        ctgyCd: '01040103',
        useYn: 'N',
        value: '01040103',
        label: '선케어'
      },
      {
        ctgyNm: '클렌징/필링',
        ctgyParentCd: '010401',
        ctgyCd: '01040104',
        useYn: 'N',
        value: '01040104',
        label: '클렌징/필링'
      },
      {
        ctgyNm: '남성화장품',
        ctgyParentCd: '010401',
        ctgyCd: '01040105',
        useYn: 'N',
        value: '01040105',
        label: '남성화장품'
      },
      {
        ctgyNm: '향수',
        ctgyParentCd: '010401',
        ctgyCd: '01040106',
        useYn: 'N',
        value: '01040106',
        label: '향수'
      },
      {
        ctgyNm: '헤어케어',
        ctgyParentCd: '010401',
        ctgyCd: '01040107',
        useYn: 'N',
        value: '01040107',
        label: '헤어케어'
      },
      {
        ctgyNm: '바디케어',
        ctgyParentCd: '010401',
        ctgyCd: '01040108',
        useYn: 'N',
        value: '01040108',
        label: '바디케어'
      },
      {
        ctgyNm: '네일케어',
        ctgyParentCd: '010401',
        ctgyCd: '01040109',
        useYn: 'N',
        value: '01040109',
        label: '네일케어'
      },
      {
        ctgyNm: '뷰티소품',
        ctgyParentCd: '010401',
        ctgyCd: '01040110',
        useYn: 'N',
        value: '01040110',
        label: '뷰티소품'
      }
    ],
    '010501': [
      {
        ctgyNm: '거실가구',
        ctgyParentCd: '010501',
        ctgyCd: '01050101',
        useYn: 'N',
        value: '01050101',
        label: '거실가구'
      },
      {
        ctgyNm: '침실가구',
        ctgyParentCd: '010501',
        ctgyCd: '01050102',
        useYn: 'N',
        value: '01050102',
        label: '침실가구'
      },
      {
        ctgyNm: '주방가구',
        ctgyParentCd: '010501',
        ctgyCd: '01050103',
        useYn: 'N',
        value: '01050103',
        label: '주방가구'
      },
      {
        ctgyNm: '수납가구',
        ctgyParentCd: '010501',
        ctgyCd: '01050104',
        useYn: 'N',
        value: '01050104',
        label: '수납가구'
      },
      {
        ctgyNm: '서재/사무용가구',
        ctgyParentCd: '010501',
        ctgyCd: '01050105',
        useYn: 'N',
        value: '01050105',
        label: '서재/사무용가구'
      },
      {
        ctgyNm: '유아동가구',
        ctgyParentCd: '010501',
        ctgyCd: '01050106',
        useYn: 'N',
        value: '01050106',
        label: '유아동가구'
      },
      {
        ctgyNm: '아웃도어가구',
        ctgyParentCd: '010501',
        ctgyCd: '01050107',
        useYn: 'N',
        value: '01050107',
        label: '아웃도어가구'
      },
      {
        ctgyNm: '리모델링가구',
        ctgyParentCd: '010501',
        ctgyCd: '01050108',
        useYn: 'N',
        value: '01050108',
        label: '리모델링가구'
      }
    ],
    '010502': [
      {
        ctgyNm: '침구',
        ctgyParentCd: '010502',
        ctgyCd: '01050209',
        useYn: 'N',
        value: '01050209',
        label: '침구'
      },
      {
        ctgyNm: '홈패브릭/수예',
        ctgyParentCd: '010502',
        ctgyCd: '01050210',
        useYn: 'N',
        value: '01050210',
        label: '홈패브릭/수예'
      },
      {
        ctgyNm: '커튼/블라인드',
        ctgyParentCd: '010502',
        ctgyCd: '01050211',
        useYn: 'N',
        value: '01050211',
        label: '커튼/블라인드'
      },
      {
        ctgyNm: '카펫/러그',
        ctgyParentCd: '010502',
        ctgyCd: '01050212',
        useYn: 'N',
        value: '01050212',
        label: '카펫/러그'
      },
      {
        ctgyNm: '조명',
        ctgyParentCd: '010502',
        ctgyCd: '01050213',
        useYn: 'N',
        value: '01050213',
        label: '조명'
      },
      {
        ctgyNm: 'DIY자재/용품',
        ctgyParentCd: '010502',
        ctgyCd: '01050214',
        useYn: 'N',
        value: '01050214',
        label: 'DIY자재/용품'
      },
      {
        ctgyNm: '인테리어소품',
        ctgyParentCd: '010502',
        ctgyCd: '01050215',
        useYn: 'N',
        value: '01050215',
        label: '인테리어소품'
      }
    ],
    '010601': [
      {
        ctgyNm: '세탁용품',
        ctgyParentCd: '010601',
        ctgyCd: '01060101',
        useYn: 'N',
        value: '01060101',
        label: '세탁용품'
      },
      {
        ctgyNm: '세제/방향/살충',
        ctgyParentCd: '010601',
        ctgyCd: '01060102',
        useYn: 'N',
        value: '01060102',
        label: '세제/방향/살충'
      },
      {
        ctgyNm: '주방용품',
        ctgyParentCd: '010601',
        ctgyCd: '01060103',
        useYn: 'N',
        value: '01060103',
        label: '주방용품'
      },
      {
        ctgyNm: '주방잡화',
        ctgyParentCd: '010601',
        ctgyCd: '01060104',
        useYn: 'N',
        value: '01060104',
        label: '주방잡화'
      },
      {
        ctgyNm: '욕실용품',
        ctgyParentCd: '010601',
        ctgyCd: '01060105',
        useYn: 'N',
        value: '01060105',
        label: '욕실용품'
      },
      {
        ctgyNm: '청소용품',
        ctgyParentCd: '010601',
        ctgyCd: '01060106',
        useYn: 'N',
        value: '01060106',
        label: '청소용품'
      },
      {
        ctgyNm: '수납정리용품',
        ctgyParentCd: '010601',
        ctgyCd: '01060107',
        useYn: 'N',
        value: '01060107',
        label: '수납정리용품'
      },
      {
        ctgyNm: '생활잡화',
        ctgyParentCd: '010601',
        ctgyCd: '01060108',
        useYn: 'N',
        value: '01060108',
        label: '생활잡화'
      },
      {
        ctgyNm: '구강/세안/면도',
        ctgyParentCd: '010601',
        ctgyCd: '01060109',
        useYn: 'N',
        value: '01060109',
        label: '구강/세안/면도'
      },
      {
        ctgyNm: '화장지',
        ctgyParentCd: '010601',
        ctgyCd: '01060110',
        useYn: 'N',
        value: '01060110',
        label: '화장지'
      },
      {
        ctgyNm: '생리대/성인기저귀',
        ctgyParentCd: '010601',
        ctgyCd: '01060111',
        useYn: 'N',
        value: '01060111',
        label: '생리대/성인기저귀'
      }
    ],
    '010602': [
      {
        ctgyNm: '안마용품',
        ctgyParentCd: '010602',
        ctgyCd: '01060212',
        useYn: 'N',
        value: '01060212',
        label: '안마용품'
      },
      {
        ctgyNm: '온열/찜질용품',
        ctgyParentCd: '010602',
        ctgyCd: '01060213',
        useYn: 'N',
        value: '01060213',
        label: '온열/찜질용품'
      },
      {
        ctgyNm: '저주파/적외선용품',
        ctgyParentCd: '010602',
        ctgyCd: '01060214',
        useYn: 'N',
        value: '01060214',
        label: '저주파/적외선용품'
      },
      {
        ctgyNm: '건강관리용품',
        ctgyParentCd: '010602',
        ctgyCd: '01060215',
        useYn: 'N',
        value: '01060215',
        label: '건강관리용품'
      },
      {
        ctgyNm: '건강측정용품',
        ctgyParentCd: '010602',
        ctgyCd: '01060216',
        useYn: 'N',
        value: '01060216',
        label: '건강측정용품'
      },
      {
        ctgyNm: '당뇨관리용품',
        ctgyParentCd: '010602',
        ctgyCd: '01060217',
        useYn: 'N',
        value: '01060217',
        label: '당뇨관리용품'
      },
      {
        ctgyNm: '몸매관리용품',
        ctgyParentCd: '010602',
        ctgyCd: '01060218',
        useYn: 'N',
        value: '01060218',
        label: '몸매관리용품'
      },
      {
        ctgyNm: '눈건강용품',
        ctgyParentCd: '010602',
        ctgyCd: '01060219',
        useYn: 'N',
        value: '01060219',
        label: '눈건강용품'
      },
      {
        ctgyNm: '손발건강용품',
        ctgyParentCd: '010602',
        ctgyCd: '01060220',
        useYn: 'N',
        value: '01060220',
        label: '손발건강용품'
      },
      {
        ctgyNm: '실버용품',
        ctgyParentCd: '010602',
        ctgyCd: '01060221',
        useYn: 'N',
        value: '01060221',
        label: '실버용품'
      },
      {
        ctgyNm: '재활운동용품',
        ctgyParentCd: '010602',
        ctgyCd: '01060222',
        useYn: 'N',
        value: '01060222',
        label: '재활운동용품'
      },
      {
        ctgyNm: '가정의료용품',
        ctgyParentCd: '010602',
        ctgyCd: '01060223',
        useYn: 'N',
        value: '01060223',
        label: '가정의료용품'
      },
      {
        ctgyNm: '병원/의료용품',
        ctgyParentCd: '010602',
        ctgyCd: '01060224',
        useYn: 'N',
        value: '01060224',
        label: '병원/의료용품'
      }
    ],
    '010701': [
      {
        ctgyNm: 'TV',
        ctgyParentCd: '010701',
        ctgyCd: '01070101',
        useYn: 'N',
        value: '01070101',
        label: 'TV'
      },
      {
        ctgyNm: '냉장고',
        ctgyParentCd: '010701',
        ctgyCd: '01070102',
        useYn: 'N',
        value: '01070102',
        label: '냉장고'
      },
      {
        ctgyNm: '세탁기/건조기',
        ctgyParentCd: '010701',
        ctgyCd: '01070103',
        useYn: 'N',
        value: '01070103',
        label: '세탁기/건조기'
      },
      {
        ctgyNm: '주방가전',
        ctgyParentCd: '010701',
        ctgyCd: '01070104',
        useYn: 'N',
        value: '01070104',
        label: '주방가전'
      },
      {
        ctgyNm: '생활가전',
        ctgyParentCd: '010701',
        ctgyCd: '01070105',
        useYn: 'N',
        value: '01070105',
        label: '생활가전'
      },
      {
        ctgyNm: '이미용가전',
        ctgyParentCd: '010701',
        ctgyCd: '01070106',
        useYn: 'N',
        value: '01070106',
        label: '이미용가전'
      },
      {
        ctgyNm: '계절가전',
        ctgyParentCd: '010701',
        ctgyCd: '01070107',
        useYn: 'N',
        value: '01070107',
        label: '계절가전'
      },
      {
        ctgyNm: '영상가전',
        ctgyParentCd: '010701',
        ctgyCd: '01070108',
        useYn: 'N',
        value: '01070108',
        label: '영상가전'
      },
      {
        ctgyNm: '음향가전',
        ctgyParentCd: '010701',
        ctgyCd: '01070109',
        useYn: 'N',
        value: '01070109',
        label: '음향가전'
      },
      {
        ctgyNm: '렌털/가입상품',
        ctgyParentCd: '010701',
        ctgyCd: '01070110',
        useYn: 'N',
        value: '01070110',
        label: '렌털/가입상품'
      }
    ],
    '010702': [
      {
        ctgyNm: '노트북',
        ctgyParentCd: '010702',
        ctgyCd: '01070211',
        useYn: 'N',
        value: '01070211',
        label: '노트북'
      },
      {
        ctgyNm: '데스크톱',
        ctgyParentCd: '010702',
        ctgyCd: '01070212',
        useYn: 'N',
        value: '01070212',
        label: '데스크톱'
      },
      {
        ctgyNm: '모니터',
        ctgyParentCd: '010702',
        ctgyCd: '01070213',
        useYn: 'N',
        value: '01070213',
        label: '모니터'
      },
      {
        ctgyNm: '프린터/복합기',
        ctgyParentCd: '010702',
        ctgyCd: '01070214',
        useYn: 'N',
        value: '01070214',
        label: '프린터/복합기'
      },
      {
        ctgyNm: '저장장치',
        ctgyParentCd: '010702',
        ctgyCd: '01070215',
        useYn: 'N',
        value: '01070215',
        label: '저장장치'
      },
      {
        ctgyNm: 'PC부품',
        ctgyParentCd: '010702',
        ctgyCd: '01070216',
        useYn: 'N',
        value: '01070216',
        label: 'PC부품'
      },
      {
        ctgyNm: '컴퓨터 주변기기',
        ctgyParentCd: '010702',
        ctgyCd: '01070217',
        useYn: 'N',
        value: '01070217',
        label: '컴퓨터 주변기기'
      },
      {
        ctgyNm: '휴대폰',
        ctgyParentCd: '010702',
        ctgyCd: '01070218',
        useYn: 'N',
        value: '01070218',
        label: '휴대폰'
      },
      {
        ctgyNm: '휴대폰 액세서리',
        ctgyParentCd: '010702',
        ctgyCd: '01070219',
        useYn: 'N',
        value: '01070219',
        label: '휴대폰 액세서리'
      },
      {
        ctgyNm: '스마트기기',
        ctgyParentCd: '010702',
        ctgyCd: '01070220',
        useYn: 'N',
        value: '01070220',
        label: '스마트기기'
      },
      {
        ctgyNm: '카메라/주변기기',
        ctgyParentCd: '010702',
        ctgyCd: '01070221',
        useYn: 'N',
        value: '01070221',
        label: '카메라/주변기기'
      },
      {
        ctgyNm: '태블릿',
        ctgyParentCd: '010702',
        ctgyCd: '01070222',
        useYn: 'N',
        value: '01070222',
        label: '태블릿'
      }
    ],
    '010801': [
      {
        ctgyNm: '도서/음반',
        ctgyParentCd: '010801',
        ctgyCd: '01080101',
        useYn: 'N',
        value: '01080101',
        label: '도서/음반'
      },
      {
        ctgyNm: '문구/사무용품',
        ctgyParentCd: '010801',
        ctgyCd: '01080102',
        useYn: 'N',
        value: '01080102',
        label: '문구/사무용품'
      },
      {
        ctgyNm: '화방용품',
        ctgyParentCd: '010801',
        ctgyCd: '01080103',
        useYn: 'N',
        value: '01080103',
        label: '화방용품'
      }
    ],
    '010803': [
      {
        ctgyNm: '강아지용품',
        ctgyParentCd: '010803',
        ctgyCd: '01080301',
        useYn: 'N',
        value: '01080301',
        label: '강아지용품'
      },
      {
        ctgyNm: '고양이용품',
        ctgyParentCd: '010803',
        ctgyCd: '01080302',
        useYn: 'N',
        value: '01080302',
        label: '고양이용품'
      },
      {
        ctgyNm: '조류용품',
        ctgyParentCd: '010803',
        ctgyCd: '01080303',
        useYn: 'N',
        value: '01080303',
        label: '조류용품'
      },
      {
        ctgyNm: '관상어/수족권',
        ctgyParentCd: '010803',
        ctgyCd: '01080304',
        useYn: 'N',
        value: '01080304',
        label: '관상어/수족권'
      },
      {
        ctgyNm: '소동물용품',
        ctgyParentCd: '010803',
        ctgyCd: '01080305',
        useYn: 'N',
        value: '01080305',
        label: '소동물용품'
      }
    ],
    '010901': [
      {
        ctgyNm: '여행/숙박/항공',
        ctgyParentCd: '010901',
        ctgyCd: '01090101',
        useYn: 'N',
        value: '01090101',
        label: '여행/숙박/항공'
      },
      {
        ctgyNm: '티켓/공연/굿즈',
        ctgyParentCd: '010901',
        ctgyCd: '01090102',
        useYn: 'N',
        value: '01090102',
        label: '티켓/공연/굿즈'
      },
      {
        ctgyNm: '홈&카서비스',
        ctgyParentCd: '010901',
        ctgyCd: '01090103',
        useYn: 'N',
        value: '01090103',
        label: '홈&카서비스'
      }
    ]
  }
}

export const mobileFullMenu = {
  '가구/인테리어': [
    {
      title: 'DIY 자재/용품',
      link: '/DIY자재',
      subMenu: [
        '가구 부속품',
        '데코스티커',
        '리모델링',
        '목재',
        '몰딩',
        '바닥재',
        '반제품',
        '벽지',
        '손잡이',
        '시트지',
        '접착제/보수용품',
        '타일',
        '파벽돌',
        '패널'
      ]
    },
    {
      title: '거실가구',
      link: '/거실가구',
      subMenu: ['TV거실장', '소파', '장식장', '테이블']
    },
    {
      title: '서재/사무용가구',
      link: '/서재/사무용가구',
      subMenu: ['사무/교구용가구', '의자', '책꽃이', '책상', '책장']
    },
    {
      title: '솜류',
      link: '/솜류',
      subMenu: ['방석솜', '배개솜/속동', '요솜/매트솜', '이불솜', '쿠션솜']
    },
    {
      title: '수납가구',
      link: '/수납가구',
      subMenu: [
        'CD/DVD장',
        '고가구',
        '공간박스',
        '나비장',
        '선반',
        '소품/수납함',
        '수납장',
        '신발장',
        '우산꽂이',
        '잡지꽂이',
        '코너장',
        '행거'
      ]
    },
    {
      title: '수예',
      link: '/수예',
      subMenu: ['기타수예', '뜨개질', '보석십자수', '수얘용품/부자재', '원단', '자수', '퀼트/펠트']
    }
  ],
  도서: [
    {
      title: '도서세트',
      link: '/bookset',
      subMenu: ['매트커버세트', '요이불세트']
    },
    {
      title: '도서가구',
      link: '/bookfurniture',
      subMenu: ['거울', '매트리스']
    }
  ],
  '디지털/가전': [
    {
      title: '디지털/가전1',
      link: '/digital',
      subMenu: ['디지털2', '디지털2']
    }
  ],
  '생활/건강': [
    {
      title: '생활/건강1',
      link: '/life',
      subMenu: ['생활2', '생활2']
    }
  ],
  '스포츠/레저': [
    {
      title: '스포츠/레저1',
      link: '/sports',
      subMenu: ['스포츠2', '스포츠2']
    }
  ],
  식품: [
    {
      title: '식품1',
      link: '/food',
      subMenu: ['식품2', '식품2']
    }
  ],
  '여가/생활편의': [
    {
      title: '여가/생활편의11',
      link: '/digital',
      subMenu: ['여가2', '여가2']
    }
  ],
  '출산/육아': [
    {
      title: '출산/육아11',
      link: '/digital',
      subMenu: ['출산/육아2', '출산/육아2']
    }
  ],
  패션의류: [
    {
      title: '패션의류1',
      link: '/digital',
      subMenu: ['패션의류2']
    }
  ],
  패션잡화: [
    {
      title: '패션잡화11',
      link: '/digital',
      subMenu: ['패션잡화22']
    }
  ],
  '화장품/미용': [
    {
      title: '화장품/미용11',
      link: '/digital',
      subMenu: ['화장품/미용22']
    }
  ]
}
export const mobileFullMenuEnterprise = {
  서비스업: [
    {
      title: '호텔/여행/항공',
      link: '#',
      subMenu: []
    },
    {
      title: '음식료/외식/프랜차이즈',
      link: '#',
      subMenu: []
    },
    {
      title: '스포츠/여가/레저',
      link: '#',
      subMenu: []
    },
    {
      title: '뷰티/미용',
      link: '#',
      subMenu: []
    },
    {
      title: '콜센터/아웃소싱/기타',
      link: '#',
      subMenu: []
    },
    {
      title: '정비/AS/카센터',
      link: '#',
      subMenu: []
    },
    {
      title: '렌탈/임대/리스',
      link: '#',
      subMenu: []
    },
    {
      title: '서치펌/헤드헌팅',
      link: '#',
      subMenu: []
    },
    {
      title: '시설관리/보안/경비',
      link: '#',
      subMenu: []
    },
    {
      title: '웨딩/상조/이벤트',
      link: '#',
      subMenu: []
    }
  ],
  '금융/은행업': [
    {
      title: '은행/금융',
      link: '#',
      subMenu: []
    },
    {
      title: '캐피탈/대출',
      link: '#',
      subMenu: []
    },
    {
      title: '증권/보험/카드',
      link: '#',
      subMenu: []
    }
  ],
  'IT/정보통신': [
    {
      title: '솔루션/SI/CRM/ERP',
      link: '#',
      subMenu: []
    },
    {
      title: '웹에이전시',
      link: '#',
      subMenu: []
    },
    {
      title: '쇼핑몰/오픈마켓/소셜커머스',
      link: '#',
      subMenu: []
    },
    {
      title: '포털/컨텐츠/커뮤니티',
      link: '#',
      subMenu: []
    },
    {
      title: '네트워크/통신서비스',
      link: '#',
      subMenu: []
    },
    {
      title: '정보보완',
      link: '#',
      subMenu: []
    },
    {
      title: '컴퓨터/하드웨어/장비',
      link: '#',
      subMenu: []
    },
    {
      title: '게임/애니메이션',
      link: '#',
      subMenu: []
    },
    {
      title: '모바일/APP',
      link: '#',
      subMenu: []
    },
    {
      title: 'IT컨설팅',
      link: '#',
      subMenu: []
    }
  ],
  판매유통업: [
    {
      title: '백화점/유통/도소매',
      link: '#',
      subMenu: []
    },
    {
      title: '무역/상사',
      link: '#',
      subMenu: []
    },
    {
      title: '물류/운송/배송',
      link: '#',
      subMenu: []
    }
  ],
  '제조/생산/화학업': [
    {
      title: '전기/전자/제어',
      link: '#',
      subMenu: []
    }
  ],
  교육업: [
    {
      title: '학교(초/중/고/대학/특수)',
      link: '#',
      subMenu: []
    }
  ],
  건설업: [
    {
      title: '건축/설비/환경',
      link: '#',
      subMenu: []
    }
  ],
  '의료/제약업': [
    {
      title: '의료(진료과별)',
      link: '#',
      subMenu: []
    }
  ],
  '미디어/광고업': [
    {
      title: '방송/케이블/프로덕션',
      link: '#',
      subMenu: []
    }
  ],
  '문화/예술/디자인업': [
    {
      title: '문화/공연/예술',
      link: '#',
      subMenu: []
    }
  ],
  '기관/협회': [
    {
      title: '공기업/공공기관',
      link: '#',
      subMenu: []
    }
  ]
}
export const mobileFullMenuEnterprisePromotion = {
  '기업(판매자)정보': [
    {
      title: '기업 정보 조회/수정',
      link: '기업 정보 조회/수정',
      subMenu: []
    },
    {
      title: '에이전시관리',
      link: '에이전시관리',
      subMenu: []
    }
  ],
  상품관리: [
    {
      title: '개별 상품 등록',
      link: '개별 상품 등록',
      subMenu: []
    },
    {
      title: '상품 조회/수정',
      link: '상품 조회/수정',
      subMenu: []
    }
  ],
  판매관리: [
    {
      title: '구매내역',
      link: '/구매내역',
      subMenu: []
    },
    {
      title: '판매내역',
      link: '/판매내역',
      subMenu: []
    }
  ],
  문의답변: [
    {
      title: '문의답변',
      link: '/문의답변',
      subMenu: []
    }
  ]
}
