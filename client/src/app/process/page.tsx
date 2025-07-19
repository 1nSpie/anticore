"use client";

import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, y: 10 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Осмотр и диагностика",
      description: "Профессиональный осмотр автомобиля для определения текущего состояния кузова и выявления проблемных зон",
      details: [
        "Визуальный осмотр кузова",
        "Оценка состояния скрытых полостей",
        "Проверка днища и порогов",
        "Составление плана обработки"
      ]
    },
    {
      number: "02", 
      title: "Подготовительные работы",
      description: "Тщательная подготовка поверхностей для максимальной эффективности антикоррозийной обработки",
      details: [
        "Мойка и обезжиривание",
        "Снятие защитных элементов",
        "Обработка проблемных участков",
        "Подготовка рабочего места"
      ]
    },
    {
      number: "03",
      title: "Нанесение защитных составов",
      description: "Профессиональное нанесение современных антикоррозийных материалов с использованием специального оборудования",
      details: [
        "Обработка скрытых полостей",
        "Защита днища и порогов",
        "Обработка колесных арок",
        "Нанесение финишного покрытия"
      ]
    },
    {
      number: "04",
      title: "Контроль качества",
      description: "Финальная проверка качества выполненных работ и предоставление гарантийных обязательств",
      details: [
        "Проверка качества покрытия",
        "Контроль толщины слоя",
        "Финальная мойка",
        "Оформление гарантии"
      ]
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={{ type: "spring", duration: 0.5 }}
      className="bg-background1 dark:bg-backgroundDark min-h-screen"
    >
      <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-tight text-black dark:text-white">
            Процесс антикоррозийной обработки
          </h1>
          <p className="mt-4 md:text-lg text-black dark:text-neutral-200 max-w-3xl mx-auto">
            Мы используем проверенную методику обработки в 4 этапа, которая обеспечивает максимальную защиту вашего автомобиля от коррозии
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              className={`flex flex-col lg:flex-row items-start gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Step Number and Title */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orangeDefault text-white text-2xl font-bold rounded-full mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {step.description}
                </p>
              </div>

              {/* Step Details */}
              <div className="flex-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
                    Что входит в этап:
                  </h4>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li 
                        key={detailIndex}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <svg 
                          className="w-4 h-4 text-greenDefault mr-3 flex-shrink-0" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Готовы защитить свой автомобиль?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Запишитесь на диагностику и получите персональный план обработки
            </p>
            <button className="bg-orangeDefault hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Записаться на обработку
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
