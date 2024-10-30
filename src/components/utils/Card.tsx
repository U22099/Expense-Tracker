import React from "react";

export default function Card({
  children, className, onClick
}: {
  children: React.ReactNode | string,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLElement> | undefined,
}) {
  return (
    <main onClick={onClick} className={`flex items-center justify-center bg-white dark:bg-black shadow-lg cursor-pointer p-2 md:p-4 ${className ? className : ""}`}>
        {children}
    </main>
  );
}
