import { getSession } from "@auth0/nextjs-auth0/edge";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const url = req.url;
  const response = NextResponse.next();

  try {
    const session = await getSession(req, response);
    if (!session && !req.nextUrl.pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/login", url));
    } else if (session && req.nextUrl.pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/", url));
    }
    return response;
  } catch (_error) {
    return NextResponse.redirect(new URL("/login", url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
