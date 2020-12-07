import React, { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";

function Transition(props) {
  const root = useRef(null);
  const [styleState, setStyleState] = useState("before");

  useEffect(() => {
    setStyleState(props.in ? "in" : "out");
  }, [props.in]);

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
