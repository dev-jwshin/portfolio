import WaterDropSharpIcon from '@mui/icons-material/WaterDropSharp';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useState, useEffect } from 'react';

interface WeatherItem {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}

interface WeatherResponse {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      dataType: string;
      items: {
        item: WeatherItem[];
      };
    };
  };
}

interface WeatherDataItem {
  time: string;
  temperature: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
}

export const useWeatherData = (latitude: number | null, longitude: number | null) => {
  const [weatherData, setWeatherData] = useState<WeatherDataItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getWeatherIcon = (precipitation: string): OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; } => {
    switch (precipitation) {
      case '0':
        return WbSunnyOutlinedIcon;
      case '1':
        return WaterDropSharpIcon;
      case '2':
        return WaterDropSharpIcon;
      case '3':
        return AcUnitOutlinedIcon;
      case '4':
        return ThunderstormOutlinedIcon;
      default:
        return WbSunnyOutlinedIcon;
    }
  };

  const formatTime = (time: string): string => {
    const hour = parseInt(time.slice(0, 2));
    const ampm = hour < 12 ? '오전' : '오후';
    const displayHour = hour === 12 ? 12 : hour % 12;
    return `${ampm} ${displayHour}시`;
  };

  const parseWeatherData = (items: WeatherItem[]): WeatherDataItem[] => {
    const timeMap = new Map<string, Partial<WeatherDataItem>>();

    items.forEach(item => {
      const time = item.fcstTime;
      if (!timeMap.has(time)) {
        timeMap.set(time, { time: formatTime(time) });
      }

      const currentData = timeMap.get(time)!;

      if (item.category === 'T1H') {
        currentData.temperature = item.fcstValue;
      } else if (item.category === 'PTY') {
        currentData.icon = getWeatherIcon(item.fcstValue);
      }
    });

    return Array.from(timeMap.values())
      .filter(data => data.temperature && data.icon)
      .map(data => data as WeatherDataItem)
      .slice(0, 6);
  };

  const fetchWeatherData = async () => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const today = new Date();
    today.setHours(today.getHours() - 1);
    const baseDate = today.toISOString().slice(0, 10).replace(/-/g, '');
    const baseTime = String(today.getHours()).padStart(2, '0') + '00';

    try {
      setLoading(true);
      const response = await fetch(
        `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?` +
        `serviceKey=${API_KEY}&` +
        `pageNo=1&` +
        `numOfRows=60&` +
        `dataType=JSON&` +
        `base_date=${baseDate}&` +
        `base_time=${baseTime}&` +
        `nx=${longitude || 55}&` +
        `ny=${latitude || 127}`
      );

      if (!response.ok) {
        throw new Error('날씨 데이터를 가져오는데 실패했습니다.');
      }

      const data: WeatherResponse = await response.json();

      if (data.response.header.resultCode === '00') {
        const parsedData = parseWeatherData(data.response.body.items.item);
        setWeatherData(parsedData);
        setError(null);
      } else {
        throw new Error(data.response.header.resultMsg);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 에러가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return {
    weatherData,
    loading,
    error,
    refreshWeather: fetchWeatherData
  };
};