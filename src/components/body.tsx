"use client";

import Home from "./bodyComponents/Home";
import Dashboard from "./bodyComponents/Dashboard";
import Settings from "./bodyComponents/Settings";
import InputExpense from "./bodyComponents/InputExpense";
import { useNav, useData } from "@/store";
import { useEffect } from "react";
import { fetchData, fetchExpenseData, fetchCurrency, resetDatabase } from "@/lib/utils";
import { handleLogout } from "@/lib/action";

export default function Body(){
  const {nav, openInput} = useNav(state => {
    return {
      nav: state.nav, 
      openInput: state.openInput
    }
  });
  const { setData, setExpense, setCurrencySymbol }= useData(state => {
    return {
      setData: state.setData,
      setExpense: state.setExpense,
      setCurrencySymbol: state.setCurrencySymbol
    }
  });
  
  useEffect(() => {
    resetDatabase();
    handleLogout();
    fetchCurrency(setCurrencySymbol);
    fetchData(setData);
    fetchExpenseData(setExpense, setData);
  }, [setData, setExpense]);
  return(
      <div className="flex flex-col justify-start w-screen p-4 md:p-6">
          {nav === 0 && <Home />}
          {nav === 1 && <Dashboard />}
          {nav === 2 && <Settings />}
          {openInput && <InputExpense />}
      </div>
  )
}