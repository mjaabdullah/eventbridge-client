import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const pathname = request.nextUrl.pathname;

  // Guest User
  if (!session) {
    if (pathname.startsWith("/profile") || pathname.startsWith("/events/")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  }

  // Logged-in user cannot access login/register
  if (pathname === "/login" || pathname === "/register") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname.startsWith("/events/") && session.user.userRole !== "admin") {
    return NextResponse.redirect(new URL(`/events`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/events/:path*", "/profile"],
};
