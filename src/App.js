import React, { Component } from 'react'
import Resume from './Components/Resume'
import Videos from './Components/Videos'
import SideBar from './Components/SideBar'

export class App extends Component {
  state = {
    viewRes: false,
    viewVideos: false 
  }

  handleCick = e => console.log(this.state.e.target.name)

  render() {
    return (
      <div>
        <SideBar handleCick={this.handleCick}/> 
        {this.state.viewRes ? <Resume /> : null }
        {this.state.viewVideos ? <Videos /> : null }
      </div>
    )
  }
}

export default App
