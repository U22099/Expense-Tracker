import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";

export default async function middleware(request: NextRequest) {
    const user =  JSON.parse(cookies().get("session")?.value || '');
    console.log("User from cookies:", user);

    const nextUrl = request.nextUrl;
    const authenticated: boolean = !!user;
    const currentPath: string = nextUrl.pathname;
    console.log("Current path:", currentPath);

    // Define the routes that don't require authentication
    const publicRoutes: string[] = ['/', '/register', '/api/auth/callback/google', '/api/auth/callback/github'];

    // Determine if the current route is public
    const isPublicRoute: boolean = publicRoutes.some(route => currentPath.startsWith(route));
    console.log("Is public route:", isPublicRoute);

    const homepage: string = "/homepage";
    const basePath: string = process.env.BASE_URL || "https://expense-tracker-z9y9.onrender.com";

    // Prevent a redirect loop: if user is authenticated and already on the homepage, don't redirect
    if (authenticated && currentPath === homepage) {
        return NextResponse.next();
    }

    // If a user is authenticated and they are on a public route, redirect to homepage
    if (isPublicRoute && authenticated) {
        return NextResponse.redirect(new URL(homepage, basePath));
    }

    // If the user is not authenticated and they are on a private route, redirect to login
    if (!isPublicRoute && !authenticated) {
        return NextResponse.redirect(new URL(publicRoutes[0], basePath));
    }

    // If no conditions are met, allow the request to continue
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next/image|favicon.ico).*)'],
};
