import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
// babel모듈을 갖고오지 않았기 때문에 jsx문법을 사용할 수 없다.
function Container() {
  return React.createElement(
    'div',
    null,
    React.createElement('p', null, '버튼을 클릭해 주세요.'),
    React.createElement(Button, { label: '좋아요' }),
    React.createElement(Button, { label: '싫어요' })
  );
}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domContainer);
