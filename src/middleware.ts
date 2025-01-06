import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const defaultLocale = "en";
const locales = ["en", "pt"];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  const hasLocale = locales.some((locale) => pathname.startsWith(`/${locale}`));

  if (hasLocale) return;

  const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}
