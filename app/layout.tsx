import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Header from "./ui/components/Header";
import CustomFooter from "./ui/components/CustomFooter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brescia Pride",
  description:
    "Vi aspettiamo ai nostri eventi e al corteo il 5 settembre 2026!",
  keywords:
    "Brescia Pride, Brescia Pride 2026, Pride, Corteo, Eventi Brescia, Queer Brescia, LGBTQIA+ Brescia",
  authors: [{ name: "Brescia Pride" }],
  openGraph: {
    title: "Brescia Pride",
    description:
      "Vi aspettiamo ai nostri eventi e al corteo il 5 settembre 2026!",
    locale: "it_IT",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body
        className={`${inter.className} bg-white focus-visible:outline-none relative w-lg mx-auto md:max-w-7xl md:shadow-2xl flex flex-col justify-between min-h-screen`}
      >
        <Header className="" />
        <main
          id="main-content"
          role="main"
          className="focus:outline-none flex-1"
          tabIndex={-1}
        >
          {children}
        </main>
        <CustomFooter className="" />
      </body>
    </html>
  );
}
