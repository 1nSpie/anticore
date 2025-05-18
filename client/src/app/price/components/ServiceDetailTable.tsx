"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shadcn/table";
import { ServicePackage } from "./types";
import { carType } from "./servicesData";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn/accordion";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "@/shadcn/button";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/shadcn/hover-card";
type Props = {
  service: ServicePackage;
};

export default function ServiceDetailTable({ service }: Props) {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  if (isMobile) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <div className="w-full overflow-y-auto py-4 px-2 md:px-6 lg:px-8">
      <div className="relative text-2xl font-bold text-gray-900 dark:text-white mb-6 h-10">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2"
          onClick={() => history.back()}
        >
          <ArrowLeftIcon color="orange" />
        </Button>
        <div className="text-center w-full border-e-2 border-orange">
          {service.title}
        </div>
      </div>
      <Table className="min-w-[600px] border-collapse table-auto w-full">
        <TableHeader>
          <TableRow className="bg-gray-100 dark:bg-gray-700">
            <TableHead
              align="center"
              className="py-4 px-6 font-semibold text-base text-gray-800 dark:text-gray-200 whitespace-nowrap"
            >
              Категория авто
            </TableHead>
            {service.content.map((complex, idx) => (
              <TableHead
                align="center"
                key={idx}
                className="py-4 px-6 font-semibold text-base text-center text-gray-800 dark:text-gray-200 whitespace-nowrap content-center"
              >
                <HoverCard key={idx}>
                  <HoverCardTrigger asChild className="cursor-pointer">
                    <div className="flex items-center justify-center">
                      <div className="text-inherit">{complex.name}</div>
                      <Button variant="link" size="icon">
                        <InformationCircleIcon />
                      </Button>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-fit bg-background dark:bg-backgroundDark rounded-lg p-4 HoverCardContent">
                    <div className="">
                      <div className="space-y-1">
                        <h2 className="text-md font-semibold text-center">
                          Пошаговый процесс работы
                        </h2>
                        <div>
                          <ul>
                            {complex.steps.map((value, index) => (
                              <li key={index} className="flex items-center">
                                {value}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {carType.map((carCategory, idx) => (
            <TableRow
              key={idx}
              className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <TableCell className="py-5 px-6 text-left text-base text-gray-800 dark:text-gray-200 whitespace-nowrap md:whitespace-normal ">
                {carCategory}
              </TableCell>
              {service.content.map((complex, index) => {
                const price = complex.prices.find(
                  (price) => price.carType === carCategory
                )?.price;
                return (
                  <TableCell
                    key={index}
                    className="text-base font-medium text-center"
                  >
                    {price ? `${price} ₽` : "-"}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="border-1 mt-20 border-orange" />
    </div>
  );
}
