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
interface DataStore {
  data: datatype,
  days: datatype2,
  weeks: datatype2,
  months: datatype2,
  setData: (data: datatype) => void,
  setDays: (data: datatype2) => void,
  setWeeks: (data: datatype2) => void,
  setMonths: (data: datatype2) => void,
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
  days: [
  {
    name: "Monday",
    amount: 0
    },
  {
    name: "Tuesday",
    amount: 0
    },
  {
    name: "Wednesday",
    amount: 0
    },
  {
    name: "Thursday",
    amount: 0
    },
  {
    name: "Friday",
    amount: 0
    }
  ],
  weeks: [
  {
    name: "04/07",
    amount: 0
    },
  {
    name: "11/07",
    amount: 0
    },
  {
    name: "18/07",
    amount: 0
    },
  {
    name: "25/07",
    amount: 0
    }
  ],
  months: [
  {
    name: "June",
    amount: 0
    },
  {
    name: "July",
    amount: 0
    },
  {
    name: "August",
    amount: 0
    },
  {
    name: "September",
    amount: 0
    }
  ],
  setData: (data: datatype) => {
    set({ data });
  },
  setDays: (days: datatype2) => {
    set({ days });
  },
  setWeeks: (weeks: datatype2) => {
    set({ weeks });
  },
  setMonths: (months: datatype2) => {
    set({ months });
  },
  categoriesColors: ["#8B9467", "#CC6633", "#03A9F4", "#FFD700", "#4CAF50", "#9C27B0", "#33CC33", "#787878"],
  currencySymbol: "$"
}));