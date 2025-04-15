"use client";

import { useState } from "react";
import carousel1 from "../../../public/carousel1.png";
import carousel2 from "../../../public/carousel2.jpg";
import about1 from "../../../public/about1.png";

import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Mercasol 831",
    content:
      "Антикор шведского бренда Mercasol, на основе технологии, идеальной для нашего климата",
    img: carousel1,
  },
  {
    id: 2,
    title: "Tekko ML",
    content:
      "Отечественный современный состав, не уступающий по эффективности иностранным аналогам",
    img: carousel2,
  },
  {
    id: 3,
    title: "Mercasol 831",
    content:
      "Антикор шведского бренда Mercasol, на основе технологии, идеальной для нашего климата",
    img: carousel1,
  },
  {
    id: 4,
    title: "Mercasol 831",
    content:
      "Антикор шведского бренда Mercasol, на основе технологии, идеальной для нашего климата",
    img: carousel1,
  },
  {
    id: 5,
    title: "Mercasol 831",
    content:
      "Антикор шведского бренда Mercasol, на основе технологии, идеальной для нашего климата",
    img: carousel1,
  },
];

const icons = [
  {
    id: 1,
    description: "Лазерная очистка металла",
    icon: about1,
  },
  {
    id: 2,
    description: "Лазерная очистка металла",
    icon: about1,
  },
  {
    id: 3,
    description: "Лазерная очистка металла",
    icon: about1,
  },
  {
    id: 4,
    description: "Лазерная очистка металла",
    icon: about1,
  },
];

export default function Carousel() {
  // Состояние для хранения индекса текущего слайда
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Обработчик для перехода к следующему слайду
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="max-w-[85rem] mx-auto h-auto">
      <div className="rounded-xl text-gray-800 dark:text-white block md:hidden max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 ">
          Мы обрабатываем только проверенными материалами
        </h2>
        <p className="text-gray-800 dark:text-white">
          И делаем все только по технологическим картам производителей
        </p>
      </div>
      {/* Контейнер для карусели и блока информации */}
      <div className="grid md:grid-cols-2 items-center gap-12 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Карусель */}
        <div className="w-full relative ">
          {/* Контейнер слайдов */}
          <div className="hs-carousel relative overflow-hidden min-h-96 bg-white border border-gray-200 rounded-xl">
            <div
              className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 w-[100%]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, key) => (
                <div key={key} className="hs-carousel-slide w-full shrink-0">
                  <div className=" h-full bg-whitePower p-6 dark:bg-neutral-900">
                    <div className="flex h-full justify-center items-center">
                      <Image
                        className="sm:w-40"
                        src={slide.img}
                        alt={"carousel1"}
                        width={0}
                        height={0}
                      />
                      <div className="pr-8 md:pr-4 flex flex-col max-w-1/2">
                        <span className="self-center text-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                          {slide.title}
                        </span>
                        <span className="text-center self-center text-2xl text-gray-800 transition duration-700 dark:text-white">
                          {slide.content}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопка "Предыдущий" */}
          <button
            type="button"
            onClick={prevSlide}
            className="hs-carousel-prev hs-carousel-disabled:opacity-50 focus: hs-carousel-disabled:cursor-default absolute top-1/2 start-2 inline-flex justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full shadow-2xs hover:bg-gray-100 -translate-y-1/2 focus:outline-hidden"
          >
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>

          {/* Кнопка "Следующий" */}
          <button
            type="button"
            onClick={nextSlide}
            className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 end-2 inline-flex justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full shadow-2xs hover:bg-gray-100 -translate-y-1/2 focus:outline-hidden"
          >
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </button>

          {/* Индикаторы слайдов */}
          <div className="hs-carousel-pagination justify-center absolute bottom-3 start-0 end-0 flex gap-x-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-orange-500" : "bg-gray-300"
                } hover:bg-orange-600`}
              ></button>
            ))}
          </div>
        </div>

        {/* Блок с информацией */}
        <div className="w-full h-full">
          <div className="rounded-xl text-gray-800 dark:text-white hidden md:block">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 ">
              Мы обрабатываем только проверенными материалами
            </h2>
            <p className="text-gray-800 dark:text-white">
              И делаем все только по технологическим картам производителей
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6 justify-items-center md:justify-items-center">
            {icons.map((el) => (
              <div
                key={el.id}
                className="flex flex-col items-center text-center"
              >
                {/* Изображение */}
                <Image
                  src={el.icon}
                  alt={el.description}
                  width={100}
                  height={100}
                  className="w-24 h-24 object-cover mb-2"
                />
                {/* Текст */}
                <p className="text-sm font-medium text-gray-800 dark:text-white">
                  {el.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
