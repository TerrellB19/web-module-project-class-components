import React from 'react'
import Form from './Form'
import TodoList from './TodoList'
import Todo from './Todo'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
        name: 'Organize Garage',
        id: 1528817077286, // could look different, you could use a timestamp to generate it
        completed: false
      },
      {
        name: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ]
    }
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    })
  }
  handleAdd = (name) => {

    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }
  handleToggle = (id) => {

    const clickedId = id;

    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo=> {
        if (todo.id === clickedId){
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }
  render() {   
    const { todos } = this.state;
    return (
      <div>
      <h1>Todos:</h1>
      <TodoList handleToggle={this.handleToggle} todos={todos}/>
      <Form handleAdd={this.handleAdd}/> 
      <button onClick={this.handleClear}>Hide Completed</button>  
      </div>
    )
  }
}
