import React, { useEffect, useRef } from 'react';

/**
 * forwordRef 함수를 이용하면 부모 컴포넌트에서 넘어온 ref 속성값을 직접 처리할 수 있다.
 */

const TextInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
      <button>저장</button>
    </div>
  );
});

export default function ForwardRef() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <TextInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
}
