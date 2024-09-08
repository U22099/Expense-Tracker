import type { Metadata } from "next";
import { Inter } from "next/font/google";
import authProvider from "./authProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "An ai powered expense tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <authProvider>
          {children}
        </authProvider>
      </body>
    </html>
  );
}