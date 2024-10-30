"use client";
import Card from "../../utils/Card";

export default function Navigation({ setNav, nav }: {setNav: (arg: number) => void,
  nav: number
}) {
  return (
    <div className="w-fit flex gap-2 self-start">
      <Card
      className={(nav === 0 ? "bg-black dark:bg-white dark:text-black ":"") + "rounded-xl bg-none dark:bg-black"}
      onClick={ () => setNav(0)} >Days  </Card>
      <Card
      className={(nav === 1 ? "bg-black dark:bg-white dark:text-black ":"") + "rounded-xl bg-none dark:bg-black"}
      onClick={ () => setNav(1)} >Weeks</Card>
      <Card
      className={(nav === 2 ? "bg-black dark:bg-white dark:text-black ":"") + "rounded-xl bg-none dark:bg-black"}
      onClick={ () => setNav(2)} >Months</Card>
    </div>
  )
}