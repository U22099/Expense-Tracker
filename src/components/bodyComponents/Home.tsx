"use client";

import Chart from "./homeComponents/Chart";
import ExpenseList from "./homeComponents/ExpenseList";
import Card from "../utils/Card";
import { getCurrentDate, useData } from "@/store";
import { getWeekNumber } from "./dashboardComponents/Weeks";

export default function Home(){
  const date = getCurrentDate();
  const expense = useData(state => state.expense);
  const dayAmount = (expense.find(entry => entry.date === date))?.amount || 0;
  
  const weekAmount = (expense.find(entry => getWeekNumber(entry.date) === getWeekNumber(date)))?.amount || 0;
  
  const monthAmount = (expense.find(entry => entry.date.slice(3) === date.slice(3)))?.amount || 0;
  
  const currencySymbol: string = useData(state => state.currencySymbol);
  
    return(
        <div className="flex flex-col gap-2 w-full justify-start pb-12">
            <Chart />
            <div className="flex justify-between mt-2 mx-auto w-fit gap-4">
                <Card>
                    <h1 className="text-black dark:text-white font-bold">Day: {currencySymbol}{dayAmount}</h1>
                </Card>
                <Card>
                    <h1 className="text-black dark:text-white font-bold">Week: {currencySymbol}{weekAmount}</h1>
                </Card>
                <Card>
                    <h1 className="text-black dark:text-white font-bold">Month: {currencySymbol}{monthAmount}</h1>
                </Card>
            </div>
            <ExpenseList/>
        </div>
    )
}