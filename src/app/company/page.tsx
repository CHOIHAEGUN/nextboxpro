'use client'

import { useBearStore } from '@/stores/zustandStore'

/**
 * Companys 컴포넌트
 * @returns list
 */
const Companys = () => {
  let formElem = new FormData()
  formElem.append('email', 'cuihaijun@naver.com')
  const bears = useBearStore((state) => state.bears)
  const increasePopulation = useBearStore((state) => state.increaseBears)
  return (
    <>
      <h1>Companys page {bears}</h1>
      <button onClick={increasePopulation}>onClick</button>
    </>
  )
}

export default Companys
