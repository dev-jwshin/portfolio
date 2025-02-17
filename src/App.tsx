import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { usePageTransition } from './pages/home/hook/usePageTransition';
import { Header } from './components/Header';
import { TypewriterHeader } from './pages/home/components/TypeWriteHeader';
import { WeatherWidget } from './pages/home/components/WeatherWidget';
import { MusicPlayer } from './pages/home/components/MusicPlayer';
import { PageBox, AppItem } from './pages/home/home.types';
import Ripples from 'react-ripples';
import { apps } from './pages/home/home.datas';
import Resume from './pages/resume/Resume';

const AppGrid = ({ 
  apps, 
  pageHandler 
}: { 
  apps: AppItem[], 
  pageHandler: (e: React.MouseEvent<HTMLDivElement>) => void 
}) => {
  return (
    <>
      {apps.map((app, index) => (
        <div key={index} className='flex flex-col justify-center items-center gap-2'>
          {/* @ts-ignore */}
          <Ripples 
            className='flex justify-center items-center w-full aspect-square rounded-[20px] bg-[#333333]/90 cursor-pointer' 
            data-page={app.page}
            onClick={pageHandler}
          >
            <img src={app.image} alt='thumbnail' className='w-4/5 rounded-[10px]' />
          </Ripples>
          <span className='text-white text-sm md:text-md'>{app.name}</span>
        </div>
      ))}
    </>
  );
};

const MainContent = ({ 
  apps, 
  pageHandler 
}: { 
  apps: AppItem[], 
  pageHandler: (e: React.MouseEvent<HTMLDivElement>) => void 
}) => {
  return (
    <div id='content' className="w-full h-full">
      <div className='grid grid-cols-8 w-full gap-10'>
        <TypewriterHeader className='col-span-8 flex flex-col gap-1 lg:gap-2' />
        <WeatherWidget className='col-span-4 flex' />
        <MusicPlayer className='col-span-4 flex flex-col justify-center items-center h-[240px] rounded-[20px] overflow-hidden text-white' />
        <AppGrid apps={apps} pageHandler={pageHandler} />
      </div>
    </div>
  );
};

const Loading = () => {
  const { loading, setLoading } = usePageTransition();
  const [display, setDisplay] = useState('flex');


  useEffect(() => {
    if (loading === 'on') setDisplay('flex opacity-100');
    if (loading === 'off') setDisplay('flex opacity-0');
    if (loading === 'none') setDisplay('hidden');
  }, [loading]);

  useEffect(() => {
    const loadingOff = setTimeout(() => {
      setLoading('off');

      const loadingNone = setTimeout(() => {
        setLoading('none');
      }, 300);

      return () => clearTimeout(loadingNone);
    }, 100);
    
    return () => clearTimeout(loadingOff);
  }, []);

  return (
    <div className={`
      absolute top-0 left-0 bg-black w-full h-full justify-center items-center z-10
      transition-opacity duration-300 ease-in-out
      ${display}
    `}>
      <img src='./loading.jpg' alt='loading' className='w-98' />
    </div>
  );
};

const SubPage = ({ pageBox }: { pageBox: PageBox }) => {
  return (
    <div 
      id='sub-page'
      style={{
        position: 'absolute',
        backgroundColor: '#111',
        top: pageBox.top,
        left: pageBox.left,
        width: pageBox.width,
        height: pageBox.height,
        opacity: pageBox.opacity,
        transition: pageBox.transition,
        borderRadius: pageBox.rounded,
        display: pageBox.show ? 'flex' : 'none',
      }}
      className='z-0 flex justify-center items-center pt-14 px-10 pb-6'
    >
      <div className='w-full h-full transition-opacity duration-300 ease-in-out' style={{
        opacity: pageBox.contentOpacity,
      }}>
        <Routes>
            <Route path='/' element={<div className='w-full h-full' />} />
            <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const { appBox, setAppBox, pageBox, setPageBox } = usePageTransition();

  const pageHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const page = target.getAttribute('data-page');

    const newAppBox = {
      top: target.offsetTop,
      left: target.offsetLeft,
      width: rect.width,
      height: rect.height,
    };

    setAppBox(newAppBox);
    sessionStorage.setItem('appBox', JSON.stringify(newAppBox));
    navigate(`/${page}`);
  };

  useEffect(() => {
    let open = false;

    if (path !== '/') {
      open = true;

      const top = appBox.top === 0 ? '0px' : `${appBox.top}px`;
      const left = appBox.left === 0 ? '0px' : `${appBox.left}px`;
      const width = appBox.width === 0 ? '100%' : `${appBox.width}px`;
      const height = appBox.height === 0 ? '100%' : `${appBox.height}px`;

      setPageBox(prev => ({
        ...prev,
        show: true,
        top,
        left,
        width,
        height,
        opacity: 0,
        transition: 'none',
        rounded: '50%',
      }));
    }

    setTimeout(() => {
      setPageBox(prev => ({
        ...prev,
        open,
      }));
    }, 50);
  }, [path, appBox.width, appBox.height, appBox.top, appBox.left]);

  useEffect(() => {
    let top = appBox.top;
    let left = appBox.left;
    let width = appBox.width;
    let height = appBox.height;

    setPageBox(prev => ({
      ...prev,
      transition: 'all 0.3s ease-in-out',
    }));

    if (pageBox.open) {
      if (width === 0 && height === 0) {
        setPageBox(prev => ({
          ...prev,
          transition: 'none',
        }));
      }

      setPageBox(prev => ({
        ...prev,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        rounded: '0px',
        opacity: 1,
      }));
      
      setTimeout(() => {
        setPageBox(prev => ({
          ...prev,
          contentOpacity: 1,
        }));
      }, 300);

      return;
    }

    if (width === 0 && height === 0) {
      const storedAppBox = JSON.parse(sessionStorage.getItem('appBox') || '{}');
      
      top = storedAppBox?.top || 0;
      left = storedAppBox?.left || 0;
      width = storedAppBox?.width || 0;
      height = storedAppBox?.height || 0;
    }

    setPageBox(prev => ({
      ...prev,
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${height}px`,
      rounded: '50%',
      opacity: 0,
      contentOpacity: 0,
    }));

    const pageHide = setTimeout(() => {
      setPageBox(prev => ({
        ...prev,
        show: false,
      }));
    }, 300);

    return () => clearTimeout(pageHide);
  }, [pageBox.open, appBox.top, appBox.left, appBox.width, appBox.height]);

  return (
    <div className="w-screen h-screen bg-white overflow-hidden">
      <div className="relative hidden lg:flex justify-center items-center h-full z-0">
        <div className="bg-black w-full h-full shadow-black">
          <div className="relative w-full h-full overflow-hidden">
            <img src='./bg-ipad.jpg' alt='background' className='absolute top-0 left-0 w-full h-full object-cover' />
            <div className='relative w-full h-full flex justify-center items-center px-5 sm:px-10'>
              <div className="relative bg-gradient-to-b from-black/40 to-black/65 flex justify-center items-center px-5 pb-8 sm:px-10 py-4 border-18 border-black rounded-[20px] overflow-hidden">
                <div className='flex flex-col w-full max-w-7xl aspect-[5.5/3] gap-8'>
                  <Header />
                  <MainContent apps={apps} pageHandler={pageHandler} />
                </div>
                <SubPage pageBox={pageBox} />
                <Loading />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:hidden fixed top-0 left-0 w-full h-full z-10 bg-[#333333] px-10'>
        <div className='flex flex-col justify-center items-center h-full text-center'>
          <p className='text-white text-5xl md:text-7xl'>Oops!</p>
          <p className='text-white text-2xl md:text-3xl mt-4'>디바이스의 크기가 너무 작아요.</p>
          <div className='flex flex-col justify-center items-center gap-1 text-white text-sm md:text-base mt-2'>
            <p>포트폴리오 특성 상 데스크탑에 최적화 되어있습니다.</p>
            <p>1480px 이상의 크기로 브라우저를 열어주세요.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;