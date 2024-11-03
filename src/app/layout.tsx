import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "An expense tracker to track all your expenses",
  icons: [
    { src: "/logo-16.png", type: "image/png", sizes: "16x16" },
    { src: "/logo-32.png", type: "image/png", sizes: "32x32" },
    { src: "/logo-48.png", type: "image/png", sizes: "48x48" },
    { src: "/logo-72.png", type: "image/png", sizes: "72x72" },
    { src: "/logo-96.png", type: "image/png", sizes: "96x96" },
    { src: "/logo-128.png", type: "image/png", sizes: "128x128" },
    { src: "/logo-144.png", type: "image/png", sizes: "144x144" },
    { src: "/logo-152.png", type: "image/png", sizes: "152x152" },
    { src: "/logo-180.png", type: "image/png", sizes: "180x180" },
    { src: "/logo-192.png", type: "image/png", sizes: "192x192" },
    { src: "/logo-256.png", type: "image/png", sizes: "256x256" },
    { src: "/logo-512.png", type: "image/png", sizes: "512x512" },
  ],
  themeColor: "#000000",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppStatusBarStyle: "default",
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