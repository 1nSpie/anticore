"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../shadcn/select";
import { Checkbox } from "../../../shadcn/checkbox";
import { Input } from "../../../shadcn/input";
import { getAllBrand, getAllCarWithBrand } from "../api";
import { Brand, Car } from "../type";
import { motion } from "framer-motion";
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

type defaultValues = {
  brand: string;
  model: string;
  customBrand: string;
  isNotAuto: boolean;
};

export default function AutoPrice() {
  const { register, handleSubmit, watch, control, setValue } = useForm({
    defaultValues: {
      brand: "",
      model: "",
      customBrand: "",
      isNotAuto: false,
    },
  });

  const [brands, setBrands] = useState<Brand[]>([]);
  const [cars, setCars] = useState<Car[]>([]);
  const [viewPrice, setViewPrice] = useState<Car | null>(null);

  const isNotAuto = watch("isNotAuto");

  const svgIcon = (
    <svg
      className="shrink-0 mt-0.5 size-5 text-orange"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  // Загружаем бренды при монтировании
  useEffect(() => {
    getAllBrand().then((data) => {
      setBrands(data);
    });
  }, []);

  // Загружаем модели при выборе бренда
  useEffect(() => {
    const selectedBrandId = watch("brand");
    if (selectedBrandId) {
      const brand = brands.find((b) => b.name === selectedBrandId);
      if (brand?.id) {
        getAllCarWithBrand(brand.id).then(setCars);
      }
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("brand")]);

  // Обновляем цену при выборе модели
  useEffect(() => {
    const selectedModel = watch("model");
    if (selectedModel) {
      const foundCar = cars.find((car) => car.model === selectedModel) || null;
      setViewPrice(foundCar);
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("model")]);

  const onSubmit = (data: defaultValues) => {
    console.log("Форма отправлена", data);
    // Здесь можно отправить данные на сервер
  };

  return (
    <div className="bg-background dark:bg-backgroundDark">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left side */}
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-tight text-black dark:text-white">
              Почему выбирают нас?
            </h1>
            <p className="mt-1 md:text-lg text-black dark:text-neutral-200 pl-1">
              Мы — ваш надежный партнер в защите автомобиля.
            </p>
            <div className="mt-8">
              <ul className="mt-2 space-y-2">
                <li className="flex gap-x-3 items-center">
                  {svgIcon}
                  <span>Используем только высококачественные материалы</span>
                </li>
                <li className="flex gap-x-3 items-center">
                  {svgIcon}
                  <span>Предоставляем гарантию на все виды работ</span>
                </li>
                <li className="flex gap-x-3 items-center">
                  {svgIcon}
                  <span>Обеспечиваем индивидуальный подход</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="relative">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col border dark:border-orange rounded-xl p-4 sm:p-6 lg:p-10 border-orangeDefault">
                <h2 className="text-xl font-semibold text-black dark:text-neutral-200">
                  Узнайте стоимость обработки
                </h2>

                {isNotAuto ? (
                  <div className="mt-6 grid gap-6">
                    <div className="w-full">
                      <label
                        htmlFor="custom-brand"
                        className="block text-sm font-medium mb-2 dark:text-white"
                      >
                        Марка и модель
                      </label>
                      <Input
                        id="custom-brand"
                        placeholder="BMW"
                        {...register("customBrand")}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 grid gap-4 lg:gap-6">
                    <div>
                      <label
                        htmlFor="brand-select"
                        className="block mb-2 text-sm font-medium dark:text-white"
                      >
                        Марка
                      </label>
                      <Controller
                        name="brand"
                        control={control}
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={(v) => {
                              field.onChange(v);
                              setValue("model", ""); // Сброс модели
                            }}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Выберите марку" />
                            </SelectTrigger>
                            <SelectContent>
                              {brands.map((el) => (
                                <SelectItem key={el.id} value={el.name}>
                                  {el.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>

                    {watch("brand") && (
                      <div>
                        <label
                          htmlFor="model-select"
                          className="block mb-2 text-sm font-medium dark:text-white"
                        >
                          Модель
                        </label>
                        <Controller
                          name="model"
                          control={control}
                          render={({ field }) => (
                            <Select
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Выберите модель" />
                              </SelectTrigger>
                              <SelectContent>
                                {cars.map((el) => (
                                  <SelectItem key={el.id} value={el.model}>
                                    {el.model}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        />
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-3 flex">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="triggerNotAuto"
                      checked={isNotAuto}
                      onCheckedChange={(checked) =>
                        setValue("isNotAuto", !!checked)
                      }
                      className="bg-orange"
                    />
                    <label
                      htmlFor="triggerNotAuto"
                      className="text-sm font-medium"
                    >
                      Моего автомобиля нет в списке
                    </label>
                  </div>
                </div>
                <Dialog>
                  <div className="mt-6 grid">
                    <DialogTrigger asChild>
                      <button
                        type="submit"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-orange bg-orangeDefault hover:bg-orangeDefaultHover focus:outline-none text-white disabled:opacity-50"
                      >
                        {(watch("brand") && watch("model")) ||
                        watch("customBrand")
                          ? "Заказать обратный звонок"
                          : "Выберите марку и модель автомобиля"}
                      </button>
                    </DialogTrigger>
                  </div>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when youre
                        done.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </form>

            {/* Показываем цену, если выбрана модель */}
          </div>
          {viewPrice && !isNotAuto && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-lg font-semibold"
            >
              Базовая цена: {viewPrice.CarClass.basePrice} руб.
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
