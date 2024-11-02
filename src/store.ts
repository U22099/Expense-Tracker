import { create } from "zustand";

export interface UserObj {
  id: string,
  name: string,
  image: string,
  email: string,
}
interface UserStore {
  user: UserObj | null,
  setUser: (user: UserObj | null) => void,
}
export const useUser = create <UserStore> (set => ({
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
  setNav: (nav: number) => void,
  openInput: boolean,
  setOpenInput: (openInput: boolean) => void,
}
export const useNav = create <NavStore> ((set) => ({
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
export type datatype2 = {
  name: string,
  amount: number
} [];
export type datatype3 = {
  amount: number,
  date: string
}[];
interface DataStore {
  data: datatype,
  expense: datatype3,
  setData: (data: datatype) => void,
  setExpense: (data: datatype3) => void,
  categoriesColors: string[],
  currencySymbol: string,
}
export const useData = create <DataStore> ((set) => ({
  data: [
    {
      category: 'Housing',
      amount: 0
    },
    {
      category: 'Transportation',
      amount: 0
    },
    {
      category: 'Food',
      amount: 0
    },
    {
      category: 'Entertainment',
      amount: 0
    },
    {
      category: 'Personal Care',
      amount: 0
    },
    {
      category: 'HealthCare',
      amount: 0
    },
    {
      category: 'Debt',
      amount: 0
    },
    {
      category: 'Others',
      amount: 0
    }
  ],
  expense: [],
  setData: (data: datatype) => {
    set({ data });
  },
  setExpense: (expense: datatype3) => {
    set({ expense });
  },
  categoriesColors: ["#8B9467", "#CC6633", "#03A9F4", "#FFD700", "#4CAF50", "#9C27B0", "#33CC33", "#787878"],
  currencySymbol: "$"
}));