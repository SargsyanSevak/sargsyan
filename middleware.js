import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from './i18n/settings'


acceptLanguage.languages(languages)

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|main-logo.png|9.jpg|project.png|).*)",
  ],
}

export function middleware(req) {
 
  let dynamic_path_name = req.nextUrl.pathname.split('/')[1]
  let lng

  if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) return NextResponse.next()

  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value)
  
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng
  if(dynamic_path_name === ''){
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }
  if (!languages.includes(dynamic_path_name) && dynamic_path_name !== 'not-found') {
    console.log('Redirecting to not-found page');
    return NextResponse.redirect(new URL(`/${lng}/not-found`, req.url));
}

  // Redirect if lng in path is not supported
  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'))
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }
  return NextResponse.next()
}

