import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">

                    <Link className="navbar-brand" to="/">You<span className="text-success">Tube</span>Custom<span className="text-success">Lib</span></Link>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/search">Search&Add</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/library">Library</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar