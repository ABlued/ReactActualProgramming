import React from 'react';

function App({ title, color }) {
  return <p style={{ color }}>{title}</p>;
}
const functionElement = <App title="안녕하세요" color="blue" />;
console.log(functionElement);
export default App;
// 리액트 요소는 불변 객체이다.
