import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "An expense tracker to track all your expenses",
  icons: [
    { url: "/logo-16.png", type: "image/png", sizes: "16x16" },
    { url: "/logo-32.png", type: "image/png", sizes: "32x32" },
    { url: "/logo-48.png", type: "image/png", sizes: "48x48" },
    { url: "/logo-72.png", type: "image/png", sizes: "72x72" },
    { url: "/logo-96.png", type: "image/png", sizes: "96x96" },
    { url: "/logo-128.png", type: "image/png", sizes: "128x128" },
    { url: "/logo-144.png", type: "image/png", sizes: "144x144" },
    { url: "/logo-152.png", type: "image/png", sizes: "152x152" },
    { url: "/logo-180.png", type: "image/png", sizes: "180x180" },
    { url: "/logo-192.png", type: "image/png", sizes: "192x192" },
    { url: "/logo-256.png", type: "image/png", sizes: "256x256" },
    { url: "/logo-512.png", type: "image/png", sizes: "512x512" },
  ],
  themeColor: "#000000",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-full bg-white dark:bg-black"}>
        {children}
      </body>
    </html>
  );
}