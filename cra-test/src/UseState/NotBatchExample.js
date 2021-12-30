import React, { useState, useEffect } from 'react';
/**
 * window 객체에 이벤트 처리 함수를 등록한다.
 * 리액트 요소에 등록되지 않은 이벤트 처리 함수는 리액트 내부에서 관리되지 않는다.
 * 이처럼 리액트 외부에 등록된 이벤트 처리 함수에서 상탯값 변경 함수를 호출하면 배치로 처리되지 않는다.
 * 따라서 화면을 한 번 클릭하면 로그가 두 번 출력된다.
 */
function NotBatchExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onClick() {
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
    }
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);
  console.log('render called');
  return (
    <div>
      <h2>{count}</h2>
      <p>아무데나 클릭해보세요.</p>
    </div>
  );
}

export default NotBatchExample;
