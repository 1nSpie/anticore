"use client";

import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import ThemeSwitcher from "./ThemeSwitcher";
import { navigationLinks } from "@/lib/contants";

export default function MobileSidebarNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Кнопка для открытия меню */}
     <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden text-gray-700 dark:text-gray-300 p-2 rounded-md"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>


      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 w-64 sm:w-72 h-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-400 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="mx-auto p-4 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700 dark:text-gray-300"
                aria-label="Закрыть меню"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <nav className="p-4 space-y-4">
              {navigationLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="block text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
