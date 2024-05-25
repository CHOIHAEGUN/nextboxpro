// 'use client';

import { selectProduct } from '@/api/serverAction'
import { EventList, Product } from '../../../golo'
import { cookies } from 'next/headers'
import { create } from '../actions'
import { useBearStore } from '@/stores/zustandStore'
// import { getEventList } from '@/api/layoutAction'

// import { revalidateTag } from 'next/cache';
const About = async () => {
  const zustandStore: number = useBearStore.getState().bears
  useBearStore.getState().increaseBears()
  const data: Product[] = await selectProduct()
  console.log('상품 목록 조회 결과 출력:', data[0])
  // toDo 로그인을 해도 undefined가 찍힌다.
  // const data2 = await create('')
  return (
    <>
      <h1>About page</h1>
      {/* <h2>{bears}</h2> */}
      {data &&
        data.map((item: any) => {
          return <div key={item.id}>{item.product}</div>
        })}
      {/* {getEventData &&
        getEventData.data.list.map((item: any) => {
          return <div key={item.evntInfId}>{item.imgUrl}</div>
        })} */}
    </>
  )
}

export default About
