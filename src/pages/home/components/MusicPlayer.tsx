import Ripples from 'react-ripples';
import { 
  ArrowPathIcon, 
  BackwardIcon, 
  ForwardIcon, 
  PlayIcon, 
  SpeakerXMarkIcon 
} from '@heroicons/react/24/outline';

export const MusicPlayer = () => {
  return (
    <div className='col-span-3 md:col-span-4 lg:col-span-3 flex flex-col justify-center items-center h-[240px] rounded-[20px] overflow-hidden text-white'>
      <div className='flex justify-center items-center gap-5 w-full h-full bg-amber-950 p-6'>
        <div className='hidden md:block min-w-[192px] h-[192px]'>
          <img 
            src='./music/everything-black/thumbnail.jpg' 
            alt='music-thumbnail' 
            className='w-full h-full rounded-[10px]' 
          />
        </div>
        <div className='relative flex w-full h-full flex-col gap-1'>
          <span className='text-white text-2xl'>Everything Black</span>
          <span className='text-gray-400 text-sm'>Unlike Pluto</span>
          <div className='text-gray-200 flex items-center w-full text-sm leading-6'>
            신준원이 평소 좋아하는 색상인 Black & White를 표현하는 노래
          </div>
          <div className='absolute bottom-0 right-0 flex justify-around items-center w-full rounded-full text-white'>
            {/* @ts-ignore */}
            <Ripples className='cursor-pointer rounded-full p-2'>
              <SpeakerXMarkIcon className='w-6 h-6 text-gray-400' strokeWidth={1.5} />
            </Ripples>
            {/* @ts-ignore */}
            <Ripples className='cursor-pointer rounded-full p-2'>
              <BackwardIcon className='w-8 h-8' strokeWidth={1.5} />
            </Ripples>
            {/* @ts-ignore */}
            <Ripples className='cursor-pointer rounded-full p-2'>
              <PlayIcon className='w-10 h-10' strokeWidth={1.5} />
            </Ripples>
            {/* @ts-ignore */}
            <Ripples className='cursor-pointer rounded-full p-2'>
              <ForwardIcon className='w-8 h-8' strokeWidth={1.5} />
            </Ripples>
            {/* @ts-ignore */}
            <Ripples className='cursor-pointer rounded-full p-2'>
              <ArrowPathIcon className='w-6 h-6 text-gray-400' strokeWidth={1.5} />
            </Ripples>
          </div>
        </div>
      </div>
    </div>
  );
};