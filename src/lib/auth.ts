import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";

export const { handlers: {GET, POST}, auth, signIn, signOut } = NextAuth({
    providers: [GitHub, Google, Facebook]
})