"use client";

import ServiceCard from "./components/ServiceCard";
import { services } from "./components/servicesData";

export default function ServicesPage() {

  return (
    <div className="bg-background1 dark:bg-backgroundDark">
      <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-center">
        <h1 className="text-3xl font-bold  sm:text-4xl lg:text-5xl lg:leading-tight text-black dark:text-white">
          Антикоррозийная обработка от профессионалов
        </h1>
        <p className="mt-1 md:text-lg text-black dark:text-neutral-200 pl-1">
          Защитите свой автомобиль от ржавчины и увеличьте его срок службы с
          помощью наших комплексных решений. Мы используем современные материалы
          и технологии, чтобы надежно защитить скрытые полости, днище, пороги и
          колесные арки.
        </p>
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10">
              Наши услуги
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((pkg) => (
                <ServiceCard key={pkg.id} service={pkg} />
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
