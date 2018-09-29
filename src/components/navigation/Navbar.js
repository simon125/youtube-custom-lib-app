import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import RWDNavigation from './RWDNavigation'


class Navbar extends Component {
    state = {
        showNav: false
    }

    toggleNav = () => {
        this.setState({ showNav: !this.state.showNav })
    }
    turnOf = () => {
        this.setState({ showNav: false })
    }

    render() {
        return (
            <nav className="navbar  navbar-expand-md navbar-light bg-light w-100">
                <div className="container">
                    {this.state.showNav ? <RWDNavigation turnOf={this.turnOf} /> : null}
                    <Link className="navbar-brand" to="/">You<span className="text-success">Tube</span>Custom<span className="text-success">Lib</span></Link>

                    <button onClick={this.toggleNav} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

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