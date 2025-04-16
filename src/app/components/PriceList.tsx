"use client";

import Image from "next/image";
import carousel1 from "../../../public/1car.webp";

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
    price: "$48",
    imageSrc: carousel1,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    carlist:
      "Kia Picanto, Ford Fiesta, Chevrolet Spark, Lada Kalina, Nissan Micra, Peugeot 1007, Toyota Yaris, Citroen C1, Hyundai Atos, Honda Jazz, Opel Corsa",
    bottom: "9500 руб",
    compex: "16 500 руб",
    compexAndDiamond: "28 500 руб",
    price: "$35",
    imageSrc: carousel1,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    carlist:
      "Kia Picanto, Ford Fiesta, Chevrolet Spark, Lada Kalina, Nissan Micra, Peugeot 1007, Toyota Yaris, Citroen C1, Hyundai Atos, Honda Jazz, Opel Corsa",
    bottom: "9500 руб",
    compex: "16 500 руб",
    compexAndDiamond: "28 500 руб",
    price: "$89",
    imageSrc: carousel1,
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    carlist:
      "Kia Picanto, Ford Fiesta, Chevrolet Spark, Lada Kalina, Nissan Micra, Peugeot 1007, Toyota Yaris, Citroen C1, Hyundai Atos, Honda Jazz, Opel Corsa",
    bottom: "9500 руб",
    compex: "16 500 руб",
    compexAndDiamond: "28 500 руб",
    price: "$35",
    imageSrc: carousel1,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function PriceCardList() {
  function PriceCard() {
    return products.map((product) => (
      <div key={product.id} className="group">
        <Image
          width={150}
          height={2}
          alt={product.imageAlt}
          src={product.imageSrc}
          className="rounded-lg"
        />
        <h3 className="mt-4 text-lg text-black">{product.name}</h3>
        <div className="p-0.5 border-orange-500 border-s-2">
          <span className="">Например: </span>
          <span className="text-gray-600">{product.carlist}</span>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-800">Днище:</span>
            <span className="text-gray-800">{product.bottom}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-800">Compex:</span>
            <span className="text-gray-800">{product.compex}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-800">Compex + Diamond:</span>
            <span className="text-gray-800">{product.compexAndDiamond}</span>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className="">
      <div className="mx-auto max-w-[85rem] px-4 py-16 sm:px-6 sm:py-24  lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {PriceCard()}
        </div>
      </div>
    </div>
  );
}
