import React from "react";

export default function Card({
  children, className: ""
}: {
  children: React.ReactNode,
  className: string
}) {
  return (
    <main className={`flex flex-col justify-center bg-white dark:bg-black shadow-lg cursor-pointer ${className}`}>
        {children}
    </main>
  );
}
