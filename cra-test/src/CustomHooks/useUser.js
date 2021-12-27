import React, { useEffect, useState } from 'react';
/**
 * 리액트가 제공하는 훅을 이용해서 커스텀 훅을 만들 수 있다.
 * 커스텀 훅을 이용해서 또 다르 커스텀 훅을 만들 수 있다.
 * 커스텀 훅은 use로 시작하는게 좋다.
 * 커스터 훅은 내부 구현을 숨기면서 사용 편의성을 높여준다.
 */
function useUser(userId) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserApi(userId).then((data) => setUser(data));
  }, [userId]);
  return user;
}
/**
 * setUser 훅은 userId 입력으로 받아서 user 객체를 출력해준다.
 */
function Profile({ userId }) {
  const user = useUser(userId);
}

function getUserApi() {
  return Promise(null);
}

export default useUser;
