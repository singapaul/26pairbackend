import { NextResponse } from 'next/server';
 
export function GET(request) {

    // body: request.body,

console.log('set up a cron job on vercel')


  return NextResponse.json(
    {
      body: "hello world",
      path: request.nextUrl.pathname,
      query: request.nextUrl.search,
      cookies: request.cookies.getAll(),
    },
    {
      status: 200,
    },
  );
}