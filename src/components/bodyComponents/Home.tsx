"use client";
import Chart from "./homeComponents/Chart";
import ExpenseList from "./homeComponents/ExpenseList";
import Card from "../utils/Card";
import { getCurrentDate, useData } from "@/store";
import { getWeekNumber } from "./dashboardComponents/Weeks";
import { type datatype3 } from "@/store";

export default function Home(){
  const date = getCurrentDate();
  const expense = useData(state => state.expense);
  const dayAmount = (expense.find(entry => entry.date === date))?.amount || 0;
  
  const weekAmount = getWeekAmount(expense, date);
  
  const monthAmount = getMonthAmount(expense, date);
  
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
function getWeekAmount(expense: datatype3, date: string){
  const weekArr = (expense.filter(entry => getWeekNumber(entry.date) === getWeekNumber(date))).map(a => a.amount);
  const weekAmount = (weekArr.reduce((a, b) => a + b, 0 ))[0] || 0;
  return weekAmount;
}
function getMonthAmount(expense: datatype3, date: string){
  const monthArr = (expense.filter(entry => entry.date.slice(3) === date.slice(3))).map(a => a.amount);
  const monthAmount = (monthArr.reduce((a,b) => a + b, 0))[0] || 0;
  return monthAmount;
}