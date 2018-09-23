import React from 'react'

const StoreOptionNav = () => {
    return (
        <ul className="nav col-10 bg-light  mx-auto mt-4 mb-2 d-flex justify-content-between">
            <li className="nav-item">
                <a className="nav-link text-white" href="#"><i className="fas fa-sort-up"></i> Date of addition</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#"> <i className="fas fa-star"></i> Favourite</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#"> <i className="fas fa-star"></i> & <i className="far fa-star"></i> Every</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#"><i className="fas fa-trash-alt"></i> Clear All</a>
            </li>
        </ul>
    )
}

export default StoreOptionNav