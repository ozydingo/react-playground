import React from 'react';

function Child() {
  return (<div>I am a child</div>);
}

function Parent(props) {
  return (
    props.children.map(child => (
      <div key={child.key}>
        <p>Hello, my child.</p>
        {child}
      </div>
    ))
  );
}

function LatchkeyKid(props) {
  return (
    <Parent>
      <Child key = {1} />
      <Child key = {2} />
      <Child key = {3} />
    </Parent>
  )
}

export default LatchkeyKid
