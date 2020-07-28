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
      <div className='ui celled grid'>
        <div>
        <SideBar handleCick={this.handleCick}/> 
        </div>
        <div>
          <div className='ui two column centered grid'>
            {this.state.dropdown === 'Resume' ? <Resume /> : null }
            {this.state.dropdown === 'Projects' ? <Videos /> : null }
          </div>
        </div>
      </div>
    )
  }
}

export default App
