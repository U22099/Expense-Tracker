import { NextResponse, type NextRequest} from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";

const { auth } = NextAuth(authConfig);

export default async function middleware(request: NextRequest){
    const session = await auth();
    const { nextUrl } = request;
    const authenticated: boolean = !session ? false : session.user ? true : false
    const currentPath: string = nextUrl.pathname;
    const publicRoutes: string[] = ['/', '/register', '/api/auth/callback/google', '/api/auth/callback/github']
    const isPublicRoute: boolean = (publicRoutes.find(route => currentPath.startsWith(route))) ? true : false;
    const homepage = "/homepage";

    if(isPublicRoute && authenticated) return NextResponse.redirect(new URL(homepage, nextUrl));    
    if(!isPublicRoute && !authenticated) return NextResponse.redirect(new URL(publicRoutes[0], nextUrl));

}


export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next).*)'],
}