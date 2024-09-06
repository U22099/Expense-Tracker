
const authConfig = {
    providers: [],
    callbacks: {
        async jwt({token, user}){
            if(token){
                console.log(user);
                if(user.id) token.id = user.id;
            }
            return token
        },
        async session({session, token}){
            if(token){
                if(token.id) session.id = token.id
            }
            return session
        },
        authorized({auth, req}){
            const user = auth?.user;
            const isOnHomepage = req.nextUrl?.pathname.startsWith("/homepage");

            if(!user&&isOnHomepage) return false

            if(user&&!isOnHomepage) return Response.redirect(new URL("/", req.nextUrl));

            return true
        }
    }
}