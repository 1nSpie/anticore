"use client";

import React from "react";

import StepCard from "@/app/ui/ui/StepsTechProccesCard";
export interface Step {
  title: string;
  description: string;
  icon: string;
}

export const stepsData: Step[] = [
  {
    title: "Диагностика",
    description:
      "Производим осмотр авто. По итогам осмотра и Ваших пожеланий, составляется перечень работ.",
    icon: "/images/steps/diagnosis.jpg",
  },
  {
    title: "Разборка",
    description:
      "Снимаются колеса, подкрылки, пластиковые накладки. В отдельных случаях снимаются бампер, фары и фонари.",
    icon: "/images/steps/disassembly.jpg",
  },
  {
    title: "Мойка",
    description: "Мойка днища специальным составом под большим давлением.",
    icon: "/images/steps/washing.jpg",
  },
  {
    title: "Сушка",
    description:
      "Днище и полости продувается сжатым воздухом, после чего автомобиль сушится тепловыми пушками. Для просушки скрытых полостей используется турбосушка.",
    icon: "/images/steps/drying.jpg",
  },
  {
    title: "Маскировка",
    description:
      "Маскируется кузов авто, далее тормозная и выхлопная системы, элементы подвески и трансмиссии.",
    icon: "/images/steps/masking.jpg",
  },
  {
    title: "Зачистка",
    description:
      "Очаги коррозии зачищаются при помощи пневмо- и электроинструмента различной конфигурации.",
    icon: "/images/steps/cleaning.jpg",
  },
  {
    title: "Скрытые полости",
    description:
      "В первую очередь, обрабатываются скрытые полости, для этого используются конвертирующие МЛ составы.",
    icon: "/images/steps/hidden-parts.jpg",
  },
  {
    title: "Днище и арки",
    description:
      "Днище и арки обрабатываются износостойкими составами, возможно применение составов с шумопоглощением.",
    icon: "/images/steps/bottom-and-arches.jpg",
  },
  {
    title: "Гарантийный талон",
    description:
      "После того, как Вы осмотрите автомобиль и примете работу, менеджер выпишет Вам гарантийный талон.",
    icon: "/images/steps/guarantee.jpg",
  },
];

export default function TechProcces() {
  return (
    <div className="bg-background1 dark:bg-backgroundDark">
      <div className="max-w-[85rem] mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-tight text-black dark:text-white text-center mb-4">
          Этапы работ
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {stepsData.map((step, idx) => (
            <StepCard key={idx} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
}
