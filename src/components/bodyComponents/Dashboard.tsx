"use client";
import { useState } from 'React';
import Navigation from './dashboardComponents/Navigation.tsx';
import Days from './dashboardComponents/Days.tsx';
import Weeks from './dashboardComponents/Weeks.tsx';
import Months from './dashboardComponents/Months.tsx';

export default function Dashboard(){
  const [nav, setNav] = useState(0);
    return(
        <div className="flex flex-col gap-2 w-full justify-start align-start">
            <Navigation setNav={setNav} nav={nav} />
            {nav === 0 ? <Days /> 
            : nav === 1 ? <Weeks />
            : nav === 2 ? <Months /> : null}
        </div>
    )
}