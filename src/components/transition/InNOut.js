import React, { useEffect, useState } from "react"

import PropTypes from "prop-types";

function Item(props) {
  const [state, setState] = useState("initial");

  useEffect(() => {
    const t = setTimeout(() => setState("middle"), 35);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!props.in && state === "middle") {
      setState("final");
    }
  }, [state, props.in]);

  const className = `${props.classes.base || ""} ${props.classes[state] || ""}`;

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

Item.propTypes = {
  children: PropTypes.node,
  in: PropTypes.bool,
  classes: PropTypes.shape({
    base: PropTypes.string,
    initial: PropTypes.string,
    middle: PropTypes.string,
    final: PropTypes.string,
  }),
}

function getKey() {
  return new Date().getTime();
}

function InNOut(props) {
  const [key, setKey] = useState(getKey());

  useEffect(() => console.log(key), [key]);

  useEffect(() => {
    if (props.in) {
      setKey(getKey());
    }
  }, [props.in]);

  return (
    <Item key={key} {...props} />
  );
}

InNOut.propTypes = {
  children: PropTypes.node,
  in: PropTypes.bool,
  classes: PropTypes.shape({
    base: PropTypes.string,
    initial: PropTypes.string,
    middle: PropTypes.string,
    final: PropTypes.string,
  }),
}

export default InNOut;
