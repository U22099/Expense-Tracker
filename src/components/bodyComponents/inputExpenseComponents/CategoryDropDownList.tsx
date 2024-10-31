"use client";
import React, { useState, useEffect } from "react";
import { useData, type datatype } from "@/store";
import Card from "@/components/utils/Card";

export default function CategoryDropDownList({ setCategory }: {setCategory: (arg: string) => void}) {
  
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const data: datatype = useData(state => state.data);
  
  const categoryArr: string[] = [...data.map(x => x.category)];
  
  const nextCategory: React.MouseEventHandler<HTMLElement> | undefined  = () => {
    
    currentIndex < categoryArr.length - 1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0);
  }
  useEffect(() => {
    setCategory(categoryArr[currentIndex]);
  }, [currentIndex, setCategory, categoryArr]);
  return (
    <main className="select-none">
      <Card onClick={nextCategory}>{categoryArr[currentIndex]}</Card>
    </main>
  )
}