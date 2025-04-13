"use client";

import Image from "next/image";
import heroImg from "../../../public/vecteezy_front-view-dark-silhouette-of-a-modern-luxury-black-car_23977547.jpg";

export default function Herosection() {
  return (
    <div className=" bg-black">
      {/* Grid */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-whitePower sm:text-4xl lg:text-6xl lg:leading-tight">
            Защитим ваш автомобиль от корозии
          </h1>
          <h1 className=" block text-3xl font-bold sm:text-4xl lg:text-6xl lg:leading-tight text-orange-500">
            ANTICORE
          </h1>
          <p className="mt-3 text-lg text-whitePower">
            обработка от 8 часов с детальным фотоотчетом, бесплатный гарантийный
            осмотр каждые 6 месяцев
          </p>

          <div className="mt-7 grid gap-3 w-full sm:inline-flex content-center">
            <a
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-orange-500 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Заказать обратный звонок
            </a>
          </div>
        </div>

        <div className="relative">
          <Image
            src={heroImg} // Укажите путь к вашему изображению
            alt="Car"
            width={500} // Ширина изображения
            height={300} // Высота изображения
            className="w-full rounded:mb"
          />
        </div>
      </div>
    </div>
  );
}
