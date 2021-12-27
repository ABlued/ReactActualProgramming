import React, { useMemo } from 'react';

/**
 * useMemo 훅은 계산량이 많은 함수의 반환값을 재활용하는 용도로 사용된다.
 * useMemo 훅의 첫 번째 매개변수로 함수를 입력하고,
 * 두 번째 매개변수는 의존성 배열을 입력한다.
 * 의존성 배열이 변경되지 않으면 이전에 반환된 값을 재사용한다.
 * 만약 배열의 값이 변경됐으면 첫 번째 매개변수로 입력된 함수를 실행하고 그 반환값을 기억한다.
 */

export default function UseMemo({ v1, v2 }) {
  const value = useMemo(() => runExpensiveJob(v1, v2), [v1, v2]);
  return <p>{`value is ${value}`}</p>;
}

function runExpensiveJob(v1, v2) {
  return null;
}
