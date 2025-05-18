"use client";

import Image from "next/image";
import MobileSidebarNavigation from "./ui/MobileSidebarNavigation";
import ThemeSwitcher from "./ui/ThemeSwitcher";
import { navigationLinks } from "@/lib/contants";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

export default function Navigation() {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  if (isMobile) {
    return (
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 left-0 w-full z-50">
        <nav className="max-w-[85rem] mx-auto px-4 py-2 lg:px-6 flex items-center justify-between">
          <a href="/glav" className="flex items-center space-x-2 ">
            <Image src="/trans_bg.png" alt="Логотип" width={50} height={50} />
          </a>
          <div className="mr-2">
            <MobileSidebarNavigation />
          </div>
        </nav>
      </header>
    );
  }
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 left-0 w-full z-50 hidden md:block">
      <nav className="max-w-[85rem] mx-auto  py-2 px-6 flex items-center justify-between">
        {/* Логотип */}
        <a href="/glav" className="flex items-center">
          <Image src="/trans_bg.png" alt="Логотип" width={50} height={50} />
        </a>

        {/* Десктопное меню */}
        <div className="flex w-full justify-around">
          {navigationLinks.map((el, i) => (
            <a
              key={i}
              href={el.link}
              className="text-lg text-gray-900 dark:text-gray-300 hover:underline hover:decoration-2 hover:underline-offset-2 pl-4"
            >
              {el.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex">
          <ThemeSwitcher />
        </div>
      </nav>
      <MobileSidebarNavigation />
    </header>
  );
}
