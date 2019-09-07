import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function ItemTemplate(props) {
  return (
    <div className={css(styles.warning)}>
      <b>Warning!</b><br />
      {props.children}
    </div>
  );
}

ItemTemplate.propTypes = {
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  warning: {
    border: "1px solid #cc8",
    borderTopWidth: "8px",
    borderRadius: "5px",
    backgroundColor: "#ffc",
    color: "#883",
    margin: "5px",
    padding: "0.2em",
  },
})

export default ItemTemplate
