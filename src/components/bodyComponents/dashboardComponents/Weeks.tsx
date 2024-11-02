"use client";
import Barchart from "@/components/utils/BarChart";
import Lists from "@/components/utils/Lists";
import Card from "@/components/utils/Card";
import { useData } from "@/store";

export default function Weeks() {
  const data: { name: string, amount: number } [] = useData(state => state.weeks);
  
  return (
    <div className="flex flex-col w-full justify-start items-start gap-2">
      <Card className="dark:border-slate-300 dark:border-2 p-2 rounded-md w-[90vw] md:w-1/2 h-80">
          <Barchart data={data} name="name" value="amount"/>
      </Card>
      {data.map((x, i) => {
        return <Lists key={i} name={x.name} amount={x.amount} />
      })}
    </div>
  )
}