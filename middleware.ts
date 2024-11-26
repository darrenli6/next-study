import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { authMiddleware } from './middleware/auth'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  
   return authMiddleware(request)
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/user/:path*',
}