"use client";
import Card from "../../utils/Card";

export default function Navigation({ setNav, nav }: {setNav: (arg: number) => void,
  nav: number
}) {
  return (
    <div className="w-fit flex gap-2 self-start">
      <Card
      className={"rounded-xl " + (nav === 0 ? "bg-black dark:bg-white dark:text-black text-white":"bg-white dark:bg-black dark:text-white")}
      onClick={() => setNav(0)} >Days  </Card>
      <Card
      className={"rounded-xl " + (nav === 1 ? "bg-black dark:bg-white dark:text-black text-white":"bg-white dark:bg-black dark:text-white")}
      onClick={() => setNav(1)} >Weeks</Card>
      <Card
      className={"rounded-xl " + (nav === 2 ? "bg-black dark:bg-white dark:text-black text-white":"bg-white dark:bg-black dark:text-white")}
      onClick={() => setNav(2)} >Months</Card>
    </div>
  )
}