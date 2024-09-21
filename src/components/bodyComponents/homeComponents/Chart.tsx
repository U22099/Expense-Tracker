"use client";
import Card from "@/components/utils/Card";
import PieChart from "@/components/utils/PieChart";
import LineChart from "@/components/utils/LineChart";

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
        <div className="pb-10 pt-4 h-full flex px-4 md:px-8 w-full">
            <Card className="dark:border-1 dark:border-slate-300 p-2 rounded-md w-full md:w-1/2 h-80">
                <PieChart data={data} colors={categoriesColors} value="amount"/>
            </Card>
            <Card className="dark:border-1 dark:border-slate-300 p-2 rounded-md w-full md:w-1/2 h-80">
                <LineChart data={data} name="category" value="amount"/>
            </Card>
        </div>
    )
}