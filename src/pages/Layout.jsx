import { Outlet } from 'react-router-dom';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <main className='font-Dana w-full pb-20 min-h-[calc(100vh_-_60px)] bg-gray-300'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
