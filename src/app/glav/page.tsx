import Herosection from "../components/Herosection";
import AutoPrice from "../components/AutoPrice";
import Carousel from "../components/Carousel";
import Employee from "../components/Employee";
import PriceCardList from "../components/PriceList";
import Map from "../components/Map";

export default function Home() {
  return (
    <div className="bg-whitePower">
      <Herosection />
      <AutoPrice />
      <Carousel />
      <PriceCardList />
      <Employee />
      <Map />
    </div>
  );
}
