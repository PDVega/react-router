import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import Home from './Home'
import About from './About'
import TodoDetail from './TodoDetail'

class App extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <ul style={style.menu}>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/todos"> Todos </Link></li>
            <li><Link to="/about"> About </Link></li>
          </ul>
          <div style={style.box}>
          <Route path="/todos" component={TodoList}/>
            <Route exact path="/" component={Home} />
          </div>
          <div style={style.box}>
            <Route exact path="/about" component={About}/>
            <Route exact path="/todos/:todoName" component={TodoDetail}/>
          </div>
        </div>
      </Router>
    )
  }
}



const style ={
  box: {
    width: '48%',
    float: 'left',
    height: '400px',
    border: '1px solid #eee'
  },

  menu: {
    display: 'inline-block'
  }

}
export default App;
