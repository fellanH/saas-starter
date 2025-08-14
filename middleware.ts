import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { signToken, verifyToken } from "@/lib/auth/jwt";

const protectedRoutes = [
  "/dashboard",
  "/dashboard/general",
  "/dashboard/activity",
  "/dashboard/security",
];

export async function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;
    const sessionCookie = request.cookies.get("session");
    const isProtectedRoute = protectedRoutes.some((route) =>
      pathname.startsWith(route)
    );

    if (isProtectedRoute && !sessionCookie) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    let res = NextResponse.next();

    if (sessionCookie) {
      try {
        const parsed = await verifyToken(sessionCookie.value);
        const now = Date.now();
        const sessionExpires = new Date(parsed.expires).getTime();
        const threeHours = 3 * 60 * 60 * 1000;

        // Refresh the session if it's more than 3 hours old
        if (sessionExpires - now < threeHours) {
          const expiresInOneDay = new Date(now + 24 * 60 * 60 * 1000);

          res.cookies.set({
            name: "session",
            value: await signToken({
              ...parsed,
              expires: expiresInOneDay.toISOString(),
            }),
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            expires: expiresInOneDay,
          });
        }
      } catch (error) {
        console.error("Invalid session token:", error);
        res.cookies.delete("session");
        if (isProtectedRoute) {
          return NextResponse.redirect(new URL("/sign-in", request.url));
        }
      }
    }

    return res;
  } catch (error) {
    console.error("Middleware error:", error);
    //
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
  runtime: "experimental-edge",
};
