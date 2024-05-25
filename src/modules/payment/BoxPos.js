import API from 'modules/constants/API'
import Axios from 'modules/utils/Axios'

/********************************************************************************************
 BOX POS- 원격 결제
 ********************************************************************************************/

/********************************
 BOX POS-가맹점 정보 확인
 ********************************/
export async function BoxPosUtlaplcinfo(inqData) {
  return await Axios({
    url: API.BOXPOS_PAY.PAY_UTLAPCINFO,
    method: 'post',
    data: {
      inqCndt: 'U',
      inqData: inqData ? inqData : ''
    }
  }).then((response) => {
    if (response.data.code == 200 && response.data.data.userId != null) {
      return {
        clphRcgnNo: response.data.data.clphRcgnNo, //휴대폰인식번호
        afstBzn: response.data.data.afstBzn, //가맹자사업자등록번호
        userId: response.data.data.userId
      }
    } else {
      return null
    }
  })
}

/********************************
 BOX POS-연계정보등록
 ********************************/
export async function BoxPosLnkStlmRgsn(reqData) {
  const PayTotal = reqData.totalPay //총금액(상품금액+배송비)
  const PaySupplyValue = Math.round(PayTotal / 1.1) //공급가액
  const PayVAT = PayTotal - PaySupplyValue //부가세

  //
  let setBoxPosRgsnData = {
    userId: reqData.userId, //구매자ID
    alcmLnkStlmUqn: reqData.alcmLnkStlmUqn, //주문번호ID
    afstBzn: reqData.afstBzn, //가맹자사업자등록번호
    clphRcgnNo: reqData.clphRcgnNo, //휴대폰인식번호
    deviceType: reqData.deviceType, //PC,M 구분
    allSumAmt: PayTotal, //전체합계금액
    sppcAmt: PaySupplyValue, //공급가금액
    txtnAmt: PayVAT, //과세금액
    noneTxtnAmt: 0, //비과세금액
    stlmConMemo: '커머스BOX 상품 결제', //결제내용메모
    alcmGrpCd: 'C001', //제휴사그룹코드
    type: 'B', //요청자 유형(B: 구매자, F: 가맹점)
    memoCon: '커머스BOX 상품 결제', //메모내용
    stlmCon: '커머스BOX 상품 결제' //결제내용
  }

  return await Axios({
    url: API.BOXPOS_PAY.PAY_LNKSTLMRGSN,
    method: 'post',
    data: setBoxPosRgsnData
  }).then((response) => {
    if (response.data.code == 200) {
      return {
        lnkStlmSrn: response.data.data.lnkStlmSrn, //연계일련번호
        url: response.data.data.url //qr url
      }
    } else {
      return null
    }
  })
}

/********************************
 BOX POS-연계정보 결제 여부 조회
 ********************************/
export async function BoxPosLnkStlmPgrsInq(lnkStlmSrn) {
  return await Axios({
    url: API.BOXPOS_PAY.PAY_LNKSTLMPGRSINQ,
    method: 'post',
    data: {
      lnkStlmSrn: lnkStlmSrn
    }
  }).then((response) => {
    if (response.data.code == 200) {
      return response.data.data //true or false
    } else {
      return null
    }
  })
}

/********************************
 BOX POS-PC원격결제 조회
 ********************************/
export async function BoxPosPcRmteStlmInq(lnkStlmSrn) {
  return await Axios({
    url: API.BOXPOS_PAY.PAY_PCRMTESTLMINQ,
    method: 'post',
    data: {
      lnkStlmSrn: lnkStlmSrn
    }
  }).then((response) => {
    if (response.data.code == 200) {
      return response.data.data //true or false
    } else {
      return null
    }
  })
}

/********************************
 BOX POS-원격결제 취소요청 푸시발송(판매자에게 취소 요청 발송)
 ********************************/
export async function BoxPosPcRmteStlmCnclRqstPush(lnkStlmSrn) {
  return await Axios({
    url: API.BOXPOS_PAY.PAY_PCRMTESTLMCNCLRQSTPUSH,
    method: 'post',
    data: {
      lnkStlmSrn: lnkStlmSrn
    }
  }).then((response) => {
    if (response.data.code == 200) {
      return response.data.data // 결제 기본 정보
    } else {
      return null
    }
  })
}

/********************************
 BOX POS-결제취소 (구매자)
 ********************************/
export async function BoxPosLnkStlmCncl(reqData) {
  return await Axios({
    url: API.BOXPOS_PAY.PAY_LNKSTLMCNCL,
    method: 'post',
    data: reqData
  }).then((response) => {
    if (response.data.code == 200) {
      return response.data.data.DATA
    } else {
      return null
    }
  })
}

/********************************
BOX POS-QR팝업 중앙 정렬 옵션
 ********************************/
export function BoxPosPopupOption() {
  const popupWidth = 660
  const popupHeight = 660
  const popupX = window.screen.width / 2 - popupWidth / 2
  const popupY = window.screen.height / 2 - popupHeight / 2
  return 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY
}

/********************************************************************************************
 BOX POS- 제휴사 결제
 ********************************************************************************************/

/********************************
 BOX POS-가맹점 정보 확인
 ********************************/
export async function boxPosJoinCheck(inqData) {
  return await Axios({
    url: API.BOXPOS_PAY.PAY_SMS_JOIN_CHECK,
    method: 'post',
    data: {
      inqData: inqData ? inqData : ''
    }
  }).then((response) => {
    if (response.data.code == 200 && response.data.data.userId != null) {
      return response.data.data
      /*{
                clphRcgnNo : response.data.data.clphRcgnNo, //휴대폰인식번호
                afstBzn:response.data.data.afstBzn, //가맹자사업자등록번호
                userId:response.data.data.userId,
            }*/
    } else {
      return null
    }
  })
}

/********************************
 BOX POS PAY 제휴사 결제 요청
 ********************************/
export async function requestBoxPosSmsPay(reqData) {
  //총금액(상품금액+배송비)
  const PayTotal = reqData.allSumAmt
  const PaySupplyValue = Math.round(PayTotal / 1.1) //공급가액
  const PayVAT = PayTotal - PaySupplyValue //부가세

  let setBoxPosRgsnData = {
    ordnInfoId: reqData.ordnInfoId, // 주문번호 ID
    memeCon: '커머스BOX 상품 결제', // 메모 내용
    stlmCon: '커머스BOX 상품 결제', // 결제 내용 메모
    allSumAmt: PayTotal, // 전체 합계 금액
    sppcAmt: PaySupplyValue, // 공급가액
    txtnAmt: PayVAT, // 과세금액
    noneTxtnAmt: 0, // 비과세금액
    selrUsisId: reqData.selrUsisId // 판매자 운영기관ID
  }

  return await Axios({
    url: API.BOXPOS_PAY.PAY_SMS_PAY_REQUEST,
    method: 'post',
    data: setBoxPosRgsnData
  }).then((response) => {
    if (response?.status === 200 && response.data.code == 200) {
      return response.data.data //qr data
    } else {
      return null
    }
  })
}

/********************************
 BOX POS 제휴사 결제 상태 조회
 ********************************/
export async function searchBoxPosSmsPay(reqData) {
  // 주문번호, 결제번호 둘 중 하나는 무조건 들어갈 것.
  let setData = {
    ordnInfoId: reqData.ordnInfoId, // 주문번호 ID
    stlmInfoId: reqData.stlmInfoId // 결제번호 ID
  }

  return await Axios({
    url: API.BOXPOS_PAY.PAY_SMS_PAY_CHECK,
    method: 'post',
    data: setData
  }).then((response) => {
    if (response?.status === 200 && response.data.code == 200) {
      return response.data.data // 결제 완료 시 true, 결제 미완 시 false
    } else {
      return null
    }
  })
}

/********************************
 BOX POS 제휴사 결제 취소 요청
 ********************************/
export async function cancelBoxPosSmsPay(reqData) {
  // 주문번호, 결제번호 둘 중 하나는 무조건 들어갈 것.
  let setData = {
    stlmInfoId: reqData.stlmInfoId // 결제번호 ID
  }

  return await Axios({
    url: API.BOXPOS_PAY.PAY_SMS_PAY_CANCEL,
    method: 'post',
    data: setData
  })
    .then((response) => {
      if (response?.status === 200 && response.data.code == 200) {
        return response.data.data // 결제 완료 시 true, 결제 미완 시 false
      } else {
        return null
      }
    })
    .catch(() => {
      return null
    })
}
