"use client";
import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
  GeolocationControl,
} from "@pbe/react-yandex-maps";
import { LOCATION } from "./helpers";

export default function YandexMap() {
  console.log(
    "✌️process.env.REACT_APP_YMAP_KEY --->",
    process.env.REACT_APP_YMAP_KEY
  );
  return (
    <YMaps query={{ apikey: process.env.REACT_APP_YMAP_KEY, lang: "ru_RU" }}>
      <Map
        defaultState={{
          center: LOCATION,
          zoom: 10,
          controls: [],
        }}
        width="50%"
        height="500px"
      >
        <Placemark
          geometry={LOCATION}
          properties={{
            balloonContent: "Наш офис",
          }}
          options={{
            iconLayout: "default#image",
            iconImageHref: "/marker.png",
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -40],
          }}
        />
        <ZoomControl />
        <GeolocationControl options={{ float: "left" }} />
      </Map>
    </YMaps>
  );
}
