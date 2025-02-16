import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { usePageTransition } from './pages/home/hook/usePageTransition';
import { Header } from './components/Header';
import { TypewriterHeader } from './pages/home/components/TypeWriteHeader';
import { WeatherWidget } from './pages/home/components/WeatherWidget';
import { MusicPlayer } from './pages/home/components/MusicPlayer';
import { PageBox, AppItem } from './pages/home/home.types';
import Ripples from 'react-ripples';
import { apps } from './pages/home/home.datas';

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
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full gap-10'>
        <TypewriterHeader />
        <WeatherWidget />
        <MusicPlayer />
        <AppGrid apps={apps} pageHandler={pageHandler} />
      </div>
    </div>
  );
};

const SubPage = ({ pageBox }: { pageBox: PageBox }) => {
  return (
    <div 
      id='sub-page'
      style={{
        position: 'fixed',
        backgroundColor: '#222',
        top: pageBox.top,
        left: pageBox.left,
        width: pageBox.width,
        height: pageBox.height,
        opacity: pageBox.opacity,
        transition: pageBox.transition,
        borderRadius: pageBox.rounded,
        display: pageBox.show ? 'flex' : 'none',
      }}
      className='z-0 flex justify-center items-center'
    >
      <div className='flex justify-center items-center lg:w-7xl h-full' />
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
      top: rect.top,
      left: rect.left,
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
      const width = appBox.width === 0 ? '100vw' : `${appBox.width}px`;
      const height = appBox.height === 0 ? '100vh' : `${appBox.height}px`;

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
        width: '100vw',
        height: '100vh',
        rounded: '0px',
        opacity: 1,
      }));

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
      <div className="flex justify-center items-center h-full">
        <div className="bg-black w-full h-full shadow-black">
          <div className="relative w-full h-full overflow-hidden bg-[url('./bg-ipad.jpg')] bg-cover bg-center">
            <div className="w-full h-full bg-gradient-to-b from-black/20 to-black/50 flex justify-center items-center px-5 sm:px-10 py-2">
              <div className='flex flex-col w-full lg:w-7xl h-full gap-8'>
                <Header />
                <MainContent apps={apps} pageHandler={pageHandler} />
                <SubPage pageBox={pageBox} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;