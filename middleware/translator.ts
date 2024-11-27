import { NextResponse } from "next/server";
 
let locales = ['en', 'nl-NL', 'nl','cn']
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
    const acceptLanguage = request.headers.get('accept-Language')
    if (acceptLanguage) {
        return acceptLanguage?.split(',')[0]
    }
    return locales[0];
 }
 
export function translatorMiddleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}