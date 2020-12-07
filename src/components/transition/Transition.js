import React, { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";

function getKey() {
  return `${new Date().getTime()}-${Math.random()}`;
}

function Transition(props) {
  const [key, setKey] = useState(getKey());
  const root = useRef(null);
  const [styleState, setStyleState] = useState(props.in ? "middle" : "initial");
  const [active, setActive] = useState(props.in);

  function breakTransition() {
    setKey(getKey())
  }

  function waxOn() {
    setActive(true);
    setTimeout(() => setStyleState("middle"), 35);
  }

  function waxOff() {
    if (root.current) {
      root.current.ontransitionend = () => {
        root.current.ontransitionend = null;
        setActive(false);
      }
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
