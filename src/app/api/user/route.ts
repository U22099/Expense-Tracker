import { cookies } from "next/headers";

export default async handler(req, res){
    const session = cookies().get("session")?.value;
    if(!session) return res.sendStatus(404);
    let user;
    try {
        const decodedCookie = decodeURIComponent(session);
        user = JSON.parse(decodedCookie) || null;
    } catch (error) {
        console.error("Error parsing session cookie:", error);
        return res.sendStatus(500);
    }
    return res.json({user});
}