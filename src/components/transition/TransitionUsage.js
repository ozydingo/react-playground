import React, { useState } from "react";

import { css, StyleSheet } from "aphrodite";

import Transition from "./Transition";

function TransitionUsage() {
  const [showTransition, setShowTransition] = useState(false);

  return (
    <>
      <div onClick={() => setShowTransition(!showTransition)}>Toggle</div>
      <Transition
        in={showTransition}
        base={css(styles.base)}
        initial={css(styles.initial)}
        middle={css(styles.middle)}
        final={css(styles.final)}
        unmount
      >
        Hello, world.
      </Transition>
      <div>end.</div>
    </>
  );
}

const styles = StyleSheet.create({
  base: {
    position: "relative",
    transitionProperty: "opacity top",
    transitionDuration: "300ms",
  },
  initial: {
    pointerEvents: "none",
    opacity: "0",
    top: "30px",
  },
  middle: {
    opacity: "1",
    top: "0px",
  },
  final: {
    pointerEvents: "none",
    opacity: "0",
    top: "-30px",
  },
});

export default TransitionUsage;
