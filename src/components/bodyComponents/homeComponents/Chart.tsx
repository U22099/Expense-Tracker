"use client";
import Card from "@/components/utils/Card";
import Piechart from "@/components/utils/PieChart";
import Linechart from "@/components/utils/LineChart";
import { useData } from "@/store";

export default function Chart(){
  const data = useData(state => state.data);
  const categoriesColors = useData(state => state.categoriesColors);
      
    return(
        <div className="pb-10 pt-4 h-fit flex md:w-[90vw] overflow-hidden overflow-x-auto md:overflow-x-hidden gap-4">
            <Card className="dark:border-slate-300 dark:border-2 p-2 rounded-md w-[90vw] md:w-1/2 h-80">
                <Piechart data={data} colors={categoriesColors} value="amount"/>
            </Card>
            <Card className="dark:border-slate-300 dark:border-2 p-2 rounded-md w-[90vw] md:w-1/2 h-80">
                <Linechart data={data} name="category" value="amount"/>
            </Card>
        </div>
    )
}