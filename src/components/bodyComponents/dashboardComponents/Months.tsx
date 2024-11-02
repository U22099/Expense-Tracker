"use client";
import Barchart from "@/components/utils/BarChart";
import Lists from "@/components/utils/Lists";
import Card from "@/components/utils/Card";
import { useData } from "@/store";
import { type datatype3 } from "@/store";

export default function Months() {
  const expense = useData(state => state.expense);
  const data: datatype3 = getMonthExpense(expense);
  return (
    <div className="flex flex-col w-full justify-start items-start gap-2">
      <Card className="dark:border-slate-300 dark:border-2 p-2 rounded-md w-[90vw] md:w-1/2 h-80">
          <Barchart data={data} name="name" value="amount"/>
      </Card>
      {data.reverse().map((x, i) => {
        return <Lists key={i} name={x.date} amount={x.amount} />
      })}
    </div>
  )
}

const getMonthExpense = (expense: datatype3): datatype3 => {
  const month = expense.reduce((acc, current) => {
    const monthDate = current.date.slice(3);
    const existDate = acc.find(entry => entry.date === monthDate
    );
    if(existDate){
      existDate.amount += current.amount;
    } else {
      acc.push({
        date: monthDate,
        amount: current.amount
      });
    }
    return acc;
  }, []);
  console.log(month);
  return month;
}
