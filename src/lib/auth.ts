import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handler: {GET, POST}, auth, signIn, signOut } = NextAUth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ]
})