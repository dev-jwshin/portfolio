import { useState } from 'react';
import { AppBox, PageBox } from '../home.types';

export const usePageTransition = () => {
  const [appBox, setAppBox] = useState<AppBox>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const [pageBox, setPageBox] = useState<PageBox>({
    show: false,
    open: false,
    top: '0px',
    left: '0px',
    width: '0px',
    height: '0px',
    opacity: 0,
    contentOpacity: 0,
    transition: 'none',
    rounded: '0px',
  });

  const [loading, setLoading] = useState<'on' | 'off' | 'none'>('on');

  return { appBox, setAppBox, pageBox, setPageBox, loading, setLoading };
};