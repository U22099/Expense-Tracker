export default function Card({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col justify-center bg-white dark:bg-black shadow-lg dark:border-3 dark:border-white">
        {children}
    </main>
  );
}