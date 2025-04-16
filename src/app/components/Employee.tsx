"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import carousel1 from "../../../public/carousel1.png";
import { Button } from "@/components/ui/button";

const employee = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  img: carousel1,
}));

export default function Employee() {
  const [isAll, setIsAll] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollBehavior, setScrollBehavior] = useState<"auto" | "smooth">(
    "auto"
  );

  const handleAll = () => {
    // При первом клике включаем плавный скролл
    if (scrollBehavior === "auto") {
      setScrollBehavior("smooth");
    }
    setIsAll((prev) => !prev);
  };

  // Скролл к кнопке после анимации
  useEffect(() => {
    if (triggerRef.current && scrollBehavior === "smooth") {
      const timer = setTimeout(() => {
        // Вычисляем позицию для скролла (кнопка по центру экрана)
        const buttonRect = triggerRef.current?.getBoundingClientRect();
        const scrollPosition =
          window.scrollY +
          (buttonRect?.top || 0) -
          window.innerHeight / 2 +
          (buttonRect?.height || 0) / 2;

        window.scrollTo({
          top: scrollPosition,
          behavior: scrollBehavior,
        });
      }, 300); // Задержка для начала анимации

      return () => clearTimeout(timer);
    }
  }, [isAll, scrollBehavior]);

  return (
    <div className="bg-gray-100">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Заголовок */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Our leadership
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Creative people
          </p>
        </div>

        {/* Первые три карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {employee.slice(0, 3).map((emp, index) => (
            <motion.div
              key={emp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700"
            >
              <div className="flex items-center gap-x-4">
                <Image
                  width={80}
                  height={80}
                  className="rounded-full size-20"
                  src={emp.img}
                  alt="Avatar"
                />
                <div className="grow">
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    David Forren
                  </h3>
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Founder / CEO
                  </p>
                </div>
              </div>
              <p className="mt-3 text-gray-500 dark:text-neutral-500">
                I am an ambitious workaholic, but apart from that, pretty simple
                person.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Контейнер для анимируемого контента */}
        <div ref={containerRef}>
          {/* Остальные карточки */}
          <AnimatePresence>
            {isAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  transition: { duration: 0.5 },
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  transition: { duration: 0.5 },
                }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {employee.slice(3).map((emp, index) => (
                    <motion.div
                      key={emp.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700"
                    >
                      <div className="flex items-center gap-x-4">
                        <Image
                          width={80}
                          height={80}
                          className="rounded-full size-20"
                          src={emp.img}
                          alt="Avatar"
                        />
                        <div className="grow">
                          <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                            David Forren
                          </h3>
                          <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                            Founder / CEO
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-gray-500 dark:text-neutral-500">
                        I am an ambitious workaholic, but apart from that,
                        pretty simple person.
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Кнопка с анимацией положения */}
          <motion.div transition={{ duration: 0.5 }} className="mt-6">
            <Button
              ref={triggerRef}
              onClick={handleAll}
              variant="link"
              className="w-full text-center"
            >
              Показать {isAll ? "меньше" : "больше"}
            </Button>
          </motion.div>
        </div>

        <div className="pb-20"></div>
      </div>
    </div>
  );
}
