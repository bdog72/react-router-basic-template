import React, { Component } from 'react'
import ReactRouter from './Router0/ReactRouter'
import ReactRouter1 from './Router1/ReactRouter1'
export default class App extends Component {
  render () {
    return <div>
      <ReactRouter />
      <hr />
      <ReactRouter1 />
    </div>
  }
}
