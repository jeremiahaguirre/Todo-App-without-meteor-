import PropTypes from "prop-types";
import React from "react";

const ToDo = ({ todo, toggleComplete, removeToDo }) => (
  <li>
    {todo.title}
    <input
      type="checkbox"
      id={todo._id}
      onChange={() => toggleComplete(todo)}
      defaultChecked={todo.complete}
    />
    <label htmlFor={todo._id} />
    <button onClick={() => removeToDo(todo._id)}>
      <i className="fa fa-trash" />
    </button>
  </li>
);

ToDo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired
  }).isRequired
};
export default ToDo;
