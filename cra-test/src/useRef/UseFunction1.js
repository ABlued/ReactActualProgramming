import React, { useState } from 'react';

/**
 * 이 코드는 실행하면 의도한 대로 동작하지 않는다.
 * input 요소에 텍스트를 입력해도 화면에는 INITIAL_TEXT만 보인다.
 * 이는 컴포넌트가 랜더링될 때마다 새로운 함수를 ref 속성값으로 넣기 때문이다.
 * 리액트는 ref 속성값으로 새로운 함수가 들어오면 이전 함수에 null 인수를 넣어서 호출하고,
 * 새로운 함수에는 요소의 참조값을 넣어서 호출한다.
 * 따라서 텍스트를 입력하면 컴포넌트가 렌더링되고, ref 속성값에 입력된 새로운 함수가 호출되면서
 * INITIAL_TEXT로 덮어쓰는 것이다.
 */

const INITTAL_TEXT = '안녕하세요';

export default function UseFunction1() {
  const [text, setText] = useState(INITTAL_TEXT);
  const [showText, setShowText] = useState(true);

  return (
    <div>
      {showText && (
        <input
          type="text"
          ref={(ref) => ref && setText(INITTAL_TEXT)}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
    </div>
  );
}

// 이 문제는 UseFunction2에서 useCallBack을 이용하여 해결할 수 있다.
