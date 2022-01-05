import React, { useEffect, useState } from 'react';
/**
 *  key속성값을 사용하여 순서 정보를 입력하는 것은 바람직하지 않다.
 *  key속성값을 이용하여 불필요한 랜더링 방지는
 *  배열의 끝에서만 원소를 추가하거나 삭제하면서 원소의 순서를 변경하지 않는 경우에만 적합하다.
 */
function ChangeTheOrderOfElementsWithKeyValues() {
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    setInterval(() => setFlag((prev) => !prev), 1000);
  }, []);

  if (flag) {
    return (
      <>
        <p key="banana">바나나</p>
        <p key="apple">사과</p>

        {/* <p key="pineapple">파인애플</p> */}
      </>
    );
  } else {
    return (
      <div>
        <p key="banana">바나나</p>
        <p key="pineapple">파인애플</p>
        <p key="apple">사과</p>
      </div>
    );
  }
}

export default ChangeTheOrderOfElementsWithKeyValues;
