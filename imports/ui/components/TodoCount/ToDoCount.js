import PropTypes from "prop-types";
import React from "react";

const ToDoCount = ({ number }) => (
  <span>
    {number}
    {number > 1 ? " Todos" : " Todo"}
  </span>
);

ToDoCount.propTypes = {
  number: PropTypes.number
};

ToDoCount.defaultProps = { number: 0 };

export default ToDoCount;
