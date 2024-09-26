"use client";

import Chart from "./homeComponents/Chart";
import ExpenseList from "./homeComponents/ExpenseList";
import Card from "../utils/Card";

export default function Home(){
    return(
        <div className="flex flex-col gap-2 w-screen p-4 md:p-6 justify-center items-start">
            <Chart />
            <div className="flex justify-between px-4 mt-2 mx-auto w-fit gap-4">
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