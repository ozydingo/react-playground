import React, { useState } from 'react';

function Activatable(props) {
  const [activated, setActivated] = useState(false);

  if (!activated) {
    return (
      <div>
        <button onClick={() => setActivated(true)}>Activate {props.name}</button>
      </div>
    );
  } else {
    return props.children;
  }
}

export default Activatable
