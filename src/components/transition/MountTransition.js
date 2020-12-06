import React, { useEffect, useState } from "react";

import {css, StyleSheet} from "aphrodite";

function MountTransition(props) {
  const [inStyle, setInStyle] = useState(props.in);
  const [mounted, setMounted] = useState(props.in);

  function transitionAfterMount() {
    // // This can work if React happens to render after mounted get set but before
    // // the effect; but this is inconsistent.
    setInStyle(true);

    // // this works, but is arbitrary, pits UI delay against robustness, and is not
    // // tied to the React lifecycle
    // setTimeout(() => setInStyle(true), 35);
  }

  function unmountAfterTransition() {
    setTimeout(() => setMounted(false), props.duration);
  }

  useEffect(() => {
    props.in ? setMounted(true) : setInStyle(false);
  }, [props.in]);

  useEffect(() => {
    if (mounted) { transitionAfterMount(); }
  }, [mounted]);

  useEffect(() => {
    if (!props.in) { unmountAfterTransition(); }
  }, [props.in]);

  if (!mounted) { return null; }

  return (
    <div className={css(styles.transition, (inStyle ? styles.in : styles.out))}>
      {props.children}
    </div>
  )
}

const styles = StyleSheet.create({
  in: {opactity: "1"},
  out: {opacity: "0"},
  transition: {
    transitionProperty: "opacity",
    transitionDuration: "1s",
  }
})

export default MountTransition;
