"use client";

import Image from "next/image";
import car1 from "../../../../public/car1.webp";
import car2 from "../../../../public/car2.webp";
import car3 from "../../../../public/car3.webp";
import car4 from "../../../../public/car4.webp";
import car5 from "../../../../public/car5.webp";
import car6 from "../../../../public/car6.webp";

const products = [
  {
    id: 1,
    name: "Легковые автомобили до 4 метров (Класс А,B)",
    carlist:
      "Kia Picanto, Ford Fiesta, Chevrolet Spark, Lada Kalina, Nissan Micra, Peugeot 1007",
    bottom: "9500 руб",
    compex: "16 500 руб",
    compexAndDiamond: "28 500 руб",
    href: "#",
    imageSrc: car1,
    imageAlt: "car1",
  },
  {
    id: 2,
    name: "Легковые автомобили от 4 до 5 метров (Класс C,D,E)",
    href: "#",
    carlist:
      "Mazda 3, Ford Modeo, Focus, Mazda 6, Toyota Camry, Corolla, Avensis, KIA Optima, Rio, Hyundai Solaris",
    bottom: "16 500 руб",
    compex: "20 500 руб",
    compexAndDiamond: "32 500 руб",
    imageSrc: car2,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top",
  },
  {
    id: 3,
    name: "Минивэны, кроссоверы",
    href: "#",
    carlist:
      "KIA Sportage, Hyundai ix35, Nissan Qashqai, Renault Duster, Ford Kuga, Geely Engrand X7",
    bottom: "18 500 руб",
    compex: "22 500 руб",
    compexAndDiamond: "34 500 руб",
    imageSrc: car3,
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card",
  },
  {
    id: 4,
    name: "Внедорожники",
    href: "#",
    carlist:
      "Toyota Land Cruiser 100, 200, Prado, Highlander, Jeep, Opel Frontera, Cadillac Escalade, Chevrolet Suburban, УАЗ",
    bottom: "21 500 руб",
    compex: "25 500 руб",
    compexAndDiamond: "37 500 руб",
    imageSrc: car4,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Микроавтобусы и пикапы",
    href: "#",
    carlist:
      "Mercedes-Benz Sprinter, Ford Transit, Fiat Ducato, Газель, Ford F150, Dodge Ram, Toyota Tundra, Volkswagen Amarok, Chevrolet Silverado",
    bottom: "9500 руб",
    compex: "16 500 руб",
    compexAndDiamond: "28 500 руб",
    imageSrc: car5,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Премиум класс",
    href: "#",
    carlist:
      "Jaguar, BMW, Audi, Merсedes, Rover, Land Rover, Lexus, Volkswagen, Volvo, Mitsubishi (Pagero), Toyota Alphard",
    bottom: "Договорная",
    compex: "Договорная",
    compexAndDiamond: "Договорная",
    imageSrc: car6,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top",
  },
];

export default function PriceCardList() {
  function PriceCard() {
    return products.map((product) => (
      <div key={product.id} className="group">
        <Image
          className="w-[150px] h-[60px]"
          alt={product.imageAlt}
          src={product.imageSrc}
        />
        <h3 className="mt-4 text-lg text-black dark:text-white h-15">
          {product.name}
        </h3>
        <div className="p-0.5 border-orange border-s-2">
          <span className="">Например: </span>
          <span className="dark:text-gray-200 text-gray-800">
            {product.carlist}
          </span>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-800 dark:text-orange">
              Днище:
            </span>
            <span className="dark:text-white text-black">{product.bottom}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-800 dark:text-orange">
              Compex:
            </span>
            <span className="dark:text-white text-black">{product.compex}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-800 dark:text-orange">
              Compex + Diamond:
            </span>
            <span className="dark:text-white text-black">
              {product.compexAndDiamond}
            </span>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className="bg-background dark:bg-backgroundDark">
      <div className="mx-auto max-w-[85rem] px-4 py-16 sm:px-6 sm:py-24  lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8 ">
          {PriceCard()}
        </div>
      </div>
    </div>
  );
}
