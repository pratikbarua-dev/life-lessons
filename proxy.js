import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const ROUTE_PERMISSIONS = {
  "/admin": ["admin"],
  "/dashboard/settings": ["admin", "editor"],
  "/dashboard": ["admin", "editor", "user"],
};

export async function proxy(requests) {
  const { pathname } = requests.nextUrl;
  // Check if the current route is protected
  const isProtected = Object.keys(ROUTE_PERMISSIONS).some((route) =>
    pathname.startsWith(route),
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  const user = session?.user;
  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const matchedRoute = Object.keys(ROUTE_PERMISSIONS).find((route) =>
    pathname.startsWith(route)
  );
  if(matchedRoute){
    const allowedRoles = ROUTE_PERMISSIONS[matchedRoute];
    if (!allowedRoles.includes(user.role)) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }
  return NextResponse.next();

}
export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};