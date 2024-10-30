"use client";

import Image from "next/image";
import Card from "@/components/utils/Card";

export default function Lists({ name, price } : {
  name: string | number,
  price: string | number,
}) {
  return (

    <div className="w-full">
  <Card className="w-full items-center justify-between">
    <div className="flex items-center gap-3 w-full justify-start">
      <h1 className="font-bold text-black dark:text-white text-[1.3em] md:text-[1.5em] w-full">{name}</h1>
    </div>
    <p className="font-bold text-black dark:text-white text-[1em] md:text-[1.2em]">${price}
    </p>
  </Card>
</div>
  );
}