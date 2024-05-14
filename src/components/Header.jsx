import React from 'react';
import { LuClock8 } from 'react-icons/lu';

export default function Header() {
  return (
    <>
      <header className='w-full h-[80px] flex justify-between px-16 items-center font-Morabba text-gray-800'>
        <p className='text-2xl'>نتایج زنده</p>
        <LuClock8 size={40} />
      </header>
    </>
  );
}
