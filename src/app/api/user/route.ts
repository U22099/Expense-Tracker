import { cookies } from "next/headers";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const session = cookies().get("session")?.value;
    if(!session) return res.sendStatus(404);
    let user: UserObj | null = null;
    try {
        const decodedCookie = decodeURIComponent(session);
        user = JSON.parse(decodedCookie) || null;
    } catch (error) {
        console.error("Error parsing session cookie:", error);
        return res.sendStatus(500);
    }
    return res.json({user});
}
interface UserObj {
    id: string;
    name: string;
    image: string;
    email: string;
}