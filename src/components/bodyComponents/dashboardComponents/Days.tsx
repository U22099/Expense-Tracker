"use client";
import Linechart from "@/components/utils/LineChart";
import Lists from "@/components/utils/Lists";
import Card from "@/components/utils/Card"

export default function Days() {
  const data: {name: string, amount: number}[] = [
    {
      name: "Monday",
      amount: 4536
    },
    {
      name: "Tuesday",
      amount: 536
    },
    {
      name: "Wednesday",
      amount: 4536
    },
    {
      name: "Thursday",
      amount: 2536
    },
    {
      name: "Friday",
      amount: 2453
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