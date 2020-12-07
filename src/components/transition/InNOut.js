import React, { useEffect,useRef,  useState } from "react"

import PropTypes from "prop-types";

function Item(props) {
  const item = useRef(null);

  const [state, setState] = useState("initial");

  useEffect(() => {
    const t = setTimeout(() => setState("middle"), 35);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    function callbackAfterFinalTransition() {
      const elemenet = item.current;
      if (!elemenet || !props.afterFinal) { return; }

      elemenet.ontransitionend = () => {
        elemenet.ontransitionend = null;
        props.afterFinal();
      }
    }

    if (!props.in && state === "middle") {
      callbackAfterFinalTransition()
      setState("final");
    }
  }, [state, props, props.in, props.afterFinal]);

  const className = `${props.classes.base || ""} ${props.classes[state] || ""}`;

  return (
    <div ref={item} className={className}>
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
  afterFinal: PropTypes.func,
}

function getKey() {
  return new Date().getTime();
}

function InNOut(props) {
  const [key, setKey] = useState(getKey());
  const [mounted, setMounted] = useState(props.in);

  useEffect(() => {
    if (props.in) {
      setKey(getKey());
      setMounted(true);
    }
  }, [props.in]);

  if (props.unmount && !mounted) {
    return null;
  }

  const callback = props.unmount && (() => setMounted(false));

  return (
    <Item key={key} afterFinal={callback} {...props} />
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
  unmount: PropTypes.bool,
}

export default InNOut;
