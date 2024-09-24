"use client";
import Card from "@/components/utils/Card";
import Piechart from "@/components/utils/PieChart";
import Linechart from "@/components/utils/LineChart";
import { useData } from "@/store";

export default function Chart(){
  const data = useData(state => state.data);
  const categoriesColors = useData(state => state.categoriesColors);
      
    return(
        <div className="pb-10 pt-4 h-full flex px-4 md:px-8 w-[90vw] md:w-screen overflow-hidden overflow-x-auto gap-4">
            <Card className="dark:border-slate-300 dark:border-2 p-2 rounded-md min-w-[90vw] md:min-w-1/2 h-80">
                <Piechart data={data} colors={categoriesColors} value="amount"/>
            </Card>
            <Card className="dark:border-slate-300 dark:border-2 p-2 rounded-md min-w-[90vw] md:min-w-1/2 h-80">
                <Linechart data={data} name="category" value="amount"/>
            </Card>
        </div>
    )
}