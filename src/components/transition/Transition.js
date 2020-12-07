import React, { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";

function Transition(props) {
  const root = useRef(null);
  const [styleState, setStyleState] = useState("before");
  const [mounted, setMounted] = useState(!(props.unmount && !props.in));

  function waxOn() {
    // mount before transition
    setStyleState("before");
    setMounted(true);
  }

  function waxOff() {
    // transition before unmount
    setStyleState("out")
  }

  function transitionAfterMount() {
    // // Doesn't work: React may choose not to render until after this state is updated.
    // // In that case, no css transition will occur because the class is "in" from the start.
    // setStyleState("in");

    // Workaround:
    setTimeout(() => setStyleState("in"), 35);
  }

  function unmountAfterTransition() {
    const elemenet = root.current;
    if (!elemenet) { return; }

    elemenet.ontransitionend = () => {
      elemenet.ontransitionend = null;
      setMounted(false);
    }
  }

  function resetAfterTransition() {
    const elemenet = root.current;
    if (!elemenet) { return; }

    elemenet.ontransitionend = () => {
      elemenet.ontransitionend = null;
      setStyleState("before");
    }
  }

  useEffect(() => {
    if (props.unmount) {
      props.in ? waxOn() : waxOff();
    } else {
      if (styleState === "before" && props.in) {
        setTimeout(() => setStyleState("in"), 100);
        // setStyleState("in");
      } else if (styleState === "in" && !props.in) {
        setStyleState("out");
        resetAfterTransition();
      } else if (styleState === "out" && props.in) {
        setStyleState("before");
      }
    }
  }, [styleState, props.in, props.unmount]);

  // If using unmount, set a delay after mounting to ensure the entrance transition.
  useEffect(() => {
    if (props.unmount && mounted) { transitionAfterMount(); }
  }, [mounted, props.unmount]);

  useEffect(() => {
    if (props.unmount && !props.in) { unmountAfterTransition(); }
  }, [props.in, props.unmount]);

  if (props.unmount && !mounted) { return null; }

  const className = (props.transition.root || "") + " " + props.transition[styleState] ;

  return (
    <div ref={root} className={className}>
      {props.children}
    </div>
  );
}

Transition.propTypes = {
  children: PropTypes.node,
  duration: PropTypes.number,
  in: PropTypes.bool,
  transition: PropTypes.shape({
    root: PropTypes.string,
    before: PropTypes.string,
    in: PropTypes.string,
    out: PropTypes.string,
  }),
  unmount: PropTypes.bool,
};

Transition.defaultProps = {
  duration: 300,
  transition: {
    root: "",
    initial: "",
    in: "",
    out: "",
  }
};

export default Transition;
