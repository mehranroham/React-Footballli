import { useState } from 'react';
import { timeConvert } from '../utils/Time';
import { IoIosArrowDown } from 'react-icons/io';

export default function Fixtures({ index, ...data }) {
  const [showAccordian, setShowAccordian] = useState(
    index === 'true' ? true : false
  );

  const showAccordianHandler = () => {
    setShowAccordian((prev) => !prev);
  };

  return (
    <li
      onClick={showAccordianHandler}
      className={`overflow-hidden grid grid-cols-2 sm:px-5 px-3 bg-white rounded-lg cursor-pointer transition-['height'] duration-1000 ease-out ${
        showAccordian ? 'py-2.5 h-auto' : 'h-[75px]'
      }`}
    >
      <div className='flex items-center gap-2'>
        <img
          src={data.logo ? data.logo : '../../fav-icon.svg'}
          alt={data.name}
          className='w-16 max-h-16 object-contain'
        />
        <p className='whitespace-nowrap sm:text-base text-sm'>{data.name}</p>
      </div>
      <div
        className={`flex justify-end items-center ${
          !showAccordian ? 'rotate-180 mr-auto' : ''
        }`}
      >
        <IoIosArrowDown size={20} />
      </div>
      {showAccordian && (
        <>
          <hr className='col-span-2 my-2.5' />
          <ul className='col-span-2 py-2 sm:px-10 flex flex-col gap-2'>
            {data.fixtures.map((match) => {
              return (
                <li
                  key={match.id}
                  className='grid grid-cols-3 sm:text-base text-sm'
                >
                  <div className='flex items-center gap-2'>
                    <img
                      src={match.away.logo}
                      alt={data.name}
                      className='w-8 h-8'
                    />
                    <p className='whitespace-nowrap'>{match.away.name}</p>
                  </div>
                  <p className='flex items-center justify-center'>
                    {timeConvert(match.start_time)}
                  </p>
                  <div className='flex items-center gap-2 justify-end'>
                    <p className='whitespace-nowrap'>{match.home.name}</p>
                    <img
                      src={match.home.logo}
                      alt={data.name}
                      className='w-8 h-8'
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </li>
  );
}
