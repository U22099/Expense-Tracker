"use client";
import Barchart from "@/components/utils/BarChart";
import Lists from "@/components/utils/Lists";
import Card from "@/components/utils/Card";
import { useData } from "@/store";

export default function Days() {
  const data: {date: string, amount: number}[] = useData(state => state.expense)
  return (
    <div className="flex flex-col w-full justify-start items-start gap-2">
      <Card className="dark:border-slate-300 dark:border-2 p-2 rounded-md w-[90vw] md:w-1/2 h-80">
          <Barchart data={data} name="date" value="amount"/>
      </Card>
      {data.reverse().map((x, i) => {
        return <Lists key={i} name={x.date} amount={x.amount} />
      })}
    </div>
  )
}