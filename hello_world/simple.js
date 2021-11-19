function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  // React.createElement(component(string || ReactComponent), props, ...children) => ReactElement
  return React.createElement(
    'button',
    { onClick: () => setLiked(!liked) }, // props는 컴포넌트가 사용하는 데이터를 나타낸다. 돔 요소의 경우 style, className 등의 데이터가 사용될 수 있다.
    text // 내부의 컴포넌트를 가리킨다.
  );
}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(LikeButton), domContainer);
// 대부분 개발자는 createElement를 직접 작성하지 않는다.왜냐하면 babel의 도움을 받아서 jsx문법을 사용하는 것이 더욱 가독성이 좋기 때문이다.
