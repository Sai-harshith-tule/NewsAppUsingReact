import React, { Component } from 'react'

export class NavBar extends Component {


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">My News App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
