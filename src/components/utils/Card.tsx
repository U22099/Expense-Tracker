import React from "react";

export default function Card({
  children, className, onClick
}: {
  children: React.ReactNode | string,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLElement> | undefined,
}) {
  return (
    <main onClick={onClick} className={`flex items-center justify-center shadow-lg cursor-pointer p-2 md:p-4 text-black dark:text-white ${className ? className : "bg-white dark:bg-black"}`}>
        {children}
    </main>
  );
}
