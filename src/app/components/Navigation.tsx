"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "../../../public/trans_bg.png";
import { Switch } from "@/components/ui/switch";

export default function Navigation() {
  const navigationLits = [
    { label: "Цены", link: "/price" },
    { label: "Процесс обработки", link: "/proccess" },
    { label: "Примеры работ", link: "/works" },
    { label: "Отзывы", link: "/reviews" },
    { label: "Блог", link: "/blog" },
    { label: "Ответы на вопросы", link: "/answers" },
    { label: "Адреса", link: "adress" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Логика для переключения темы
  useEffect(() => {
    // Проверяем, есть ли сохраненная тема в localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <header className="bg-background dark:bg-backgroundDark border-b-2 border-b-black dark:border-b-gray-700">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-[85rem] items-center justify-between p-2 lg:px-6"
      >
        {/* Логотип */}
        <div className="flex">
          <a href="/glav" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image width={"50"} height={"50"} alt="" src={Logo} />
          </a>
        </div>

        {/* Мобильное меню */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="text-gray-700 dark:text-gray-300 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Десктопное меню */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navigationLits.map((el, i) => (
            <a
              key={i}
              href={el.link}
              className="text-lg text-gray-900 dark:text-gray-300 hover:underline hover:decoration-2 hover:underline-offset-2"
            >
              {el.label}
            </a>
          ))}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* Кнопка переключения темы */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 dark:text-gray-300">Светлая</span>
              <Switch
                checked={isDarkMode}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-gray-700 data-[state=unchecked]:bg-gray-300"
              />
              <span className="text-gray-700 dark:text-gray-300">Темная</span>
            </div>
          </div>
        </PopoverGroup>
      </nav>

      {/* Мобильное меню */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 bg-black/20 dark:bg-black/50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background1 dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-700/50">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image width={"50"} height={"50"} alt="" src={Logo} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 dark:text-gray-300 -m-2.5 rounded-md p-2.5"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700/50">
              <div className="space-y-2 py-6">
                {navigationLits.map((el, i) => (
                  <a
                    key={i}
                    href={el.link}
                    className="text-base font-semibold text-gray-900 dark:text-gray-300 -mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {el.label}
                  </a>
                ))}
              </div>
              <div className="py-6">
                {/* Кнопка переключения темы для мобильного меню */}
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700 dark:text-gray-300">Светлая</span>
                  <Switch
                    checked={isDarkMode}
                    onCheckedChange={toggleTheme}
                    className="data-[state=checked]:bg-gray-700 data-[state=unchecked]:bg-gray-300"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Темная</span>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}