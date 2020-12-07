import React, { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";

// Generate a unique key to cause React to render a component as new.
// This can be used to instantly shift from "final" to "middle" states without
// transition.
function getKey() {
  return `${new Date().getTime()}-${Math.random()}`;
}

function hasTransition(element) {
  if (!element) { return false; }

  const transition = window.getComputedStyle(element).getPropertyValue("transition");
  return transition !== "all 0s ease 0s";
}

function Transition(props) {
  const root = useRef(null);

  const [active, setActive] = useState(props.in);
  const [key, setKey] = useState(getKey());
  const [styleState, setStyleState] = useState(props.in ? "middle" : "initial");

  function breakTransition() {
    setKey(getKey())
  }

  function waxOn() {
    setActive(true);
    // Paint the current state before "middle" to ensure css transition.
    window.requestAnimationFrame(() => setStyleState("middle"));
  }

  function waxOff() {
    if (hasTransition(root.current)) {
      // Set `active` to `false` after final transition
      root.current.ontransitionend = () => {
        root.current.ontransitionend = null;
        setActive(false);
      }
    } else {
      setActive(false);
    }

    setStyleState("final");
  }

  useEffect(() => {
    if (props.in && styleState === "initial") {
      waxOn();
    } else if (props.in && styleState === "final") {
      breakTransition();
      setStyleState("initial");
      waxOn();
    } else if (!props.in && styleState === "middle") {
      waxOff();
    }
  }, [styleState, props.in]);

  if (props.unmount && !active) { return null; }

  const className = (props.transition.base || "") + " " + props.transition[styleState] ;
  return (
    <div ref={root} key={key} className={className}>
      {props.children}
    </div>
  );
}

Transition.propTypes = {
  children: PropTypes.node,
  in: PropTypes.bool,
  transition: PropTypes.shape({
    base: PropTypes.string,
    initial: PropTypes.string,
    middle: PropTypes.string,
    final: PropTypes.string,
  }),
  unmount: PropTypes.bool,
};

Transition.defaultProps = {
  transition: {},
};

export default Transition;
