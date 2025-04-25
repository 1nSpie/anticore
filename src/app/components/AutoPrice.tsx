"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { type AutoModel, type CarBrand, EnumType } from "./types/type";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";

type Inputs = {
  Marka: CarBrand;
  Model: AutoModel;
  triggerNotAuto: boolean;
};

type ApiResponse = CarBrand[];

export default function AutoPrice() {
  const [auto, setAuto] = useState<ApiResponse>([]);
  const [error, setError] = useState<boolean>(false);
  const { getValues, watch, setValue } = useForm<Inputs>();

  useEffect(() => {
    handleGetAuto();
  }, []);

  const handleGetAuto = async (): Promise<void> => {
    try {
      const response = await axios.get<ApiResponse>(
        "https://cars-base.ru/api/cars?full=1"
      );
      const carBrands: ApiResponse = response.data;
      setAuto(carBrands);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const handleSelectAuto = (value: string, Enum: EnumType) => {
    if (Enum === EnumType.MARKA) {
      const selectObjCar = auto.find((v) => v.name === value);
      setValue(EnumType.MARKA, selectObjCar!);
    } else {
      const selectCar = getValues(EnumType.MARKA);
      const selectObjModel = selectCar?.models.find((v) => v.name === value);
      setValue(EnumType.MODEL, selectObjModel!);
    }
  };

  if (error) {
    return null;
  }

    return (
      <div className="bg-background dark:bg-backgroundDark">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div>
              <h1 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
                Почему выбирают нас?
              </h1>
              <p className="mt-1 md:text-lg text-black dark:text-neutral-200">
                Мы — ваш надежный партнер в защите автомобиля.
              </p>
              <div className="mt-8">
                <ul className="mt-2 space-y-2">
                  <li className="flex gap-x-3">
                    <svg
                      className="shrink-0 mt-0.5 size-5 text-gray-800 dark:text-neutral-400"
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
                    <span className="text-gray-600 dark:text-neutral-400">
                      Используем только высококачественные материалы от проверенных производителей
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="shrink-0 mt-0.5 size-5 text-gray-600 dark:text-neutral-400"
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
                    <span className="text-gray-600 dark:text-neutral-400">
                      Предоставляем гарантию на все виды работ и соблюдаем сроки выполнения услуг
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="shrink-0 mt-0.5 size-5 text-gray-600 dark:text-neutral-400"
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
                    <span className="text-gray-600 dark:text-neutral-400">
                      Обеспечиваем индивидуальный подход и профессиональную поддержку на каждом этапе
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="flex flex-col border border-orange rounded-xl p-4 sm:p-6 lg:p-10 dark:border-neutral-700">
                <h2 className="text-xl font-semibold text-black dark:text-neutral-200">
                  Узнайте стоимость обработки
                </h2>
                <form>
                  {watch("triggerNotAuto") ? (
                    <div className="mt-6 grid gap-6">
                      <div className="w-[100%]">
                        <label
                          htmlFor="input-label"
                          className="block text-sm font-medium mb-2 dark:text-white"
                        >
                          Марка
                        </label>
                        <input
                          id="input-label"
                          className="py-2.5 h-[37px] sm:py-3 px-4 block w-full border-2 border-solid rounded-lg sm:text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          placeholder="BMW"
                        />
                      </div>
                      <div className="w-[100%]">
                        <label
                          htmlFor="input-label"
                          className="block text-sm font-medium mb-2 dark:text-white"
                        >
                          Модель
                        </label>
                        <input
                          id="input-label"
                          className="py-2.5 h-[37px] sm:py-3 px-4 block w-full border-2 border-solid rounded-lg sm:text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          placeholder="X3"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="mt-6 grid gap-4 lg:gap-6">
                      <div>
                        <label
                          htmlFor="hs-work-email-hire-us-1"
                          className="block mb-2 text-sm font-medium dark:text-white"
                        >
                          Марка
                        </label>
                        <Select
                          onValueChange={(v) => handleSelectAuto(v, EnumType.MARKA)}
                        >
                          <SelectTrigger className="w-[100%]">
                            <SelectValue placeholder="BMW 3" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem key={-1} value={"undefined"}>
                              Выберите автомобиль
                            </SelectItem>
                            {auto.map((el, i) => (
                              <SelectItem key={i} value={el.name}>
                                {el.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      {watch("Marka") && (
                        <div>
                          <label
                            htmlFor="hs-work-email-hire-us-1"
                            className="block mb-2 text-sm font-medium dark:text-white"
                          >
                            Модель
                          </label>
                          <Select
                            onValueChange={(e) =>
                              handleSelectAuto(String(e), EnumType.MODEL)
                            }
                          >
                            <SelectTrigger className="w-[100%]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {getValues("Marka")?.models.map((el, i) => (
                                <SelectItem key={i} value={el.name}>
                                  {el.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </div>
                  )}
                </form>
                <div className="mt-3 flex">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      onCheckedChange={(e) =>
                        setValue("triggerNotAuto", Boolean(e))
                      }
                      name="triggerNotAuto"
                      id="triggerNotAuto"
                      className="text-orange focus:ring-orange"
                    />
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Моего автомобиля нет в списке
                    </label>
                  </div>
                </div>
                <div className="mt-6 grid">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange hover:bg-orange-500 text-white focus:outline-hidden focus:bg-orange disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Заказать обратный звонок
                  </button>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500 dark:text-neutral-500"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
