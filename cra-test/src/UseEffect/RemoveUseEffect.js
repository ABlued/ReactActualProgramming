import React, { useState, useEffect } from 'react';

function RemoveUseEffect() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  /**
   * 부수 효과 함수(useEffect)의 2번째 매개변수는 의존성 배열이라 한다.
   * 의존성 배열을 빈 배열로 입력하면 컴포넌트가 생성될 때만 부수 효과 함수가 호출되고,
   * 컴포넌트가 사라질 때만 반환된 함수가 호출된다.
   *  */
  return <div>{`width is ${width}`}</div>;
}

export default RemoveUseEffect;
