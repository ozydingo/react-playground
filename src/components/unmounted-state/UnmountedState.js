import React, { useEffect, useState } from 'react';

function Child(props) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    let cancel = false;
    async function fetchToken(cancel) {
      const token = Math.floor(Math.random() * 100);
      const returnToken = await new Promise(r => {
        setTimeout(() => r(token), 2000)
      });
      if (cancel) { return; }
      setToken(returnToken);
    }

    fetchToken(cancel);
    return () => {cancel = true;};
  }, [])

  return (
    <div>Your token: {token === null ? 'loading...' : token}</div>
  );
}

function Parent(props) {
  const [showChild, setShowChild] = useState(false);
  return (
    <>
      <button onClick={() => setShowChild(show => !show)}>
        {showChild ? "Hide" : "Show"}
      </button>
      {showChild && (
        <Child />
      )}
    </>
  );
}

export default Parent
