import Ripples from 'react-ripples';
import { MoonIcon } from '@heroicons/react/24/outline';

export const WeatherWidget = () => {
  return (
    <div className='col-span-3 md:col-span-4 lg:col-span-3 hidden lg:flex'>
      {/* @ts-ignore */}
      <Ripples className='flex flex-col justify-center items-center w-full h-[240px] rounded-[20px] bg-gradient-to-b from-black to-blue-950 text-white cursor-pointer'>
        <div className='flex flex-col items-center w-full gap-6 px-8'>
          <div className='flex justify-between w-full'>
            <div className='flex flex-col tracking-wider'>
              <span className='text-lg'>서울</span>
              <span className='text-5xl font-light'>2°</span>
            </div>
            <div className='flex flex-col items-end tracking-wider'>
              <span>청명함</span>
              <span>최고 3°</span>
              <span>최저 -5</span>
            </div>
          </div>
          <div className='flex justify-between w-full h-full'>
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className='flex flex-col justify-center items-center gap-2.5'>
                <span className='text-sm text-gray-400'>오후 8시</span>
                <span className='text-sm'>
                  <MoonIcon className='w-6 h-6' />
                </span>
                <span className='text-sm tracking-wider'>2°</span>
              </div>
            ))}
          </div>
        </div>
      </Ripples>
    </div>
  );
};