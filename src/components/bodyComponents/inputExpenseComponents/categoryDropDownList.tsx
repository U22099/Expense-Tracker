"use client";
import React, { useState, useEffect } from "react";
import { useData, type datatype } from "@/store";
import Card from "@/components/utils/Card";

export default function categoryDropDownList({ setCategory }: {setCategory: (arg: string) => void}) {
  
  const [currentIndex, setCurrentIndex]: [currentIndex: number, setCurrentIndex: (arg: number) => void] = useState(0);
  
  const data: datatype = useData(state => store.data);
  
  const categoryArr: string[] = [...data.map(x => x.category)];
  
  const nextCategory: React.MouseEventHandler<HTMLElement> | undefined  = () => {
    
    currentIndex < categoryArr.length ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0);
  }
  useEffect(() => {
    setCategory(categoryArr[currentIndex]);
  }, [currentIndex]);
  return (
    <main>
      <Card onClick={nextCategory}>{categoryArr[currentIndex]}</Card>
    </main>
  )
}