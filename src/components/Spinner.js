import React, { Component } from 'react'
import loading from './Spinner@1x-1.0s-200px-200px.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="Spinner gif" />
      </div>
    )
  }
}

export default Spinner
