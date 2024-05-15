import { useState, useEffect, createContext } from 'react';

export const dataCtx = createContext();

export default function DataContext({ children }) {
  // fetching data api
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [fetching, setFetching] = useState(false);

  const [selectedDay, setSelectedDay] = useState(0);
  const [calender, setCalender] = useState(['دیروز', 'امروز', 'فردا']);
  const [days, setDays] = useState(19);

  const [startingIndex, setStartingIndex] = useState(0);

  // const today
  const today = new Date();

  // fetching data api & setToday
  useEffect(() => {
    let selected = new Date();
    selected.setDate(today.getDate() + selectedDay);
    selected.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const day = selected.getDate();
    const month = selected.getMonth() + 1;
    const year = selected.getFullYear();
    const path = `?date=${year}-${month}-${day}`;
    // ---------------------------------------------------
    for (
      let index = 2 + selectedDay;
      index < days + selectedDay + startingIndex;
      index++
    ) {
      let newDate = new Date();
      newDate.setDate(today.getDate() + index);
      newDate = newDate.toLocaleDateString('fa-IR-u-nu-latn', {
        month: 'long',
        day: 'numeric',
      });

      setCalender((prev) => {
        return [...prev, newDate];
      });
    }
    // ---------------------------------------------------
    setFetching(true);
    // async function
    const fetchData = async () => {
      const response = await fetch(`api/football/fixtures/${path}`);
      if (!response.ok) {
        setError('Could not fetch the data');
      }
      const resData = await response.json();
      setData(resData);
    };
    fetchData();
    setFetching(false);
  }, [selectedDay, startingIndex]);

  const ctx = {
    data,
    fetching,
    calender,
    setDays,
    selectedDay,
    setSelectedDay,
    setCalender,
    setStartingIndex,
  };

  return <dataCtx.Provider value={ctx}>{children}</dataCtx.Provider>;
}
