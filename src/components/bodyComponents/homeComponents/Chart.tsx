"use client";
import Card from "@/components/utils/Card";
import Piechart from "@/components/utils/PieChart";
import Linechart from "@/components/utils/LineChart";

export default function Chart(){
  const categoriesColors: string[] = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  type datatype = {[index: string]: string | number}[];
  const data: datatype = [
      {
        category: 'Page A',
        amount: 4000
      },
      {
        category: 'Page B',
        amount: 3000
      },
      {
        category: 'Page C',
        amount: 2000
      },
      {
        category: 'Page D',
        amount: 2780
      },
      {
        category: 'Page E',
        amount: 1890
      },
      {
        category: 'Page F',
        amount: 2390
      },
      {
        category: 'Page G',
        amount: 3490
      },
    ];
      
    return(
        <div className="pb-10 pt-4 h-full flex px-4 md:px-8 w-[90vw] md:w-screen overflow-hidden overflow-x-auto">
            <Card className="dark:border-slate-300 dark:border-2 p-2 rounded-md min-w-[90vw] md:min-w-1/2 h-80">
                <Piechart data={data} colors={categoriesColors} value="amount"/>
            </Card>
            <Card className="dark:border-slate-300 dark:border-2 p-2 rounded-md min-w-[90vw] md:min-w-1/2 h-80">
                <Linechart data={data} name="category" value="amount"/>
            </Card>
        </div>
    )
}