import React, { useEffect, useRef } from 'react';

/**
 * 함수형 컴포넌트에 ref 속성값을 입력할 수는 없지만, 다른 이름으로 ref 객체를
 * 입력받아서 내부의 리액트 요소에 연결할 수 있다.
 * 다음은 inputRef라는 이름으로 속성값을 입력받아서 input요소에 연결하는 코드다.
 */
export default function TextInputForm() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <TextInput inputRef={inputRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
}

function TextInput({ inputRef }) {
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>저장</button>
    </div>
  );
}
