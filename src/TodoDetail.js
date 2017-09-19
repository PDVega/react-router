
import React from 'react'

export default class Home extends React.Component{
  render(){
    const { todoName: tmp } = this.props.match.params
    return(
      <h1> This is Todo Detail for { tmp } </h1>
    )
  }
}

  /*
const person = {
  name: "Zaenal",
  age: 40
}


person.name

// DESTRUCTING
const { name: nama } = person
*/


