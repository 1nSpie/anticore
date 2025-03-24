'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-10 bg-transparent">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-white text-xl font-bold">
            <Image src={'/LLOGO.svg'} alt="logo" width={300} height={90} />
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300 hover:underline">
                Главная
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                О нас
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Услуги
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="bg-cover bg-linear-30 bg-gray-400 bg-center h-screen flex items-center justify-center bg-[url('/backgroundPhoto.jpg')] brightness-50 blur-xs"></div>
    </>
  );
}
