/**
 * category 값 제정의
 * 추후 공통 재정의 필요
 * @param categoryData
 * @param isProductYn
 */
export const parseCategory = (categoryData, isProductYn) => {
  const { depthOne, depthTwo, depthThr, depthFor } = categoryData
  const newCategoryList = { depthOne: [], depthTwo: {}, depthThree: {}, depthOneCompany: {}, depthTwoCompany: {} }

  // 11번가 기준으로 상품 category 정보 가져옴.
  if (isProductYn) {
    // 싱품 1 데스인 제구성 코드는 동일->[01]
    newCategoryList.depthOne = depthTwo.map((item) => {
      newCategoryList.depthTwo[item.ctgyCd] = []
      return { ...item, value: item.ctgyCd, label: item.ctgyNm }
    })
    // 싱품 2 데스인 기준으로 제구성
    depthThr.forEach((item) => {
      newCategoryList.depthThree[item.ctgyCd] = []
      newCategoryList.depthTwo[item.ctgyParentCd].push({ ...item, value: item.ctgyCd, label: item.ctgyNm })
    })
    // 싱품 3 데스인 기준으로 제구성
    depthFor &&
      depthFor.forEach((item) => {
        newCategoryList.depthThree[item.ctgyParentCd].push({ ...item, value: item.ctgyCd, label: item.ctgyNm })
      })
  } else {
    // 기업 category 정보 가져옴. 현재 version just 2 deth
    // 기업 1 데스인 제구성
    newCategoryList.depthOne = depthOne?.map((item) => {
      newCategoryList.depthTwo[item.ctgyParentCd] = []
      return { ...item, value: item.ctgyCd, label: item.ctgyNm }
    })
    // 기업 2 데스인 제구성
    depthTwo &&
      depthTwo.forEach((item) => {
        newCategoryList.depthTwo[item.ctgyParentCd].push({ ...item, value: item.ctgyCd, label: item.ctgyNm })
      })
  }

  return newCategoryList
}

export const makeCategoryByCode = (categoryData) => {
  const { depthTwo, depthThr, depthFor } = categoryData
  const newCategoryDict = {}

  depthTwo.forEach((item) => {
    newCategoryDict[item.ctgyCd] = item
  })

  depthThr.forEach((item) => {
    newCategoryDict[item.ctgyCd] = item
  })

  depthFor &&
    depthFor.forEach((item) => {
      newCategoryDict[item.ctgyCd] = item
    })

  return newCategoryDict
}

export const makeCategoryByPath = (categoryData) => {
  const { depthTwo, depthThr, depthFor } = categoryData
  const newCategoryDict = {}

  depthTwo.forEach((item) => {
    newCategoryDict[item.path] = item
  })

  depthThr.forEach((item) => {
    newCategoryDict[item.path] = item
  })

  depthFor &&
    depthFor.forEach((item) => {
      newCategoryDict[item.path] = item
    })

  return newCategoryDict
}
