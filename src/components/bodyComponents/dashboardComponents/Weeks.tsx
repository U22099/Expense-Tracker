"use client";
import Linechart from "@/components/utils/LineChart";
import Lists from "@/components/utils/Lists";
import Card from "@/components/utils/Card"

export default function Weeks() {
  const data: { name: string, price: number } [] = [
    {
      name: "04/07",
      price: 4536
    },
    {
      name: "11/07",
      price: 536
    },
    {
      name: "18/07",
      price: 4536
    },
    {
      name: "25/07",
      price: 2536
    }
  ]
  return (
    <div className="flex flex-col w-full justify-start items-start gap-2">
      <Card className="dark:border-slate-300 dark:border-2 p-2 rounded-md w-[90vw] md:w-1/2 h-80">
          <Linechart data={data} name="name" value="price"/>
      </Card>
      {data.map((x, i) => {
        return <Lists key={i} name={x.name} price={x.price} />
      })}
    </div>
  )
}