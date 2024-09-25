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

//Expense Data
type datatype = {[index: string]: string | number}[];
interface DataStore {
    data: datatype,
    setData: (data: datatype) => void,
    categoriesColors: []
}
export const useData = create<DataStore>((set: any) => ({
    data: [
        {
            category: 'Housing',
            amount: 4000
        },
        {
            category: 'Transportation',
            amount: 2384
        },
        {
            category: 'Food',
            amount: 3984
        },
        {
            category: 'Entertainment',
            amount: 2830
        },
        {
            category: 'Personal Care',
            amount: 2947
        },
        {
            category: 'HealthCare',
            amount: 2039
        },
        {
            category: 'Debt',
            amount: 4839
        },
        {
            category: 'Others',
            amount: 2849
        }
    ],
    setData: (data: datatype) => {
        set({data});
    },
    categoriesColors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#3399CC', 'FFD700', 'FFA07A', 'F08080']
}))