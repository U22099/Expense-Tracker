"use client";

import Home from "./bodyComponents/Home";
import Dashboard from "./bodyComponents/Dashboard";
import Settings from "./bodyComponents/Settings";
import InputExpense from "./bodyComponents/InputExpense";
import { useNav } from "@/store";

export default function Body(){
  const {nav, openInput} = useNav(state => {
    return {
      nav: state.nav, 
      openInput: state.openInput
    }
  });
  return(
      <div className="flex flex-col justify-start w-screen p-4 md:p-6">
          {nav === 0 && <Home />}
          {nav === 1 && <Dashboard />}
          {nav === 2 && <Settings />}
          {openInput && <InputExpense />}
      </div>
  )
}