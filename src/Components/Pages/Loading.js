import React, { Component } from 'react'
import '../Styles/Loading.css'

export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        {/* <h1 className="welcome-title">Loading Component !</h1> */}
        <div className="loading-circle"></div>
        <div className="loading-circle"></div>
        <div className="loading-circle"></div>

      </div>
    )
  }
}
