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
        className="w-14 h-14 bg-orangeDefault hover:bg-orangeDefaultHover text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
          href="https://api.whatsapp.com/send/?phone=79932456882&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9+%D0%B4%D0%B5%D0%BD%D1%8C%21+%D0%A5%D0%BE%D1%87%D1%83+%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F+%D0%BD%D0%B0+%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83%29+&type=phone_number&app_absent=0 "
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-0 transform -translate-x-16 -translate-y-0"
        >
          <div className="w-12 h-12 bg-greenDefault hover:bg-greenDefaultHover rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110">
            <Image src={whatsappIcon} alt="WhatsApp" width={24} height={24} />
          </div>
        </Link>

        <Link
          href="https://t.me/anticore_ru "
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-0 left-13 transform -translate-x-10 -translate-y-10"
        >
          <div className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110">
            <Image src={telegramIcon} alt="Telegram" width={24} height={24} />
          </div>
        </Link>

        <a
          href="tel:+79982456882"
          className="absolute top-0 right-0 transform -translate-y-16 translate-x-0"
        >
          <div className="w-12 h-12 bg-orangeDefault hover:bg-orangeDefaultHover rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110">
            <svg className="w-[24px] h-[24px]">
              <PhoneIcon className="fill-orange dark:stroke-black h-24 w-24" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
