import React from 'react'

const StoreOptionNav = (props) => {

    let arrow
    const sortMode = props.sortByDateOfAddition
    const handelOnClickFilterByFavourite = props.handelOnClickFilterByFavourite

    if (sortMode === null || sortMode === false) {
        arrow = <i className="fas fa-sort-down"></i>
    } else arrow = <i className="fas fa-sort-up"></i>

    return (
        <ul className="nav col-10 bg-light  mx-auto mt-4 mb-2 d-flex justify-content-between">
            <li className="nav-item">
                <a onClick={props.handleOnClickSortByDate} className="nav-link text-white" href="#">{arrow} Date of addition</a>
            </li>
            <li className="nav-item">
                <a onClick={() => handelOnClickFilterByFavourite(true)} className="nav-link text-white" href="#"> <i className="fas fa-star"></i> Favourite</a>
            </li>
            <li className="nav-item">
                <a onClick={() => handelOnClickFilterByFavourite(false)} className="nav-link text-white" href="#"> <i className="fas fa-star"></i> & <i className="far fa-star"></i> Every</a>
            </li>
            <li className="nav-item">
                <a onClick={props.handleOnTrashClick} className="nav-link text-white" href="#"><i className="fas fa-trash-alt"></i> Clear All</a>
            </li>
        </ul>
    )
}

export default StoreOptionNav