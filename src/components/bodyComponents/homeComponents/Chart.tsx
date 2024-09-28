"use client";
import Card from "@/components/utils/Card";
import Piechart from "@/components/utils/PieChart";
import Linechart from "@/components/utils/LineChart";
import { useData } from "@/store";

export default function Chart(){
  const data = useData(state => state.data);
  const categoriesColors = useData(state => state.categoriesColors);
      
    return(
        <div className="pb-10 pt-4 h-fit flex w-[90vw] md:w-full overflow-hidden overflow-x-scroll md:overflow-x-hidden gap-4">
            <Card className="dark:border-slate-300 dark:border-2 p-2 rounded-md min-w-[90vw] md:min-w-1/2 h-80">
                <Piechart data={data} colors={categoriesColors} value="amount"/>
            </Card>
            <Card className="dark:border-slate-300 dark:border-2 p-2 rounded-md min-w-[90vw] md:min-w-1/2 h-80">
                <Linechart data={data} name="category" value="amount"/>
            </Card>
        </div>
    )
}