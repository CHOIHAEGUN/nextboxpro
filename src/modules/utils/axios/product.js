import API from 'modules/constants/API'
import Axios from 'modules/utils/Axios'

export const getProductInfo = async (id) => {
  const response = await Axios({
    url: API.MYPAGE.MY_SINGLE_PRODUCT_DETAIL,
    method: 'get',
    params: { pdfInfoId: id },
    loading: true
  })

  return response.data
}

export const getSellerInfo = async () => {
  const response = await Axios({
    url: API.MYPAGE.MY_SELLER_INFO,
    method: 'get'
  })

  return response.data
}

export const getCategoryList = async (type) => {
  const response = await Axios({
    url: API.MYPAGE.MY_PRODUCT_CATEGORY_LIST,
    method: 'get',
    params: { parentCode: type }
  })

  return response.data
}

export const getPatentInfo = async () => {
  const response = await Axios({
    url: API.MYPAGE.MY_PATENT_LIST,
    method: 'get'
  })

  return response.data
}

export const getSellerReturnInfo = async () => {
  const response = await Axios({
    url: API.MYPAGE.MY_SELLER_RETURN_INFO,
    method: 'get',
    params: { parentCode: '01' }
  })

  return response.data
}

export const saveSingleProduct = async (data) => {
  const response = await Axios({
    url: API.MYPAGE.MY_SINGLE_PRODUCT_SAVE,
    method: 'post',
    data: data
  })

  return response.data
}

export const saveBundleProduct = async (data) => {
  const response = await Axios({
    url: API.MYPAGE.MY_BUNDLE_PRODUCT_SAVE,
    method: 'post',
    data: data
  })

  return response.data
}

export const saveShareProduct = async (data) => {
  const response = await Axios({
    url: API.MYPAGE.MY_SHARE_PRODUCT_SAVE,
    method: 'post',
    data: data
  })

  return response.data
}

export const getSingleProductList = async (paramData) => {
  const response = await Axios({
    url: API.MYPAGE.MY_SINGLE_PRODUCT_LIST,
    method: 'get',
    params: paramData
  })

  return response.data
}

export const getBundleProductList = async (paramData) => {
  const response = await Axios({
    url: API.MYPAGE.MY_BUNDLE_PRODUCT_LIST,
    method: 'get',
    params: paramData
  })

  return response
}

export const estimateDeliveryCost = async (data) => {
  const response = await Axios({
    url: API.MYPAGE.MY_BUYER_PRODUCT_DELIVERY_LIST,
    method: 'post',
    data: data
  })

  return response.data
}
