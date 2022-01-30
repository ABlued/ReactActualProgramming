import React, { useCallback, useState } from 'react';

/**
 * 리액트에서제공하는 useCallback 훅을 이용해서 setInitialText 함수를 변하지 않게 만들었다.
 * ref 속성값에 새로운 함수를 입력하지 않으므로 input요소가 생성된거나 제거될 때만 setInitialText함수가 호출된다.
 */

const INITTAL_TEXT = '안녕하세요';

export default function UseFunction2() {
  const [text, setText] = useState(INITTAL_TEXT);
  const [showText, setShowText] = useState(true);

  const setInitialText = useCallback((ref) => {
    ref && setText(INITTAL_TEXT);
  }, []);

  return (
    <div>
      {showText && (
        <input
          type="text"
          ref={setInitialText}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
    </div>
  );
}
