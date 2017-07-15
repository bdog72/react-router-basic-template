import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export default class ReactRouter1 extends Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
            <hr />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/topics' component={Topics} />
          </ul>
        </div>
      </Router>
    )
  }
}

const Home = () => {
  return <div>
    <h1>Hello</h1>
  </div>
}

const About = () => {
  return <div>
    <h1>React</h1>
  </div>
}
const Topics = () => {
  return <div>
    <h1>Router</h1>
  </div>
}
