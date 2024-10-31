import { create } from "zustand";

interface UserObj {
  id: string;
  name: string;
  image: string;
  email: string;
}
interface UserStore {
  user: UserObj | null,
  setUser: (user: UserObj | null) => void
}
export const useUser = create <UserStore> ((set: (arg0: { user: UserObj | null }) => void) => ({
  user: null,
  setUser: (user: UserObj | null) => {
    set({ user });
  }
}))

//0-Home
//1-full dashboard
//2-settings
//openinput-expense-input
interface NavStore {
  nav: number,
  setNav: (nav: number) => void
  openInput: boolean,
  setOpenInout: (openInput: boolean) => void
}
export const useNav = create <NavStore> ((set: (partialState: Partial<NavStore>) => void) => ({
  nav: 0,
  openInput: false,
  setOpenInput: (openInput: boolean) => {
    set({ openInput });
  },
  setNav: (nav: number) => {
    set({ nav });
  }
}));

//Expense Data
export type datatype = {
  category: string,
  amount: number
} [];
interface DataStore {
  data: datatype,
  setData: (data: datatype) => void,
  categoriesColors: string[],
  currencySymbol: string
}
export const useData = create <DataStore> ((set: (arg0: { data: datatype }) => void) => ({
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
    set({ data });
  },
  categoriesColors: ["#8B9467", "#CC6633", "#03A9F4", "#FFD700", "#4CAF50", "#9C27B0", "#33CC33", "#787878"],
  currencySymbol: "$"
}));