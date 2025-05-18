"use client";
import React from "react";
import Image from "next/image";
import heroImg from "../../../../public/heroImg.png";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
interface Step {
  icon: string; // URL или путь к иконке
  title: string;
  description: string;
}

interface StepCardProps {
  step: Step;
}

export default function StepCard({ step }: StepCardProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md ">
      <Image
        src={heroImg}
        alt={step.title}
        width={isMobile ? 100: 200}
        height={200}
        className="rounded-xl"
      />

      {/* Содержимое карточки */}
      <div className="pl-5 h-full w-full border-r-2 border-orange">
        {/* Название */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center text-wrap">
          {step.title}
        </h3>

        {/* Описание */}
        <p className="text-gray-600 dark:text-gray-300 mt-1 align-middle text-sm break-words">
          {step.description}
        </p>
      </div>
    </div>
  );
}
