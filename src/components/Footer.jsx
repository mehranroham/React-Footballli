import { NavLink } from 'react-router-dom';
import { MdOutlineStadium } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className='w-full h-[100px]'>
      <ul className='flex justify-between px-16 font-MorabbaBold'>
        <li>
          <NavLink
            to='/about'
            className={({ isActive }) => {
              return `flex flex-col gap-2 items-center ${
                isActive ? 'text-green-800' : 'text-gray-800'
              }`;
            }}
          >
            <MdOutlineStadium size={40} />
            <p>پروفایل</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className={({ isActive }) => {
              return `flex flex-col gap-2 items-center ${
                isActive ? 'text-green-800' : 'text-gray-800'
              }`;
            }}
          >
            <MdOutlineStadium size={40} />
            <p> لیگ ها</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className={({ isActive }) => {
              return `flex flex-col gap-2 items-center ${
                isActive ? 'text-green-800' : 'text-gray-800'
              }`;
            }}
          >
            <MdOutlineStadium size={40} />
            <p>فوتبان</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className={({ isActive }) => {
              return `flex flex-col gap-2 items-center ${
                isActive ? 'text-green-800' : 'text-gray-800'
              }`;
            }}
          >
            <MdOutlineStadium size={40} />
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
            <MdOutlineStadium size={40} />
            <p>مسابقات</p>
          </NavLink>
        </li>
      </ul>
    </footer>
  );
}
