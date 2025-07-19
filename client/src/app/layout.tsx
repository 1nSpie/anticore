import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../lib/ThemeProvider";
import { FeedbackModalProvider } from "../lib/FeedbackModalProvider";
import Footer from "./ui/Footer";
import ClientOnly from "./ui/ClientOnly";
import Navigation from "./ui/Navigation";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
           <FeedbackModalProvider delay={30000} cooldownHours={24}>
            <Navigation />
            {children}
            <ClientOnly />
            <Footer />
          </FeedbackModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
