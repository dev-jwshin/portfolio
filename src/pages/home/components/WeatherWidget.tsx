import Ripples from 'react-ripples';
import { useWeatherData } from '../hook/useWeatherData';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

export const WeatherWidget = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  useEffect(() => {
    const latitude = sessionStorage.getItem('latitude');
    const longitude = sessionStorage.getItem('longitude');
    if (latitude && longitude) {
      setLatitude(Number(latitude));
      setLongitude(Number(longitude));
    }
  }, []);

  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);

          sessionStorage.setItem('latitude', latitude.toString());
          sessionStorage.setItem('longitude', longitude.toString());
        },
        (error) => {
          console.error('위치 정보를 가져오는데 실패했습니다:', error.message);
        }
      );
    } else {
      console.log('이 브라우저에서는 위치 정보를 지원하지 않습니다.');
    }
  };

  return (
    <div className='col-span-3 md:col-span-4 lg:col-span-3 hidden lg:flex'>
      {/* @ts-ignore */}
      <Ripples className='flex flex-col justify-center items-center w-full h-[240px] rounded-[20px] bg-gradient-to-b from-black to-blue-950 text-white cursor-pointer'
        onClick={handleGetLocation}>  {/* onClick을 Ripples 컴포넌트로 이동 */}
        <WeatherWidgetContent latitude={latitude} longitude={longitude} />
      </Ripples>
    </div>
  );
};

const WeatherWidgetContent = ({ latitude, longitude }: { latitude: number | null, longitude: number | null }) => {
  const { weatherData, loading, error } = useWeatherData(latitude, longitude);

  if (loading || !weatherData){
    return (
      <div className='flex flex-col items-center w-full gap-6 px-8'>
        <div className='flex justify-center items-center w-full h-full'>
          <CircularProgress color='inherit' />
        </div>
      </div>
    )
  }

  if (error){
    <div className='flex flex-col items-center w-full gap-6 px-8'>
    <div className='flex justify-center items-center w-full h-full'>
        <span className='text-sm text-gray-400'>이런, 날씨 정보를 불러오는데 실패했어요.</span>
      </div>
    </div>
  }

  const maxTemp = Math.max(...weatherData.map(data => Number(data.temperature)));
  const minTemp = Math.min(...weatherData.map(data => Number(data.temperature)));

  return (
    <div className='flex flex-col items-center w-full gap-6 px-8'>
      <div className='flex justify-between items-center w-full'>
        <div className='flex flex-col tracking-wider'>
          <span className='text-lg'>서울</span>
          <span className='text-5xl font-light'>{weatherData[0].temperature}°</span>
        </div>
        <div className='flex flex-col items-end tracking-wider'>
          <span className='mt-2'>최고 {maxTemp}°</span>
          <span>최저 {minTemp}°</span>
        </div>
      </div>
      <div className='flex justify-between w-full h-full'>
        {weatherData!.map((data, index) => (
          <div key={index} className='flex flex-col justify-center items-center gap-2.5'>
            <span className='text-sm text-gray-400'>{data.time}</span>
            <span className='text-sm'>
              <data.icon className='w-6 h-6' />
            </span>
            <span className='text-sm tracking-wider'>{data.temperature}°</span>
          </div>
        ))}
      </div>
    </div>
  )
}