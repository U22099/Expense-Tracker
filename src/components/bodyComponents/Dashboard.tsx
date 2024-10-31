"use client";
import { useState } from 'react';
import Navigation from './dashboardComponents/Navigation';
import Days from './dashboardComponents/Days';
import Weeks from './dashboardComponents/Weeks';
import Months from './dashboardComponents/Months';

export default function Dashboard(){
  const [nav, setNav] = useState<number>(0);
    return(
        <div className="flex flex-col gap-2 w-full justify-start align-start">
            <Navigation setNav={setNav} nav={nav} />
            {nav === 0 ? <Days /> 
            : nav === 1 ? <Weeks />
            : nav === 2 ? <Months /> : null}
        </div>
    )
}