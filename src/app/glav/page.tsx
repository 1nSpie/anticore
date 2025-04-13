import Image from "next/image";
import Herosection from "../components/Herosection";
import AutoPrice from "../components/AutoPrice";

export default function Home() {
  return (
    <div className="bg-whitePower">
      <Herosection />
      <AutoPrice />
    </div>
  );
}
