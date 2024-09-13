import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";

export default function middleware(request: NextRequest) {
    let user = null;

    // Get the session cookie
    const sessionCookie = cookies().get("session")?.value || '';

    // Parse the session cookie safely
    try {
        if (sessionCookie) {
            // Decode the URL-encoded session string
            const decodedCookie = decodeURIComponent(sessionCookie);
            user = JSON.parse(decodedCookie);
        }
    } catch (error) {
        console.error("Error parsing session cookie:", error);
    }

    const nextUrl = request.nextUrl;
    const authenticated: boolean = !!user && !!user.name; // Ensure the user is truly authenticated
    const currentPath: string = nextUrl.pathname;

    // Define the routes that don't require authentication
    const publicRoutes: string[] = ['/', '/register', '/api/auth/callback/google', '/api/auth/callback/github'];

    // Determine if the current route is public
    const isPublicRoute: boolean = publicRoutes.some(route => currentPath === route);
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
