import { NavLink } from 'react-router-dom';
import { MdOutlineStadium } from 'react-icons/md';
import { RiCompassDiscoverLine } from 'react-icons/ri';
import { IoIosFootball } from 'react-icons/io';
import { SiPremierleague } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';

export default function Footer() {
  return (
    <footer className='w-full h-[80px] fixed bottom-0 bg-white'>
      <ul className='grid grid-cols-5 gap-2 h-full md:px-16 sm:px-10 px-5 font-MorabbaBold md:text-base text-sm'>
        <li>
          <NavLink
            to='/profile'
            className={({ isActive }) => {
              return `flex flex-col gap-2 items-center ${
                isActive ? 'text-green-800' : 'text-gray-800'
              }`;
            }}
          >
            <CgProfile size={35} />
            <p>پروفایل</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/profile'
            className={({ isActive }) => {
              return `flex flex-col gap-2 items-center ${
                isActive ? 'text-green-800' : 'text-gray-800'
              }`;
            }}
          >
            <SiPremierleague size={35} />
            <p> لیگ ها</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/profile'
            className={({ isActive }) => {
              return `flex flex-col gap-2 items-center ${
                isActive ? 'text-green-800' : 'text-gray-800'
              }`;
            }}
          >
            <IoIosFootball size={35} />
            <p>فوتبان</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/profile'
            className={({ isActive }) => {
              return `flex flex-col gap-2 items-center ${
                isActive ? 'text-green-800' : 'text-gray-800'
              }`;
            }}
          >
            <RiCompassDiscoverLine size={35} />
            <p>اکتشافات</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => {
              return `flex flex-col gap-2 items-center ${
                isActive ? 'text-green-800' : 'text-gray-800'
              }`;
            }}
          >
            <MdOutlineStadium size={35} />
            <p>مسابقات</p>
          </NavLink>
        </li>
      </ul>
    </footer>
  );
}
