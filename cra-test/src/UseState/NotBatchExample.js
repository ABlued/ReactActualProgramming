import React, { useState, useEffect } from 'react';

function NotBatchExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onClick() {
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
    }
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);
  console.log('render called');
  return (
    <div>
      <h2>{count}</h2>
      <p>아무데나 클릭해보세요.</p>
    </div>
  );
}

export default NotBatchExample;
