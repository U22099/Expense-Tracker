import { create } from "zustand";

interface UserObj{
    id: string;
    name: string;
    image: string;
    email: string;
}
interface UserStore{
    user: UserObj | null,
    setUser: (user: UserObj | null) => void
}
export const useUser = create<UserStore>((set) => ({
    user: null,
    setUser: (user: UserObj | null) => {
        set({user});
    }
}))