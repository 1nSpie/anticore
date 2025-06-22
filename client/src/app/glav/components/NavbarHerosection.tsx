"use client";

import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Button } from "@/shadcn/button";
import { FaMapMarkerAlt } from "react-icons/fa";
import { navigationLinks } from "@/lib/contants";
import { usePathname } from "next/navigation";

export default function NavbarHeroSection() {
  const pathname = usePathname();

  // Скрываем navbar на главной
  if (pathname === "/glav")
    return (
      <div className="relative h-screen overflow-hidden hidden xl:block">
        {/* Видео на заднем фоне */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full z-[-1]"
          preload="auto"
        >
          <source src="http://localhost:4444/api/video/videoStart.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>

        {/* Тёмный overlay для улучшения читаемости текста */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

        {/* Основной контент */}
        <div className="relative z-10">
          {/* Навигационное меню */}
          <nav className="mx-auto px-4 py-4 flex items-center justify-between w-full">
            {/* Логотип */}
            <div className="flex items-center wrap">
              <div className="flex items-center min-w-fit mr-8">
                <Image
                  src={"/trans_bg.png"}
                  alt="Логотип"
                  width={100}
                  height={100}
                />
                <div>
                  <span className="text-5xl font-bold text-white font-mono">
                    <span className="text-orange-500">Аван</span>Кор
                  </span>
                </div>
              </div>
              <div className="hidden md:flex flex-col no-wrap">
                <div
                  className="flex cursor-pointer mb-1"
                  onClick={() => console.log("Zhuk")}
                >
                  <FaMapMarkerAlt className="mr-1 text-orange-500" />
                  <span className="text-white">Жуковский</span>
                </div>
                <div
                  className="flex cursor-pointer"
                  onClick={() => console.log("Kolomna")}
                >
                  <FaMapMarkerAlt className="mr-1 text-orange-500" />
                  <span className="text-white">Коломна</span>
                </div>
                <span className="text-sm text-white dark:text-gray-300 border-t-2 border-dashed border-orange-500 mt-2 pt-2">
                  Ежедневно c 09:00 до 20:00
                </span>
              </div>
            </div>

            {/* Меню навигации */}
            <div className="flex w-2/3 gap-12 justify-center">
              {navigationLinks.map((el, i) => (
                <a
                  key={i}
                  href={el.link}
                  className="text-xl font-bold text-white hover:text-orangeDefault hover:underline hover:decoration-2 hover:underline-offset-8"
                >
                  {el.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="group flex items-center cursor-pointer justify-end mr-37">
            <div className="rounded-full border-2 border-orange-500 group-hover:border-orange-600 p-2 transition-colors duration-300">
              <PhoneIcon className="w-10 h-10 text-white" />
            </div>
            <div className="ml-2 text-right">
              <p className="text-xl text-white">+7 998 245 68 82</p>
              <p
                className="text-xl text-orange-500 hover:text-orange-600 border-b-2 border-dotted border-orange-500 
              group-hover:text-orange-600 group-hover:border-orange-600 transition-all duration-300"
              >
                Заказать звонок
              </p>
            </div>
          </div>

          {/* Hero Section */}
          <div className="flex items-center h-full mt-10 justify-end mr-37">
            <div className="py-8 flex flex-col items-end max-w-full mr-37">
              <h1 className="text-3xl font-bold text-white dark:text-white mb-4 text-center">
                Защита авто от коррозии — <br />
                <span className="text-orangeDefault">наша работа</span>
              </h1>
              <Button className="h-fit hover:bg-orange-600 mt-4 shadow-xl/30 shadow-orange-500/30 bg-orange-500 w-full">
                <p className="text-3xl text-white dark:text-gray-300 p-2">
                  Остановить коррозию
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
}
