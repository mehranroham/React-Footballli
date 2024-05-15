import Fixtures from '../components/Fixtures';
import { useContext } from 'react';
import { dataCtx } from '../store/DataContext';

function Matches() {
  const { data } = useContext(dataCtx);

  if (data && !data.all.length) {
    return (
      <p className='flex justify-center pt-10 md:text-xl text-sm'>
        هیچی بازی ای در این تاریخ انجام نمی شود...
      </p>
    );
  }

  return (
    <section className='xl:px-52 lg:px-32 md:px-14 sm:px-10 px-5 py-7'>
      <ul className='flex flex-col gap-5'>
        {data &&
          data.all.length &&
          data.all.map((data, index) => {
            if (index === 0) {
              return <Fixtures key={data.id} {...data} index='true' />;
            } else {
              return <Fixtures key={data.id} {...data} index='false' />;
            }
          })}
      </ul>
    </section>
  );
}

export default Matches;
