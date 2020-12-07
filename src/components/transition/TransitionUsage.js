import React, { useEffect, useState } from "react";

import { css, StyleSheet } from "aphrodite";

import InNOut from "./InNOut";
import Transition from "./Transition";

function TransitionUsage() {
  const [showInNOut, setShowInNOut] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const transitionStyles = {
    root: css(styles.root),
    before: css(styles.before),
    in: css(styles.in),
    out: css(styles.out),
  }

  const inNOutStyles = {
    base: css(styles.root),
    initial: css(styles.before),
    middle: css(styles.in),
    final: css(styles.out),
  }

  return (
    <>
      <div onClick={() => setShowTransition(!showTransition)}>Toggle</div>
      <Transition
        in={showTransition}
        duration={1000}
        transition={transitionStyles}
      >
        Hello, world.
      </Transition>
      <div>end.</div>
      <div onClick={() => setShowInNOut(!showInNOut)}>ToggleInNOut</div>
      <InNOut
        in={showInNOut}
        duration={1000}
        classes={inNOutStyles}
        unmount
      >
        Hello, world.
      </InNOut>
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
    pointerEvents: "none",
    opacity: "0",
    top: "30px",
  },
  in: {
    opacity: "1",
    top: "0px",
  },
  out: {
    pointerEvents: "none",
    opacity: "0",
    top: "-30px",
  },
});

export default TransitionUsage;
