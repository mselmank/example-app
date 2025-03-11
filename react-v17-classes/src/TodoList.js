import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleAddTodo = () => {
    if (this.state.newTodo.trim()) {
      const newTodo = {
        id: Date.now(),
        text: this.state.newTodo,
        completed: false,
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
        newTodo: '',
      });
    }
  };

  handleToggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  };

  render() {
    return (
      <div>
        <h1>Lista de Tareas</h1>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodo}>Agregar</button>
        <ul>
          {this.state.todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              onClick={() => this.handleToggleTodo(todo.id)}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;