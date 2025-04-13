import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Error from "next/error";
import Custom404 from "@/pages/Custom404";


export const metadata: Metadata = {
  title: "PowerCor",
  description: "The best anticorrosion site!",
};

const jost = Jost({subsets: ['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} font-jost antialiased bg-whitePower`}
      >
        <Navigation />
        {children}
        {/* {Error ? <Custom404/>: null} */}
      </body>
    </html>
  );
}
