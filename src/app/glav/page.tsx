import Herosection from "../components/Herosection";
import AutoPrice from "../components/AutoPrice";
import Carousel from "../components/Carousel";
import Employee from "../components/Employee";
import PriceCardList from "../components/PriceList";
import YandexMap from "../components/Map";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-var[--background]">
      <Herosection />
      <AutoPrice />
      <Carousel />
      <PriceCardList />
      <Employee />
      <YandexMap />
      <Footer />
    </div>
  );
}
