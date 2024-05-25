import { NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/api/lib'

export async function middleware(request: NextRequest, response: NextResponse) {
  const {
    nextUrl: { pathname },
    hostname
  }: any = request

  if (hostname === 'localhost:3000') {
    return NextResponse.redirect('/b2c' + pathname)
  } else if (hostname === 'b2b.example.com') {
    return NextResponse.redirect('/b2b' + pathname)
  }

  return await updateSession(request)
}
