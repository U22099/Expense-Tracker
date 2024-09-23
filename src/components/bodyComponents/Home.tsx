"use client";

import Chart from "./homeComponents/Chart";
import ExpenseList from "./homeComponents/ExpenseList";
import Card from "../utils/Card";

export default function Home(){
    return(
        <div>
            <Chart />
            <div>
                <Card className="text-black dark:text-white">
                    Day: ${489}
                </Card>
                <Card className="text-black dark:text-white">
                    Week: ${489}
                </Card>
                <Card className="text-black dark:text-white">
                    Month: ${489}
                </Card>
            </div>
            <ExpenseList/>
        </div>
    )
}