import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function TemplatedList(props) {
  const items = props.children.map ? props.children : [props.children]
  const template = props.template || (
    <div className={css(styles.item)} />
  );
  return (
    <div className={css(styles.list)}>
      {items.map((item, ii) =>
        React.cloneElement(template, {key: ii, children: item})
      )}
    </div>
  );
}

TemplatedList.propTypes = {
  children: PropTypes.node.isRequired,
};

TemplatedList.defaultProps = {
  children: [],
};

const styles = StyleSheet.create({
  list: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  item: {
    borderWidth: "2px",
    borderStyle: "solid",
    padding: "0.3em 0.7em",
    margin: "3px 0px",
  },

})

export default TemplatedList
