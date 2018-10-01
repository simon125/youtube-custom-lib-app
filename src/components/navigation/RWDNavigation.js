import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import './RWDNavigation.css'

const RWDNavigation = (props) => {
    return (
        <div className="responsive-menu">
            <ul className="list-group responsive-menu__list-group ">
                <li className="link">
                    <a className="text-white" onClick={props.turnOf} href="#">&times;</a>
                </li>
                <li className="link">
                    <Link className="text-white" onClick={props.turnOf} to="/">Home</Link>
                </li>
                <li className="link">
                    <NavLink className="text-white" onClick={props.turnOf} to="/search">Search&Add</NavLink>
                </li>
                <li className="link">
                    <NavLink className="text-white" onClick={props.turnOf} to="/library">Library</NavLink>
                </li>
                <li className="link" >
                    <NavLink className="text-white" onClick={props.turnOf} to="/about">About</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default RWDNavigation
