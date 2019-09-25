import React from 'react';

import Child from './Child.js';

import './parent.css';

function Parent() {
  return (
    <>
      <p>This is in the parent</p>
      <Child />
    </>
  )
}

export default Parent
