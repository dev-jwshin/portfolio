import { WifiIcon } from '@heroicons/react/24/outline';
import Clock from './Clock';

export const Header = () => {
  return (
    <div id="header" className="flex justify-between items-center w-full z-10">
      <div id="header-left" className="flex justify-start items-center w-1/3">
        <div className="text-white text-lg">
          <Clock />
        </div>
      </div>
      <div id="header-center" className="flex justify-center items-center gap-2 w-1/3">
        <div className="notch w-40 h-7 rounded-full bg-black"></div>
      </div>
      <div id="header-right" className="flex justify-end items-center gap-2 w-1/3">
        <WifiIcon className="text-white w-6 h-6" />
        <div id='battery' className="w-10 h-5 rounded-full bg-white relative">
          <div className="absolute left-0 top-0 w-[92%] h-full rounded-full bg-[#6AA4FF] flex justify-center items-center text-white text-sm"></div>
          <span className='relative text-white text-sm w-full h-full flex justify-center items-center'>92</span>
        </div>
      </div>
    </div>
  );
};