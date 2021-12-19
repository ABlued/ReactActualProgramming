import React, { useState } from 'react';

function Usestate() {
  const [count, setCount] = useState(0);
  function onClick() {
    setCount(count + 1);
    setCount(count + 1);
    /**
     * 상태값 변경 함수를 2번 연속으로 실행해도 한 번만 동작한다.
     * 그 이유는 상탯값 변경 함수는 비동기로 동작하기 때문이다.
     * 리액트는 효율적으로 랜더링하기 위해 여러 개의 상탯값 변경 요청을 배치로 처리한다.
     * 따라서 onClick 함수가 호출되어도 'render called' 로그는 한 번만 출력된다.
     */
  }
  console.log('render called');

  // 그래서 이러한 문제를 해결하기 위해 상탯값 변경 함수의 인수로 함수를 입력할 수 있다.

  function stableOnClick() {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    /**
     * 상탯값 변경 함수로 입력된 함수는 자신이 호출되기 직전의 상탯값을 매개변수로 받는다.
     * 이 코드에서는 첫 번째 호출에서 변경된 상태값이 두 번째 호출의 인수로 사용된다.
     * 따라서 stableOnClick 함수를 호출하면 count 상탯값은 2만큼 증가한다.
     * 또한 상태값 변경 함수는 비동기로 처리되지만 그 순서가 보장이 된다.
     */
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
      <button onClick={stableOnClick}>더욱 나아진 증가</button>
    </div>
  );
}

export default Usestate;
