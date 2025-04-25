"use client";

import carousel1 from "../../../public/carousel1-Photoroom.png";
import carousel2 from "../../../public/carousel2.png";
import carousel3 from "../../../public/carousel3.png";
import carousel4 from "../../../public/carousel4.png";
import carousel5 from "../../../public/carousel5.png";
import carousel6 from "../../../public/carousel6.png";
import carousel7 from "../../../public/carousel7.png";
import carousel8 from "../../../public/carousel8.png";
import carousel9 from "../../../public/carousel9.png";
import carousel10 from "../../../public/carousel10.png";
import carousel11 from "../../../public/carousel11.png";
import about1 from "../../../public/about1.svg";
import about2 from "../../../public/about2.svg";
import about3 from "../../../public/about3.svg";
import about4 from "../../../public/about4.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Dugla profi BPM 482",
    content:
      "Мастика на битумно-восковой основе применяется для антикоррозионной, антигравийной и шумоизоляционной защиты днища автомобиля, колёсных арок",
    img: carousel1,
  },
  {
    id: 2,
    title: "Master Wax",
    content:
      "Преобразователь ржавчины- это эффективное средство для удаления ржавчины на основе фосфорорганических комплексов",
    img: carousel2,
  },
  {
    id: 3,
    title: "Dugla profi ML",
    content:
      "Водовытесняющий антикоррозионный состав на масляно-восковой основе с повышенной проникающей способностью. Останавливает начавшийся процесс коррозии",
    img: carousel3,
  },
  {
    id: 4,
    title: "Dinitrol 4010",
    content:
      "Антикор для моторного отсекаю Создает прочную и прозрачную не боится кислот, щелочей и тд. Защищает от грязи, солей и коррозии",
    img: carousel4,
  },
  {
    id: 5,
    title: "Dugla profi W 2005",
    content:
      "Легкопроникающий антикоррозионный состав на масляно-восковой основе. Заполняет все зазоры, глубоко проникает в микротрещины, пропитывает рыхлую пленку уже имеющихся очагов коррозии",
    img: carousel5,
  },
  {
    id: 6,
    title: "Dinitrol 479",
    content:
      "Защитный состав из синтетической резины. Обеспечивает шумоизоляцию и препятствует коррозии",
    img: carousel6,
  },
  {
    id: 7,
    title: "Prim ML",
    content:
      "Предохраняет скрытые полости автомобиля от коррозии и химических реагентов",
    img: carousel7,
  },
  {
    id: 8,
    title: "Dinitrol Penetrant LT",
    content:
      "Инновационный антикоррозийный состав для труднодоступных полостей. Предотвращает появление и замедляет развитие имеющихся очагов коррозии",
    img: carousel8,
  },
  {
    id: 9,
    title: "Prim Антишум",
    content:
      "Предохраняет корпус авто от коррозии, воздействия химичесикх реагентов. Обеспечивает шумоизоляцию и дополнительную теплоизоляцию",
    img: carousel9,
  },
  {
    id: 10,
    title: "Dinitrol ML",
    content:
      "Останавливает процесс развития коррозии за счет глубокого пропитвыания ржавчины. Водовытесняющий состав",
    img: carousel10,
  },
  {
    id: 11,
    title: "Prim Body",
    content:
      "Предохраняет корпус днища от коррозии, воздействия химичесиких реагентов. Обеспечивает шумоизоляцию и дополнительную теплоизоляцию",
    img: carousel11,
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
    description: "Гибкая система скидок",
    icon: about2,
  },
  {
    id: 3,
    description: "Сертефицированные материалы",
    icon: about3,
  },
  {
    id: 4,
    description: "Бесплатный трансфер",
    icon: about4,
  },
];

export default function CarouselSection() {
  return (
    <div className="bg-background1 dark:bg-backgroundDark">
      <div className="max-w-[85rem] mx-auto h-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Заголовок */}
        <div className="rounded-xl text-black dark:text-white block max-w-[85rem] mx-auto text-center pb-10">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
            Мы обрабатываем только проверенными материалами
          </h2>
          <p className="text-black dark:text-white">
            И делаем все только по технологическим картам производителей
          </p>
        </div>

        {/* Контейнер для карусели и блока информации */}
        <div className="grid grid-cols-1 items-center gap-12">
          {/* Карусель */}
          <Carousel>
            <CarouselContent className="pl-0">
              {slides.map((slide, key) => (
                <CarouselItem
                  key={key}
                  className="md:basis-1/2 lg:basis-1/3 w-full shrink-0"
                >
                  <div className="h-full border-orange border-2 p-2 dark:bg-backgroundDark1 rounded-2xl">
                    <div className="flex flex-col items-center h-full text-center">
                      {/* Изображение */}
                      <Image
                        src={slide.img}
                        alt={slide.title}
                        width={170}
                        height={170}
                        className="w-40 h-40 object-cover mb-4 fill-white"
                      />
                      {/* Текст */}
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-black transition duration-700 dark:text-white">
                          {slide.title}
                        </span>
                        <span className="text-sm text-black transition duration-700 dark:text-white">
                          {slide.content}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Стрелки скрываются на мобильных и планшетах */}
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Блок с информацией */}
          <div className="w-full">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {icons.map((el) => (
                <div
                  key={el.id}
                  className="flex flex-col items-center text-center"
                >
                  {/* Изображение */}
                  <Image
                    src={el.icon}
                    alt={el.description}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover mb-2"
                  />
                  {/* Текст */}
                  <p className="text-xs sm:text-sm font-medium text-black dark:text-white">
                    {el.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}