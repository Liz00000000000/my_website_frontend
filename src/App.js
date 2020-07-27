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
      <div className='ui internally celled grid'>
        <div className='column'>
        <SideBar handleCick={this.handleCick}/> 
        </div>
        <div className='row'>
          <div className='ten wide column'>
            {this.state.dropdown === 'Resume' ? <Resume /> : null }
            {this.state.dropdown === 'Projects' ? <Videos /> : null }
          </div>
        </div>
      </div>
    )
  }
}

export default App
