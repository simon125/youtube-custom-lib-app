import React from 'react'
import './style.css'

const LibraryNav = ({
    sortByDateOfAddition,
    handelOnFilterByFavouriteClick,
    handleOnClickSortByDate,
    handleOnTrashClick }) => {

    const arrow = (sortByDateOfAddition === null || sortByDateOfAddition === false) ?
        <i className="fas fa-sort-down"></i>
        :
        <i className="fas fa-sort-up"></i>

    return (
        <ul className="nav col-10 bg-light  mx-auto mt-4 mb-2 d-flex justify-content-between">
            <li className="nav-item mx-auto">
                <button onClick={handleOnClickSortByDate} className="nav-btn nav-link text-white">
                    {arrow} Date of addition
                </button>
            </li>
            <li className="nav-item mx-auto">
                <button onClick={() => handelOnFilterByFavouriteClick(true)} className="nav-btn nav-link text-white" >
                    <i className="fas fa-star"></i> Favourite
                </button>
            </li>
            <li className="nav-item mx-auto">
                <button onClick={() => handelOnFilterByFavouriteClick(false)} className="nav-btn nav-link text-white" >
                    <i className="fas fa-star"></i> & <i className="far fa-star"></i> Every
                </button>
            </li>
            <li className="nav-item mx-auto">
                <button onClick={handleOnTrashClick} className="nav-btn nav-link text-white" >
                    <i className="fas fa-trash-alt"></i> Clear All
                </button>
            </li>
            <li className="nav-item mx-auto">
                <p className="mt-2 mr-2 text-center">Results per page: </p>
            </li>

            <li className="nav-item d-flex justify-content-center mx-auto">

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">5</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">10</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                    <label className="form-check-label" htmlFor="inlineRadio3">15</label>
                </div>
            </li>
        </ul>
    )
}

export default LibraryNav