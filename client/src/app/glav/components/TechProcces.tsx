"use client";

import React from "react";
import StepCard from "@/app/ui/ui/StepsTechProccesCard";
import clear from "public/techprocces/clear.svg";
import diag from "public/techprocces/diag.svg";
import garanty from "public/techprocces/garanty.svg";
import mask from "public/techprocces/mask.svg";
import razb from "public/techprocces/razb.svg";
import sushka from "public/techprocces/sushka.svg";
import wash from "public/techprocces/wash.svg";

export interface Step {
  title: string;
  description: string;
  icon: string;
}

type Props = {
  id: string;
};

export const stepsData: Step[] = [
  {
    title: "Диагностика",
    description:
      "Производим осмотр авто. По итогам осмотра и Ваших пожеланий, составляется перечень работ.",
    icon: diag,
  },
  {
    title: "Разборка",
    description:
      "Снимаются колеса, подкрылки, пластиковые накладки. В отдельных случаях снимаются бампер, фары и фонари.",
    icon: razb,
  },
  {
    title: "Мойка",
    description: "Мойка днища специальным составом под большим давлением.",
    icon: wash,
  },
  {
    title: "Сушка",
    description:
      "Днище и полости продувается сжатым воздухом, после чего автомобиль сушится тепловыми пушками. Для просушки скрытых полостей используется турбосушка.",
    icon: sushka,
  },
  {
    title: "Маскировка",
    description:
      "Маскируется кузов авто, далее тормозная и выхлопная системы, элементы подвески и трансмиссии.",
    icon: mask,
  },
  {
    title: "Зачистка",
    description:
      "Очаги коррозии зачищаются при помощи пневмо- и электроинструмента различной конфигурации.",
    icon: clear,
  },
  {
    title: "Гарантийный талон",
    description:
      "После того, как Вы осмотрите автомобиль и примете работу, менеджер выпишет Вам гарантийный талон.",
    icon: garanty,
  },
];

export default function TechProcces({ id }: Props) {
  return (
    <section id={id} className="bg-background1 dark:bg-backgroundDark">
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
    </section>
  );
}
