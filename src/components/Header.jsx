import { useRef, useCallback, useContext, useEffect } from 'react';
import { LuClock8 } from 'react-icons/lu';
import { dataCtx } from '../store/DataContext';

export default function Header() {
  const {
    calender,
    setSelectedDay,
    setCalender,
    selectedDay,
    setStartingIndex,
    startingIndex,
  } = useContext(dataCtx);

  // ------------------------------------------------------

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && calender.length > 5) {
          setCalender(['دیروز', 'امروز', 'فردا']);
          setStartingIndex((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [calender]
  );

  // ------------------------------------------------------

  const dayClickHandler = (index, i) => {
    if (i !== 1) {
      setCalender(['دیروز', 'امروز', 'فردا']);
      setSelectedDay(+index);
    }
  };

  return (
    <>
      <header className='w-full h-[60px] flex justify-between md:px-16 px-8 items-center font-Morabba text-gray-800'>
        <p className='text-2xl'>نتایج زنده</p>
        <LuClock8 size={40} />
      </header>
      <ul className='overflow-x-scroll sm:px-16 px-7 flex gap-10 items-center whitespace-nowrap font-Morabba text-lg *:py-3 *:cursor-pointer'>
        {calender.map((day, index) => {
          if (calender.length == index + 1) {
            return (
              <li
                onClick={() => dayClickHandler(selectedDay + index - 1, index)}
                key={index}
                ref={lastBookElementRef}
                className='text-center'
              >
                {day}
              </li>
            );
          } else {
            return (
              <li
                onClick={() => dayClickHandler(selectedDay + index - 1, index)}
                className='text-center'
                key={index}
              >
                {day}
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
