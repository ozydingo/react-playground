import React, { useState } from "react";

import { css, StyleSheet } from "aphrodite";

import Transition from "./Transition";

function TransitionUsage() {
  const [show, setShow] = useState(false);

  const transitionStyles = {
    root: css(styles.root),
    before: css(styles.before),
    in: css(styles.in),
    out: css(styles.out),
  }

  return (
    <>
      <div onClick={() => setShow(!show)}>Toggle</div>
      <Transition
        in={show}
        duration={1000}
        transition={transitionStyles}
        unmount
      >
        Hello, world.
      </Transition>
      <div>end.</div>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    position: "relative",
    transitionProperty: "opacity top",
    transitionDuration: "300ms",
  },
  before: {
    opacity: "0",
    top: "30px",
  },
  in: {
    opacity: "1",
    top: "0px",
  },
  out: {
    opacity: "0",
    top: "-30px",
  },
});

export default TransitionUsage;
