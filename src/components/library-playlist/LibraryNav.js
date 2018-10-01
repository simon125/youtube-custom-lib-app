import React from 'react'

const LibraryNav = ({
    sortByDateOfAddition,
    handelOnClickFilterByFavourite,
    handleOnClickSortByDate,
    handleOnTrashClick }) => {

    const arrow = (sortByDateOfAddition === null || sortByDateOfAddition === false) ?
        <i className="fas fa-sort-down"></i>
        :
        <i className="fas fa-sort-up"></i>

    return (
        <ul className="nav col-10 bg-light  mx-auto mt-4 mb-2 d-flex justify-content-between">
            <li className="nav-item">
                <a onClick={handleOnClickSortByDate} className="nav-link text-white" href="#">
                    {arrow} Date of addition
                </a>
            </li>
            <li className="nav-item">
                <a onClick={() => handelOnClickFilterByFavourite(true)} className="nav-link text-white" href="#">
                    <i className="fas fa-star"></i> Favourite
                </a>
            </li>
            <li className="nav-item">
                <a onClick={() => handelOnClickFilterByFavourite(false)} className="nav-link text-white" href="#">
                    <i className="fas fa-star"></i> & <i className="far fa-star"></i> Every
                </a>
            </li>
            <li className="nav-item">
                <a onClick={handleOnTrashClick} className="nav-link text-white" href="#">
                    <i className="fas fa-trash-alt"></i> Clear All
                </a>
            </li>
        </ul>
    )
}

export default LibraryNav