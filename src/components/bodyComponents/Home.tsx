"use client";

import Chart from "./homeComponents/Chart";
import ExpenseList from "./homeComponents/ExpenseList";
import Card from "../utils/Card";

export default function Home(){
    return(
        <div>
            <Chart />
            <div className="flex justify-between px-4 mt-2">
                <Card>
                    <h1 className="text-black dark:text-white font-bold">Day: ${489}</h1>
                </Card>
                <Card>
                    <h1 className="text-black dark:text-white font-bold">Week: ${489}</h1>
                </Card>
                <Card>
                    <h1 className="text-black dark:text-white font-bold">Month: ${489}</h1>
                </Card>
            </div>
            <ExpenseList/>
        </div>
    )
}