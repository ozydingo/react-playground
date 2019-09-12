import React, { useState } from 'react';

import ChildComponent from './ChildComponent';

function SimpleComponent() {
  const [x, setX] = useState(0);
  return (
    <div onClick={() => setX(prev => prev + 1)}>
      <ChildComponent obj={{a: 1, b: 2}} />
      {x}
    </div>
  )
}

export default SimpleComponent
