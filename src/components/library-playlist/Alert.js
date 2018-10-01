import React from 'react'
import { Link } from 'react-router-dom'

const Alert = () => {
    return (
        <div className="alert alert-primary my-5 mx-auto text-center" role="alert">
            <p className="h3  my-4">You have no films in the library at the moment <i className="far fa-frown"></i></p>
            <Link to='/search' style={{ textDecoration: 'none' }} className="btn btn-info btn-lg">Let's change it</Link>
        </div>
    )
}
export default Alert