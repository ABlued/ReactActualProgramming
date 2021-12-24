import React, { useState } from 'react';
/**
 * 상태값 변경 함수는 클래스형 컴포넌트의 setState 메서드와 조금 다르게 동작한다.
 * setState 메서드는 기존 상탯값과 새로 입력된 값을 병합하지만
 * useState는 이전 상태값을 덮어쓴다.
 */
function ObjectUseState() {
  const [state, setState] = useState({ name: '', age: 0 });
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`name is ${state.age}`}</p>
      <input
        type="text"
        value={state.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
      <input
        type="number"
        value={state.age}
        onChange={(e) => setState({ ...state, age: e.target.value })}
      />
    </div>
  );
}

export default ObjectUseState;
