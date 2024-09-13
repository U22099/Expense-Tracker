import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = () => {
    const session = cookies().get("session")?.value;
    if(!session) return NextResponse("", {status: 404});
    let user: UserObj | null = null;
    try {
        const decodedCookie = decodeURIComponent(session);
        user = JSON.parse(decodedCookie) || null;
    } catch (error) {
        console.error("Error parsing session cookie:", error);
        return NextResponse("", {status: 500});
    }
    return NextResponse.json(user, {status: 200});
}
interface UserObj {
    id: string;
    name: string;
    image: string;
    email: string;
}