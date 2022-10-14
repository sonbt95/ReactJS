import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    title: "",
  };

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddTodo = () => {
    if (!this.state.title) {
      alert("Please enter Todo");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({ title: "" });
  };
  render() {
    let { title } = this.state;
    return (
      <div>
        <div className="add-todo">
          <input
            type="text"
            value={title}
            onChange={(event) => this.handleOnChangeTitle(event)}
          />
          <button
            type="button"
            className="add"
            onClick={() => this.handleAddTodo()}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
