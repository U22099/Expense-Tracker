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
export const useUser = create<UserStore>((set: (arg0: {user: UserObj | null}) => void) => ({
    user: null,
    setUser: (user: UserObj | null) => {
        set({user});
    }
}))

//0-Home
//1-full dashboard
//2-settings
//3-expense input
interface NavStore{
    nav: number,
    setNav: (nav: number) => void
}
export const useNav = create<NavStore>((set: (arg0: {nav: number}) => void) => ({
    nav: 0,
    setNav: (nav: number) => {
        set({nav});
    }
}))