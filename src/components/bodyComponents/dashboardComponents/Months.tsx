"use client";
import Linechart from "@/components/utils/LineChart";
import Lists from "@/components/utils/Lists";
import Card from "@/components/utils/Card"

export default function Months() {
  const data: { name: string, amount: number } [] = [
    {
      name: "June",
      amount: 4536
    },
    {
      name: "July",
      amount: 536
    },
    {
      name: "August",
      amount: 4536
    },
    {
      name: "September",
      amount: 2536
    }
  ]
  return (
    <div className="flex flex-col w-full justify-start items-start gap-2">
      <Card className="dark:border-slate-300 dark:border-2 p-2 rounded-md w-[90vw] md:w-1/2 h-80">
          <Linechart data={data} name="name" value="amount"/>
      </Card>
      {data.map((x, i) => {
        return <Lists key={i} name={x.name} amount={x.amount} />
      })}
    </div>
  )
}