import React, { useEffect, useRef, useState } from 'react';

/**
 * useRef 훅이 반환하는 ref 객체를 이용해서 자식 요소에 접근할 수 있습니다.
 * 접근하고자 하는 자식 요소의 ref 속성값에 ref 객체를 입력합니다.
 * 해당 돔 요소 혹은 컴포넌트가 생성되면 ref 객체로 접근할 수 있습니다.
 * useEffect 훅 내부에서 자식 요소에 접근하고 있다는 점에 주목합시다.
 * 부수 효과 함수는 컴포넌트 랜더링 결과가 돔에 반영된 후에 호출되므로 해당 돔 요소는 이미 생성된 상태입니다.
 */
export default function TextInput() {
  const inputRef = useRef();
  const [text, setText] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input type="text" ref={inputRef} onChange={onChange} />
      <p>{text}</p>
      <button>저장</button>
    </div>
  );
}
