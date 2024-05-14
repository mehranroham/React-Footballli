import React from 'react';
import { Outlet } from 'react-router-dom';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <main className='font-Dana w-full min-h-[calc(100vh_-_180px)] '>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
