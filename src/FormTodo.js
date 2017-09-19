import React from 'react'

export default class FormTodo extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <input type="text" id="todoName" onChange={this.props.updateTodoName}/>
        <input type="submit" onClick={ this.props.onSubmit} value="Submit"/>
      </div>
    )
  }
}

