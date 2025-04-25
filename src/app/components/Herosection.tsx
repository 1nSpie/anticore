"use client";

import Image from "next/image";
import heroImg from "../../../public/hero.png";

export default function Herosection() {
  return (
    <div className="bg-background1 dark:bg-backgroundDark">
      {/* Grid */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        {/* Левая часть (текст) */}
        <div>
          <h1 className="block text-3xl font-bold sm:text-4xl lg:text-6xl lg:leading-tight text-gray-800 dark:text-white">
            Защитим ваш автомобиль от коррозии
          </h1>
          <h1 className="block text-3xl font-bold sm:text-4xl lg:text-6xl lg:leading-tight text-orange-500 dark:text-orange-400">
            ANTICORE
          </h1>
          <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
            Обработка от 8 часов с детальным фотоотчетом, бесплатный гарантийный
            осмотр каждые 6 месяцев
          </p>

          {/* Кнопка */}
          <div className="mt-7 grid gap-3 w-full sm:inline-flex content-center">
            <a
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-orange-500 bg-background1 dark:bg-gray-800 text-gray-800 dark:text-white shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Заказать обратный звонок
            </a>
          </div>
        </div>

        {/* Правая часть (изображение) */}
        <div className="relative">
          <Image
            src={heroImg} // Укажите путь к вашему изображению
            alt="Car"
            width={550} // Ширина изображения
            height={200} // Высота изображения
            className="rounded-3xl shadow-lg dark:shadow-gray-700"
          />
        </div>
      </div>
    </div>
  );
}