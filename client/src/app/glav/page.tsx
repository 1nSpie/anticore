import Herosection from "./components/Herosection";
import AutoPrice from "./components/AutoPrice";
import Employee from "./components/Employee";
import PriceCardList from "./components/PriceList";
import YandexMap from "./components/map/Map";
import CarouselSection from "./components/Carousel";
import TechProcces from "./components/TechProcces";

export default function page() {
  return (
      <>
        <Herosection />
        <AutoPrice />
        <TechProcces />
        <CarouselSection />
        <PriceCardList />
        <Employee />
        <YandexMap />
      </>
  );
}
