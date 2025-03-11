'use client';

import { NavBar } from '@/components/NavBar';
import Image from 'next/image';
import React from 'react';
import LLOGO from '../../../public/LLOGO.svg';

export default function Header() {
  return (
    <div className="flex justify-between">
      <Image alt="" src={LLOGO} width={300} height={90} />
      <NavBar />
    </div>
  );
}
