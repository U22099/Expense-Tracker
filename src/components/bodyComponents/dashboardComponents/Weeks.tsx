"use client";
import Barchart from "@/components/utils/BarChart";
import Lists from "@/components/utils/Lists";
import Card from "@/components/utils/Card";
import { useData } from "@/store";
import { getWeek, parse } from 'date-fns';

export default function Weeks() {
  const expense: { date: string, amount: number } [] = useData(state => state.expense);
  const data = getWeekExpense(expense);
  return (
    <div className="flex flex-col w-full justify-start items-start gap-2">
      <Card className="dark:border-slate-300 dark:border-2 p-2 rounded-md w-[90vw] md:w-1/2 h-80">
          <Barchart data={data} name="name" value="amount"/>
      </Card>
      {data.reverse().map((x, i) => {
        return <Lists key={i} name={`Week ${x.data}`} amount={x.amount} />
      })}
    </div>
  )
}

const getWeekExpense = (expense) => {
  const week = expense.reduce((acc, current) => {
    const existDate = acc.find(entry => entry.date === getWeekNumber(current.date).toString()
    );
    if(existDate){
      existDate.amount += current.amount;
    } else {
      acc.push({
        date: getWeekNumber(current.date).toString(),
        amount: current.amount
      });
    }
    return acc;
  });
  console.log(week);
  return week;
}

function getWeekNumber(date){
  const date = parse(date, "dd/MM/yyyy", new Date());
  const weekNumber = getWeek(date);
  console.log(weekNumber);
  return weekNumber;
}