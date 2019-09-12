import React, { useEffect } from 'react';

function SimpleComponent(props) {
  useEffect(() => {
    console.log("Effect triggered")
  }, [props.obj])

  console.log("Simple component function called")
  return (
    <div>Component</div>
  )
}

export default SimpleComponent
