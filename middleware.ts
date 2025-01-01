import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from './auth';

export async function middleware(request: NextRequest) {
  try {
    const session = await getSession();
    
    if (!session) {
      const url = request.nextUrl.clone();
      url.pathname = '/signin';
      return NextResponse.redirect(url);
    }
    
    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    const url = request.nextUrl.clone();
    url.pathname = '/signin';
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ['/dashboard/:path*']
};
