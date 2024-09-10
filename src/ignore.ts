import { NextResponse, type NextRequest} from "next/server";
import { cookies } from "next/headers";


export default async function middleware(request: NextRequest){
    const user = cookies().get("session");
    console.log(user, "middleware");
    const { nextUrl } = request;
    const authenticated: boolean = !!user;
    const currentPath: string = nextUrl.pathname;
    const publicRoutes: string[] = ['/', '/register', '/api/auth/callback/google', '/api/auth/callback/github']
    const isPublicRoute: boolean = (publicRoutes.find(route => currentPath.startsWith(route))) ? true : false;
    console.log(isPublicRoute);
    const homepage: string = "/homepage";
    const basePath: string = "https://expense-tracker-z9y9.onrender.com";

    if(isPublicRoute && authenticated) return NextResponse.redirect(new URL(homepage, basePath));    
    if(!isPublicRoute && !authenticated) return NextResponse.redirect(new URL(publicRoutes[0], basePath));

    return NextResponse.next();
}


export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next/image|favicon.ico).*)'],
}