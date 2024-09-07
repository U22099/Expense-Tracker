import { NextResponse, type NextRequest} from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";

const { auth } = NextAuth(authConfig);

export default async function middleware(request: NextRequest){
    const session = await auth();
    console.log(session, "middleware");
    const { nextUrl } = request;
    const authenticated: boolean = !!session?.user;
    const currentPath: string = nextUrl.pathname;
    const publicRoutes: string[] = ['/', '/register', '/api/auth/callback/google', '/api/auth/callback/github']
    const isPublicRoute: boolean = (publicRoutes.find(route => currentPath.startsWith(route))) ? true : false;
    console.log(isPublicRoute);
    const homepage: string = "/homepage";

    if(isPublicRoute && authenticated) return NextResponse.redirect(new URL(homepage, "https://expense-tracker-z9y9.onrender.com"));    
    if(!isPublicRoute && !authenticated) return NextResponse.redirect(new URL(publicRoutes[0], "https://expense-tracker-z9y9.onrender.com"));

}


export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next/image|favicon.ico).*)'],
}