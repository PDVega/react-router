import React, {Component}  from 'react'
import { Link } from 'react-router-dom'

import FormTodo from './FormTodo'

export default class TodoList extends Component{
  constructor(){
    super()
    this.state = {
      listTodo: ['Makan', 'Minum'],
      todoName: ""
    }
  }

  addTodo(){
    const todoName = this.state.todoName
    const currentTodos = this.state.listTodo
    this.setState({
      listTodo: currentTodos.concat(todoName)
    })
  }

  updateTodoName(event){
    const value = event.target.value
    this.setState({
      todoName: value
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.todoName}</h1>
        <ul>
          {
            this.state.listTodo.map( (todo,idx) => {
              return (
                <li key={idx}>
                  <Link to={`/todos/${todo}`}> {todo}</Link>
                </li>
              )
            })
          }
        </ul>
      <FormTodo
        onSubmit={() => this.addTodo() }
        updateTodoName={ (e) => this.updateTodoName(e)}
      />
      </div>
    )
  }
}

