export const StringUtils = {
  comma: (value) => {
    const num = value === undefined || value === null || String(value).trim() === '' ? 0 : value
    // negative lookbehind 문법 사파리, ios 지원 안함
    // return String(num).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
    const splitNum = num.toString().split('.')
    splitNum[0] = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return splitNum.join('.')
  },
  bizNum: (value) => {
    return String(value).replace(/(\d{3})(\d{2})(\d{5})/g, '$1-$2-$3')
  },
  corporateNum: (value) => {
    return String(value).replace(/(\d{6})(\d{7})/g, '$1-$2')
  },
  toBr: (value) => {
    if (value === null) return ''
    return String(value).replace(/\n/g, '<br/>')
  },
  brToArray: (value) => {
    return value.split('\n')
  },
  hasLength: (value) => {
    if (
      value === '' ||
      value === null ||
      value === undefined ||
      String(value).trim() === '' ||
      (value !== null && typeof value === 'object' && !Object.keys(value).length)
    ) {
      return false
    } else {
      return true
    }
  },
  getValue: (value) => {
    if (value !== null && value !== undefined && String(value).trim() !== '') return value
    else return ''
  },
  isNumber: (number) => {
    if (!isNaN(number) && StringUtils.hasLength(number)) return true
    else return false
  },
  toCssCase: (camelString) => {
    return camelString
      .split('')
      .map((character) => {
        if (character == character.toUpperCase()) return '-' + character.toLowerCase()
        else return character
      })
      .join('')
  }
}

export const FormatUtils = {
  numberWithCommas: new Intl.NumberFormat('ko-KR')
}
