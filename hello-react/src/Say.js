import React, { useState } from 'react';

const Say = () => {
  const [msg, setMsg] = useState('');
  const onClickHi = () => {
    setMsg('hi');
  };
  const onClickBye = () => {
    setMsg('bye');
  };
  return (
    <div>
      <button onClick={onClickHi}>hi</button>
      <button onClick={onClickBye}>bye</button>
      <h1>{msg}</h1>
    </div>
  );
};

export default Say;
