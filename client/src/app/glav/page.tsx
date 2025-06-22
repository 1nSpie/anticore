"use client";
import Herosection from "./components/Herosection";
import AutoPrice from "./components/AutoPrice";
import PriceCardList from "./components/PriceList";
import YandexMap from "./components/map/Map";
import CarouselSection from "./components/Carousel";
import TechProcces from "./components/TechProcces";
import NavbarHeroSection from "./components/NavbarHerosection";

export default function GlavPage() {
  return (
    <>
      <div className="block xl:hidden">
        <Herosection />
      </div>
      <NavbarHeroSection />
      <AutoPrice />
      <TechProcces />
      <CarouselSection />
      <PriceCardList />
      {/* <Employee /> */}
      <YandexMap />
    </>
  );
}
