import React, { useRef, useState } from 'react';

/**
 * ref 속성값을 입력한 input 요소는 showText 상탯값에 따라 존재하지 않을 수 있다.
 * 이렇게 조건부 렌더링을 하는 경우에는 컴포넌트가 생성된 이후라 하더라도 ref 객체를 사용할 때 주의해야 한다
 * input 요소가 존재하지 않는 상태에서 '텍스트로 이동' 버튼을 누르면 inputRef 객체의 current 속성은 존재하지 않기 때문에 에러가 발생한다.
 * 따라서 조건부 렌더링이 사용된 요소의 ref 객체는 current 속성을 검사하는 코드가 필요하다.
 */

export default function Precautions() {
  const inputRef = useRef();
  const [showText, setShowText] = useState(true);

  return (
    <div>
      {showText && <input type="text" ref={inputRef} />}
      <button onClick={() => setShowText(!showText)}>
        텍스트 보이기/가리기
      </button>
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
      {/* <button onClick={() => inputRef.current && inputRef.current.focus()}>텍스트로 이동</button> */}
    </div>
  );
}
