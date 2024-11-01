"use client";

import Chart from "./homeComponents/Chart";
import ExpenseList from "./homeComponents/ExpenseList";
import Card from "../utils/Card";

export default function Home(){
    return(
        <div className="flex flex-col gap-2 w-full justify-start pb-12">
            <Chart />
            <div className="flex justify-between mt-2 mx-auto w-fit gap-4">
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