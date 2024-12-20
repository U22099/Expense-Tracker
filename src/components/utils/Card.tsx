import React from "react";

export default function Card({
  children, className, onClick
}: {
  children: React.ReactNode | string,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLElement> | undefined,
}) {
  return (
    <main onClick={onClick} className={`flex items-center justify-center shadow-lg rounded-xl cursor-pointer p-2 md:p-4  ${className ? className : "bg-white dark:bg-black text-black dark:text-white"}`}>
        {children}
    </main>
  );
}
