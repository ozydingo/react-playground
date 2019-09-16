import React, { useEffect, useState } from 'react';

function Child(props) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function fetchToken() {
      const token = Math.floor(Math.random() * 100);
      const returnToken = await new Promise(r => {
        setTimeout(() => r(token), 2000)
      });
      setToken(returnToken);
    }

    setToken(null);
    fetchToken();
  }, [props.num])

  return (
    <div>Visitor {props.num}: {token === null ? 'loading...' : token}</div>
  );
}

function Parent(props) {
  const [num, setNum] = useState(0);
  return (
    <>
      <button onClick={() => setNum(num => num+1)}>
        Inc
      </button>
      <Child num={num}/>
    </>
  );
}

export default Parent
