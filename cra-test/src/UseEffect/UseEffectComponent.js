import React, { useState, useEffect } from 'react';
/**
 * 함수 실행 시 함수 외부의 상태를 변경하는 연산을 부수 효과라고 부르다.
 * 특별한 이유가 없다면 모든 부수 효과는 useEffect 훅에서 처리하는게 좋다.
 * API 호출하는 것과 이벤트 처리 함수 등록하고 헤제하는 것이 부수 효과의 구체적인 예다.
 */
function UseEffectComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // 버튼을 클릭할 때마다 랜더링이 되고 부수 효과 함수(useEffect)가 실행된다.
    // 정확히 말하면 부수 효과 함수(useEffect)는 랜더링 결과가 실제 돔에 반영된 후에 비동기로 호출된다.
    document.title = `업데이트 횟수 : ${count}`;
  });
  return <button onClick={() => setCount(count + 1)}>increase</button>;
}

export default UseEffectComponent;
