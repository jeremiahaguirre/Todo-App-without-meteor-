import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.toDoInput = React.createRef();
  }

  componentDidMount() {
    this.toDoInput.current.focus();
  }
  render() {
    const { addToDo } = this.props;

    return (
      <div className="add-todo">
        <form name="addTodo" onSubmit={e => addToDo(this.toDoInput, e)}>
          <input type="text" ref={this.toDoInput} />
          <span>(press enter to add)</span>
        </form>
      </div>
    );
  }
}

export default Form;
