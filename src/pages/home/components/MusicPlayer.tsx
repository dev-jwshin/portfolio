import { useState, useRef, useEffect } from 'react';
import Ripples from 'react-ripples';
import { 
  ArrowPathIcon, 
  BackwardIcon, 
  ForwardIcon, 
  PlayIcon, 
  PauseIcon,
  SpeakerXMarkIcon,
  SpeakerWaveIcon
} from '@heroicons/react/24/outline';
import { musics } from '../home.datas';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentMusic = musics[currentMusicIndex];

  useEffect(() => {
    audioRef.current = new Audio(currentMusic.url);
    audioRef.current.addEventListener('ended', handleMusicEnd);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleMusicEnd);
        audioRef.current.pause();
      }
    };
  }, [currentMusicIndex]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    audioRef.current = new Audio(currentMusic.url);
    audioRef.current.addEventListener('ended', handleMusicEnd);

    // 새로운 오디오 인스턴스가 생성될 때마다 재생 시도
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented:", error);
        });
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleMusicEnd);
        audioRef.current.pause();
      }
    };
  }, [currentMusicIndex]);

  const handleMusicEnd = () => {
    setIsPlaying(false);

    if (currentMusicIndex === musics.length - 1) {
      setCurrentMusicIndex(0);
    } else {
      setCurrentMusicIndex(prev => prev + 1);
    }

    setIsPlaying(true);
  };

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Playback prevented:", error);
          setIsPlaying(false); // 재생이 실패하면 상태를 다시 false로
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const playNext = () => {
    if (currentMusicIndex === musics.length - 1) {
      setCurrentMusicIndex(0);
    } else {
      setCurrentMusicIndex(prev => prev + 1);
    }
  
    setIsPlaying(true);
  };
  
  const playPrevious = () => {
    if (currentMusicIndex === 0) {
      setCurrentMusicIndex(musics.length - 1);
    } else {
      setCurrentMusicIndex(prev => prev - 1);
    }
  
    setIsPlaying(true);
  };

  const handleRestart = () => {
    if (!audioRef.current) return;
    
    audioRef.current.currentTime = 0;
    
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className='col-span-3 md:col-span-4 lg:col-span-3 hidden md:flex flex-col justify-center items-center h-[240px] rounded-[20px] overflow-hidden text-white'>
      <div className='flex justify-center items-center gap-5 w-full h-full bg-amber-950 p-6'>
        <div className='hidden md:block min-w-[192px] h-[192px]'>
          <img 
            src={currentMusic.thumbnail}
            alt='music-thumbnail' 
            className='w-full h-full rounded-[10px]' 
          />
        </div>
        <div className='relative flex w-full h-full flex-col gap-1'>
          <span className='text-white text-2xl'>{currentMusic.title}</span>
          <span className='text-gray-400 text-sm'>{currentMusic.artist}</span>
          <div className='text-gray-200 flex items-center w-full text-sm leading-6'>
            {currentMusic.description}
          </div>
          <div className='absolute bottom-0 right-0 flex justify-around items-center w-full rounded-full text-white'>
            {/* @ts-ignore */}
            <Ripples className='cursor-pointer rounded-full p-2' onClick={toggleMute}>
              {isMuted ? (
                <SpeakerXMarkIcon className='w-6 h-6 text-gray-400 hover:text-white transition-colors' strokeWidth={1.5} />
              ) : (
                <SpeakerWaveIcon className='w-6 h-6 text-gray-400 hover:text-white transition-colors' strokeWidth={1.5} />
              )}
            </Ripples>
            {/* @ts-ignore */}
            <Ripples 
              className='cursor-pointer rounded-full p-2' 
              onClick={playPrevious}
            >
              <BackwardIcon className='w-8 h-8 hover:text-gray-300 transition-colors' strokeWidth={1.5} />
            </Ripples>

            {/* @ts-ignore */}
            <Ripples 
              className='cursor-pointer rounded-full p-2'
              onClick={togglePlay}
            >
              {isPlaying ? (
                <PauseIcon className='w-10 h-10 hover:text-gray-300 transition-colors' strokeWidth={1.5} />
              ) : (
                <PlayIcon className='w-10 h-10 hover:text-gray-300 transition-colors' strokeWidth={1.5} />
              )}
            </Ripples>

            {/* @ts-ignore */}
            <Ripples 
              className='cursor-pointer rounded-full p-2'
              onClick={playNext}
            >
              <ForwardIcon className='w-8 h-8 hover:text-gray-300 transition-colors' strokeWidth={1.5} />
            </Ripples>

            {/* @ts-ignore */}
            <Ripples 
              className='cursor-pointer rounded-full p-2'
              onClick={handleRestart}
            >
              <ArrowPathIcon className='w-6 h-6 text-gray-400 hover:text-white transition-colors' strokeWidth={1.5} />
            </Ripples>
          </div>
        </div>
      </div>
    </div>
  );
};