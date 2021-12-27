import React, { useEffect, useState } from 'react';

// useWindwoWidth 구현부
/**
 * 윈도우의 가로길이를 변할때마다
 */
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return width;
}

// useWindwoWidth 사용부
function WidthPrinter() {
  const width = useWindowWidth();
  return <div>{`width is ${width}`}</div>;
}

export default WidthPrinter;
