import { Product } from '../../golo'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
// import axios from 'axios'

/**
 * 상품 등록
 * @returns Product[]
 */
export const addProductToDatabase = async (e: FormData) => {
  'use server'
  const product = e.get('product')?.toString()
  const price = e.get('price')?.toString()
  if (!product || !price) return
  const newProduct: Product = {
    product,
    price
  }
  await fetch('https://invest.ibkbox.net/api/common/code/all', {
    method: 'POST',
    body: JSON.stringify(newProduct),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log(e.keys())
  revalidateTag('products')
}

/**
 * 상품 조회
 * @returns Product[]
 */
export const selectProduct = async (): Promise<Product[]> => {
  'use server'
  const res = await fetch('https://650848cc56db83a34d9c1052.mockapi.io/api/json/products')
  // const res = await fetch('https://devinvest.ibkbox.net/api/main/vc/fund/info',{method: "POST"})
  let box = await res.json()

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return box
}

/**
 * 상품 조회 test
 * @returns Product[]
 */
export const setCookieData = async (p0: string) => {
  'use server'
  // cookies().set('name', 'lee')
  cookies().set('name', 'lee')
  // or
  cookies().set('name', 'lee', { secure: true })
  // or
  cookies().set({
    name: 'name',
    value: 'lee',
    httpOnly: true,
    path: '/'
  })
}
