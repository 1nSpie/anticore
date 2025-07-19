// app/glav/page.tsx
"use client";

import Herosection from "./components/Herosection";
import AutoPrice from "./components/AutoPrice";
import PriceCardList from "./components/PriceList";
import YandexMap from "./components/map/Map";
import CarouselSection from "./components/Carousel";
import TechProcces from "./components/TechProcces";
import NavbarHeroSection from "./components/NavbarHerosection";
import Garanty from "./components/Garanty";
import FloatingNavigation from "./components/FloatingNavigation";
import { motion } from "framer-motion";
import MainVideoPlayer from "./components/MainVideoPlayer";

const pageVariants = {
  hidden: { opacity: 0, y: 10 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function GlavPage() {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="block xl:hidden">
        <Herosection />
      </div>

      {/* Сайдбар */}

      {/* Floating Navigation */}
      <FloatingNavigation />

      {/* Основное содержимое */}
      <main className="flex-1">
        <NavbarHeroSection />
        <AutoPrice id="auto-price" />
        <TechProcces id="tech-process" />
        <Garanty id="garanty" />
        <MainVideoPlayer />

        <CarouselSection id="reviews" />
        <PriceCardList id="prices" />
        <YandexMap id="map" />
      </main>
    </motion.div>
  );
}
