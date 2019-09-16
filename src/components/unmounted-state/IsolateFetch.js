import React, { useEffect, useState } from 'react';

function Child(props) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchState = {cancel: false};
    fetchToken(fetchState);
    return () => {fetchState.cancel = true;};
  }, [])

  async function fetchToken(fetchState) {
    const token = Math.floor(Math.random() * 100);
    const returnToken = await new Promise(r => {
      setTimeout(() => r(token), 2000)
    });
    if (fetchState.cancel) { console.log("Cancelled"); return; }
    setToken(returnToken);
  }

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
