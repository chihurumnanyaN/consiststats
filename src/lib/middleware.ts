import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth"; // from your NextAuth config

export async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  // Public routes (no auth needed)
  const publicPaths = [
    "/signin",
    "/api/auth",
    "/_next",
    "/favicon.ico",
    "/consist-stats-logo.png",
  ];

  // Skip middleware for public assets or paths
  if (publicPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // ✅ If user is not signed in, redirect to signin
  if (!session && pathname.startsWith("/dashboard")) {
    const url = new URL("/signin", request.url);
    return NextResponse.redirect(url);
  }

  // ✅ If user is signed in, prevent going back to signin
  if (session && pathname === "/signin") {
    const url = new URL("/dashboard", request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Limit middleware to relevant paths
export const config = {
  matcher: ["/dashboard/:path*", "/signin"],
};
