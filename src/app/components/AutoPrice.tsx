"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { type AutoModel, type CarBrand, EnumType } from "./types/type";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    getValues,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  console.log(watch("triggerNotAuto"));
  useEffect(() => {
    handleGetAuto();
  }, []);

  const handleGetAuto = async (): Promise<void> => {
    setLoading(true);
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
    setLoading(false);
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

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Grid */}
      <div className="grid md:grid-cols-2 items-center gap-12">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
            Hire us
          </h1>
          <p className="mt-1 md:text-lg text-gray-800 dark:text-neutral-200">
            We help brands and platforms turn big ideas into beautiful digital
            products and experiences.
          </p>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              What can I expect?
            </h2>

            <ul className="mt-2 space-y-2">
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
                  Industry-leading design
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
                  Developer community support
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
                  Simple and affordable
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          {/* Card */}
          <div className="flex flex-col border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-10 dark:border-neutral-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
              Узнайте стоимость обработки
            </h2>

            <form>
              {watch("triggerNotAuto") ? (
                <div className="mt-6 grid gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-work-email-hire-us-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Марка
                    </label>
                    <Select
                      onValueChange={(v) => handleSelectAuto(v, EnumType.MARKA)}
                    >
                      <SelectTrigger className="w-[100%]">
                        <SelectValue />
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

                  <div>
                    <label
                      htmlFor="hs-work-email-hire-us-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
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
                </div>
              ) : (
                <div className="mt-6 grid gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-work-email-hire-us-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Марка
                    </label>
                    <Select
                      onValueChange={(v) => handleSelectAuto(v, EnumType.MARKA)}
                    >
                      <SelectTrigger className="w-[100%]">
                        <SelectValue />
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
                        className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
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
                  className="text-orange-500 focus:ring-orange-400 "
                />
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Моего автомобиля нет в списке
                </label>
              </div>
            </div>

            <div className="mt-6 grid">
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange-500 text-white hover:bg-orange-600 focus:outline-hidden focus:bg-orange-500 disabled:opacity-50 disabled:pointer-events-none"
              >
                Заказать обратный звонок
              </button>
            </div>

            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500 dark:text-neutral-500"></p>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
}
