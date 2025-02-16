import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(dayjs().format('hh:mm A'));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format('hh:mm A'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <time>{time}</time>;
}

export default Clock;