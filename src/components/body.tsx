"use client";
import Card from "@/components/utils/Card";
import BarChart from "@/components/utils/BarChart";

export default function Body(){
    const data = [
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
        <div className="pb-10 pt-4 h-full flex">
            <Card>
                <BarChart data={data} />
            </Card>
        </div>
    )
}