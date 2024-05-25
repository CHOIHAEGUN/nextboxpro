import { StringUtils } from './StringUtils'

test('StringUtils BizNum테스트하기', () => {
  expect(StringUtils.bizNum('1234567890')).toBe('123-45-67890')
  expect(StringUtils.bizNum('123456789')).toBe('123456789')
})

// it('StringUtils BizNum테스트하기', () => {
//   expect(StringUtils.bizNum('1234567890')).toBe('123-45-67890')
//   expect(StringUtils.bizNum('123456789')).toBe('123456789')
// })
