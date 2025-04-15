import Herosection from "../components/Herosection";
import AutoPrice from "../components/AutoPrice";
import Carousel from "../components/Carousel";
import Employee from "../components/Employee";

export default function Home() {
  return (
    <div className="bg-whitePower">
      <Herosection />
      <AutoPrice />
      <Carousel />
      <Employee />
    </div>
  );
}
