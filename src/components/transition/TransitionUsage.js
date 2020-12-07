import React, { useState } from "react";

import { css, StyleSheet } from "aphrodite";

import InNOut from "./InNOut";
import Transition from "./Transition";

function TransitionUsage() {
  const [showInNOut, setShowInNOut] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const transitionStyles = {
    base: css(styles.base),
    initial: css(styles.initial),
    middle: css(styles.middle),
    final: css(styles.final),
  }

  const inNOutStyles = {
    base: css(styles.base),
    initial: css(styles.initial),
    middle: css(styles.middle),
    final: css(styles.final),
  }

  return (
    <>
      <div onClick={() => setShowTransition(!showTransition)}>Toggle</div>
      <Transition
        in={showTransition}
        duration={1000}
        transition={transitionStyles}
        unmount
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
