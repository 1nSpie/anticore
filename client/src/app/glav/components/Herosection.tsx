"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroImg from "../../../../public/heroImg.png";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shadcn/dialog";
import { Button } from "@/shadcn/button";

export default function Herosection() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="bg-background1 dark:bg-backgroundDark">
      {/* Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center"
      >
        {/* Левая часть (текст) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="block text-3xl font-bold sm:text-4xl lg:text-6xl lg:leading-tight text-gray-800 dark:text-white mb-5">
            Защитим ваш автомобиль от коррозии
          </h1>
          <h1 className="block text-3xl font-bold sm:text-4xl lg:text-6xl lg:leading-tight text-orange-500 dark:text-orange-400">
            ANTICORE
          </h1>
          <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
            Обработка от 8 часов с детальным фотоотчетом, бесплатный гарантийный
            осмотр каждые 6 месяцев
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <div className="mt-7 grid gap-3 w-full content-center">
                <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-orange-500 bg-background1 dark:bg-gray-800 text-gray-800 dark:text-white shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none">
                  Заказать обратный звонок
                </a>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when youre done.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </motion.div>

        {/* Правая часть (изображение) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <Image
            src={heroImg} // Укажите путь к вашему изображению
            alt="Car"
            width={isMobile ? 750 : 550} // Ширина изображения
            height={200} // Высота изображения
            className="rounded-3xl shadow-lg dark:shadow-gray-700"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
