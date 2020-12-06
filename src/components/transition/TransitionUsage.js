import React, { useState } from "react";

import MountTransition from "./MountTransition";

function TransitionUsage() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div onClick={() => setShow(!show)}>Toggle</div>
      <MountTransition in={show} duration={1000}>
        Hello, world.
      </MountTransition>
      <div>end.</div>
    </>
  );
}

export default TransitionUsage;
