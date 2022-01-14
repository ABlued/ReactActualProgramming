import React, { useCallback, useState } from 'react';
import axios from 'axios';

/**
 * UseCallBack 컴포넌트가 렌더링될 때마다 UserEdit 컴포넌트의 onSave속성값으로 새로운 함수가 입력된다.
 * 따라서 UserEdit 컴포넌트에서 React.memo를 사용해도 onSave 속성값이 한상 변경되고 그 때문에 불필요한 렌더링이 발생한다.
 * onSave 속성값은 name이나 age값이 변경되지 않으면 항상 같아야 한다.
 * useCallback 훅을 사용하면 불필요한 렌더링을 막을 수 있다.
 */

export default function UseCallBack() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  // const onSave = useCallback(() => {
  //   saveToServer(name, age);
  // }, [name, age]);

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      <UserEditComponent
        onSave={() => saveToServer(name, age)}
        // onSave={onSave}
        setName={setName}
        setAge={setAge}
      />
    </div>
  );
}

function saveToServer(name, age) {
  const response = axios.get(`localhost:8080/${age}/${name}`);
  return response;
}
