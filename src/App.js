import React, { Component } from 'react'
import Resume from './Components/Resume'
import Videos from './Components/Videos'
import SideBar from './Components/SideBar'


export class App extends Component {
  state = {
    dropdown: ''
  }

  handleCick = e => this.setState({ dropdown: e.target.value })

  render() {
    return (
      <div>
        <SideBar handleCick={this.handleCick}/> 
        {this.state.dropdown === 'Resume' ? <Resume /> : null }
        {this.state.dropdown === 'Projects' ? <Videos /> : null }
      </div>
    )
  }
}

export default App
