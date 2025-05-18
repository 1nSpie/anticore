import type { Metadata } from "next";
import { Geist, Geist_Mono,  } from "next/font/google";
import "./globals.css";
import Navigation from "./ui/Navigation";
import { ThemeProvider } from "../lib/ThemeProvider";
import Footer from "./ui/Footer";

export const metadata: Metadata = {
  title: "PowerCor",
  description: "The best anticorrosion site!",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <div className="z-20">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
