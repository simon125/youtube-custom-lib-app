import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">

                    <a className="navbar-brand" href="#">You<span className="text-success">Tube</span>Custom<span className="text-success">Lib</span></a>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Search&Add</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Library</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Welcome in my recruitment task app
                        </span>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar