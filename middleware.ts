import { NextRequest, NextResponse } from "next/server";

const IMAGE_EXTENSION_REGEX = /\.(?:avif|bmp|gif|ico|jpe?g|png|svg|webp)$/i;
const HOTLINK_FALLBACK_IMAGE_PATH = "/Images/download.jpg";

export function middleware(request: NextRequest) {
  const { pathname, host } = request.nextUrl;

  if (!IMAGE_EXTENSION_REGEX.test(pathname)) {
    return NextResponse.next();
  }

  if (pathname === HOTLINK_FALLBACK_IMAGE_PATH) {
    return NextResponse.next();
  }

  const referer = request.headers.get("referer");

  if (!referer) {
    return NextResponse.rewrite(new URL(HOTLINK_FALLBACK_IMAGE_PATH, request.url));
  }

  try {
    const refererHost = new URL(referer).host;
    const forwardedHost = request.headers.get("x-forwarded-host");

    const allowedHosts = new Set<string>([
      host,
      ...(forwardedHost ? [forwardedHost] : []),
      "localhost:3000",
      "127.0.0.1:3000",
    ]);

    if (!allowedHosts.has(refererHost)) {
      return NextResponse.rewrite(new URL(HOTLINK_FALLBACK_IMAGE_PATH, request.url));
    }
  } catch {
    return NextResponse.rewrite(new URL(HOTLINK_FALLBACK_IMAGE_PATH, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
