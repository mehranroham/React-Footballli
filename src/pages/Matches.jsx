import { useState } from 'react';
import { useEffect } from 'react';

function Matches() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fetching, setFetching] = useState(false);

  // fetching data api
  useEffect(() => {
    setFetching(true);
    // async function
    const fetchData = async () => {
      const response = await fetch(`api/football/fixtures/?date=2023-01-05`);
      if (!response.ok) {
        setError('Could not fetch the data');
      }
      const resData = await response.json();
      setData(resData);
      console.log(resData);
    };
    fetchData();
    setFetching(false);
  }, []);

  return <section></section>;
}

export default Matches;
