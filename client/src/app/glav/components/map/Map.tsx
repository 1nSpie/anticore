"use client";
import {
  YMaps,
  Map,
  Placemark,
} from "@pbe/react-yandex-maps";
import { LOCATION } from "./helpers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../shadcn/tabs";
import { PhoneIcon, ClockIcon, HomeIcon } from "@heroicons/react/24/outline";

export default function YandexMap() {
  return (
    <div className="bg-background1 dark:bg-backgroundDark pb-20">
    <div className="max-w-[85rem] mx-auto bg-background1 dark:bg-gray-800 rounded-3xl p-6">
      {/* Tabs Container */}
      <Tabs defaultValue="Жуковский" className="grid grid-cols-1 gap-6">
        {/* Tabs List */}
        <TabsList className="bg-orange grid grid-cols-2 md:flex w-full">
          <TabsTrigger
            value="Жуковский"
            className="rounded-tl-lg md:rounded-bl-lg text-black dark:text-white "
          >
            Жуковский
          </TabsTrigger>
          <TabsTrigger
            value="Коломна"
            className="rounded-tr-lg md:rounded-br-lg text-black dark:text-white"
          >
            Коломна
          </TabsTrigger>
        </TabsList>

        {/* Жуковский Tab Content */}
        <TabsContent
          value="Жуковский"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-4">
            <div className="flex items-center gap-2">
              <HomeIcon width={30} />
              <h1 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-white">
                Жуковский Речной пр., 14
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon width={30} />
              <h2 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-white">
                +7 (916) 145-68-82
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon width={30} />
              <h2 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-white">
                09:00–20:00
              </h2>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[200px] md:h-[300px]">
            <YMaps
              query={{
                apikey: process.env.REACT_APP_YMAP_KEY,
                lang: "ru_RU",
              }}
            >
              <Map
                className="w-full h-full rounded-md"
                defaultState={{
                  type: "yandex#map",
                  center: LOCATION,
                  zoom: 12,
                }}
              >
                <Placemark geometry={LOCATION} />
              </Map>
            </YMaps>
          </div>
        </TabsContent>

        {/* Коломна Tab Content */}
        <TabsContent
          value="Коломна"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* You can add similar structure for Коломна */}
          <div className="flex flex-col justify-center gap-4">
            <div className="flex items-center gap-2">
              <HomeIcon width={30} />
              <h1 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-white">
                Коломна ,село Чанки, ул. Центральная 152
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon width={30} />
              <h2 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-white">
                +7 (977) 097-68-82
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon width={30} />
              <h2 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-white">
                9:00–20:00
              </h2>
            </div>
          </div>

          <div className="w-full h-[200px] md:h-[300px]">
            <YMaps
              query={{
                apikey: process.env.REACT_APP_YMAP_KEY,
                lang: "ru_RU",
              }}
            >
              <Map
                className="w-full h-full rounded-md"
                defaultState={{
                  type: "yandex#map",
                  center: [55.123116, 38.810275], // Example coordinates for Kolomna
                  zoom: 12,
                }}
              >
                <Placemark geometry={[55.123116, 38.810275]} />
              </Map>
            </YMaps>
          </div>
        </TabsContent>
      </Tabs>
    </div>
    </div>
  );
}
