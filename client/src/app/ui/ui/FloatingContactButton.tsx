"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import telegramIcon from "public/icons8-телеграм.svg";
import whatsappIcon from "public/icons8-whatsapp.svg";

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 md:block hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 transform hover:scale-105"
      >
        <svg className="w-10 h-10">
          <PhoneArrowUpRightIcon className="fill-orange dark:stroke-black" />
        </svg>
      </button>

      <div
        className={`absolute bottom-13 right-16 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        } transition-all duration-300`}
      >
        <Link
          href="https://wa.me/79982456882 "
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-0 transform -translate-x-16 -translate-y-0"
        >
          <div className="w-12 h-12 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110">
            <Image src={whatsappIcon} alt="WhatsApp" width={24} height={24} />
          </div>
        </Link>

        <Link
          href="https://t.me/anticore_ru "
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-0 left-13 transform -translate-x-10 -translate-y-10"
        >
          <div className="w-12 h-12 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110">
            <Image src={telegramIcon} alt="Telegram" width={24} height={24} />
          </div>
        </Link>

        <a
          href="tel:+79982456882"
          className="absolute top-0 right-0 transform -translate-y-16 translate-x-0"
        >
          <div className="w-12 h-12 bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110">
            <svg className="w-[24px] h-[24px]">
              <PhoneIcon className="fill-orange dark:stroke-black h-24 w-24" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
