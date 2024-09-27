import React from "react";

export default function Card({
  children, className
}: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <main className={`flex justify-center bg-white dark:bg-black shadow-lg cursor-pointer p-2 md:p-4 ${className ? className : ""}`}>
        {children}
    </main>
  );
}
